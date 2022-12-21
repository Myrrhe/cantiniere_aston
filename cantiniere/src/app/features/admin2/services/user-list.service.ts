import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/app/environments/environment';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) 
  {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/user/findall`);
  }

  // getUser(): Observable<User> {
  //   return this.http.get<User>(`${this.apiUrl}/user/find/1`);
  // }

  // createUser(user: User): Observable<User> {
    //   return this.http.put<User>(`${this.apiUrl}/user/register`, user);
  // }

  // deleteUser(id: number): Observable<User> {
  //   return this.http.delete<User>(`${this.apiUrl}/user/delete/${id}`);
  // }
}
