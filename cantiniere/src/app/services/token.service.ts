/**
 * Title : File to token service
 * Description :
 * Author : Thierry Maurouzel
*/

// Imports
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenUser } from '../interfaces/user';
import jwtDecode, { JwtPayload } from 'jwt-decode';

@Injectable({
    providedIn: 'root',
})
export class TokenService {

    constructor(private readonly router: Router) {}

    saveToken(token: string | any): void{
        localStorage.setItem('token', token);
        this.router.navigate(['admin']);
    }

    isLogged(): boolean{
        const token = localStorage.getItem('token');
        // console.log(token);
        return !! token; // Transform a variable into boolean
    }

    clearToken(): void{ // Delete of token for deconnexion purpose
        localStorage.removeItem('token');
        this.router.navigate(['/']);
    }

    clearTokenExpired(): void { // Delete token when it is expired
        localStorage.removeItem('token');
        this.router.navigate(['auth']);
    }

    getToken(): string | null{
        return localStorage.getItem('token');
    }

    getPayload(){
        let user: TokenUser = {
          id: 0,
          name: '',
          firstname: '',
          email: ''
        }
    
        let token = localStorage.getItem('token')
        if(token != null){
          console.log(token)
          const decode: TokenUser = jwtDecode<TokenUser>(token)
          user.id = decode.id
          user.name = decode.name
          user.firstname = decode.firstname
          user.email = decode.email
        }
    
        return user
        
      }
}

// Ajouter une procédure de rafraissement de token
