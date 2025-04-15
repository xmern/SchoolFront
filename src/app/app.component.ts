import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './Auth/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'beta1';
  isLoggedIn = false
  constructor(private router:Router,private authService: AuthServiceService){}
  ngOnInit(): void {
    this.router.navigate(["login"])
    this.authService.authStatus.subscribe((status: boolean) => {
      this.isLoggedIn = status;
      console.log('Auth status changed:', status);
      this.updateLogin(status);
    });
  }
  updateLogin(isLoggedIn:boolean){
    if (isLoggedIn) {
      let user = this.authService.getUser()
      if (user.role == "Student"){
        this.router.navigate(["student-dashboard/dashboard"])
      }else if( user.role == "Administrator"){
        this.router.navigate(["admin-dashboard/"])
      }
      
    } else {
      this.router.navigate(["login"])
    }
  }
}
