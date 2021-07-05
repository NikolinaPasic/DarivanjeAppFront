import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OnlyLoggedInUserGuard implements CanActivate {

  private token: string = localStorage.getItem('token');

  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): boolean {
    this.authService.checkAuth(this.token).subscribe(
      (response) =>  {
        if(response==='ok'){
          return true;
        }
        else {
          this.router.navigate(['login']);
          return false;
        }
      },
      (error) => {
        this.router.navigate(['login']);
        return false;
      }
    );;
    return true;
  }

}
