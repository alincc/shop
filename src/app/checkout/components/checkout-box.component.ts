import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkout-box',
  template: `
    <div class="box">
      <div class="title" [ngClass]="{'small': disableTitle}">

        <ng-content select=".box-title"></ng-content>

      </div>
      <div class="content">

        <ng-content select=".box-body"></ng-content>

      </div>
    </div>
  `,
})
export class CheckoutBoxComponent implements OnInit {
  @Input() disableTitle: boolean = false;

  constructor() {  }

  ngOnInit() {}
}
