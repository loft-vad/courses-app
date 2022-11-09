import { Component, OnInit } from '@angular/core';
import { Registration } from '../registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss', '../forms.scss']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  model = new Registration('', '', '');

  ngOnInit(): void {
  }

  onSubmit(registrationItem: any) {
    console.log(registrationItem);
  }

}
