import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//
import { LoginComponent } from './features/auth/components/login/login.component';
import { SigninComponent } from './features/auth/components/signup/signin.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  // LoadChildren is use to optimize the loading of the pages.

  {
    path: 'auth', loadChildren: () => import('./features/auth/auth-module')
      .then(m => m.AuthModule)
  },
  {
    path: 'admin', loadChildren: () => import('./features/admin/admin.module')
      .then(m => m.AdminModule), canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
