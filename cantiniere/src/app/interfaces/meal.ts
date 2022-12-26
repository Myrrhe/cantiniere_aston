import { AvailableForWeeksAndDays } from './available-for-weeks-and-days';
import { Ingredient } from './ingredient';

export interface Meal {
  id?: number
  description: string
  label: string
  status: number
  imageId: number
  priceDF: number
  availableForWeeksAndDays: AvailableForWeeksAndDays
  category: number,
  ingredients: Ingredient[]
}
