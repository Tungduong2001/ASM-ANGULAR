import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../../services/product.service';
import { Product } from './../../../types/Product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  products:Product[]=[]
  key:string=''

  constructor(
    private productService:ProductService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.key= this.activeRoute.snapshot.queryParams['q']
    
    this.productService.search(this.key).subscribe(data=>{
      this.products=data.filter(item=>item.status == true)
    })
  }
}
