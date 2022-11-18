import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor() {
  }

  @Input() title = "";
  @Input() text = "";

  ngOnInit(): void {
  }

  onClick(event: Event) {
  }

}
