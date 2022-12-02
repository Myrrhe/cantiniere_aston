import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    constructor(private router: Router) {}

    saveToken(token: any): void{
        localStorage.setItem('token', token)
        this.router.navigate([''])
    }

    isLogged(): boolean{
        const token = localStorage.getItem('token')
        console.log(token);
        return !! token // Transform a variable into boolean
    }
}