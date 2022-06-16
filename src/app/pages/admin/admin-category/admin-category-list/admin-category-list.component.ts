import { NgToastService } from 'ng-angular-popup';
import { CategoryService } from 'src/app/services/category.service';
import { categoryType } from 'src/app/types/Category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css']
})
export class AdminCategoryListComponent implements OnInit {
 
  category: categoryType[]
  constructor(
    private categoryService:CategoryService,
    private toast:NgToastService

  ) {
    this.category=[]
   }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data=>{
      this.category=data
    })
  }

  onStatus(id:string){
    this.category.map(item=>{
      if (item._id==id) {
        item.status = !item.status
        this.categoryService.updateCategory(id,{status:item.status}).subscribe(()=>{
          this.toast.success({detail:`Đã đổi trạng thái thành ${item.status==true?"Active":"Disable"}`})
        })
      }
    })
  }
  onGetCategory(){
    this.categoryService.getCategories().subscribe((data)=>{
      this.category = data
    })
  }
  onRemove(id:string){
    const confirmRemove = confirm("Bạn có muốn xóa không?")
    if (confirmRemove) {
      this.categoryService.removeCate(id).subscribe(()=>{
        this.toast.success({detail:`Xóa thành công `})
        this.onGetCategory()
      })
    }
  }
}


