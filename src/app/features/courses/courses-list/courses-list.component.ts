import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICourse } from 'src/app/shared/models/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  constructor() { }

  @Input() courses: ICourse[] = [];

  @Input() areEditable: boolean = false;

  /**
   * Should have one or many @Output(s) for "course action(s)". So course list
   * component should delegate any course related action to upper component.
   */

  @Output() showCourseEmitter: EventEmitter<any> = new EventEmitter();
  @Output() editCourseEmitter: EventEmitter<any> = new EventEmitter();
  @Output() deleteCourseEmitter: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }

  emitShowCourse() {
    this.showCourseEmitter.next(null);
    // or .emit??
  }

  emitEditCourse() {
    this.editCourseEmitter.next(null);
  }

  emitDeleteCourse() {
    this.deleteCourseEmitter.next(null);
  }

}
