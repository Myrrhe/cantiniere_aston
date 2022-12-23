import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/auth/login/login.component';
import { SigninComponent } from './components/auth/signup/signin.component';
import { AuthGuard } from './helpers/auth.guard';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// Pensez à bien rajouter vos URLs en haut
const routes: Routes = [
  // LoadChildren is use to optimize the loading of the pages.

  {
    path: 'auth', loadChildren: () => import('./components/auth/auth-module')
      .then(m => m.AuthModule)
  },
  {
    path: 'admin', loadChildren: () => import('./components/admin/admin.module')
      .then(m => m.AdminModule), canActivate:[AuthGuard],
  },

  // { path: 'login', component: LoginComponent },
  // { path: 'signin', component: SigninComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
