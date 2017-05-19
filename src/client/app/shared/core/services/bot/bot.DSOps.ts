/**
 * Created by Dominic on 5/19/2017.
 */


import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'

import {PostReq} from "../post.service";
import {ServiceProvider, DSCreate} from "../../interfaces/index";


@Injectable()
export class DSService extends PostReq {

  createDSVolume(iDS: DSCreate, serviceProvider: ServiceProvider) {
    serviceProvider.payLoad = iDS;
    return this.send(serviceProvider);
  }

}


