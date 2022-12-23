import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { RegistrationService } from '../../services/registration.service';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  [x: string]: any;
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
    imageId: 0,
   };
  constructor(private readonly registrationService: RegistrationService) {

  }
  submitted = false;
  ngOnInit(): void {
    console.log('coucouc');
  }

  onSubmit(){
    this.submitted = true;
  }

  cs(){
    console.log(this.userInfo);
  }
  createUser() {
    this.registrationService.newUser(this.userInfo).subscribe({
      next: res => {
        console.log(res);
      },
    });

    return;
   }



}
