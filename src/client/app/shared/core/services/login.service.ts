import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import {ServiceProvider} from '../interfaces/index';
import {GetReq} from './get.service';
let CryptoJS = require("crypto-js");
import {User} from "./user.model";
var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");
let isAuthenticated = false;


@Injectable()
export class LoginService extends GetReq {

  constructor(private http: Http) {
    super();
  }

  readonly VERY_SECRET_CODE: string = 'd4DQ%@^FDHWEZ5ZXCUWcg43za==-3';

  private _encryptData(data: string): string {
    // we use the AES-256 encryption -> very secure
    let cipherText = CryptoJS.AES.encrypt(data, this.VERY_SECRET_CODE);
    return cipherText;
  }

  // register(user: User) {
  //   let headers = new Headers();
  //   headers.append("Content-Type", "application/json");
  //
  // }

  login(serviceProvider: ServiceProvider, user: User) {
    var headers = new Headers();
    serviceProvider.url = serviceProvider.url.replace('$email', user.email).replace('$pwd', SHA256(user.password));
    let _sub = this.send(serviceProvider, headers);
    _sub.subscribe(
      data => {
        if (data.status) {
          isAuthenticated = true;
        }
      });

    return _sub;
  }

  isAuthenticated() {
    return isAuthenticated;
  }

// logoff() {
//   BackendService.token = "";
// }

// resetPassword(email) {
//   let headers = new Headers();
//   headers.append("Content-Type", "application/json");

// return this.http.post(
//   // BackendService.apiUrl + "Users/resetpassword",
//   JSON.stringify({
//     Email: email
//   }),
//   {headers: headers}
// ).catch(this.handleErrors);
// }

// handleErrors(error: Response) {
//   console.log(JSON.stringify(error.json()));
//   return Observable.throw(error);
// }
}
