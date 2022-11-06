import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() {
  }

  @Input() buttonText = "";

  @Input() iconPrefix: IconPrefix = "far";
  @Input() iconName!: IconName;

  ngOnInit(): void {

  }

  onClick(event: Event) {
  }

}
