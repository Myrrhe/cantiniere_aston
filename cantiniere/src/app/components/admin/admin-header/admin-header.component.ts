import { Component, OnInit } from '@angular/core';
//
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  // user: User = {
  //   nom: '',
  //   prenom: '',
  //   email: ''
  // }
  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    // this.user = this.tokenService.getPayload()
    // console.log(this.user)
  }

  logout(): void {
    this.tokenService.clearToken()
  }
}
