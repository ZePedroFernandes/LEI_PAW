import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorServiceInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let aux = localStorage.getItem('currentUser');
    console.log(aux);
    
    if (aux !== null) {
      let currentUser = JSON.parse(aux);
      if (currentUser && currentUser.token) {
        request = request.clone({
          setHeaders:
            { 'x-access-token': `${currentUser.token}` }
        })
      }
    }

    return next.handle(request);
  }
}
