import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-page-client-home',
  templateUrl: './page-client-home.component.html',
  styleUrls: ['./page-client-home.component.css']
})
export class PageClientHomeComponent implements OnInit {
  products:Product[];

  constructor(private productService: ProductService) {
    this.products = []
   }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data=>{
      this.products = data.filter(item=>item.status==true)
    })
  }
}
