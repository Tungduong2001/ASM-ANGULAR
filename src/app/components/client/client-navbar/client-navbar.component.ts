import { ProductService } from './../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { categoryType } from 'src/app/types/Category';

@Component({
  selector: 'app-client-navbar',
  templateUrl: './client-navbar.component.html',
  styleUrls: ['./client-navbar.component.css']
})
export class ClientNavbarComponent implements OnInit {
  idcate:string
  category: categoryType[]
  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private activeRouter: ActivatedRoute,
  ) {
    this.category=[]
    this.idcate=''
   }

  ngOnInit(): void {
    this.getCategory()
  }
  getCategory(){
    this.categoryService.getCategories().subscribe(data=>{
      this.category= data.filter(item=>item.status==true)
    })
  }
  
}
