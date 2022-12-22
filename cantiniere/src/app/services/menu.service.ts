import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Image } from '../interfaces/image';
import { Menu } from '../interfaces/menu';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };
  urlMenu: string = `${environment.apiUrl}/menu`;

  constructor(private httpClient: HttpClient) { }

  // PUT : /menu/add
  add(
    description: string,
    label: string,
    imagePath: string,
    image64: string,
    priceDF: number,
    availableForWeeksAndDays: any[],
    mealsId: number[],
  ): Observable<Menu> {
    return this.httpClient.put<Menu>(`${this.urlMenu}/add`, {
      description: description,
      label: label,
      image: {
        imagePath: imagePath,
        image64: image64
      },
      priceDF: priceDF,
      availableForWeeksAndDays: availableForWeeksAndDays,
      mealsId: mealsId,
    }, this.httpOptions);
  }

  // PATCH : /menu/updateimg/{id}
  updateImg(imagePath: string, image64: string, id: number): Observable<any> {
    return this.httpClient.patch(`${this.urlMenu}/updateimg/${id}`, {
      imagePath: imagePath,
      image64: image64,
    }, this.httpOptions);
  }

  // PATCH : /menu/update/{menuId}
  update(
    description: string,
    label: string,
    imagePath: string,
    image64: string,
    priceDF: number,
    availableForWeeksAndDays: any[],
    mealsId: number[],
    menuId: number,
  ): Observable<any> {
    return this.httpClient.patch(`${this.urlMenu}/update/${menuId}`, {
      description: description,
      label: label,
      image: {
        imagePath: imagePath,
        image64: image64
      },
      priceDF: priceDF,
      availableForWeeksAndDays: availableForWeeksAndDays,
      mealsId: mealsId,
    }, this.httpOptions);
  }

  // GET : /menu/findimg/{menuid}
  findImg(ingredientId: number): Observable<Image> {
    return this.httpClient.get<Image>(`${this.urlMenu}/findimg/${ingredientId}`);
  }

  // GET : /menu/findallavailableforweekandday/{weeknumber}/{daynumber}
  findAllAvailableForWeekAndDay(weekNumber: number, dayNumber: number): Observable<Menu[]> {
    return this.httpClient.get<Menu[]>(`${this.urlMenu}/findallavailableforweekandday/${weekNumber}/${dayNumber}`);
  }

  // GET : /menu/findallavailableforweek/{weeknumber}
  findAllAvailableForWeek(weekNumber: number): Observable<Menu[]> {
    return this.httpClient.get<Menu[]>(`${this.urlMenu}/findallavailableforweek/${weekNumber}`);
  }

  // GET : /menu/findallavailablefortoday
  findAllAvailableForToday(): Observable<Menu[]> {
    return this.httpClient.get<Menu[]>(`${this.urlMenu}/findallavailablefortoday`);
  }

  // GET : /menu/findallavailableforthisweek
  findAllAvailableForThisWeek(): Observable<Menu[]> {
    return this.httpClient.get<Menu[]>(`${this.urlMenu}/findallavailableforthisweek`);
  }

  // GET : /menu/findall
  findAll(): Observable<Menu[]> {
    return this.httpClient.get<Menu[]>(`${this.urlMenu}/findall`);
  }

  // GET : /menu/findall/{menuid}
  find(menuId: number): Observable<Menu[]> {
    return this.httpClient.get<Menu[]>(`${this.urlMenu}/find/${menuId}`);
  }

  // DELETE : /menu/delete/{menuid}
  delete(menuId: number): Observable<Menu> {
    return this.httpClient.delete<Menu>(`${this.urlMenu}/delete/${menuId}`, this.httpOptions);
  }
}
