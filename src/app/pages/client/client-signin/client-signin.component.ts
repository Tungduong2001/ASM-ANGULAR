import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-client-signin',
  templateUrl: './client-signin.component.html',
  styleUrls: ['./client-signin.component.css']
})
export class ClientSigninComponent implements OnInit {

  formSignin:FormGroup

  constructor(
    private authService:AuthService,
    private router:Router,
    private toast: NgToastService
    ) {
    this.formSignin=new FormGroup({
      email:new FormControl('',[
        Validators.required,
      ]),
      password:new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ])
    })
   }

  ngOnInit(): void {
  }


  onSubmit(){
    this.authService.signIn(this.formSignin.value).subscribe(data=>{
      localStorage.setItem('user', JSON.stringify(data))
      
      if(this.getLocalstorage().user.status==true){
        if (this.getLocalstorage().user.role == 1) {
          this.toast.success({detail:"SUCCESS", summary:'Đăng nhập thành công'})
          setTimeout(() => {
            this.router.navigateByUrl('/admin')
          }, 3000);
        }else{
          this.toast.success({detail:'Đăng nhập thành công'})
          setTimeout(() => {
            this.router.navigateByUrl('/')
          }, 3000);
        }
      }else{
        localStorage.removeItem('user')
        this.toast.warning({detail:"Tài khoản đã bị ban 10 năm"})
      }
    },()=>{
      this.toast.error({detail:'Đăng nhập thất bại'})
    })
  }

  getLocalstorage(){
    if (!localStorage.getItem('user')) return
    else return JSON.parse(localStorage.getItem('user') as string)
  }
}
