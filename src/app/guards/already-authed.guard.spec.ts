import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { AuthServiceMock } from '../../testing/AuthServiceMock';
import { RouterStub, Router } from '../../testing/router-stubs';
import { AuthService } from '../services';
import { AlreadyAuthedGuard } from './already-authed.guard';

describe('AlreadyAuthedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [
        AlreadyAuthedGuard,

        { provide: AuthService, useClass: AuthServiceMock },
        { provide: Router, useClass: RouterStub },
      ]
    });
  });

  it('should ...', inject([AlreadyAuthedGuard], (guard: AlreadyAuthedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
