import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Constraint } from '../interfaces/constraint';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConstraintService {
  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };
  urlConstraint: string = `${environment.apiUrl}/constraint`;

  constructor(private httpClient: HttpClient) { }

  // PUT : /constraint/add
  add(orderTimeLimit: string, maximumOrderPerDay: number, rateVAT: number): Observable<Constraint> {
    return this.httpClient.put<Constraint>(`${this.urlConstraint}/add`, {
      orderTimeLimit: orderTimeLimit,
      maximumOrderPerDay: maximumOrderPerDay,
      rateVAT: rateVAT,
    }, this.httpOptions);
  }

  // PATCH : /constraint/update/{constraintId}
  update(orderTimeLimit: string, maximumOrderPerDay: number, rateVAT: number, constraintId: number): Observable<any> {
    return this.httpClient.patch(`${this.urlConstraint}/update/${constraintId}`, {
      orderTimeLimit: orderTimeLimit,
      maximumOrderPerDay: maximumOrderPerDay,
      rateVAT: rateVAT,
    }, this.httpOptions);
  }

  // GET : /constraint/findall
  findAll(): Observable<Constraint[]> {
    return this.httpClient.get<Constraint[]>(`${this.urlConstraint}/findall`);
  }

  // GET : /constraint/find/{constraintId}
  find(constraintId: number): Observable<Constraint> {
    return this.httpClient.get<Constraint>(`${this.urlConstraint}/find/${constraintId}`);
  }

  // DELETE : /constraint/delete/{constraintId}
  delete(constraintId: number): Observable<Constraint> {
    return this.httpClient.delete<Constraint>(`${this.urlConstraint}/delete/${constraintId}`, this.httpOptions);
  }
}
