import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { OnlyLoggedInAdminGuardService } from './shared/services/only-logged-in-admin-guard.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login-administrator',
    pathMatch: 'full'
  },
  {
    path: 'login-administrator',
    loadChildren: () => import('./login-administrator/login-administrator.module').then( m => m.LoginAdministratorPageModule)
  },
  {
    path: 'list-of-giveaways',
    canActivate: [OnlyLoggedInAdminGuardService],
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
  {
    path: 'giveaway',
    loadChildren: () => import('./giveaway/giveaway.module').then( m => m.GiveawayPageModule)
  },
  {
    path: 'admin-dashboard',
    canActivate: [OnlyLoggedInAdminGuardService],
    loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then( m => m.AdminDashboardPageModule)
  },
  {
    path: 'list-of-influencers',
    canActivate: [OnlyLoggedInAdminGuardService],
    loadChildren: () => import('./list-of-influencers/list-of-influencers.module').then( m => m.ListOfInfluencersPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./user-login/user-login.module').then( m => m.UserLoginPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
