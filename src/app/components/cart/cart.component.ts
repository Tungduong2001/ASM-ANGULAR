import { LocalStogareService } from '../../services/local-stogare.service';
import { ProductCart } from '../../types/Product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item-quantity',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartQuantityComponent implements OnInit {

  cartItems: ProductCart[];
  cartItemValues: number=0;

  constructor(private lsService: LocalStogareService) { 
    this.cartItems= [];

  }

  ngOnInit(): void {
    this.onSetCart();

    this.lsService.watchStogare().subscribe(data => {
      this.onSetCart();
    })
  }


  onSetCart(){
    this.cartItems=this.lsService.getItem();
    this.cartItemValues= this.cartItems.reduce((a, b)=> a + b.value, 0)
  }
}
