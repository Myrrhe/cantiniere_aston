import { User } from "./user";
import { Quantity } from "./quantity";

export interface Order {
  id?: number
  creationDate: string
  creationTime: string
  status: number
  user: User
  quantity: Quantity[]
}
