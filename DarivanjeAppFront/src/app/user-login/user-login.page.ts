import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CLIENT_ID } from '../../assets/important';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.page.html',
  styleUrls: ['./user-login.page.scss'],
})
export class UserLoginPage implements OnInit {
  public type;

  constructor(private authService: AuthService, private router: Router) {
    this.type = 'i';
  }

  ngOnInit() {
    this.authService.checkAuth(localStorage.getItem('token')).subscribe(
      (response) => {
        if (response === 'ok') {
          if (localStorage.getItem('type') === 'u') {
            this.router.navigate(['ucesnik-pocetna']);
          } else {
            this.router.navigate(['influenser-pocetna']);
          }
        }
      },
      (error) => {}
    );
  }

  public redirect(): void {
    localStorage.setItem('type', this.type);
    window.location.href =
      'https://api.instagram.com/oauth/authorize' +
      '?client_id=' +
      CLIENT_ID +
      '&redirect_uri=https://localhost:8100/auth' +
      '&scope=user_profile,user_media' +
      '&response_type=code';
  }
}
