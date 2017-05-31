/**
 * Created by Dominic on 3/1/2017.
 */
import {ServiceProvider} from '../../shared/core/interfaces/index';

interface  loginConfigInterface {
  loginServiceProvider: ServiceProvider;
}

export const loginConfig: loginConfigInterface = {
  loginServiceProvider: {
    url: 'http://172.30.36.63:3000/login?email=$email&pwd=$pwd',
    type: 'GET',
    contentType: 'application/json'
  }
};
