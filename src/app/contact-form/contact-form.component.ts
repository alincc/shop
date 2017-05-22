import { Component, OnInit } from '@angular/core';
import { ContactMessage } from '../model/ContactMessage';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  submitted = false;
  message = {
    title: '',
    text: '',
  };

  form: ContactMessage = new ContactMessage("", "", "");

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("Form submitted with = " + this.form); // TODO: implement
    this.message = {
      title: 'Thank you',
      text: 'Your message was sent. We will get back to you shortly.',
    };

    this.submitted = true;
  }


}
