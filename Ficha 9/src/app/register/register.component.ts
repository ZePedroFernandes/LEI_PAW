import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Services/authentication-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() userName: string;
  @Input() email: string;
  @Input() password: string;

  constructor(private router: Router, private authService: AuthenticationService) {
    this.userName = '';
    this.email = '';
    this.password = '';
  }

  ngOnInit(): void {
  }

  register(): void {
    this.authService.register(this.userName, this.email, this.password).subscribe((response) => {
      if (response && response.auth && response.token) {
        localStorage.setItem('x-access-token', response.token);
        this.router.navigate(['']);
      }
    })
  }

}
