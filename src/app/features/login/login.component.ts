import { Component, OnInit } from '@angular/core';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../forms.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  model = new Login('', '');

  onSubmit(loginItem: any) {
    console.log(loginItem);
  }

  ngOnInit(): void {
  }

}
