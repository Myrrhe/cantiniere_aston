import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-u-index',
  templateUrl: './u-index.component.html',
  styleUrls: ['./u-index.component.css'],
})
export class UIndexComponent implements OnInit {

  userList: any[] = [];

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

