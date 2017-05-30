// app
import { HomeRoutes } from './home/home.routes';
import { AboutRoutes } from './about/about.routes';
import { NSGobalRoutes } from './global/global.routes.tns';
import { ChatRoutes } from './chat/chat.routes.tns';
import { loginRoutes } from './login/login.routing.tns';

export const routes: Array<any> = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...NSGobalRoutes,
  ...ChatRoutes,
  ...loginRoutes
];

