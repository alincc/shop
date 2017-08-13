import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Register } from '../../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() register = new EventEmitter<Register>();
  submitted: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  handleFormSubmit(user: Register) {
    this.register.emit(user);
    this.submitted = true;
  }
}
