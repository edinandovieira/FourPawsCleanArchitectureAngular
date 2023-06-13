import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

import * as jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  token;

  constructor(private authService: AuthService, private router: Router){
    this.token = this.authService.getCredentials();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.token) {
      try {
        const decodedToken : any = jwtDecode.default(this.token);
        const currentTimestamp = Math.floor(Date.now() / 1000);

        if (decodedToken.exp < currentTimestamp) {
          this.router.navigate(['login']);
          return false;
        }

        if (!decodedToken.aud || !decodedToken.iss) {
          this.router.navigate(['login']);
          return false;
        }

        return true
      }catch (error) {
        this.router.navigate(['login']);
        return false;
      }
    }else{
      this.router.navigate(['login']);
      return false;
    }
    
  }
  
}
