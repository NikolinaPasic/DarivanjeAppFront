/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginAdminService {

  currentUser: any=null;
  error: string=null;
  constructor(
    private http: HttpClient
  ) { }

  public login(username: string,password: string): any {
     this.http.post<any>('https://localhost:44328/admin-login', {Username: username, Password: password})
     .subscribe(
       (response)=>{
         console.log(response);
         localStorage.setItem('currentUser','true');
         //this.router.navigateByUrl('link neki hahah');
         this.currentUser=response;
         localStorage.setItem('username', this.currentUser.username);
         localStorage.setItem('adminid',this.currentUser.adminid);
         localStorage.setItem('ime', this.currentUser.ime);
         localStorage.setItem('prezime', this.currentUser.prezime);
       },
       (error)=>{

        console.log('Doslo je do greske');
       }
     );
       return this.currentUser;

  }





}

