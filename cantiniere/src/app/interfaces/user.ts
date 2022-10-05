import { Address } from "./address";
import { Company } from "./company";

export interface User {
    id?: number
    address: string
    postalCode: string
    wallet: number
    registrationDate: string
    email: string
    isLunchLady: boolean
    password: string
    name: string
    firstname: string
    phone: string
    town: string
    sex: number
    status: number
    imageId: number
}
