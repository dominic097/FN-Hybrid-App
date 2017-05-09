/**
 * Created by Dominic on 5/8/2017.
 */

import {Injectable} from '@angular/core';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import {ServiceProvider} from '../interfaces/index';
import {GetReq} from './get.service';


@Injectable()
export class GlobalService extends GetReq {
  getFNInfo( serviceProvider: ServiceProvider) {
    var headers = new Headers();
    headers.append('Authorization', 'Basic cm9vdDpNc3lzQDEyMw==');
    return this.send(serviceProvider, headers);
  }
}
