// Lib
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
// env
import { environment } from 'src/app/environments/environment';
// Interfaces
import { Token } from 'src/app/interfaces/token';
import { Credential } from 'src/app/interfaces/credential';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
 
  login(credentials: Credential): Observable<HttpResponse<Token>> {
    return this.http.post<Token>(`${this.apiUrl}/login`, credentials, {observe: "response"})    
  }
}