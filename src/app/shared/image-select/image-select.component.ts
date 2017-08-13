import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-select',
  template: `
  <div *ngIf="options">

    <ng-content *ngIf="!options.length" select=".empty"></ng-content>

    <div *ngFor="let option of options" class="image"
      (click)="onSelect(option)"
      [ngClass]="{'active': selected === option}">

      <img [src]="option[label]" [alt]="option[label]">

    </div>

  </div>
  `,
  styles: [`
    .image {
      display: inline-block;
      margin: 0 10px;
      cursor: pointer;
      border: transparent 2px solid;
    }
    .image.active {
      border: #099b8d 2px solid;
    }
    .image img {
      max-width: 68px;
    }
  `],
})
export class ImageSelectComponent implements OnInit {
  @Input() options: any[];
  @Input() label: string = 'label';
  @Output() select = new EventEmitter<any>();
  selected: any = null;

  constructor() {  }

  ngOnInit() {}

  onSelect(option: any) {
    this.selected = option;
    this.select.emit(option)
  }
}
