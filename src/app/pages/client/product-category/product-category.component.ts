import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  productCategory:any
  cateid : string
  constructor(
    private productService:ProductService,
    private activateRoute:ActivatedRoute
  ) { 
    this.cateid=''
  }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(){
    this.activateRoute.paramMap.subscribe(params=>{
      this.cateid = params.get('id') as string
      if(this.cateid){
        this.productService.getProductCategory(this.cateid).subscribe(data=>{
          this.productCategory= data
      })
    }
  })
}
}