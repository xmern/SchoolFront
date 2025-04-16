import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteStatus } from './interfaces/routeStatus';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit {
  routeStatus:RouteStatus;
  constructor( private router:Router,private route: ActivatedRoute){
    this.routeStatus = {dashboard:false,classes:false, classrooms:false, teachers:false, subjects:false, students:false}
  }
  ngOnInit(): void {
    this.router.navigate(["dashboard"], { relativeTo: this.route })
    this.setRouteStatus("dashboard")
    //console.log(this.route.url)
  }
  setRouteStatus(route:string){
    if (route == "dashboard"){
      this.routeStatus = {dashboard:true,classes:false, classrooms:false, teachers:false, subjects:false, students:false}
     
    }else if(route=="classes"){
      this.routeStatus = {dashboard:false,classes:true, classrooms:false, teachers:false, subjects:false, students:false}

    }
    else if(route=="classrooms"){
      this.routeStatus = {dashboard:false,classes:false, classrooms:false, teachers:false, subjects:false, students:false}
    }else if(route=="teachers"){
      this.routeStatus = {dashboard:false,classes:false, classrooms:false, teachers:true, subjects:false, students:false}
    }else if(route=="subjects"){
      this.routeStatus = {dashboard:false,classes:false, classrooms:false, teachers:false, subjects:true, students:false}
    }else if(route=="students"){
      this.routeStatus = {dashboard:false,classes:false, classrooms:false, teachers:false, subjects:false, students:true}

    }
  }
  loadDashboard(){
    this.router.navigate(["dashboard"], { relativeTo: this.route })
    this.setRouteStatus("dashboard")
  }
  loadClassDashboard(){
    this.router.navigate(["classes"], { relativeTo: this.route })
    this.setRouteStatus("classes")
  }

}
