import { NgToastService } from 'ng-angular-popup';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-client-signup',
  templateUrl: './client-signup.component.html',
  styleUrls: ['./client-signup.component.css']
})
export class ClientSignupComponent implements OnInit {

  formSignup:FormGroup

  constructor(
    private authService: AuthService,
    private router: Router,
    private toast: NgToastService
  ) {
    this.formSignup= new FormGroup({
      name:new FormControl('', [
        Validators.required
      ]),
      email:new FormControl('', [
        Validators.required
      ]),
      password:new FormControl('', [
        Validators.required
      ]),
    })
   }

  ngOnInit(): void {
  }


  onSubmit(){
    this.authService.signUp(this.formSignup.value).subscribe(data=>{
      this.toast.success({detail:'Đăng kí thành công'})
      setTimeout(() => {
        this.router.navigateByUrl('/signin')
      }, 2000);
    }, ()=>{
      this.toast.error({detail:'Đăng kí thất bại'})
    })
  }
}
