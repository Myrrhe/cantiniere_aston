import { Component, OnInit } from '@angular/core';

import { UserListService } from '../../services/user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:any;

  constructor(private UserListService: UserListService) { }

  ngOnInit(): void {
    this.onGetUsers();
  }

  onGetUsers(): void {
    this.UserListService.getUsers().subscribe(
      (response) => {
        this.users = (response),
        console.table(this.users),
        (error:any) => console.log(error)
      },
    )
  } 

}
