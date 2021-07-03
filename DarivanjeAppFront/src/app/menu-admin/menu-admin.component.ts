import { Component, OnInit } from '@angular/core';
import { LogoutAdminService } from '../shared/services/logout-admin.service';


@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.scss'],
})
export class MenuAdminComponent implements OnInit {

  constructor(private logOutService: LogoutAdminService) { }

  ngOnInit() {}

  logOut() {
    this.logOutService.logout();
  }
}
