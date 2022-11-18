import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CoursesService } from 'src/app/services/courses.service';

import { ICourse } from 'src/app/shared/models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  course$!: Observable<ICourse>;
  title = ''
  courses: ICourse[] = [];

  areCoursesEditable: boolean = false;
  isModalShown: boolean = false;

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.getCourses()
  }

  getCourses() {
    this.coursesService.getAll()
      .subscribe(courses => {
        this.courses = courses
      }),
      (err: HttpErrorResponse) => console.log(`Got error: ${err}`);
  }

  showModal() {
    console.log("show modal");
    this.isModalShown = true;
  }

  modalClosed(wasClosedOrCanceled: boolean) {
    console.log('modal closed with result: ', wasClosedOrCanceled);
    this.isModalShown = false;
  }

  searchSubmit(searchText: string) {
    this.coursesService.getFilter(searchText)
      .subscribe(courses => {
        this.courses = courses
        console.log('courses ', courses);
      }),
      (err: HttpErrorResponse) => console.log(`Got error: ${err}`);
  }

  showCourse() {
    console.log("show course");
  }

  editCourse() {
    console.log("edit course");
  }

  deleteCourse() {
    console.log("delete course");
  }

}
