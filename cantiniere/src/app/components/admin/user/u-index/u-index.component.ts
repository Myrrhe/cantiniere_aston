/**
 * Title : Composant Users list
 * Description : Fichier récupérant la liste de tous les utilisateurs
 * Author : Thierry Maurouzel
*/
// Imports
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-u-index',
  templateUrl: './u-index.component.html',
  styleUrls: ['./u-index.component.css'],
})
export class UIndexComponent implements OnInit {

  userList: User[] = [];
  name: any;
  // searchText: "";

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    // this.onGetUsers();
  }

  // onGetUsers(): void {
  //   this.UserListService.getUsers().subscribe(
  //     (response) => {
  //       this.users = (response),
  //       console.table(this.users),
  //       (error:any) => console.log(error)
  //     },
  //   )
  // }

}

// }

