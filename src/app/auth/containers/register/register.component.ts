import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../auth.service';
import { User } from '../../../model/interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  submitted: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  handleFormSubmit(user) {
    this.authService.create(user)
      .subscribe(res => this.submitted = true);
  }
}
