import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { environment } from 'src/app/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})

export class RegistrationService {
  
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  newUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/user/register`, user);
  }
}

