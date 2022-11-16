import { Component, OnInit, Input } from '@angular/core';
import { faClose, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss', '../forms.scss']
})
export class CourseComponent implements OnInit {

  faClose: IconDefinition = faClose;

  courseForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.buildForm();
  }

  buildForm(): void {
    this.courseForm = this.fb.group({
      courseTitle: ['gge', Validators.required],
      courseDescription: ['', Validators.required],
      courseCreationDate: [new Date(), Validators.required],
      courseDuration: ['', [Validators.required, Validators.minLength(0)]],
      courseAuthors: ['', Validators.required],


      authors: this.fb.array([]),
    })
  }

  newAuthor = this.fb.group({
    authorName: new FormControl('', [Validators.pattern('[^A-Za-z0-9]+')]),
  })

  get authors() {
    return this.courseForm.controls["authors"] as FormArray;
  }

  addAuthors() {
    this.authors.push(this.newAuthor);
    console.log('authors: ', this.authors);
  }

  removeAuthor(authorIndex: number) {
    this.authors.removeAt(authorIndex);
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

  ngOnInit(): void {
    const courseId = this.route.snapshot.paramMap.get('id');
    const isEditable = this.route.snapshot.paramMap.get('id');
    console.log('course component courseId: ', courseId);
    // this.course$ = this.service.getCourse(courseId);
  }

}
