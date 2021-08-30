import { endPoints } from './../../../core/services/endPoints';
import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/core/models/player.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { PlayerService } from 'src/app/core/services/player.service';

@Component({
  selector: 'app-players-listing',
  templateUrl: './players-listing.component.html',
  styleUrls: ['./players-listing.component.css']
})
export class PlayersListingComponent implements OnInit {

  // TO BE DELETE STATIC DATA
  players;

  constructor(public _authService:AuthService, private _playerService: PlayerService) { }

  ngOnInit(): void {
    this._playerService.getPlayers().subscribe(res => {
      this.players = res;
      console.log(res)
    });
  }
  delete(id){
    this._playerService.deletePlayer(id).subscribe(
      res=>{
        if (res) {
          this.players=this.players.filter(p=>p.id!=id)
        }
      }
    )
  }
}
