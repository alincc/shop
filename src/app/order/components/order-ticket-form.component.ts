import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order-ticket-form',
  template: `
    <form [formGroup]="form" class="form" (ngSubmit)="onSubmit()">

      <div class="field">
        <textarea formControlName="message"></textarea>
      </div>

      <button type="submit" class="button">Submit</button>

    </form>
  `,
})
export class OrderTicketFormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.fb.group({
      message: '',
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
  }
}
