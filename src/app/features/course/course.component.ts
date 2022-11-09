import { Component, OnInit, Input } from '@angular/core';
import { ICourse } from 'src/app/shared/models/course';
import { faClose, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  faClose: IconDefinition = faClose;

  constructor() {
  }

  ngOnInit(): void {
  }

}
