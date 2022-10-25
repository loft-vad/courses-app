import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../features/login/login.component';
import { CourseComponent } from '../features/course/course.component';
import { CoursesComponent } from '../features/courses/courses.component';
import { RegistrationComponent } from '../features/registration/registration.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { InfoComponent } from './components/info/info.component';
import { ModalComponent } from './components/modal/modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const COMPONENTS = [ButtonComponent, HeaderComponent, InfoComponent, ModalComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: COMPONENTS
})
export class SharedModule { }
