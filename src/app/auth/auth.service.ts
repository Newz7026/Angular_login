import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  email: string = 'a@a.com'; //ตั้งรหัสอีเมลที่ใช้ตรวจสอบ
  isLoggedIn = false;
  redirectUrl: string;
  login(email: string): Observable<boolean> {
    return of(email == this.email ? true : false).pipe(
      delay(1000),
      tap((val) => (this.isLoggedIn = val))
    );
  }
  logout(): void {
    this.isLoggedIn = false;
  }

  constructor() {}
}
