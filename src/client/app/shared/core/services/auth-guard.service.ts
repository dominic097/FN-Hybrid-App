import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { LoginService } from './login.service';

@Injectable()
export class AuthGuard  implements CanActivate {
  constructor(private router: Router, private service: LoginService) { }

  canActivate() {
    if (this.service.isAuthenticated()) {
      return true;
    }
    else {
      this.router.navigate(["/"]);
      return false;
    }
  }
}

