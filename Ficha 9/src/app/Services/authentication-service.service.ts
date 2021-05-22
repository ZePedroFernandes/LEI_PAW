import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private cookieService: CookieService, private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/v1/auth/login', JSON.stringify({ email, password }), httpOptions);
  }

  logout() {
    //this.cookieService.delete('x-access-token');
    localStorage.removeItem('currentUser');
  }

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/v1/auth/register', { name, email, password });
  }
}
