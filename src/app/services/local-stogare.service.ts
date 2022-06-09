import { ProductCart } from './../types/Product';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStogareService {

  constructor() { }

  private stogareSubject = new Subject<string>();
  
  watchStogare():Observable<any>{
    return this.stogareSubject.asObservable(); 
  }

  getItem(){
    return JSON.parse(localStorage.getItem('cart') || '[]')
  }

  setItem(addItem:ProductCart){
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    
    const existItem = cartItems.find((item: ProductCart) =>
      item._id === addItem._id
    );
    if (!existItem) {
      cartItems.push(addItem);
    } else {
      existItem.value += addItem.value;
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));

    this.stogareSubject.next('');
  }
}
