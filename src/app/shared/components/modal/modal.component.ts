import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faClose, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  faClose: IconDefinition = faClose;

  constructor() {

  }

  ngOnInit(): void {
  }

  @Input() title: string = "Modal Title";
  @Input() message: string = "";
  @Input() okButtonText: string = "Ok";
  @Input() cancelButtonText: string = "Cancel";

  @Output() modalResultEmitter: EventEmitter<boolean> = new EventEmitter();

  closeModal(result: boolean) {
    this.modalResultEmitter.next(result);
  }

  //Add simple mechanism of hiding/showing modal with help of the <app-button> component and *ngIf directive.
}
