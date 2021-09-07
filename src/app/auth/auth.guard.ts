import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
  CanActivateChild,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): true | UrlTree {
    return this.canActivate(route, state);
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): true | UrlTree {
    // จะต้องคืนค่าจริงเท่านั้น หรือไม่ก็ คืนค่า UrlTree
    console.log('AuthGuard@CanActivate running');
    const url: string = state.url;
    return this.checkLogin(url);
  }
  checkLogin(url: string): true | UrlTree {
    // จะต้องคืนค่าจริงเท่านั้น หรือไม่ก็ คืนค่า UrlTree
    if (this.authService.isLoggedIn) {
      return true;
    }
    this.authService.redirectUrl = url;
    return this.router.parseUrl('/login');
  }
}
