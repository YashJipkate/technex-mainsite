import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from "../utilities/login";
import { Register } from "../utilities/register";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  _url = 'https://technex-api.herokuapp.com/';

  constructor(private _http: HttpClient) { }

  login(loginObject: Login) {
    return this._http.post<any>(this._url + 'login/', loginObject);
  }

  register(registerObject: Register) {
    return this._http.post<any>(this._url + 'register/', registerObject);
  }

  // update(token, updateObject: Update) {
  //   const headers = new HttpHeaders({Authorization: 'Token ' + token});
  //   return this._http.patch(this._url + 'profile/', updateObject, {headers: headers});
  // }
}
