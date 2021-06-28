import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UcesnikPocetnaPageRoutingModule } from './ucesnik-pocetna-routing.module';

import { UcesnikPocetnaPage } from './ucesnik-pocetna.page';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlexLayoutModule,
    UcesnikPocetnaPageRoutingModule
  ],
  declarations: [UcesnikPocetnaPage]
})
export class UcesnikPocetnaPageModule {}
