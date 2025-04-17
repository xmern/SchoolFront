import { Component, OnInit } from '@angular/core';
import { ClassesRouteStatus } from '../../interfaces/routeStatus';
import { ClassesDto } from '../../../interfaces/Classes/ClassDtos';
import { paths } from '../../interfaces/serverRoutes';
import { HttpGatewayServiceService } from '../../../Http/http-gateway-service.service';

@Component({
  selector: 'app-classes-dashboard',
  templateUrl: './classes-dashboard.component.html',
  styleUrl: './classes-dashboard.component.css'
})
export class ClassesDashboardComponent implements OnInit{
  routeStatus:ClassesRouteStatus
  data:any;
  allClasses:ClassesDto[]
  
  constructor( private httpGate :HttpGatewayServiceService){
    this.routeStatus = {allClasses:true}
    this.allClasses = []
  }
  ngOnInit(): void {
        this.loadClasses()
  }
  loadClasses(){
    this.httpGate.get<ClassesDto[]>(paths.getAllClasses).subscribe({
      next:(response) =>{
        this.allClasses = response
        console.log(this.allClasses)
      },
      error:(error)=>{
        console.log(error.error)
      }
    })

  }

}
