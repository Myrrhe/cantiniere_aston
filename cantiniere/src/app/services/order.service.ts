import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Order } from '../interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };
  urlOrder: string = `${environment.apiUrl}/order`;

  constructor(private httpClient: HttpClient) { }

  // PUT : /order/add
  add(userId: number, constraintId: number, quantity: any[]): Observable<Order> {
    return this.httpClient.put<Order>(`${this.urlOrder}/add`, {
      userId: userId,
      constraintId: constraintId,
      quantity: quantity
    }, this.httpOptions);
  }

  // PATCH : /order/update/{orderId}
  update(userId: number, constraintId: number, quantity: any[], orderId: number): Observable<any> {
    return this.httpClient.patch(`${this.urlOrder}/update/${orderId}`, {
      userId: userId,
      constraintId: constraintId,
      quantity: quantity
    }, this.httpOptions);
  }

  // PATCH : /order/deliverandpay/{orderId}/{constraintId}
  deliverandpay(orderId: number, constraintId: number): Observable<any> {
    return this.httpClient.patch(`${this.urlOrder}/deliverandpay/${orderId}/${constraintId}`, {}, this.httpOptions);
  }

  // PATCH : /order/cancel/{orderId}/
  cancel(orderId: number): Observable<any> {
    return this.httpClient.patch(`${this.urlOrder}/cancel/${orderId}`, {}, this.httpOptions);
  }
}
