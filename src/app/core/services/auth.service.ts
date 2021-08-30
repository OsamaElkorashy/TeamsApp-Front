import { Injectable } from '@angular/core';
import {endPoints} from './endPoints';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient ) { }

  login(data){
    return this.http.post(endPoints.logIn, data)
      .pipe(
        map((data: any) => {
          return data;
        }),
        catchError((error: Error) => {
          return of({} as any);
        })
      );
  }
  isAuth(){
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
  isAdmin(){
    const roles = localStorage.getItem('role')?.split(',')
    if (roles.includes('Admin')) {
      return true;
    }
    return false;
  }
  logOut(){
    localStorage.removeItem('token');
  }
}
