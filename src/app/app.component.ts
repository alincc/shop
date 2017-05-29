import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { DropdownComponent, DropdownValue } from './dropdown/dropdown.component';
import { AuthService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public toastr: ToastsManager,
    private authService: AuthService,
    vcr: ViewContainerRef,
  ) {
    this.toastr.setRootViewContainerRef(vcr);
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
}
