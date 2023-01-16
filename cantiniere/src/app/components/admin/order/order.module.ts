/**
 * Title : Composant Users list
 * Description :
 * Author : Thierry Maurouzel
*/

// Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OIndexComponent } from './o-index/o-index.component';


@NgModule({
  declarations: [
    OIndexComponent,
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
  ]
})
export class OrderModule { }
