import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  errorEmail: boolean
  loggedIn: boolean = true

  ngOnInit(): void {

  }
  async chechkLogin(email: String, password: String){
    console.log(email, password)
  }
}
