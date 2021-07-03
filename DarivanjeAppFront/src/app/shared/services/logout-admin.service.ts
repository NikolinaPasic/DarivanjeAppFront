import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutAdminService {

  constructor(private router: Router) { }

  logout(): void {
    localStorage.setItem('currentUser', 'false');
    localStorage.clear();
    this.router.navigate(['/login-administrator']);
  }
}
