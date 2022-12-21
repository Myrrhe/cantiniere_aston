import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

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
}
