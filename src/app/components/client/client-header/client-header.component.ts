import { Users } from './../../../types/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.css']
})
export class ClientHeaderComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
  }

  getLocalstorage(){
    if (!localStorage.getItem('user')) return
    else return JSON.parse(localStorage.getItem('user') as string)
  }
  onLogout(){
    localStorage.removeItem('user')
  }
}
