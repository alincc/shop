import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownValue } from './model/interface';
import { AuthService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchBoxVisible: boolean = false;

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
