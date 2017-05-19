/**
 * Created by Dominic on 5/18/2017.
 */

import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'

import {PostReq} from "../post.service";
import {ServiceProvider, iZVolumeCreate, iVolumeCreate, DSCreate} from "../../interfaces/index";


@Injectable()
export class volumeService extends PostReq{

  createZVolume(zvol: iZVolumeCreate, serviceProvider: ServiceProvider) {
    serviceProvider.payLoad = zvol;
    return this.send(serviceProvider);
  }

  createVolume(vol: iVolumeCreate, serviceProvider: ServiceProvider) {
    serviceProvider.payLoad = vol;
    return this.send(serviceProvider);
  }
}

