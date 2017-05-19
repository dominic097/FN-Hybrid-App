/**
 * Created by Dominic on 5/8/2017.
 */


import {Component, ElementRef, OnInit} from '@angular/core';
import {GlobalService} from '../../shared/core/services/index';
import {GlobalConfig} from './global.component.config';


@Component({
  moduleId: module.id,
  selector: 'sd-global',
  templateUrl: 'global.component.html',
  styleUrls: ['global.component.css']
})
export class NSGlobalComponent implements OnInit {
  private FNVolDsk: Array<any> = [];
  private FNVolDskInfo: Array<any> = [];
  private FNInfo: Array<any> = [];
  private isLoading = true;

  ngOnInit() {
    this.loadFNInfo();
  }

  constructor(private el: ElementRef, private service: GlobalService) {
  }

  loadFNInfo() {
    this.service.getFNInfo(GlobalConfig.fnServiceProvider)
      .subscribe(
        data => {
          this.FNInfo = data;
          this.FNInfo.forEach((fn) => {
            this.FNVolDsk.push({title: fn.name});
            this.segmentedBarselectionChange(0);
            this.isLoading = false;
          });
        },
        err => {
          console.log(err);
          this.isLoading = false;
        }
      );
  }

  segmentedBarselectionChange(e) {
    let _FNVol = this.FNInfo[e].children[0] || [];
    if (_FNVol['type'] === 'dataset' && _FNVol['children'] && _FNVol['children'].length > 0) {
      this.FNVolDskInfo = _FNVol['children'];
    }
  }
}
