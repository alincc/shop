import { Injectable } from '@angular/core';

export { StorageService } from '../app/services';

@Injectable()
export class StorageServiceMock {

  constructor() { }

  getItem(key: string): string {
    // return localStorage.getItem(key);
    return null;
  }

  removeItem(key: string): void {
    // localStorage.removeItem(key);
  }

  setItem(key: string, value: string): void {
    // localStorage.setItem(key, value);
  }

  clear(): void {
    // localStorage.clear();
  }

}
