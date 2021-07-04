import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  isLoggedIn(): boolean {
    return false;
  }
}
