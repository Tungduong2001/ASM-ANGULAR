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
  createCate(data:categoryType):Observable<categoryType>{
    return this.http.post<categoryType>(`${environment.category}`,data)
  }
  removeCate(id:string):Observable<any>{
    return this.http.delete(`${environment.category}/${id}`)
  }
  updateCategory(id:string,data:categoryType):Observable<categoryType>{
    return this.http.patch<categoryType>(`${environment.category}/${id}`,data)
  }
}
