/**
 * Created by Dominic on 5/11/2017.
 */

import {Injectable} from '@angular/core';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import {ServiceProvider} from '../../interfaces/index';
import {GetReq} from '../get.service';


@Injectable()
export class BotService extends GetReq {
  getBotResponse( serviceProvider: ServiceProvider) {
    return this.send(serviceProvider);
  }
}
