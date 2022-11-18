import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './features/course/course.component';
import { CoursesComponent } from './features/courses/courses.component';
import { LoginComponent } from './features/login/login.component';
import { RegistrationComponent } from './features/registration/registration.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }, // { path: 'login', loadChildren: () => import('./features/login/login.component').then(m => m.Login) },
  { path: 'registration', component: RegistrationComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'courses/add', component: CourseComponent },
  { path: 'courses/:id', component: CourseComponent },
  { path: 'courses/edit/:id', component: CourseComponent },
  { path: '',   redirectTo: '/courses', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
