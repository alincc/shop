import { Action } from '@ngrx/store';
import { User, Authenticate, Register } from '../user';

export const LOGIN = '[Auth] Login';
export const LOGOUT = '[Auth] Logout';
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const LOGIN_FAILURE = '[Auth] Login Failure';
export const LOGIN_REDIRECT = '[Auth] Login Redirect';
export const LOGIN_GET_USER = '[Auth] Get User';
export const CHECK = '[Auth] Check';
export const GUEST_LOGIN = '[Auth] Guest Login';
export const SIGNUP = '[Auth] Sign Up';
export const SIGNUP_SUCCESS = '[Auth] Sign Up Success';
export const SIGNUP_FAILURE = '[Auth] Sign Up Failure';

export class Login implements Action {
  readonly type = LOGIN;

  constructor(public payload: Authenticate) {}
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public payload: { user: User, redirect: boolean }) {}
}

export class LoginFailure implements Action {
  readonly type = LOGIN_FAILURE;

  constructor(public payload: any) {}
}

export class GetUser implements Action {
  readonly type = LOGIN_GET_USER;

  constructor(public payload: { user: boolean, redirect: boolean }) {}
}

export class LoginRedirect implements Action {
  readonly type = LOGIN_REDIRECT;
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class CheckAuthAction implements Action {
  readonly type = CHECK;
}

export class GuestLoginAction implements Action {
  readonly type = GUEST_LOGIN;
}

export class SignupAction implements Action {
  readonly type = SIGNUP;

  constructor(public payload: Register) {}
}

export class SignupSuccessAction implements Action {
  readonly type = SIGNUP_SUCCESS;

  constructor(public payload: any) {}
}

export class SignupFailureAction implements Action {
  readonly type = SIGNUP_FAILURE;

  constructor(public payload: any) {}
}

export type Actions =
  | Login
  | LoginSuccess
  | LoginFailure
  | LoginRedirect
  | Logout
  | GetUser
  | CheckAuthAction
  | GuestLoginAction
  | SignupAction
  | SignupSuccessAction
  | SignupFailureAction;
