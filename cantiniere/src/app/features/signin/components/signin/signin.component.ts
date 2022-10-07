import { Component, Injectable, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";

export class User {
  constructor(
    public address: string = "",
    public wallets: number = 0,
    public postalCode: string = "",
    public email: string = "",
    public isLunchLady: boolean = false,
    public password: string = "",
    public name: string = "",
    public firstname: string = "",
    public phone: string = "",
    public town: string = "",
    public sex: number = 1,
    public image: File = new File([],''),
    public password_2: string = "",
  ) {  }
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
@Injectable({
  providedIn: 'root',
})
export class SigninComponent implements OnInit {

  httpOptions = {
    headers: new HttpHeaders({ "content-type": "application/json" }),
  };

  user = new User();

  private userUrl = "/user/register";

  submitted = false;

  constructor(
    private httpClient: HttpClient,
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
  }

  newUser() {
    let res = this.httpClient.put<User>(
      this.userUrl,
      this.user,
      this.httpOptions
    );
  }


}
