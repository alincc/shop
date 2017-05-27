import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AuthService } from '../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private loginForm: any = {
    email: "",
    password: "",
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastsManager
  ) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.authService.authenticate(this.loginForm.email, this.loginForm.password)
      .subscribe(user => {
        if (user == true) {
          this.router.navigate(['/']);
        }
        else {
          this.toastr.error('The email and password does not match', "Invalid credentials");
        }
      })
  }
}
