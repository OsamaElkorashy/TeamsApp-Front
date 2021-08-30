import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endPoints } from './endPoints';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient ) { }

  getPlayers(){
    return this.http.get(endPoints.player);
  }
  deletePlayer(id){
    return this.http.delete(endPoints.player+'/'+id);
  }
}
