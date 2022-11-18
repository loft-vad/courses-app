
import { Component, OnInit, Input } from '@angular/core';
import { ICourse } from 'src/app/shared/models/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  title: string = '';
  description: string = '';
  creationDate: Date = new Date();
  duration: number = 0;
  authors: string[] = [];

  constructor() {
  }

  @Input() course!: ICourse;

  @Input() isEditable: boolean = false; // !:

  ngOnInit(): void {
    this.title = this.course.title;
    this.description = this.course.description;
    this.creationDate = new Date(this.course.creationDate);
    this.duration = this.course.duration;
    this.authors = this.course.authors;
  }

}
