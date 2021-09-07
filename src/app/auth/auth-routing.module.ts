import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../auth/auth.guard';
import { CoursesComponent } from '../courses/courses/courses.component';
import { ManageComponent } from '../courses/manage/manage.component';

const routes: Routes = [{
  path: 'courses', 
  component:CoursesComponent,
  //canActivate:[AuthGuard],
  children:[{
    path:'',
    canActivateChild: [AuthGuard],
    children:[
    {path:'manage', component:ManageComponent},
    ]}]
    }];
    
  
const authRoutes: Routes = [{ path: 'login', component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
