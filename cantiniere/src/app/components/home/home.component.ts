import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/app/interfaces/meal';
import { Menu } from 'src/app/interfaces/menu';
import { DateService } from 'src/app/services/date.service';
import { MealService } from 'src/app/services/meal.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  mealAvailableForThisWeek: Meal[] = [];
  menuAvailableForThisWeek: Menu[] = [];

  constructor(
    private readonly dateService: DateService,
    private readonly mealService: MealService,
    private readonly menuService: MenuService,
  ) { }

  ngOnInit(): void {
    this.mealService.findAll().subscribe((data: any) => {
      this.mealAvailableForThisWeek = this.dateService.filterAvailableForThisWeek(data);
    });

    this.menuService.findAll().subscribe((data: any) => {
      this.menuAvailableForThisWeek = this.dateService.filterAvailableForThisWeek(data);
    });
  }
}
