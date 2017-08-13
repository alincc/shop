import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SpinnerComponent } from './spinner/spinner.component';
import { MessageComponent } from './message/message.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ButtonSelectComponent } from './button-select/button-select.component';
import { ImageSelectComponent } from './image-select/image-select.component';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    MessageComponent,
    SpinnerComponent,
    DropdownComponent,
    ButtonSelectComponent,
    ImageSelectComponent,
  ],
  declarations: [
    MessageComponent,
    SpinnerComponent,
    DropdownComponent,
    ButtonSelectComponent,
    ImageSelectComponent,
  ],
})
export class SharedModule { }
