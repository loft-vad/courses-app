import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  faClose = faClose;

  constructor() {

  }

  ngOnInit(): void {
  }

  @Input() title: string = "Modal Title";
  @Input() message: string = "";
  @Input() okButtonText: string = "Ok";
  @Input() cancelButtonText: string = "Cancel";

  @Input() showModal: boolean = false;

  @Output() showModalChange = new EventEmitter<boolean>();

  ok() {
    console.log('OK');
    this.showModal = !this.showModal;
    this.showModalChange.emit(this.showModal);
  }

  closeModal() {
    this.showModal = !this.showModal;
    this.showModalChange.emit(this.showModal);
  }

  //Add simple mechanism of hiding/showing modal with help of the <app-button> component and *ngIf directive.
}
