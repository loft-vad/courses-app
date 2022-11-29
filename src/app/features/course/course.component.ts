import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICourse } from 'src/app/shared/models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  authors: string | undefined;

  constructor() {
    this.course =
      {
        title: "Course",
        description: "Desc",
        creationDate: "13/11/2020",
        duration: 123,
        authors: [
          "John", "Rohn"
        ]
      }
  }
  @Input() course: ICourse

  @Output() showCourseClick = new EventEmitter();

  ngOnInit(): void {

    this.authors = this.course!.authors.join(', ');
  }

  openModal(event: Event) {
    console.log("click event: ", event)
    this.showCourseClick.emit(event);
  }

}
