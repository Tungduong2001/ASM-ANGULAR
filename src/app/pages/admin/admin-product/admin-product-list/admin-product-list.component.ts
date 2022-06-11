import { Product } from 'src/app/types/Product';
import { NgToastService } from 'ng-angular-popup';
import { ProductService } from './../../../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {
  product: Product[]
  constructor(
    private productService: ProductService,
    private toast: NgToastService
  ) { 
    this.product=[]
  }

  ngOnInit(): void {
    this.getProducts()

  }
  getProducts(){
    this.productService.getProducts().subscribe(data =>{
      this.product = data
    })
  }

  onStatus(id:string){
    this.product.map(items=>{
      if (items._id==id) {
        items.status = !items.status
        this.productService.updateStatus(id,{status:items.status}).subscribe(()=>{
          this.toast.success({detail:`Đã đổi trạng thái thành ${items.status==true?"Active":"Disable"}`})
        })
      }
    })
  }

  onDelete(id:string){
    const confirmDelete = confirm('Bạn có chắc chắn xóa không?');
    if(confirmDelete && id){
      this.productService.deleteProduct(id).subscribe((data)=>{
        this.toast.success({detail:'Xóa thành công'})
        this.getProducts()
      })
    }
  }
}
