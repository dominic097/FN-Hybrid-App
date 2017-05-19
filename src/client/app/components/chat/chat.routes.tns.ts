import { ChatComponent } from './chat.component.tns';

export const ChatRoutes: Array<any> = [
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'chat/:payload',
    component: ChatComponent
  }
];
