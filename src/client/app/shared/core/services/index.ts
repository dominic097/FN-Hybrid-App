// app
import {ConsoleService} from './console.service';
import {LogService} from './logging/index';
import {RouterExtensions} from './router-extensions.service';
import {WindowService} from './window.service';
import {AppService} from './app.service';
import {GetReq} from './get.service';
import {GlobalService} from './global.service';
import {LoaderService} from './loader.service';
import {BotService} from './bot/bot.service';
import {DSService} from './bot/bot.DSOps';
import {volumeService} from './bot/bot.volumeOps';
import {LoginService} from './login.service';
import {BackendService} from './backend.service';
import {User} from './user.model';

export const CORE_PROVIDERS: any[] = [
  AppService,
  ConsoleService,
  LogService,
  RouterExtensions,
  WindowService,
  GetReq,
  GlobalService,
  LoaderService,
  BotService,
  DSService,
  volumeService,
  LoginService,
  BackendService,
  User
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
export * from './bot/bot.DSOps';
export * from './bot/bot.volumeOps';
export * from './login.service';
export * from './backend.service';
export * from './user.model';
export * from './auth-guard.service';
