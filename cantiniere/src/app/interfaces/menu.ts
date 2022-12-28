import { AvailableForWeeksAndDays } from './available-for-weeks-and-days';
import { Meal } from './meal';

export interface Menu {
  id?: number
  description: string
  label: string
  status: number
  imageId: number
  priceDF: number
  availableForWeeksAndDays: AvailableForWeeksAndDays
  category: number,
  meals: Meal[]
}
