import { Component, OnInit } from '@angular/core';
import { LoginAdminService } from '../shared/services/login-admin.service';

@Component({
  selector: 'app-login-administrator',
  templateUrl: './login-administrator.page.html',
  styleUrls: ['./login-administrator.page.scss'],
})
export class LoginAdministratorPage implements OnInit {
  public username: string;
  public password: string;
  constructor(private loginAdminService: LoginAdminService) {}

  ngOnInit() {
  }

  public login(): void{
    this.loginAdminService.login(this.username, this.password);
  }

}
