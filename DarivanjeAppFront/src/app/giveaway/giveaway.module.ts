import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GiveawayPageRoutingModule } from './giveaway-routing.module';

import { GiveawayPage } from './giveaway.page';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlexLayoutModule,
    GiveawayPageRoutingModule
  ],
  declarations: [GiveawayPage]
})
export class GiveawayPageModule {}
