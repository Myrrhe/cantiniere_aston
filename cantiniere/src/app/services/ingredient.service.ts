import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../interfaces/image';
import { Ingredient } from '../interfaces/ingredient';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };
  urlIngredient: string = `${environment.apiUrl}/ingredient`;

  constructor(private readonly httpClient: HttpClient) { }

  // ==================== API RELATED METHODS ====================

  // PUT : /ingredient/add
  add(description: string, label: string, imagePath: string, image64: string): Observable<Ingredient> {
    return this.httpClient.put<Ingredient>(`${this.urlIngredient}/add`, {
      description: description,
      label: label,
      image: {
        imagePath: imagePath,
        image64: image64
      }
    }, this.httpOptions);
  }

  // PATCH : /ingredient/updateimg/{id}
  updateImg(imagePath: string, image64: string, id: number): Observable<any> {
    return this.httpClient.patch(`${this.urlIngredient}/updateimg/${id}`, {
      imagePath: imagePath,
      image64: image64
    }, this.httpOptions);
  }

  // PATCH : /ingredient/update/{ingredientId}
  update(description: string, label: string, imagePath: string, image64: string, ingredientId: number): Observable<any> {
    return this.httpClient.patch(`${this.urlIngredient}/update/${ingredientId}`, {
      description: description,
      label: label,
      image: {
        imagePath: imagePath,
        image64: image64
      }
    }, this.httpOptions);
  }

  // GET : /ingredient/findimg/{ingredientid}
  findImg(ingredientId: number): Observable<Image> {
    return this.httpClient.get<Image>(`${this.urlIngredient}/findimg/${ingredientId}`);
  }

  // GET : /ingredient/findall
  findAll(): Observable<Ingredient[]> {
    return this.httpClient.get<Ingredient[]>(`${this.urlIngredient}/findall`);
  }

  // GET : /ingredient/find/{ingredientId}
  find(ingredientId: number): Observable<Ingredient> {
    return this.httpClient.get<Ingredient>(`${this.urlIngredient}/find/${ingredientId}`);
  }

  // DELETE : /ingredient/delete/{ingredientId}
  delete(ingredientId: number): Observable<Ingredient> {
    return this.httpClient.delete<Ingredient>(`${this.urlIngredient}/delete/${ingredientId}`, this.httpOptions);
  }
}
