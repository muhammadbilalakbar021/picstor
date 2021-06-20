import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http: HttpClient) {}
  url = "http://localhost:3000"

  chechkLogin(email: String, password: String){
    const obj = {email, password}
    this.http.post(`${this.url}/api/users/getUser`, obj, { responseType: 'json' })
    .subscribe(res => 
      console.log(res)) 
  }

  AddUser(Name:String, Email:String, Password:String){
    const obj = {Name, Email, Password}
    // this.http.post(`${this.url}/addUser`, obj)    
    console.log(Name, Email, Password)
  }

  
}
