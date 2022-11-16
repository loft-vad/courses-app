import { Component, OnInit } from '@angular/core';
import { Registration } from '../registration';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/utils/email-validator.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss', '../forms.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  get f() { return this.registrationForm.controls; }

  buildForm(): void {
    this.registrationForm = this.fb.group({
      userName: ['', [Validators.required, , Validators.minLength(6)]],
      email: ['', [Validators.required, emailValidator(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registrationForm.invalid) {
      console.log("registrationForm.invalid");
      console.log(this.registrationForm.controls);
        return;
    }

    console.log('Form data:' + JSON.stringify(this.registrationForm.value))
  }
}
