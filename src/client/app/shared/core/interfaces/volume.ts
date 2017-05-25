/**
 * Created by Dominic on 5/18/2017.
 */

export interface iZVolumeCreate {
  'name': string;
  'avail'?: number;
  'compression'?: string;
  'volsize': number;
}

export interface iZVolumeEdit {
  "volsize": string;
}

export interface iVolumeCreate {
  'volume_name': string;
  'layout'?: Array<any>
}

export interface DSCreate {
  'name': string;
}



