import { Injectable } from '@angular/core';
import { Menu } from '../interfaces/menu';
import { Meal } from '../interfaces/meal';
import { WeekAndDays } from '../interfaces/week-and-days';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  getCurrentDayNumber() {
    const currentDate = new Date();
    return currentDate.getDay();
  }

  getCurrentWeekNumber() {
    const currentDate = new Date();
    const startDate = new Date(currentDate.getFullYear(), 0, 1);
    const days = Math.floor((currentDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000));
    return Math.ceil(days / 7);
  }

  // The four methods below are used to bypass the API strange behavior
  // concerning the availability of menus. Use the findAll methods to get all
  // menus, then filter them with these methods.

  // This methods is used to filter a list of meal or menu to return only those
  // available for the week and day numbers
  filterAvailableForWeekAndDay(mealsOrMenus: (Meal & Menu)[], week: number, day: number): Meal[] & Menu[] {
    if (mealsOrMenus.length < 1) {
      return [];
    }
    return mealsOrMenus.filter((mealOrMenu: Meal & Menu) => {
      if (mealOrMenu.availableForWeeksAndDays.values != null) {
        return mealOrMenu.availableForWeeksAndDays.values.some((wd: WeekAndDays) => week === wd.week && day === wd.day);
      } else {
        return false;
      }
    });
  }

  // This methods is used to filter a list of meal or menu to return only those
  // available for the week number
  filterAvailableForWeek(mealsOrMenus: (Meal & Menu)[], week: number): Meal[] & Menu[] {
    if (mealsOrMenus.length < 1) {
      return [];
    }
    return mealsOrMenus.filter((mealOrMenu: Meal & Menu) => {
      if (mealOrMenu.availableForWeeksAndDays.values != null) {
        return mealOrMenu.availableForWeeksAndDays.values.some((wd: WeekAndDays) => week === wd.week);
      } else {
        return false;
      }
    });
  }

  // This methods is used to filter a list of meal or menu to return only those
  // available for today
  filterAvailableForToday(mealsOrMenus: (Meal & Menu)[]): Meal[] & Menu[] {
    if (mealsOrMenus.length < 1) {
      return [];
    }
    return mealsOrMenus.filter((mealOrMenu: Meal & Menu) => {
      if (mealOrMenu.availableForWeeksAndDays.values != null) {
        return mealOrMenu.availableForWeeksAndDays.values.some((wd: WeekAndDays) =>
          this.getCurrentWeekNumber() === wd.week && this.getCurrentDayNumber() === wd.day);
      } else {
        return false;
      }
    });
  }

  // This methods is used to filter a list of meal or menu to return only those
  // available for today
  filterAvailableForThisWeek(mealsOrMenus: (Meal & Menu)[]): (Meal & Menu)[] {
    if (mealsOrMenus.length < 1) {
      return [];
    }
    return mealsOrMenus.filter((mealOrMenu: Meal & Menu) => {
      if (mealOrMenu.availableForWeeksAndDays.values != null) {
        return mealOrMenu.availableForWeeksAndDays.values.some((wd: WeekAndDays) => this.getCurrentWeekNumber() === wd.week);
      } else {
        return false;
      }
    });
  }

  // This methods is used to filter a list of meal or menu to return only those
  // whose AvailableForWeeksAndDays is set
  filterNoAvailability(mealsOrMenus: (Meal & Menu)[]): (Meal & Menu)[] {
    if (mealsOrMenus.length < 1) {
      return [];
    }
    return mealsOrMenus.filter((mealOrMenu: Meal & Menu) => {
      return mealOrMenu.availableForWeeksAndDays.values != null;
    });
  }
}
