/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginAdminService } from './login-admin.service';

@Injectable({
  providedIn: 'root'
})
export class OnlyLoggedInAdminGuardService implements CanActivate{

  constructor(private adminService: LoginAdminService, private router: Router) { }

  canActivate(): boolean {
    if (this.adminService.currentUser) {
      return true;
    } else {
      this.router.navigateByUrl('/login-administrator');
      return false;
    }
  }
}
