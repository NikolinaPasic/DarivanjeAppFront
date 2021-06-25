import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginAdministratorPage } from './login-administrator.page';

const routes: Routes = [
  {
    path: '',
    component: LoginAdministratorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginAdministratorPageRoutingModule {}
