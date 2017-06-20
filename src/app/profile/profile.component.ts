import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services';
import { User, ShippingStatus } from '../model/interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  isFinished: boolean = false;
  user: User
  private ShippingStatus: typeof ShippingStatus = ShippingStatus;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getAuthedUser()
      .subscribe(
        user => {
          this.setUser(user);
        },
        error => console.log(error),
        () => this.isFinished = true
      );
  }

  private setUser(user: User): void {
    this.user = user;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
