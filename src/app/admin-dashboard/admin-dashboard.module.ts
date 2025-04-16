import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { AdminDashboardDisplayComponent } from './components/admin-dashboard-display/admin-dashboard-display.component';
import { ClassesDashboardComponent } from './components/classes-dashboard/classes-dashboard.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminDashboardDisplayComponent,
    ClassesDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule
  ]
})
export class AdminDashboardModule { }
