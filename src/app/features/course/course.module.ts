import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { ICourse } from 'src/app/shared/models/course';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CourseComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CourseComponent
  ]
})
export class CourseModule {

  @Input() course!: ICourse;

}
