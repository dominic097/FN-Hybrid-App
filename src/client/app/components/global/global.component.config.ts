/**
 * Created by Dominic on 3/1/2017.
 */
import {ServiceProvider} from '../../shared/core/interfaces/index';

interface  GlobalConfigInterface {
  fnServiceProvider: ServiceProvider;
  eventsServiceProvider: ServiceProvider;
}

export const GlobalConfig: GlobalConfigInterface = {
  fnServiceProvider: {
    url: 'http://172.30.36.214/api/v1.0/storage/volume/?format=json',
    type: 'GET',
    contentType: 'application/json'
  },
  eventsServiceProvider: {
    url: 'http://172.30.36.223:8080/UserManagement/rest/UserService/response',
    type: 'POST',
    contentType: 'application/json'
  }
};

export const deviceLstColumnDefs = [
  {headerName: 'Device Name', field: 'dsName'},
  {headerName: 'Serial', field: 'serial'},
  {headerName: 'Error Events', field: 'errEvents'}
];

export const eventLstColumnDefs = [
  {headerName: 'Extent Name', field: 'extentName'},
  {headerName: 'Serial', field: 'serial'},
  {headerName: 'Logical Block Size', field: 'logicalBlockSize'},
  {headerName: 'LunId', field: 'lunId'}
];

export const volExtentsColumnDefs = [
  {headerName: 'Extent Name', field: 'extentName'},
  {headerName: 'serial', field: 'serial'},
  {headerName: 'extentType', field: 'extentType'},
  {headerName: 'Path to the Extent', field: 'extentPath'},
  {headerName: 'Logical Block Size', field: 'logicalBlockSize'},
  {headerName: 'LUN RPM', field: 'lunRPM'},
  {headerName: 'Read Only', field: 'isReadOnly'}
];

export const extentTargetColumnDefs = [
  {headerName: 'Target', field: 'target'},
  {headerName: 'LUN ID', field: 'lunId'},
  {headerName: 'Extent', field: 'extentName'}
];

export const deviceListColumnDefs = [
  {headerName: 'Extent Name', field: 'extentName'},
  {headerName: 'LunId', field: 'lunId'}
];
