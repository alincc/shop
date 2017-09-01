import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { DropdownValue } from './model/interface';
import * as authActions from './auth/actions/auth';
import * as fromAuth from './auth/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  searchBoxVisible: boolean = false;
  dropdownValues: DropdownValue[] = [];

  constructor(
    public toastr: ToastsManager,
    private store: Store<fromAuth.State>,
    vcr: ViewContainerRef,
  ) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.store.dispatch(new authActions.CheckAuthAction());

    this.store.select(fromAuth.getLoggedIn).subscribe(authed => {
      if (authed) {
        this.dropdownValues = [
          new DropdownValue("profile", "Profile"),
        ];
      }
      else {
        this.dropdownValues = [
          new DropdownValue("login", "Login"),
          new DropdownValue("register", "Register"),
        ];
      }
    });
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
