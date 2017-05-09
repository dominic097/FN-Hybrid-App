// app
import { HomeRoutes } from './home/home.routes';
import { AboutRoutes } from './about/about.routes';
import { NSGobalRoutes } from './gobal/global.routes.tns';

export const routes: Array<any> = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...NSGobalRoutes
];