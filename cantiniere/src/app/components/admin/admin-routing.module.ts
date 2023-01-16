import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'},

      { path: 'dashboard', component: DashboardComponent},
      {
        path: 'user', loadChildren: () => import('./user/user.module')
        .then(m => m.UserModule),
      },
      {
        path: 'menu', loadChildren: () => import('./menu/menu.module')
        .then(m => m.MenuModule)
      },
      {
        path: 'order', loadChildren: () => import('./order/order.module')
        .then(m => m.OrderModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
