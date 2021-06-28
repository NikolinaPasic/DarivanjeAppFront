import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfluenserPocetnaPageRoutingModule } from './influenser-pocetna-routing.module';

import { InfluenserPocetnaPage } from './influenser-pocetna.page';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfluenserPocetnaPageRoutingModule,
    FlexLayoutModule
  ],
  declarations: [InfluenserPocetnaPage]
})
export class InfluenserPocetnaPageModule {}
