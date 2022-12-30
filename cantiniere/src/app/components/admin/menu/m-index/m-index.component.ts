/**
 * Title : Composant Users list
 * Description : 
 * Author : Thierry Maurouzel
*/

// Imports
import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';
import { Image } from 'src/app/interfaces/image';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-m-index',
  templateUrl: './m-index.component.html',
  styleUrls: ['./m-index.component.css'],
})
export class MIndexComponent implements OnInit {

  menuList!: Menu[];
  image!: Image;
  menuImages!: Image[];

  constructor(private MenuService: MenuService) { }


  ngOnInit(): void {
    this.onGetMenus();
  }

  onGetMenus(): void {
    this.MenuService.findAll().subscribe(
      (response) => {
        this.menuList = (response),
        // console.table(this.userList),
        (error:any) => console.log(error)
      },
    )
  } 

}
