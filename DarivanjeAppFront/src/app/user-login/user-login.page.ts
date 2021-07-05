import { Component, OnInit } from '@angular/core';
import { CLIENT_ID } from '../../assets/important';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.page.html',
  styleUrls: ['./user-login.page.scss'],
})
export class UserLoginPage implements OnInit {

  public type;

  constructor() {
    this.type =  'i';
  }

  ngOnInit() {
  }

  public redirect(): void {
    localStorage.setItem('type', this.type);
    window.location.href='https://api.instagram.com/oauth/authorize'+
    '?client_id=' + CLIENT_ID +
    '&redirect_uri=https://localhost:8100/auth' +
    '&scope=user_profile,user_media' +
    '&response_type=code';
  }
}
