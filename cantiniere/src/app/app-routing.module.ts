import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';

// import { LoginComponent } from './components/auth/login/login.component';
// import { SigninComponent } from './components/auth/signup/signin.component';
import { AuthGuard } from './helpers/auth.guard';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { PanierComponent } from './components/panier/panier.component';

// Pensez à bien rajouter vos URLs en haut
const routes: Routes = [
  { path: '', component: HomeComponent },

  // LoadChildren is use to optimize the loading of the pages.
  {
    path: 'auth', loadChildren: () => import('./components/auth/auth-module')
      .then(m => m.AuthModule),
  },
  {
    path: 'admin', loadChildren: () => import('./components/admin/admin.module')
      .then(m => m.AdminModule), canActivate:[AuthGuard],
  },

  // { path: 'login', component: LoginComponent },
  // { path: 'signin', component: SigninComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'panier', component: PanierComponent },

  { path: '**', pathMatch: 'full', redirectTo: '/404'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
