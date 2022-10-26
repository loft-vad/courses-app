import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/shared/models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  course: ICourse

  constructor() {
    this.course =
      {
        title: "Course",
        description: "Desc",
        creationDate: new Date(),
        duration: 123,
        authors: [
          "John", "Rohn"
        ]
      }
    }


  ngOnInit(): void {
  }

}
