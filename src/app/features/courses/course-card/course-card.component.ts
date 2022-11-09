import { formatDate } from '@angular/common';
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

  autrhorsToShow: string = '';
  creationDateString: string = '';
  durationHHMMString: string = '';

  constructor() {
  }

  @Input() course!: ICourse;

  @Input() isEditable: boolean = false; // !:

  ngOnInit(): void {
    this.title = this.course.title;
    this.description = this.course.description;
    this.creationDate = new Date(this.course.creationDate);
    this.duration = this.course.duration;
    this.durationHHMMString = this.convertToHHMM(this.duration);

    this.creationDateString = formatDate(new Date(this.creationDate), 'dd.MM.yyyy', 'en');
    this.autrhorsToShow = this.course!.authors.join(', ');
  }

  convertToHHMM (timeInMin: number) {
    let hours = Math.floor(timeInMin / 60);
    let minutes = timeInMin % 60;
    let hoursString = hours < 10 ? "0" + hours : hours;
    let minutesString = minutes < 10 ? "0" + minutes : minutes;
    return hoursString + ':' + minutesString;
  }

}
