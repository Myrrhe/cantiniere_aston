/**
 * Title : Composant admin header
 * Description : 
 * Author : Thierry Maurouzel
*/

// Imports
import { Component, OnInit } from '@angular/core';
import { TokenUser } from 'src/app/interfaces/user';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css'],
})
export class AdminHeaderComponent implements OnInit {

  user: TokenUser = {
    id: 0,
    name: '',
    firstname: '',
    email: ''
  }

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    this.user = this.tokenService.getPayload()
    console.log("this.user")
    console.log(this.user)
  } 

  logout(): void {
    this.tokenService.clearToken();
  }
}