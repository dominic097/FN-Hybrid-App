// app
import { HomeRoutes } from './home/home.routes';
import { AboutRoutes } from './about/about.routes';
import { GobalRoutes } from './global/global.routes';

export const routes: Array<any> = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...GobalRoutes
];
