import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'login-administrator',
    loadChildren: () => import('./login-administrator/login-administrator.module').then( m => m.LoginAdministratorPageModule)
  },  {
    path: 'list-of-giveaways',
    loadChildren: () => import('./list-of-giveaways/list-of-giveaways.module').then( m => m.ListOfGiveawaysPageModule)
  },
  {
    path: 'influenser-pocetna',
    loadChildren: () => import('./influenser-pocetna/influenser-pocetna.module').then( m => m.InfluenserPocetnaPageModule)
  },
  {
    path: 'ucesnik-pocetna',
    loadChildren: () => import('./ucesnik-pocetna/ucesnik-pocetna.module').then( m => m.UcesnikPocetnaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
