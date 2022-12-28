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
  menuAvailableForThisWeek: [Menu, number[]][][] = [[], [], [], [], [], [], []];

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
      // We get the manus available for this week
      const dataFiltered: Menu[] = this.dateService.filterAvailableForThisWeek(data);
      for (const menu of dataFiltered) {
        const categories: number[] = [];
        // We get the differents categories presents in each menus
        for (const meal of menu.meals) {
          if (!categories.some((category: number): boolean => meal.category === category)) {
            categories.push(meal.category);
          }
        }
        // We sort the categories
        categories.sort((category1: number, category2: number): number => category1 - category2);
        // We put each menus (and it's categories), in the right day
        for (let i = 1; i <= 7; i++) {
          if (this.dateService.isAvailableForDayOfThisWeek(menu, i)) {
            this.menuAvailableForThisWeek[i].push([menu, categories]);
          }
        }
      }
    });
  }

  sortMealsByCategory(meals: Meal[]): Meal[] {
    return meals.sort((meal1: Meal, meal2: Meal): number => meal1.category - meal2.category);
  }

  createRange(len: number){
    return Array.from({length: len}).fill(0).map((_, index) => index + 1);
  }
}
