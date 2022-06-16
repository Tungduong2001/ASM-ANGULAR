import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  createOrders(data:any):Observable<any>{
    return this.http.post(environment.orders, data)
  }
  
  createOrderDetail(data:any):Observable<any>{
    return this.http.post(environment.ordersDetail, data)
  }
}
