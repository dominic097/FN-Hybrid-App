import { NSGlobalComponent } from './global.component.tns';
import {AuthGuard} from "../../shared/core/services/auth-guard.service";

export const NSGobalRoutes: Array<any> = [
  {
    path: 'global',
    component: NSGlobalComponent,
    canActivate: [AuthGuard]
  }
];
