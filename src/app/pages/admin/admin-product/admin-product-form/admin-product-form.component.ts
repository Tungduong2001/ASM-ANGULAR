import { ProductService } from './../../../../services/product.service';
import { CategoryService } from 'src/app/services/category.service';
import { categoryType } from 'src/app/types/Category';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm: FormGroup;
  productId: string;
  category: categoryType[]
  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toast: NgToastService,
    private categoryService: CategoryService
  ) {
    this.productForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32),
        // this.onValidateNameHasProduct
      ]),
      image: new FormControl('', [
        Validators.required,
      ]),
      price: new FormControl('', [
        Validators.required,
      ]),
      discount: new FormControl('', [
        Validators.required,
      ]),
      category: new FormControl('',[
        Validators.required
      ]),
      desc: new FormControl('', [
      ]),
      
    })
    this.productId = ''
    this.category=[]
   }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data=>{
      this.category= data
    })

    this.productId = this.activatedRoute.snapshot.params['id']
    if(this.productId){
      this.productService.getProduct(this.productId).subscribe(data=>{
        this.productForm.patchValue({
          name:data.name,
          image:data.image,
          price:data.price,
          category:data.category,
          discount:data.discount,
          desc:data.desc
        })
      })
    }
  }
  
  // onValidateNameHasProduct(control: AbstractControl): ValidationErrors | null{
  //   const {value} = control

  //   if(!value.includes('product')){
  //     return {hasProductError: true};
  //   }
  //   return null
  // }

  onSubmit(){
    const submitData = this.productForm.value

    if(this.productId !=='' || this.productId !== undefined ){
      return this.productService.updateProduct(this.productId, submitData).subscribe((data)=>{
        this.toast.success({detail:'Update thành công'})
        this.router.navigateByUrl('/admin/products')
      }, err=>{console.log(err);
      })
    }

    return this.productService.createProduct(submitData).subscribe((data)=>{
      this.toast.success({detail:'Thêm sản phẩm thành công'})
      this.router.navigateByUrl('/admin/products')
    })
  }
}

