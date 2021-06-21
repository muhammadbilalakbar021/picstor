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

  AddUser(name:String, email:String, password:String){
    const obj = {name, email, password}
    console.log(obj)
    this.http.post(`${this.url}/api/users/addUser`, obj, {responseType: 'json'})
    .subscribe(res =>{
      console.log(res)
    })
    
  }

  
}
