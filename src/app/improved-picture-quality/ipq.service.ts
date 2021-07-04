import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IpqService {

  hostIp = "http://127.0.0.1:5000"
  constructor(private http: HttpClient) {}

  getImprovedImage(PicName: string){
    const obj = {'pic':PicName}
    return this.http.post(`${this.hostIp}/api/cartoonFilter`, obj,  { responseType: 'text' }) 
  }
}
