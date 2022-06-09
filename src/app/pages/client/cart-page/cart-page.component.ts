import { NgToastService } from 'ng-angular-popup';
import { ProductCart } from './../../../types/Product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cart:ProductCart[]
  constructor(
    private toast: NgToastService
  ) {
    this.cart=[]
   }

  ngOnInit(): void {
    if(localStorage.getItem('cart')){
      this.cart = JSON.parse(localStorage.getItem('cart') || '[]')
    }
  }


  onRemoveCart(id:string){
    const confirm= window.confirm("Bạn có muốn xóa không?")
    if(confirm){
      this.toast.success({detail:'Xóa thành công'})
      this.cart= this.cart.filter(item=>item._id!==id)
    }
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }
}
