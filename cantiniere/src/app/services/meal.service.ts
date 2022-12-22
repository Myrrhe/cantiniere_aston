import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Image } from '../interfaces/image';
import { Observable } from 'rxjs';
import { Meal } from '../interfaces/meal';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };
  urlMeal: string = `${environment.apiUrl}/meal`;

  constructor(private httpClient: HttpClient) { }

  // PUT : /meal/add
  add(
    description: string,
    label: string,
    imagePath: string,
    image64: string,
    priceDF: number,
    availableForWeeksAndDays: any[],
    ingredientsId: number[],
    category: number,
  ): Observable<Meal> {
    return this.httpClient.put<Meal>(`${this.urlMeal}/add`, {
      description: description,
      label: label,
      image: {
        imagePath: imagePath,
        image64: image64
      },
      priceDF: priceDF,
      availableForWeeksAndDays: availableForWeeksAndDays,
      ingredientsId: ingredientsId,
      category: category,
    }, this.httpOptions);
  }

  // PATCH : /meal/updateimg/{id}
  updateImg(imagePath: string, image64: string, id: number): Observable<any> {
    return this.httpClient.patch(`${this.urlMeal}/updateimg/${id}`, {
      imagePath: imagePath,
      image64: image64,
    }, this.httpOptions);
  }

  // PATCH : /meal/update/{mealId}
  update(
    description: string,
    label: string,
    imagePath: string,
    image64: string,
    priceDF: number,
    availableForWeeksAndDays: any[],
    ingredientsId: number[],
    category: number,
    mealId: number,
  ): Observable<any> {
    return this.httpClient.patch(`${this.urlMeal}/update/${mealId}`, {
      description: description,
      label: label,
      image: {
        imagePath: imagePath,
        image64: image64
      },
      priceDF: priceDF,
      availableForWeeksAndDays: availableForWeeksAndDays,
      ingredientsId: ingredientsId,
      category: category,
    }, this.httpOptions);
  }

  // GET : /meal/findimg/{mealid}
  findImg(ingredientId: number): Observable<Image> {
    return this.httpClient.get<Image>(`${this.urlMeal}/findimg/${ingredientId}`);
  }

  // GET : /meal/findallavailableforweekandday/{weeknumber}/{daynumber}
  findAllAvailableForWeekAndDay(weekNumber: number, dayNumber: number): Observable<Meal[]> {
    return this.httpClient.get<Meal[]>(`${this.urlMeal}/findallavailableforweekandday/${weekNumber}/${dayNumber}`);
  }

  // GET : /meal/findallavailableforweek/{weeknumber}
  findAllAvailableForWeek(weekNumber: number): Observable<Meal[]> {
    return this.httpClient.get<Meal[]>(`${this.urlMeal}/findallavailableforweek/${weekNumber}`);
  }

  // GET : /meal/findallavailablefortoday
  findAllAvailableForToday(): Observable<Meal[]> {
    return this.httpClient.get<Meal[]>(`${this.urlMeal}/findallavailablefortoday`);
  }

  // GET : /meal/findallavailableforthisweek
  findAllAvailableForThisWeek(): Observable<Meal[]> {
    return this.httpClient.get<Meal[]>(`${this.urlMeal}/findallavailableforthisweek`);
  }

  // GET : /meal/findall
  findAll(): Observable<Meal[]> {
    return this.httpClient.get<Meal[]>(`${this.urlMeal}/findall`);
  }

  // GET : /meal/findall/{mealid}
  find(mealId: number): Observable<Meal[]> {
    return this.httpClient.get<Meal[]>(`${this.urlMeal}/find/${mealId}`);
  }

  // DELETE : /meal/delete/{mealId}
  delete(mealId: number): Observable<Meal> {
    return this.httpClient.delete<Meal>(`${this.urlMeal}/delete/${mealId}`, this.httpOptions);
  }
}
