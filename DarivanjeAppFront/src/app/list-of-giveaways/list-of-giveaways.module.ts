import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListOfGiveawaysPageRoutingModule } from './list-of-giveaways-routing.module';

import { ListOfGiveawaysPage } from './list-of-giveaways.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListOfGiveawaysPageRoutingModule
  ],
  declarations: [ListOfGiveawaysPage]
})
export class ListOfGiveawaysPageModule {}
