import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpGatewayServiceService {
  private domain : string | undefined
  constructor(private httpclient : HttpClient) {
    this.domain = environment.domain;
  }
  get<T>(endpoint : string){
    return this.httpclient.get<T>(`${this.domain}${endpoint}`);
  }
  post<T>(endpoint : string, data:any){
    return this.httpclient.post<T>(`${this.domain}${endpoint}`,data);
  }

}
