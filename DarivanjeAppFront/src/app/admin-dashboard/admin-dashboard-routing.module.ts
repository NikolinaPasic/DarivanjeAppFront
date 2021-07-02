import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOfGiveawaysPage } from '../list-of-giveaways/list-of-giveaways.page';

import { AdminDashboardPage } from './admin-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardPage,
    children:[
      {
        path: '/list-of-giveaways',
        component: ListOfGiveawaysPage
      }/* ,
      {
        path: '',
        redirectTo: '/list-of-giveaways',
        pathMatch: 'full'
      } */
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDashboardPageRoutingModule {}
