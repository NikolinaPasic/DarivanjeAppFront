/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CLIENT_ID, CLIENT_SECRET } from 'src/assets/important';
import { UserAuth } from '../models/user-authorization';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  public getAccessToken(code: string){
    const body = new HttpParams()
    .set('client_id', CLIENT_ID)
    .set('client_secret', CLIENT_SECRET)
    .set('grant_type','authorization_code')
    .set('redirect_uri','https://localhost:8100/auth')
    .set('code',code);

    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    const options = {
      headers
    };

    return this.http.post<any>('https://api.instagram.com/oauth/access_token', body.toString(), options);
  }

  public sendAccessToken(user: UserAuth){
    user.type = localStorage.getItem('type');
    return this.http.post<any>('https://localhost:44328/auth-user', user);
  }

  public checkAuth(token: string){
    return this.http.get('https://localhost:44328/check-user', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
      responseType: 'text'
    });
  }

}
