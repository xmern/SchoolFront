import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private user:User = {    
    email:"",
    role:"",
    jwt:""
  };

  private _authStatus = new Subject<boolean>()
  public authStatus = this._authStatus.asObservable()
  constructor() { }
  
  login(userData:User){
    this.user = userData
    this._authStatus.next(true);
  }
  logout() {
    this.user = {
      email: '',
      role: '',
      jwt: '',
    };
    this._authStatus.next(false); 
  }

  isAuthenticated(): boolean {
    return !!this.user.jwt;
  }

  getUser(): User {
    return this.user;
  }
}
