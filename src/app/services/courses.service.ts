import { Injectable } from '@angular/core';
import { ICourse } from '../shared/models/course';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const url = 'http://localhost:4000';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  constructor(private http: HttpClient) { }

  getAll() {
    // return this.courses;
    return this.http.get<CoursesResponse>(`${url}/courses/all`)
      .pipe(map((response) => {
        console.log(response);
        return response.result;
      } ));
  }

  getFilter(titleText: string = "") {
    // return this.courses;
    const getOptions = {
      params: {
        title: titleText
      }
    }
    return this.http.get<CoursesResponse>(`${url}/courses/filter`, getOptions)
      .pipe(map((response) => {
        console.log(response);
        return response.result;
      } ));
  }

  createCourse(course: ICourse) {
    // this.courses.push(course);
    this.http.post(`${url}/courses/add`, course);
  }

  editCourse(course: ICourse) {
    // this.courses.push(course);
  }

  getCourse() {}

  deleteCourse(course: ICourse) {
    // const index = this.courses.indexOf(course);
    // if (index >= 0) {
    //   this.courses.splice(index, 1);
    // }
  }
}

interface CoursesResponse {
  result: ICourse[];
}
