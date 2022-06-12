import { Router } from '@angular/router';
import { NgToastModule, NgToastService } from 'ng-angular-popup';
import { CategoryService } from './../../../../services/category.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-category-form',
  templateUrl: './admin-category-form.component.html',
  styleUrls: ['./admin-category-form.component.css']
})
export class AdminCategoryFormComponent implements OnInit {

  categoryForm: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private toast :NgToastService,
    private router: Router
  ) { 
    this.categoryForm = new FormGroup({
      name: new FormControl('',[
        Validators.required,
      ])
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
  
    this.categoryService.createCate(this.categoryForm.value).subscribe(data=>{
      this.toast.success({detail:'Thêm sản phẩm thành công'})
      // this.router.navigateByUrl('/admin/category')
    })
  }
}
