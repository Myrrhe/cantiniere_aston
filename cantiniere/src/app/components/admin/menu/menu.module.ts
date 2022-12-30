/**
 * Title : Composant Users list
 * Description : 
 * Author : Thierry Maurouzel
*/

// Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';

import { MIndexComponent } from './m-index/m-index.component';
import { MDeleteComponent } from './m-delete/m-delete.component';
import { MAddComponent } from './m-add/m-add.component';
import { MEditComponent } from './m-edit/m-edit.component';

@NgModule({
  declarations: [
    MIndexComponent,
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
