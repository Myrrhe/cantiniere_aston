import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    constructor(private router: Router) {}

    saveToken(token: string | any): void{
        localStorage.setItem('token', token)
        this.router.navigate(['admin'])
    }

    isLogged(): boolean{
        const token = localStorage.getItem('token')
        // console.log(token);
        return !! token // Transform a variable into boolean
    }

    clearToken(): void{ // Delete of token for deconnexion purpose
        localStorage.removeItem('token')
        this.router.navigate(['/'])
    }

    clearTokenExpired(): void { // Delete token when it is expired
        localStorage.removeItem('token')
        this.router.navigate(['auth'])
    }
    
    getToken(): string | null{
        return localStorage.getItem('token')
    }
}