import { Component, Injectable, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environment';
import {AfterViewInit, ElementRef, ViewChild} from '@angular/core';





@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

 userInfo:User = {
  address: '',
  postalCode: '',
  wallet: 0 ,
  registrationDate: '',
  email: '',
  isLunchLady:false ,
  password: '',
  name: '',
  firstname: '',
  phone: '',
  town: '',
  sex: 0,
  status: 0,
  imageId: 0
 };

  submitted = false;

 


  ngOnInit(): void {}

  onSubmit() { this.submitted = true; }

 


}
