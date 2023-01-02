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
    private activated: ActivatedRoute,
    private UserService: UserService,
  ) { }

  ngOnInit(): void {

    let id = this.activated.snapshot.paramMap.get('id')

    this.UserService.getUser(id).subscribe(
      data => {
        console.log(data)
        this.user = data
      }
    )
    this.UserService.getUserImage(id).subscribe(
      data => {
        this.image = data;
      }
    )

  }
  // PATCH : Activate a user with service on userServices
  activateUser(id: string | null) {
    this.UserService.activateUser(id).subscribe(
      data => {
        alert("Utilisateur activé avec succès")
        // console.log("User "+this.user.id +" activated with sucess")
      }
    )
  }
  // PATCH : Deactivates a user with service on userServices
  deactivateUser(id: string | null) {
    this.UserService.deactivateUser(id).subscribe(
      data => {
        alert("Utilisateur désactivé avec succès")
        // console.log("User "+this.user.id +" deactivated with sucess")
      }
    )
  }


  // getAmount() {
  //   this.UserService.addMoneyToUser(this.userWallet).subscribe({
  //     next: (res) => {
  //       console.log(res);
  //     }
  //   })

  // }


}
