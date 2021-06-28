import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfluenserPocetnaPage } from './influenser-pocetna.page';

const routes: Routes = [
  {
    path: '',
    component: InfluenserPocetnaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfluenserPocetnaPageRoutingModule {}
