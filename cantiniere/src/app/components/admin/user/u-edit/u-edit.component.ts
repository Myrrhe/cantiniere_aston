import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { Image } from 'src/app/interfaces/image';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-u-edit',
  templateUrl: './u-edit.component.html',
  styleUrls: ['./u-edit.component.css'],
})
export class UEditComponent implements OnInit {

  image!: Image;
  user!: User;
  menuImages!: Image[];

  constructor(
    private readonly activated: ActivatedRoute,
    private readonly UserService: UserService,
  ) { }

  ngOnInit(): void {
    // Get current user id from url
    const id = this.activated.snapshot.paramMap.get('id');

    // GET : Finds one user with service on userServices
    this.UserService.getUser(id).subscribe(
      data => {
        // console.log(data)
        this.user = data;
      },
    );
    this.UserService.getUserImage(id!).subscribe(
      data => {
        this.image = data;
      },
    );
  }
  // PATCH : Activate a user with service on userServices
  activateUser(id: string) {
    this.UserService.activateUser(id).subscribe(
      data => {
        alert("Utilisateur activé avec succès");
        // console.log("User "+this.user.id +" activated with sucess")
      },
    );
  }
  // PATCH : Deactivates a user with service on userServices
  deactivateUser(id: string) {
    this.UserService.deactivateUser(id).subscribe(
      res => {
        alert("Utilisateur désactivé avec succès");
        // console.log("User "+this.user.id +" deactivated with sucess")
      },
    );
  }
  // POST : Add money to user's wallet with serice on userServices
  creditUser(data: any) {
    this.UserService.creditUser(
      this.user.id!,
      data.credit).subscribe(
        res => {
          this.UserService.getUser(this.user.id!).subscribe(
            data => {
              // console.log(data)
              this.user = data;
            },
          );
        },
      );
  }
  // POST : Remove money to user's wallet with service on userServices
  debitUser(data: any) {
    this.UserService.debitUser(
      this.user.id!,
      data.debit).subscribe(
        res => {
          this.UserService.getUser(this.user.id!).subscribe(
            data => {
              // console.log(data)
              this.user = data;
            },
          );
        },
      );
  }
}
