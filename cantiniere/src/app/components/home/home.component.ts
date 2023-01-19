import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/interfaces/image';
import { Ingredient } from 'src/app/interfaces/ingredient';
import { Meal } from 'src/app/interfaces/meal';
import { Menu } from 'src/app/interfaces/menu';
import { DateService } from 'src/app/services/date.service';
import { MathService } from 'src/app/services/math.service';
import { MealService } from 'src/app/services/meal.service';
import { MenuService } from 'src/app/services/menu.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PopUpComponent } from '../../pop-up/pop-up.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  mealAvailableForThisWeek: Meal[] = [];
  menuAvailableForThisWeek: [Menu, number[]][][] = [[], [], [], [], [], [], []];
  imageMealOfMenus: Image[][][] = [[], [], [], [], [], [], []];

  fakeIngredients: Ingredient[] = [];
  fakeMeals: Meal[] = [];
  fakeMenus: Menu[] = [];
  fakeImages: Image[] = [];

  // Set this variable to true if you want to use the database
  usingDatabase: boolean = true;

  constructor(
    public dialogRef: MatDialog,
    private readonly dateService: DateService,
    private readonly mathService: MathService,
    private readonly mealService: MealService,
    private readonly menuService: MenuService,
  ) { }

  openDialog(){
    this.dialogRef.open(PopUpComponent,{height:'80px',width:'100px',data:'right click'
  });
  }

  ngOnInit(): void {
    // Data fetching
    if (this.usingDatabase) {
      this.mealService.findAll().subscribe((dataMeal: any) => {
        this.mealAvailableForThisWeek = this.dateService.filterAvailableForThisWeek(dataMeal);
      });

      this.menuService.findAll().subscribe((dataMenu: any) => {
        this.organizeMenus(dataMenu);
      });
    } else {
      // Fake data
      // Create 5 ingredients, 7 meals and 7 menus
      this.createFakeData(5, 7, 7);
      this.organizeMenus(this.fakeMenus);
    }
  }

  organizeMenus(menus: Menu[]) {
    // We get the manus available for this week
    const dataFiltered: Menu[] = this.dateService.filterAvailableForThisWeek(menus as (Meal & Menu)[]);
    console.log("menus = ", dataFiltered)
    for (const menu of dataFiltered) {
      const categories: number[] = [];
      // We get the differents categories presents in each menus
      if (menu.meals !== undefined) {
        for (const meal of menu.meals) {
          if (!categories.some((category: number): boolean => meal.category === category)) {
            categories.push(meal.category);
          }
        }
      }
      // We sort the categories
      categories.sort((category1: number, category2: number): number => category1 - category2);
      // We put each menus (and it's categories), in the right day
      for (let i = 0; i <= 6; i++) {
        if (this.dateService.isAvailableForDayOfThisWeek(menu, i + 1)) {
          this.menuAvailableForThisWeek[i].push([menu, categories]);
          this.imageMealOfMenus[i].push([]);
          if (menu.meals !== undefined) {
            for (const meal of menu.meals) {
              // For each meals, we look for it's image
              if (this.usingDatabase) {
                let currentId = 0;
                if (meal.id !== undefined) {
                  currentId = meal.id;
                }
                this.mealService.findImg(currentId).subscribe((dataImg: any) => {
                  this.imageMealOfMenus[i][this.imageMealOfMenus[i].length - 1].push(dataImg);
                });
              } else {
                const imageFound: Image | undefined = this.fakeImages.find((image: Image) => image.id === meal.imageId);
                if (imageFound !== undefined) {
                  this.imageMealOfMenus[i][this.imageMealOfMenus[i].length - 1].push(imageFound);
                }
              }
            }
          }
        }
      }
    }
  }

  sortMealsByCategory(meals: Meal[]): Meal[] {
    return meals.sort((meal1: Meal, meal2: Meal): number => meal1.category - meal2.category);
  }

  createRange(len: number){
    return Array.from({length: len}).fill(0).map((_, index) => index);
  }

  createFakeData(lenIngredients: number, lenMeals: number, lenMenus: number) {
    let currentImageId = 1;

    // Ingredients creation
    for (let i = 0; i < lenMeals; i++) {
      this.fakeIngredients.push({
        id: i + 1,
        status: 0,
        label: `Ingrédient ${i + 1}`,
        description: `Description de 'ingrédient numéro ${i + 1}`,
        imageId: currentImageId,
      });
      currentImageId++;
    }

    // Meals creation
    for (let i = 0; i < lenMeals; i++) {
      this.fakeMeals.push({
        id: i + 1,
        description: `Description du plat numéro ${i + 1}`,
        label: `Plat ${i + 1}`,
        status: 0,
        imageId: currentImageId,
        priceDF: this.mathService.getRandomIntInclusive(2, 12),
        availableForWeeksAndDays: {
          values: [
            {
              week: this.dateService.getCurrentWeekNumber(),
              day: this.mathService.getRandomIntInclusive(1, 7),
            },
          ],
        },
        category: this.mathService.getRandomIntInclusive(1, 10),
        ingredients: [
          this.fakeIngredients[this.mathService.getRandomIntInclusive(0, lenIngredients - 1)],
        ],
      });
      currentImageId++;
    }

    // Menus creation
    for (let i = 0; i < lenMenus; i++) {
      this.fakeMenus.push({
        id: i + 1,
        description: `Description du menu numéro ${i + 1}`,
        label: `Menu ${i + 1}`,
        status: 0,
        imageId: currentImageId,
        priceDF: 0,
        availableForWeeksAndDays: {
          values: [
            {
              week: this.dateService.getCurrentWeekNumber(),
              day: this.mathService.getRandomIntInclusive(1, 7),
            },
          ],
        },
        category: 1,
        meals: [
          this.fakeMeals[this.mathService.getRandomIntInclusive(0, lenMeals - 1)],
          this.fakeMeals[this.mathService.getRandomIntInclusive(0, lenMeals - 1)],
          this.fakeMeals[this.mathService.getRandomIntInclusive(0, lenMeals - 1)],
        ],
      });
      for (const meal of this.fakeMenus[i].meals) {
        this.fakeMenus[i].priceDF += meal.priceDF;
      }
      currentImageId++;
    }

    // Images creation
    for (let i = 0; i < currentImageId; i++) {
      this.fakeImages.push({
        id: i + 1,
        image64: `../../../assets/images/fake/${i + 1}.png`,
        imagePath: `../../../assets/images/fake/${i + 1}.png`,
        isDefault: 0,
      });
    }
  }
}
