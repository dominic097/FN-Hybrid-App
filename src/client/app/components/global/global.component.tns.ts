/**
 * Created by Dominic on 5/8/2017.
 */


import {Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import {GlobalService} from '../../shared/core/services/index';
import {GlobalConfig} from './global.component.config';
import {SegmentedBarItem} from 'tns-core-modules/ui/segmented-bar';


@Component({
  moduleId: module.id,
  selector: 'sd-global',
  templateUrl: 'global.component.html',
  styleUrls: ['global.component.css']
})
export class NSGlobalComponent implements OnInit {
  private FNVolDsk = [];
  private FNInfo = [];
  private isLoading = true;
  private lblProp = 'test';

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
          this.FNVolDsk = [];
          this.FNInfo.forEach((fn) => {
            this.FNVolDsk.push({title: fn.name});
            this.isLoading = false;
          });
          console.log(JSON.stringify(this.FNVolDsk));
        },
        err => {
          console.log(err);
          this.isLoading = false;
        }
      );
  }

  segmentedBarselectionChange(e) {
    console.log(JSON.stringify(e));
  }
}
