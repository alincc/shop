import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-select',
  template: `
    <div>

      <ng-content *ngIf="!options.length" select=".empty"></ng-content>

      <button class="button" type="button" *ngFor="let option of options" (click)="select.emit(option)">{{ option[label] }}</button>

    </div>
  `,
})
export class ButtonSelectComponent implements OnInit {
  @Input() options: any[];
  @Input() label: string = 'label';
  @Output() select = new EventEmitter<any>();

  constructor() {  }

  ngOnInit() {}
}
