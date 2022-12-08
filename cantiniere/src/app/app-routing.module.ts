import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './features/login/components/login/login.component';
import { SigninComponent } from './features/signin/components/signin/signin.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

// Pensez à bien rajouter vos URLs en haut
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
