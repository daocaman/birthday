import { Injectable } from '@angular/core';

import * as cookie from '../helpers/cookie';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  accessToken = '';

  refreshToken = '';

  expire_access = 3600;

  expire_refresh = 21600;

  constructor() { }

  getToken() {
    this.getCookieToken("accessToken");
    this.getCookieToken("refreshToken");
    if (this.accessToken) {
      return this.accessToken;
    } else {
      return '';
    }
  }

  setToken(key: string, value: string) {
    if (key == "accessToken") {
      cookie.set(key, value, this.expire_access);
      this.accessToken = value;
    } else if (key == "refreshToken") {
      cookie.set(key, value, this.expire_refresh);
      this.refreshToken = value;
    } else {
      cookie.set(key, value, this.expire_refresh);
    }
  }

  removeToken(key) {

    if (key == "accessToken") {
      this.accessToken = '';
    } else {
      this.refreshToken = ""
    }
    cookie.remove(key);
  }

  getUser() {
    return cookie.get("user") == "" ? null : JSON.parse(cookie.get("user"));
  }

  getCookieValue(key) {
    return cookie.get(key) == "" ? null : cookie.get(key);
  }

  getCookieToken(key) {
    let token = "";
    let tmp = cookie.get(key);
    if (key == "accessToken") {
      this.accessToken = tmp;
    } else {
      this.refreshToken = tmp;
    }
    return tmp ? true : false;
  }

}
