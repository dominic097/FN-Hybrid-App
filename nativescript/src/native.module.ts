// nativescript
import {
  NativeScriptRouterModule,
  RouterExtensions as TNSRouterExtensions
} from 'nativescript-angular/router';

// angular
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

// libs
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
const pushPlugin = require("nativescript-push-notifications");
import * as app from 'application';
import {RouterExtensions} from "nativescript-angular/router";

// app
import {
  WindowService,
  ConsoleService,
  AppService
} from './app/shared/core/index';
import { AppComponent } from './app/components/app.component';
import { routes, authProviders } from './app/components/app.routes.tns';

// feature modules
import { CoreModule } from './app/shared/core/core.module';
import { AppReducer } from './app/shared/ngrx/index';
import { MultilingualEffects } from './app/shared/i18n/index';
import { NameListEffects } from './app/shared/sample/index';
import { ComponentsModule, cons, consoleLogTarget } from './components.module';

// {N} custom app specific
import { WindowNative, NSAppService } from './mobile/core/index';
import { NS_ANALYTICS_PROVIDERS } from './mobile/analytics/index';

/**
 * Config
 * Seed provided configuration options
 */
import { Config, LogTarget } from './app/shared/core/index';
import { Page } from 'ui/page';
Config.PageClass = Page;

// (required) platform target (allows component decorators to use the right view template)
Config.PLATFORM_TARGET = Config.PLATFORMS.MOBILE_NATIVE;

// (optional) log level - defaults to no logging if not set
Config.DEBUG.LEVEL_4 = true;

// (optional) custom i18n language support
// example of how you can configure your own language sets
// you can use the AppConfig class or build something similar into your own framework
import { AppConfig } from './app/shared/sample/services/app-config';
import { MultilingualService } from './app/shared/i18n/services/multilingual.service';
MultilingualService.SUPPORTED_LANGUAGES = AppConfig.SUPPORTED_LANGUAGES;

@NgModule({
  imports: [
    CoreModule.forRoot([
      { provide: WindowService, useClass: WindowNative },
      { provide: ConsoleService, useFactory: (cons) },
      { provide: LogTarget, multi: true, deps: [ConsoleService], useFactory: (consoleLogTarget) }
    ]),
    ComponentsModule,
    NativeScriptRouterModule.forRoot(<any>routes),
    StoreModule.provideStore(AppReducer),
    EffectsModule.run(MultilingualEffects),
    EffectsModule.run(NameListEffects)
  ],
  providers: [
    NS_ANALYTICS_PROVIDERS,
    { provide: RouterExtensions, useClass: TNSRouterExtensions },
    { provide: AppService, useClass: NSAppService },
    authProviders
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class NativeModule {
  constructor(){
    app.on(app.launchEvent, (args: app.ApplicationEventData) => {
      if (args.android ) {
        pushPlugin.register({senderID: '1027520099120'}, function (data) {
          console.log("register \n");
          console.log(data);
          // self.set("message", "" + JSON.stringify(data));
        }, function () {
        });

        pushPlugin.onMessageReceived(function callback(mess, data) {
          console.log("Mess received \n");
          console.log(data);
        });

        pushPlugin.areNotificationsEnabled(function(areEnabled) {
          console.log('\n Are Notifications enabled: ' + areEnabled);
        });
      }
    });


  }
}
