import { TeamService } from './../../../core/services/team.service';
import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/core/models/team.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-teams-listing',
  templateUrl: './teams-listing.component.html',
  styleUrls: ['./teams-listing.component.css']
})
export class TeamsListingComponent implements OnInit {

  // TO DELETE STATIC DATA
  teams:any;

  constructor(private _teamService:TeamService,public _authService:AuthService) { }

  ngOnInit(): void {
    this._teamService.getTeams().subscribe(res=>{
      this.teams=res;
    })
  }
  delete(id){
    this._teamService.deleteTeam(id).subscribe(res=>{
      if (res) {
        this.teams=this.teams.filter(t=>t.id!=id)
      }
    })
  }
}
