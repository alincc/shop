import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-round-button',
  template: `
    <span>
      <ng-content></ng-content>
    </span>
  `,
  styles: [`
    :host {
      width: 60px;
      height: 60px;
      border: 3px solid #23b7e5;
      border-radius: 50%;
      text-align: center;
      display: inline-block;
      margin: 10px;
      font-size: 0.8em;
    }

    :host(.selected) {
      background: #23b7e5;
      color: #fff;
    }

    :host(.inactive) {
      opacity: 0.5;
    }

    span {
      line-height: 60px;
    }
  `],
})
export class RoundButtonComponent implements OnInit {
  constructor() {  }

  ngOnInit() {}
}
