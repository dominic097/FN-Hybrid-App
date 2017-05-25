/**
 * Created by Dominic on 3/1/2017.
 */
import {ServiceProvider} from '../../shared/core/interfaces/index';

interface  ChatConfigInterface {
  chatServiceProvider: ServiceProvider;
  createVolServiceProvider: ServiceProvider;
  createZVolServiceProvider: ServiceProvider;
  createDSServiceProvider: ServiceProvider;
  editZVolServiceProvider: ServiceProvider;
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
  createZVolServiceProvider: {
    url: 'http://172.30.36.214/api/v1.0/storage/volume/$volumeName/zvols/',
    type: 'POST',
    contentType: 'application/json'
  },
  createVolServiceProvider: {
    url: 'http://172.30.36.214/api/v1.0/storage/volume/',
    type: 'POST',
    contentType: 'application/json'
  },
  createDSServiceProvider: {
    url: 'http://172.30.36.214/api/v1.0/storage/volume/$volumeName/datasets/',
    type: 'GET',
    contentType: 'application/json'
  },
  editZVolServiceProvider: {
    url: 'http://172.30.36.214/api/v1.0/storage/volume/$volumeName/zvols/$zname',
    type: 'POST',
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
