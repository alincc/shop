import { Component, OnInit, Input, ElementRef } from '@angular/core';

export class DropdownValue {
  value: string;
  label: string;

  constructor(value:string, label:string) {
    this.value = value;
    this.label = label;
  }
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  host: {
    '(document:click)': 'onClick($event)'
  }
})
export class DropdownComponent implements OnInit {

  @Input() label: String;
  @Input() icon: String;
  @Input() items: DropdownValue[];

  visible: boolean = false;

  constructor(private _eref: ElementRef) { }

  ngOnInit() {
  }

  toggle() {
    this.visible = !this.visible;
  }

  onClick(event) {
    if (!this._eref.nativeElement.contains(event.target)) {
      this.visible = false;
    }
  }

}
