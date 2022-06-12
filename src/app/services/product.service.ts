import { Product, ProductCreate } from './../types/Product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(environment.products)
  }

  getProduct(id:string):Observable<Product>{
    return this.http.get<Product>(`${environment.products}/${id}`);
  }

  deleteProduct(id:string|number):Observable<any>{
    return this.http.delete(`${environment.products}/${id}`)
  }

  createProduct(data:ProductCreate):Observable<Product>{
    return this.http.post<Product>(`${environment.products}`, data)
  }

  updateProduct(id:string, data:ProductCreate):Observable<Product>{
    return this.http.patch<Product>(`${environment.products}/${id}`, data)
  }

  getProductCategory(id:string):Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.category}/${id}`)
  }

  updateStatus(id:string,data:any):Observable<any>{
    return this.http.patch(`${environment.products}/${id}`,data)
  }

  search(key:string):Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.search}?q=${key}`)
  }
}
