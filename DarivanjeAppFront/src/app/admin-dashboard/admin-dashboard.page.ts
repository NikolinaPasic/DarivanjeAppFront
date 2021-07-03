import { Component, OnInit } from '@angular/core';
import { Administrator } from '../shared/models/administrator.model';
import { LoginAdminService } from '../shared/services/login-admin.service';
import { LogoutAdminService } from '../shared/services/logout-admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {

  public admin: Administrator = new Administrator();


  constructor(private logOutService: LogoutAdminService, private logInAdmin: LoginAdminService) {
    this.admin = logInAdmin.getAdminsInfo();
   }

  ngOnInit() {
  }

  logOut(){
    this.admin.Ime = '';
    this.admin.Prezime = '';
    this.admin.Username = '';
    this.logOutService.logout();
  }

}
