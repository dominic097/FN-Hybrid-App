// app
import { ConsoleService } from './console.service';
import { LogService } from './logging/index';
import { RouterExtensions } from './router-extensions.service';
import { WindowService } from './window.service';
import { AppService } from './app.service';
import { GetReq } from './get.service';
import { GlobalService } from './global.service';
import { LoaderService } from './loader.service';
import { BotService } from './bot/bot.service';

export const CORE_PROVIDERS: any[] = [
  AppService,
  ConsoleService,
  LogService,
  RouterExtensions,
  WindowService,
  GetReq,
  GlobalService,
  LoaderService,
  BotService
];

export * from './app.service';
export * from './console.service';
export * from './logging/index';
export * from './router-extensions.service';
export * from './window.service';
export * from './get.service';
export * from './global.service';
export * from './loader.service';
export * from './bot/bot.service';
