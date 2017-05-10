// any operators needed throughout your application
import './operators';

// libs
import { Component, OnInit } from '@angular/core';
import { SwipeGestureEventData } from 'tns-core-modules/ui/gestures';

// app
import { AnalyticsService } from '../shared/analytics/index';
import { Config, LogService, AppService } from '../shared/core/index';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {

  private menuOpen: boolean = false;

  constructor(
    public analytics: AnalyticsService,
    public log: LogService,
    private appService: AppService) {
      log.debug(`Config env: ${Config.ENVIRONMENT().ENV}`);
  }


  onSwipe(args: SwipeGestureEventData) {
    console.log('Swipe!');
    console.log('Object that triggered the event: ' + args.object);
    console.log('View that triggered the event: ' + args.view);
    console.log('Event name: ' + args.eventName);
    console.log('Swipe Direction: ' + args.direction);

    if(args.direction === 1) {
      console.log('set Menu open');
      this.menuOpen = true;
    }else if(args.direction === 2) {
      console.log('set Menu close');
      this.menuOpen = false;
    }
  }
}
