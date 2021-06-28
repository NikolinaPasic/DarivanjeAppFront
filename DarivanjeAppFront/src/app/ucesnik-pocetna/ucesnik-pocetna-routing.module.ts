import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UcesnikPocetnaPage } from './ucesnik-pocetna.page';

const routes: Routes = [
  {
    path: '',
    component: UcesnikPocetnaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UcesnikPocetnaPageRoutingModule {}
