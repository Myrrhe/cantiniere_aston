import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meal } from 'src/app/interfaces/meal';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-m-edit',
  templateUrl: './m-edit.component.html',
  styleUrls: ['./m-edit.component.css'],
})
export class MEditComponent implements OnInit {

  menu!: Menu;
  meal!: Meal;

  constructor(
    private activated: ActivatedRoute,
    private MenuService: MenuService,
  ) { }

  ngOnInit(): void {
    
    let menuId = this.activated.snapshot.paramMap.get('id')
    if (menuId !== null) {
    this.MenuService.find(menuId).subscribe(
      data => {
        console.log(data)
        this.menu = data
      }
    )   
  }
  }
  // onSubmit():void{
  //   console.log(this.menu.id)
  // }
}
