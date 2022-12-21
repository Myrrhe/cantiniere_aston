import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
//
import { LoginComponent } from './features/auth/components/login/login.component';
import { SigninComponent } from './features/auth/components/signup/signin.component';
import { AuthGuard } from './helpers/auth.guard';
=======

import { LoginComponent } from './features/login/components/login/login.component';
import { SigninComponent } from './features/signin/components/signin/signin.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
>>>>>>> d34e1bbd46709fc83bab82da89a35d49e751099e

// Pensez à bien rajouter vos URLs en haut
const routes: Routes = [
<<<<<<< HEAD
  // LoadChildren is use to optimize the loading of the pages.

  {
    path: 'auth', loadChildren: () => import('./features/auth/auth-module')
      .then(m => m.AuthModule)
  },
  {
    path: 'admin', loadChildren: () => import('./features/admin/admin.module')
      .then(m => m.AdminModule), canActivate:[AuthGuard]
  }
=======
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/404'},
>>>>>>> d34e1bbd46709fc83bab82da89a35d49e751099e
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
