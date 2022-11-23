import { Component } from '@angular/core';

@Component({
  selector: 'app-number-counter',
  templateUrl: './number-counter.component.html',
  styleUrls: ['./number-counter.component.scss']
})
export class NumberCounterComponent {

  number = 0

  numberChange(type: boolean) {
    type ? this.number++ : this.number--
  }
}
