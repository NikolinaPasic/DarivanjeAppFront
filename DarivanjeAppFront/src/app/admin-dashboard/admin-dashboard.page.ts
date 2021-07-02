import { Component, OnInit } from '@angular/core';
import { Administrator } from '../shared/models/administrator.model';
import { LoginAdminService } from '../shared/services/login-admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {

  admin: Administrator;

  constructor() {
   }

  ngOnInit() {
  }


}
