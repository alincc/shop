import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Http, HttpModule } from '@angular/http';
import { Router, RouterStub, RouterLinkStubDirective } from '../../testing/router-stubs';
import { ProfileComponent } from './profile.component';
import { AuthService } from '../services/auth.service';
import { AuthServiceMock } from '../../testing/AuthServiceMock';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent, RouterLinkStubDirective ],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: AuthService, useClass: AuthServiceMock }
      ],
      imports: [
        HttpModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
