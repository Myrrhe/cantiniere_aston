import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IngredientService } from "../../services/ingredient.service";
import { Image } from "../../interfaces/image";
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  image!: Image;
  menus!: Menu[];
  menuImages!: Image[];

  constructor(
    private ingredientService: IngredientService,
    private menuService: MenuService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.ingredientService.findImg(1).subscribe((data) => {
      this.image = data;
    });

    this.menuService.findAll().subscribe((data: any) => {
      this.menus = data;
    });
  }
}
