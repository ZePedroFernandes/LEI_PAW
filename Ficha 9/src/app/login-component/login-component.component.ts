import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from '../Services/authentication-service.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponent implements OnInit {

  @Input() email: string;
  @Input() password: string;

  constructor(private cookieService: CookieService, private router: Router, private authService: AuthenticationService) {
    this.email = '';
    this.password = '';
  }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.login(this.email, this.password).subscribe((response: any) => {
      if (response && response.auth && response.token) {
        localStorage.setItem('currentUser', JSON.stringify(response))
        this.router.navigate(['']);
      }
    })
  }
}
