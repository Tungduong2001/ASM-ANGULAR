import { NgToastService } from 'ng-angular-popup';
import { Product } from 'src/app/types/Product';
import { LocalStogareService } from './../../../services/local-stogare.service';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-client-detail',
  templateUrl: './page-client-detail.component.html',
  styleUrls: ['./page-client-detail.component.css']
})
export class PageClientDetailComponent implements OnInit {
  
  id: string
  product: Product
  cartValue:number
  constructor(
    private activateRoute: ActivatedRoute, 
    private productService: ProductService,
    private lsService: LocalStogareService,
    private toast: NgToastService
   ) { 
    this.id = '';
    this.product = {
      _id: '',
      name:'',
      price:0,
      category:'',
      cost:0,
      status:'',
      desc: ''
    }

    this.cartValue = 1
   }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id']
    
    this.productService.getProduct(this.id).subscribe((data)=>{
      this.product = data
    })
  }

  onChangeCartValue(event:any){
    this.cartValue = event.target.value
  }

  onAddToCart(){

    this.toast.success({detail:`Thêm ${this.product.name} thành công`})
    const addItem={
      ...this.product,
      value:+this.cartValue
    }

    this.lsService.setItem(addItem);
    this.cartValue = 1;
  }
}
