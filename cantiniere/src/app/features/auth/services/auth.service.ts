import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//
import { Token } from 'src/app/interfaces/token';
import { Credential } from 'src/app/interfaces/credential';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(credentials: Credential): Observable<Token>{
    return this.http.post<Token>(this.apiUrl, credentials)
  }
}