/**
 * Title : Composant Users list
 * Description : 
 * Author : Thierry Maurouzel
*/

// Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';

import { UIndexComponent } from './u-index/u-index.component';
import { UEditComponent } from './u-edit/u-edit.component';
import { UAddComponent } from './u-add/u-add.component';
import { UDeleteComponent } from './u-delete/u-delete.component';
import { UserListSearchPipe } from './u-index/user-list-search.pipe';


@NgModule({
  declarations: [
    UIndexComponent,
    UEditComponent,
    UAddComponent,
    UDeleteComponent,

    UserListSearchPipe
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
  ],
})
export class UserModule { }
