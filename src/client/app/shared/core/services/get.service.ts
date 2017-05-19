/**
 * Created by Dominic on 5/8/2017.
 */


import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {ServiceProvider} from '../interfaces/index';

@Injectable()
export class GetReq {
  constructor(private http: Http) {

  }

  send(config: ServiceProvider, head?: Headers) {
    if(!head)
      head = new Headers();
    return this.http.get(config.url, {headers:head})
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }
}
