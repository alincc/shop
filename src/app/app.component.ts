import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { DropdownValue } from './model/interface';
import { AuthService } from './auth/auth.service';
import * as authActions from './auth/actions/auth';
import * as fromAuth from './auth/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  searchBoxVisible: boolean = false;

  constructor(
    public toastr: ToastsManager,
    private authService: AuthService, // TODO: should not use auth service here
    private store: Store<fromAuth.State>,
    vcr: ViewContainerRef,
  ) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.store.dispatch(new authActions.CheckAuthAction());
  }

  getDropdownValues(): DropdownValue[] {
    if (this.authService.isAuthed()) {
      return [
        new DropdownValue("profile", "Profile"),
      ];
    }
    return [
      new DropdownValue("login", "Login"),
      new DropdownValue("register", "Register"),
    ];
  }

  toggleSearch(): void {
    this.searchBoxVisible = !this.searchBoxVisible;
  }

  handleSearchEmitter(event): void {
    if (event.action === 'close') {
      this.searchBoxVisible = false;
    }
    else if (event.action === 'search') {
      console.log(event.data);
    }
  }
}
