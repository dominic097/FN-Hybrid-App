import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login.component.tns";

export const loginRoutes: Routes = [
  { path: "", component: LoginComponent }
];

