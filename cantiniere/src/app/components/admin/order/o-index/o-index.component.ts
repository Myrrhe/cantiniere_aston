/**
 * Title : Composant Oders list
 * Description : Fichier récupérant la liste de toutes les commandes
 * Author : Thierry Maurouzel
*/

// Imports
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-o-index',
  templateUrl: './o-index.component.html',
  styleUrls: ['./o-index.component.css']
})
export class OIndexComponent implements OnInit {

  orderList: any[] = [];

  constructor(private OrderService: OrderService) { }

  ngOnInit(): void {
    this.onGetOrders();
  }
  onGetOrders(): void {
    this.OrderService.findAll().subscribe(
      (response) => {
        this.orderList = (response),
        // console.table(this.userList),
        (error:any) => console.log(error)
      },
    )
  } 
}
