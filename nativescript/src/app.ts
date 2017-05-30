// nativescript
import { platformNativeScriptDynamic } from 'nativescript-angular/platform';
import * as tnsOAuthModule from 'nativescript-oauth';
import * as app from 'application';
import SocialLogin = require("nativescript-social-login");

// app
import { NativeModule } from './native.module';


let linkedInInitOptions : tnsOAuthModule.ITnsOAuthOptionsLinkedIn = {
  clientId: '81b04j6ndos3l6',
  clientSecret: 'PH2r0K7X8f7s4zs1',
  redirectUri: 'http://172.30.36.63:3000/login/',
  scope: ['r_basicprofile'] //Leave blank and the default scopes will be used
};

tnsOAuthModule.initLinkedIn(linkedInInitOptions);

//
// var facebookInitOptions : tnsOAuthModule.ITnsOAuthOptionsFacebook = {
//   clientId: '114705639114730',
//   clientSecret: 'e34642770270465aa358af1da151ddfc',
//   scope: ['email'] //whatever other scopes you need
// };
//
// tnsOAuthModule.initFacebook(facebookInitOptions);

platformNativeScriptDynamic().bootstrapModule(NativeModule);
