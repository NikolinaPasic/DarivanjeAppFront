import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LoginAdministratorPageRoutingModule } from './login-administrator-routing.module';

import { LoginAdministratorPage } from './login-administrator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginAdministratorPageRoutingModule,
    FlexLayoutModule
  ],
  declarations: [LoginAdministratorPage]
})
export class LoginAdministratorPageModule {}
