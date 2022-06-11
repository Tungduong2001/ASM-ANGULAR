import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DecentralizationGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     if(this.getLocalstorage()){
      if (this.getLocalstorage().user.role == 1) {
        return true
      }
      alert('Bạn kh có quyền truy cập')
      setTimeout(() => {
        this.router.navigateByUrl('/')
      }, 500);
      return false
      }
      alert('Bạn kh có quyền truy cập')
      setTimeout(() => {
      this.router.navigateByUrl('/')
      }, 500);
    
    return false
    }
    getLocalstorage(){
      if (!localStorage.getItem('user')) return
      else return JSON.parse(localStorage.getItem('user') as string)
    }
  }
  
