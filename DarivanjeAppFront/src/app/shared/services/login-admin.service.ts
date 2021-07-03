/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { Administrator } from '../models/administrator.model';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginAdminService {

  currentUser: any=null;
  error: string=null;
  admin: Administrator =  new Administrator();

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public login(username: string,password: string): any {
     this.http.post<any>('https://localhost:44328/admin-login', {Username: username, Password: password})
     .subscribe(
       (response)=>{
         console.log(response);
         localStorage.setItem('currentUser','true');
         this.router.navigateByUrl('/admin-dashboard');
         this.currentUser=response;
         localStorage.setItem('username', this.currentUser.username);
         localStorage.setItem('adminid',this.currentUser.adminId);
         localStorage.setItem('ime', this.currentUser.ime);
         localStorage.setItem('prezime', this.currentUser.prezime);

       },
       (error)=>{
        console.log('Doslo je do greske');
       }
     );
       return this.currentUser;

  }

  public getAdminsInfo(): Administrator {
    this.admin.Ime = localStorage.getItem('ime');
    this.admin.Prezime = localStorage.getItem('prezime');
    this.admin.Username = localStorage.getItem('username');
    return this.admin;
  }

}

