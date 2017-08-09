import { Customer } from '../model/interface';

export interface IUser {
  _id: String,
  admin: boolean;
  username: String;
  password: String;
  email: string;
  customer?: Customer;
  ip: String;
  image?: string;
}

export class User implements IUser {
  _id: String;
  admin: boolean;
  username: String;
  password: String;
  email: string;
  customer?: Customer;
  ip: String;
  image?: string;

  constructor(user: IUser) {
    this._id = user._id;
    this.admin = user.admin;
    this.username = user.username;
    this.password = user.password;
    this.email = user.email;
    this.customer = user.customer ? user.customer : null;
    this.ip = user.ip;
    this.image = user.image ? user.image : 'no-pic.png';
  }

  public getImagePath(): string {
    return 'assets/img/' + this.image;
  }
}

export interface Authenticate {
  username: string;
  password: string;
}
