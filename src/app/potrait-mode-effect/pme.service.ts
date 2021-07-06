import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PmeService {

  hostIp = "http://127.0.0.1:5000"
  constructor(private http: HttpClient) {}

  getPotraiedEffectImage(PicName: string){
    const obj = {'pic':PicName}
    return this.http.post(`${this.hostIp}/api/PortraitModeEffect`, obj,  { responseType: 'text' }) 
  }
}
