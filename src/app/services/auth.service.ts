import { TypeLoginResponse } from './../types/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../types/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { 

  }
  signIn(data:Users):Observable<TypeLoginResponse>{
    return this.http.post<TypeLoginResponse>(`${environment.signin}`, data)
  }

  signUp(data:Users):Observable<Users>{
    return this.http.post<Users>(`${environment.signup}`, data)
  }

  getUser():Observable<Users[]>{
    return this.http.get<Users[]>(environment.users)
  }
  updateStatus(id:string,data:any):Observable<any>{
    return this.http.patch(`${environment.users}/${id}`,data)
  }
}
