import { Component, OnInit, Input } from '@angular/core';
import { faClose, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss', '../forms.scss']
})
export class CourseComponent implements OnInit {

  faClose: IconDefinition = faClose;

  courseForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  buildForm(): void {
    this.courseForm = this.fb.group({
      courseTitle: ['gge', Validators.required],
      courseDescription: ['', Validators.required],
      courseCreationDate: [new Date(), Validators.required],
      courseDuration: ['', [Validators.required, Validators.minLength(0)]],
      courseAuthors: ['', Validators.required],

      newAuthor: this.fb.group({
        authorName: ['', Validators.pattern('[^A-Za-z0-9]+')]
      })
  })
  }

  get f() { return this.courseForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.courseForm.invalid) {
      console.log("courseForm.invalid");
      console.log(this.courseForm.controls);
        return;
    }

    console.log('Form data:' + JSON.stringify(this.courseForm.value))
  }

  // courseTitle = new FormControl('Title R');
  // courseDescription = new FormControl('');
  // courseCreationDate = new FormControl('');
  // courseDuration = new FormControl('');
  // courseAuthors = new FormControl('');


  ngOnInit(): void {
  }

}
