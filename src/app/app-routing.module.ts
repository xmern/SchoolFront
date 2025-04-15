import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"student-dashboard",loadChildren:() => import('./student-dashboard/student-dashboard.module').then(m=>m.StudentDashboardModule) },
  { path: 'teacher-dashboard', loadChildren: () => import('./teacher-dashboard/teacher-dashboard.module').then(m => m.TeacherDashboardModule) },
  { path: 'admin-dashboard', loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule) },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
