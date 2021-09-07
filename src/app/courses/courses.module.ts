import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '../auth/auth.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { ManageComponent } from './manage/manage.component';


@NgModule({
  declarations: [
    CoursesComponent,
    ManageComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AuthModule
  ]
})
export class CoursesModule { }
