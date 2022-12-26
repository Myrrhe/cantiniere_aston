import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  getLabelFromId(id: number) {
    switch (id) {
      case 0:
        return 'Inconnu';
      case 1:
        return 'Amuse-bouches';
      case 2:
        return 'Entrée';
      case 3:
        return 'Plat principal';
      case 4:
        return 'Autre';
      case 5:
        return 'Dessert';
      case 6:
        return 'Brunchs et déjeuners';
      case 7:
        return 'Soupe';
      case 8:
        return 'Sauces';
      case 9:
        return 'Boissons';
      case 10:
        return 'Sandwichs';
      case 11:
        return 'En-cas';
      default:
        return `Error: Unexpected category id encountered (${id})`;
    }
  }
}
