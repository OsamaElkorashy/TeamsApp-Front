import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endPoints } from './endPoints';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient ) { }
  addTeam(data){
    return this.http.post(endPoints.team, data)
  }
  getTeams(){
    return this.http.get(endPoints.team)
  }
  getTeam(id){
    return this.http.get(endPoints.team+'/'+id)
  }
  deleteTeam(id){
    return this.http.delete(endPoints.team+'/'+id)
  }
  editTeam(data){
    return this.http.put(endPoints.team, data)
  }
}
