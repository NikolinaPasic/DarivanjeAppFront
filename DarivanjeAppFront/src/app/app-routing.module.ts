import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { OnlyLoggedInAdminGuardService } from './shared/services/only-logged-in-admin-guard.service';
import { OnlyLoggedInUserGuard } from './shared/services/only-logged-in-user.guard';

const routes: Routes = [
  {
    path: 'home',
    canActivate: [OnlyLoggedInUserGuard],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
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
    canActivate: [OnlyLoggedInUserGuard],
    loadChildren: () => import('./influenser-pocetna/influenser-pocetna.module').then( m => m.InfluenserPocetnaPageModule)
  },
  {
    path: 'ucesnik-pocetna',
    canActivate: [OnlyLoggedInUserGuard],
    loadChildren: () => import('./ucesnik-pocetna/ucesnik-pocetna.module').then( m => m.UcesnikPocetnaPageModule)
  },
  {
    path: 'giveaway/:id',
    canActivate: [OnlyLoggedInUserGuard],
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
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: '',
    redirectTo: 'ucesnik-pocetna',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'ucesnik-pocetna',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
