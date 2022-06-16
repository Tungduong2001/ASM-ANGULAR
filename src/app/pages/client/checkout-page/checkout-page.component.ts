import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { OrderService } from './../../../services/order.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LocalStogareService } from 'src/app/services/local-stogare.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  formOrder: FormGroup;

  cart:any
  id_order:string=''

  money:number=0
  constructor( 
    private cartService : LocalStogareService,
    private orderService: OrderService,
    private toast: NgToastService,
    private router: Router
    ) { 
    this.formOrder = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required
      ]),
      phone: new FormControl('', [
        Validators.required
      ]),
      address: new FormControl('', [
        Validators.required
      ])
    })
  }

  ngOnInit(): void {
    this.cart = this.cartService.getItem()
    this.cart.map((item:any)=>{
      this.money += item.value*item.price
    })
  }

  onSubmit(){
    this.orderService.createOrders({...this.formOrder.value,money:this.money}).subscribe(data=>{
      this.id_order=data._id
      this.cart.map((item:any)=>{
        item={...item,id_order:this.id_order}
        const ordersDetail = {
          idOrder:item.id_order,
          name:item.name,
          price:item.price,
          img:item.image,
          quantity:item.value,
          desc:item.desc
        }
        this.orderService.createOrderDetail(ordersDetail).subscribe(data=>{
          this.toast.success({detail:'Đặt hàng thành công'})
          localStorage.removeItem('cart')
          this.router.navigateByUrl('/orders-success')
        })
      })
    })

  }
}
