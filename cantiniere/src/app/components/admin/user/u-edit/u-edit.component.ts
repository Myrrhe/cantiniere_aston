import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-u-edit',
  templateUrl: './u-edit.component.html',
  styleUrls: ['./u-edit.component.css'],
})
export class UEditComponent implements OnInit {

  user!: User;

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
  }

  onSubmit():void{
    console.log(this.user.id)
  }
}
