import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './features/auth/components/login/login.component';
import { SigninComponent } from './features/auth/components/signup/signin.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
