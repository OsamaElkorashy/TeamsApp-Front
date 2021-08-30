import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/core/models/team.model';
import { TeamService } from 'src/app/core/services/team.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  team:any;

  constructor(private _teamService:TeamService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._teamService.getTeam(this.activatedRoute.snapshot.params.id).subscribe(res => {
      this.team = res;
    })
  }

}
