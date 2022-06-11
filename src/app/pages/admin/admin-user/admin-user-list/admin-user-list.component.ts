import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth.service';
import { Users } from './../../../../types/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {

  users: Users[]
  constructor(
    private userService: AuthService,
    private toast: NgToastService
  ) {
    this.users=[]
   }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data=>{
      this.users=data
    })
  }


  onStatus(id:any){
    this.users.map(item=>{
      if (item._id==id) {
        item.status = !item.status
        this.userService.updateStatus(id,{status:item.status}).subscribe(()=>{
          this.toast.success({detail:`Đã đổi trạng thái thành ${item.status==true?"Active":"Disable"}`})
        })
      }
    })
  }
}
