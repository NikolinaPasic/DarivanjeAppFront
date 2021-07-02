import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListOfInfluencersPage } from './list-of-influencers.page';

const routes: Routes = [
  {
    path: '',
    component: ListOfInfluencersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListOfInfluencersPageRoutingModule {}
