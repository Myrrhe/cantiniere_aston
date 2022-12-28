import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MDeleteComponent } from './m-delete/m-delete.component';
import { MAddComponent } from './m-add/m-add.component';
import { MEditComponent } from './m-edit/m-edit.component';


@NgModule({
  declarations: [
    MDeleteComponent,
    MAddComponent,
    MEditComponent,
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
  ]
})
export class MenuModule { }
