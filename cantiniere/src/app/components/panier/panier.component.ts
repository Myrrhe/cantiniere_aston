import { Component, OnInit } from '@angular/core';

import { Cart, CartItem } from 'src/app/interfaces/cart';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  cart: Cart = { items: [
    {
      userId: 7,
      constraintId: -1,
      quantity: [
                  {
                    quantity: 2,
                    mealId: 2,
                    menuId: 2
                  }
              ]
    }] };

    dataSource: Array<CartItem>=[];
    displayedColumns : Array<string> =[
      'userId',
      // 'constarintId',
      // 'quantity',
      // 'mealId',
      // 'menuId',
      // 'action'
    ];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.cart.items
  }

}
