/**
 * Title : Authentification Service
 * Description :
 * Author : Thierry Maurouzel
 */

// Imports
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
// Environment
import { environment } from 'src/app/environments/environment';
// Interfaces
import { Token } from 'src/app/interfaces/token';
import { Credential } from 'src/app/interfaces/credential';

@Injectable({
  providedIn: 'root',
})

export class AuthService {

  private readonly apiUrl = environment.apiUrl;

  constructor(private readonly http: HttpClient) { }

  login(credentials: Credential): Observable<HttpResponse<Token> > {
    return this.http.post<Token>(`${this.apiUrl}/login`, credentials, {observe: 'response'});
  }
}
