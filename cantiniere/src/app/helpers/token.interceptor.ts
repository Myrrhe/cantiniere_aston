/**
 * Title : Token Interceptor
 * Description : This file creates an interceptor that will intercept requests, create a clone of the request containing our authentication token and then send our clone instead of the original request
 * Author : Thierry Maurouzel
 */

// imports
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request)
    
    const token = this.tokenService.getToken()

    // If Token exist
    if(token !== null){
      let clone = request.clone({ // We clone outgoing requests 
        headers: request.headers.set('Authorization', '' +token) // And we add the header 'Authorization' with the value of our token
      })
      console.log(clone)
      return next.handle(clone).pipe( // When response arrives, we recover the errors
        catchError(error => {
          console.log(error)
          // Now we are testing if it is a token expiration error
          if(error.status === 401){ // If we get an 401 error (token expired), we delete the actual token
            this.tokenService.clearTokenExpired()
          }
          // this.apiErrorService.sendError(error.error.message)
          return throwError('Session Expired')
        })
      )
    }   
    return next.handle(request);
  }
}

// exports
export const TokenInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true
}