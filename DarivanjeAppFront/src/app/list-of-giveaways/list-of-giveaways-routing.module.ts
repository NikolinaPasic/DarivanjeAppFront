import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListOfGiveawaysPage } from './list-of-giveaways.page';

const routes: Routes = [
  {
    path: '',
    component: ListOfGiveawaysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListOfGiveawaysPageRoutingModule {}
