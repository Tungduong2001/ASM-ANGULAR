import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { categoryType } from '../types/Category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http:HttpClient
  ) {}
  getCategories():Observable<categoryType[]>{
    return this.http.get<categoryType[]>(environment.category)
  }
}
