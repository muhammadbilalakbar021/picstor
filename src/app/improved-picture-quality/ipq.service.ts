import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IpqService {

  hostIp = "http://127.0.0.1:5000"
  constructor(private http: HttpClient) {}

  chechkHello(){
    const obj = {'pic':'img.jpg'}
    return this.http.post(`${this.hostIp}/api/dogFilter`, obj,  { responseType: 'text' }) 
  }
}
