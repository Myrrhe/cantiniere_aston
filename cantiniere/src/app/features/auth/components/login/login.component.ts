import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//
import { AuthService } from 'src/app/services/auth.service';
// Interfaces
import { Credential } from 'src/app/interfaces/credential';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // messageclass = ''
  // message = ''
  // Customerid: any;
  // editdata: any;
  // responsedata: any;

  form: Credential = {
    email: '',
    password: ''
  };

  constructor(
    private authServer: AuthService,
    private tokenService: TokenService,
  ) {
    localStorage.clear();
  }

  ngOnInit(): void {
    //   if(this.form.valid){
    // }
  }

  onSubmit(): void {
    console.log(this.form)
    this.authServer.login(this.form).subscribe(
      resp => {
        // console.log(resp.headers.get('Authorization'))
        this.tokenService.saveToken(resp.headers.get('Authorization'))
      },
      err => console.log(err)
    )
  }
}

