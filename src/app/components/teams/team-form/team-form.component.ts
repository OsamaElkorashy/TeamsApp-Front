import { TeamService } from './../../../core/services/team.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.css']
})
export class TeamFormComponent implements OnInit {

  team;
  teamForm: FormGroup;

  constructor(private router: Router,public activatedRoute:ActivatedRoute,
    private _teamService:TeamService) { }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params.id !== 'add') {
      this._teamService.getTeam(this.activatedRoute.snapshot.params.id).subscribe(res => {
        this.team = res;
        this.createForm()
      });
    }
    else{
      this.createForm();
    }
  }

  createForm(){
    this.teamForm = new FormGroup({
      name: new FormControl(this.team?.name),
      country: new FormControl(this.team?.country),
      foundationDate: new FormControl(new Date(this.team?.foundationDate)),
      coachName: new FormControl(this.team?.coachName),
      logoImage: new FormControl(this.team?.logoImage),
      players: (this.team?.players) ? this.getPlayersArray(this.team.players) : new FormArray([
        new FormGroup({
          name: new FormControl(''),
          nationality: new FormControl(''),
          dateOfBirth: new FormControl('')
        })
      ])
    })
    console.log(this.team)
    console.log(this.teamForm)
  }

  getPlayersArray(players){
    const array = new FormArray([]);
    players.forEach(player => {
      array.push(
        new FormGroup({
          id: new FormControl(player?.id),
          name: new FormControl(player?.name),
          nationality: new FormControl(player?.nationality),
          dateOfBirth: new FormControl(new Date(player?.dateOfBirth))
        })
      )
    });
    return array;
  }

  addPlayer(){
    (this.teamForm.controls['players'] as FormArray).push(
      new FormGroup({
      name: new FormControl(''),
      nationality: new FormControl(''),
      dateOfBirth: new FormControl('')
    }))
  }
  deletePlayer(i){
    (this.teamForm.controls['players'] as FormArray).removeAt(i);
  }
  submit(){
    if (this.teamForm.valid) {
      debugger;
      if (this.activatedRoute.snapshot.params['id']) {
        this._teamService.editTeam({...this.teamForm.value,id:this.team.id}).subscribe(res=>{
          this.router.navigate(['teams'])
        })
      }
      else{
        this._teamService.addTeam(this.teamForm.value).subscribe(res=>{
          this.router.navigate(['teams'])
        })
      }
    }
    else{
      this.teamForm.markAllAsTouched();
    }
  }
}
