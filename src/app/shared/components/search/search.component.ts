import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  searchText: string = "";

  @Input() searchPlaceholder: string = "";

  @Output() searchButtonEmitter: EventEmitter<string> = new EventEmitter();

  searchSubmit() {
    this.searchButtonEmitter.next(this.searchText);
  }

  ngOnInit(): void {
  }

}
