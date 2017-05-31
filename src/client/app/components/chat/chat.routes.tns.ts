import { ChatComponent } from './chat.component.tns';
import { AuthGuard } from "../../shared/core/services/auth-guard.service";

export const ChatRoutes: Array<any> = [
  {
    path: 'chat',
    component: ChatComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'chat/:payload',
    component: ChatComponent,
    canActivate: [AuthGuard]
  }
];
