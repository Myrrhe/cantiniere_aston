import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IngredientService } from "../../../services/ingredient.service";
import { Image } from "../../../interfaces/image";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  image!: Image;

  constructor(
    private ingredientService: IngredientService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.ingredientService.findImg(28).subscribe((data) => {
      this.image = data;
    });
  }

}
