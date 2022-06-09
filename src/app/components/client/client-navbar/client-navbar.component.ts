import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { categoryType } from 'src/app/types/Category';

@Component({
  selector: 'app-client-navbar',
  templateUrl: './client-navbar.component.html',
  styleUrls: ['./client-navbar.component.css']
})
export class ClientNavbarComponent implements OnInit {

  category: categoryType[]
  constructor(
    private categoryService: CategoryService
  ) {
    this.category=[]
   }

  ngOnInit(): void {
    this.getCategory()
  }
  getCategory(){
    this.categoryService.getCategories().subscribe(data=>{
      this.category= data
      console.log(this.category);
      
    })
  }
}
