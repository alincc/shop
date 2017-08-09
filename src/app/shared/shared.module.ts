import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SpinnerComponent } from './spinner/spinner.component';
import { MessageComponent } from './message/message.component';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    MessageComponent,
    SpinnerComponent,
    DropdownComponent,
  ],
  declarations: [
    MessageComponent,
    SpinnerComponent,
    DropdownComponent,
  ],
})
export class SharedModule { }
