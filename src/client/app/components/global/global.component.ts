/**
 * Created by Dominic on 5/8/2017.
 */


import {Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import {GlobalService} from '../../shared/core/services/index';
import {GlobalConfig} from './global.component.config';

@Component({
  moduleId: module.id,
  selector: 'sd-global',
  templateUrl: 'global.component.html',
  styleUrls: ['global.component.css']
})
export class GlobalComponent implements OnInit {
  private myItems = [];
  private lblProp = 'test';

  ngOnInit() {
    console.log(this);
    // this.activityIndicator
  }

  constructor(private el: ElementRef, private service: GlobalService) {
    this.loadFNInfo();
  }


  loadFNInfo() {
    this.service.getFNInfo(GlobalConfig.fnServiceProvider)
      .subscribe(
        data => {
          console.log(data);
        },
        err => {
          console.log(err);
        }
      );
  }
}
