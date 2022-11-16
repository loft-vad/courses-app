import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  @Input() searchPlaceholder: string = "";

  @Output() searchButtonEmitter: EventEmitter<string> = new EventEmitter();

  searchSubmit(value: string) {
    this.searchButtonEmitter.next(value);
  }

  ngOnInit(): void {
  }

}
