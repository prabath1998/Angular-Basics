import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() routeChange: EventEmitter<any> = new EventEmitter();
  routePath: string = ' ';
  constructor() {}

  ngOnInit(): void {}

  changeRoute(path: string) {
    this.routeChange.emit(path);
  }
}
