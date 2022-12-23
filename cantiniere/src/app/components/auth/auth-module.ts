import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
  ]
})
export class AuthModule { }
