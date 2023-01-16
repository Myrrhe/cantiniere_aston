import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OIndexComponent } from './o-index/o-index.component';

const routes: Routes = [
  { path: '', component: OIndexComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
