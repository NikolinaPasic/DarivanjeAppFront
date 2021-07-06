import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UcesnikPocetnaPageRoutingModule } from './ucesnik-pocetna-routing.module';

import { UcesnikPocetnaPage } from './ucesnik-pocetna.page';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WinnerModalComponent } from '../winner-modal/winner-modal.component';
import { HistoryModalComponent } from '../history-modal/history-modal.component';
import { EnterHistoryModalComponent } from '../enter-history-modal/enter-history-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlexLayoutModule,
    UcesnikPocetnaPageRoutingModule
  ],
  declarations: [UcesnikPocetnaPage, EnterHistoryModalComponent]
})
export class UcesnikPocetnaPageModule {}
