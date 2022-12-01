import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//
// import { };
//
import { AuthService } from '../../services/auth.service';
import { Credential } from 'src/app/interfaces/credential';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  messageclass = ''
  message = ''
  Customerid: any;
  editdata: any;
  responsedata: any;

  constructor(private http: HttpClient, private service: AuthService,private route:Router) {
    localStorage.clear();
  }

  form: Credential = {
    email: '',
    password: ''
  };

  ngOnInit(): void {
  //   if(this.form.valid){
  // }
}

  onSubmit(): void{
    console.log(this.form)
    this.http.post('http://localhost:8080/stone.lunchtime/login',this.form).subscribe(
      data => {
        console.log(data)
        // this.tokenService.saveToken(data.access_token)
      },
      err => console.log(err)
    )
  }
}

