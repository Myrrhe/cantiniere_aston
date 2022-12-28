import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'day',
})
export class DayPipe implements PipeTransform {

  transform(value: number): string {
    switch (value) {
      case 1:
        return 'Lundi';
      case 2:
        return 'Mardi';
      case 3:
        return 'Mercredi';
      case 4:
        return 'Jeudi';
      case 5:
        return 'Vendredi';
      case 6:
        return 'Samedi';
      case 7:
        return 'Dimanche';
      default:
        return `Error: Unexpected day number encountered (${value}) (should be 1-7)`;
    }
  }
}
