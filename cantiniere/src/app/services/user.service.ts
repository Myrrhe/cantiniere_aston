/**
 * Title : Users services
 * Description : 
 * Author : Thierry Maurouzel
 */
// Imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { User } from 'src/app/interfaces/user';
import { Image } from 'src/app/interfaces/image';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) 
  {}

  // GET : Get all users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/user/findall`);
  }

  // GET : Get one user by ID
  getUser(id: string | null): Observable<User>{
    return this.http.get<User>(`${this.apiUrl}/user/find/${id}`)
  }

  // GET : Get user image by ID
  getUserImage(id: number | string ): Observable<Image>{
    return this.http.get<Image>(`${this.apiUrl}/user/findimg/${id}`)
  }

  // DELETE : Delete one user by his ID
  // deleteUser(id: number): Observable<User> {
  //   return this.http.delete<User>(`${this.apiUrl}/user/delete/${id}`);
  // }

  // PATCH : Modify one user by his ID

  // PATCH : Activate one user by his ID
  // activateUser(id: string | null): Observable<User>{
  //   return this.http.patch<User>(`${this.apiUrl}/user/activate/${id}`)
  // }

  // PATCH : Desactivate one user by his ID
  // deactivateUser(id: string | null): Observable<User>{
  //   return this.http.patch<User>(`${this.apiUrl}/user/deactivate/${id}`)
  // }

  // POST : Create one user with a form
}