import { Component, Injectable, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

import {AfterViewInit, ElementRef, ViewChild} from '@angular/core';

export class User {

  constructor(
    public address: string = "",
    public town: string = "",
    public postal_code: string = "",
    public email: string = "",
    public firstname: string = "",
    public lastname: string = "",
    public phone_number: string = "",
    public sex: number = 1,
    public avatar: File = new File([],''),
    public password_1: string = "",
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

  model = new User();

  submitted = false;

  constructor(
  ) {}

  ngOnInit(): void {}

  onSubmit() { this.submitted = true; }

  newUser() {}


}
