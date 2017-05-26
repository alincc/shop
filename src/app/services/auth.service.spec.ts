import { TestBed, inject, async } from '@angular/core/testing';
import { Http, HttpModule, RequestOptions, Response, ResponseOptions, BaseRequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { AuthService } from './auth.service';
import { User } from '../model/interface';
import { FAKE_USER1 } from '../../testing/mock/mocks';
import { fakeBackEndProvider } from '../../testing/fakeBackendFactory';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,

        MockBackend,
        BaseRequestOptions,
        fakeBackEndProvider,
      ],
      imports: [
        HttpModule,
      ],
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  describe('authenticate', () => {
    it ('should call validate()', inject([AuthService], (service: AuthService) => {
      spyOn(service, 'validate');

      service.authenticate('johndoe@email.com', 'doe');
      expect(service.validate).toHaveBeenCalled();
    }));
  });

  describe('validate()', () => {
    let service;

    beforeEach(async(inject([AuthService], (svc: AuthService) => {
      service = svc;
    })));

    it ('should return true if valid credentials', () => {
      service.validate('johndoe@email.com', 'doe')
        .subscribe(resp => {
          expect(resp).toBe(true);
        });
    });

    it ('should return false if invalid credentials', () => {
      service.validate('invalid@email.com', 'invalidpass')
        .subscribe(resp => {
          expect(resp).toBe(false);
        });
    });

    it ('should set the value of user to the authed user', () => {
      service.validate('johndoe@email.com', 'doe')
        .subscribe(resp => {
          expect(service.getAuthedUser().email).toEqual("johndoe@email.com");
        });
    });
  });

  describe('isAuthed()', () => {
    let service;

    beforeEach(async(inject([AuthService], (svc: AuthService) => {
      service = svc;
    })));

    it ('should return true if user has logged in', () => {
      service.authenticate('johndoe@email.com', 'doe')
        .subscribe(resp => {
          expect(service.isAuthed()).toBe(true);
        });
    });

    it ('should return false if user is not', () => {
      service.logout();
      expect(service.isAuthed()).toBe(false);
    });
  });
});
