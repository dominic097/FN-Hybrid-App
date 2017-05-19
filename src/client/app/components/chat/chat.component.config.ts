/**
 * Created by Dominic on 3/1/2017.
 */
import {ServiceProvider} from '../../shared/core/interfaces/index';

interface  ChatConfigInterface {
  chatServiceProvider: ServiceProvider;
  createVolServiceProvider: ServiceProvider;
  createDSServiceProvider: ServiceProvider;
  editVolServiceProvider: ServiceProvider;
  editDSServiceProvider: ServiceProvider;
  delVolServiceProvider: ServiceProvider;
  delDSServiceProvider: ServiceProvider;
}

export const ChatConfig: ChatConfigInterface = {
  chatServiceProvider: {
    url: 'http://172.30.36.63:3000/chat?message=$mess',
    type: 'GET',
    contentType: 'application/json'
  },
  createVolServiceProvider: {
    url: 'http://172.30.36.214/storage/volume/FN_E/zvols/',
    type: 'POST',
    contentType: 'application/json'
  },
  createDSServiceProvider: {
    url: 'http://172.30.36.63:3000/chat?message=$mess',
    type: 'GET',
    contentType: 'application/json'
  },
  editVolServiceProvider: {
    url: 'http://172.30.36.63:3000/chat?message=$mess',
    type: 'GET',
    contentType: 'application/json'
  },
  editDSServiceProvider: {
    url: 'http://172.30.36.63:3000/chat?message=$mess',
    type: 'GET',
    contentType: 'application/json'
  },
  delVolServiceProvider: {
    url: 'http://172.30.36.63:3000/chat?message=$mess',
    type: 'GET',
    contentType: 'application/json'
  },
  delDSServiceProvider: {
    url: 'http://172.30.36.63:3000/chat?message=$mess',
    type: 'GET',
    contentType: 'application/json'
  }
};
