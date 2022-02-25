import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges {
  @Input() textFromParent!: string;
  count: number = 0;
  interval: any;

  constructor() {
    console.warn('child constructor called');
  }

  ngOnInit(): void {
    console.warn('child ngOnInIt called');

    this.interval = setInterval(() => {
      console.error(this.count++);
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    console.warn('child ngOnDestroy called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

    console.warn('child ngOnChange called');
  }
}
