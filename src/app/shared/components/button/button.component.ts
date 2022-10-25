import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {


  @Input() buttonText = "Open Modal";
  @Input() iconName = ""; //<i class="fa-duotone fa-window"></i>

  ngOnInit(): void {
  }

  onClick(event: Event) {
  }

}
