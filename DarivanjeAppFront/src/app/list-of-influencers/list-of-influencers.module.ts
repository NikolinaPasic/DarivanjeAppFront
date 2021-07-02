import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListOfInfluencersPageRoutingModule } from './list-of-influencers-routing.module';

import { ListOfInfluencersPage } from './list-of-influencers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListOfInfluencersPageRoutingModule
  ],
  declarations: [ListOfInfluencersPage]
})
export class ListOfInfluencersPageModule {}
