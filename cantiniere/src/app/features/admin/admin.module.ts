import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//
import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    SideMenuComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule 
  ]
})
export class AdminModule { }
