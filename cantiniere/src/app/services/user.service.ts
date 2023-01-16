/**
 * Title : Users services
 * Description : 
 * Author : Thierry Maurouzel
 */
// Imports
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { User } from 'src/app/interfaces/user';
import { Image } from 'src/app/interfaces/image';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };

  private apiUrl = environment.apiUrl;

  constructor(
    private httpClient: HttpClient,
  ) { }

  // GET : Finds all users
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUrl}/user/findall`);
  }

  // GET : Finds one user
  getUser(id: string | null): Observable<User> {
    return this.httpClient.get<User>(`${this.apiUrl}/user/find/${id}`)
  }

  // GET : Finds the user's image
  getUserImage(id: number | string): Observable<Image> {
    return this.httpClient.get<Image>(`${this.apiUrl}/user/findimg/${id}`)
  }

  // POST : Add money to user's wallet
  creditUser(
    id: string, 
    amount: number): Observable<User> {
    return this.httpClient.post<User>(`${this.apiUrl}/user/credit/${id}?amount=${amount}`, {
      id: id,
      amount: amount,
    }, this.httpOptions);
  }

  // POST : Removes money to user's wallet
  debitUser(
    id: string, 
    amount: number): Observable<User> {
    return this.httpClient.post<User>(`${this.apiUrl}/user/debit/${id}?amount=${amount}`, {
      id: id,
      amount: amount,
    }, this.httpOptions);
  }

  // DELETE : Delete one user by his ID
  // deleteUser(id: number): Observable<User> {
  //   return this.http.delete<User>(`${this.apiUrl}/user/delete/${id}`);
  // }

  // PATCH : Modify one user by his ID

  // PATCH : Activates a user
  activateUser(
    id: string | null,
  ): Observable<User> {
    return this.httpClient.patch<User>(`${this.apiUrl}/user/activate/${id}`, {
      id: id,
    }, this.httpOptions)
  }

  // PATCH : Desactivates a user
  deactivateUser(
    id: string | null,
  ): Observable<User> {
    return this.httpClient.patch<User>(`${this.apiUrl}/user/deactivate/${id}`, {
      id: id,
    }, this.httpOptions)
  }

  // POST : Create one user with a form
}