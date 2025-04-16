import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { AdminDashboardDisplayComponent } from './components/admin-dashboard-display/admin-dashboard-display.component';
import { ClassesDashboardComponent } from './components/classes-dashboard/classes-dashboard.component';

const routes: Routes = [{ path: '', component: AdminDashboardComponent, children:[
                  {path:"dashboard", component:AdminDashboardDisplayComponent},
                  {path:"classes", component:ClassesDashboardComponent}
            ] },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
