import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//
// import { };
//
import { AuthService } from '../../services/auth.service';
// Interfaces
import { Credential } from 'src/app/interfaces/credential';
import { Token } from 'src/app/interfaces/token';


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

  constructor(private authServer: AuthService, private http: HttpClient, private service: AuthService,private route:Router) {
    localStorage.clear();
  }

  ngOnInit(): void {
  //   if(this.form.valid){
  // }
  }

  onSubmit(): void{
    console.log(this.form)

    this.authServer.login(this.form).subscribe(
      resp => {
        console.log(resp.headers.get('Authorization'))
        // localStorage.setItem('token', data)
        
      },
      err => console.log(err)
    )
  }
}

