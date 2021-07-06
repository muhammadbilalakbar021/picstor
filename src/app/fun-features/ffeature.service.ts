import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FfeatureService {

  hostIp = "http://127.0.0.1:5000"
  constructor(private http: HttpClient) {}

  getDogFilter(PicName: string){
    const obj = {'pic':PicName}
    return this.http.post(`${this.hostIp}/api/dogFilter`, obj,  { responseType: 'text' }) 
  }

  getHatGlass(PicName: string){
    const obj = {'pic':PicName}
    return this.http.post(`${this.hostIp}/api/hatGlassesFilter`, obj,  { responseType: 'text' }) 
  }
}

