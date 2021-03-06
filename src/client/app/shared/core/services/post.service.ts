/**
 * Created by Dominic on 3/1/2017.
 */

import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {ServiceProvider} from "../models/serviceProvider";

@Injectable()
export class PostReq {
  constructor(private http: Http) {

  }

  send(config:ServiceProvider) {
    let _headers = new Headers();
    _headers.append('Content-Type', config.contentType);
    _headers.append('Authorization', "Basic cm9vdDpNc3lzQDEyMw==");
    return this.http.post(config.url, config.payLoad, {headers: _headers})
      .map((response: Response) => response.json())
      .catch((error:any) => Observable.throw(error || 'Server error'));
  }
}
