import { Meal } from './meal';
import { Menu } from './menu';

export interface Quantity {
  id?: number
  quantity: number
  meal: Meal
  menu: Menu
}
