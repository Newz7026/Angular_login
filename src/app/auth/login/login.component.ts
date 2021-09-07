import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  message: string;
  email: string;
  constructor(public authService: AuthService, public router: Router) {}
  login(email: string): void {
    this.message = 'Trying to log in ...';
    this.authService.login(email).subscribe(() => {
      if (this.authService.isLoggedIn) {
        const redirectUrl = '/courses';
        this.router.navigate([redirectUrl]);
      } else {
        this.message = 'อีเมล์ไม่ถูกต้อง';
      }
    });
  }
  logout(): void {
    this.authService.logout();
  }
  ngOnInit(): void {}
}
