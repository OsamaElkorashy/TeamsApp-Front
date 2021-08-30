import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable(
)
export class TokenInterceptor implements HttpInterceptor {

  constructor() {
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token  = localStorage.getItem('token');
    if (token) {
     request = this.addToken(request,token)
    }
    return next.handle(request);
  }
  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
        setHeaders: {
            Authorization: `Bearer ${token}`,
        }
    });
}
}
