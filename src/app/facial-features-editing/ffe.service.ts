import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FfeService {

  hostIp = "http://127.0.0.1:5000"
  constructor(private http: HttpClient) {}

  getFacialFeatureEdiedImage(PicName: string){
    const obj = {'pic':PicName}
    return this.http.post(`${this.hostIp}/api/PortraitModeEffect`, obj,  { responseType: 'text' }) 
  }
}
