# MilestoneIntegrationPlatformVmsResTfulApi.RSApi

All URIs are relative to *https://localhost/API/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deletefailoverGroupsById**](RSApi.md#deletefailoverGroupsById) | **DELETE** /failoverGroups/{id} | Delete a failoverGroups
[**deleterecordingServersByIdhardware**](RSApi.md#deleterecordingServersByIdhardware) | **DELETE** /recordingServers/{idParent}/hardware/{id} | Remove a hardware from a recordingServers
[**deleterecordingServersByIdstorages**](RSApi.md#deleterecordingServersByIdstorages) | **DELETE** /recordingServers/{idParent}/storages/{id} | Remove a storages from a recordingServers
[**getAllfailoverGroups**](RSApi.md#getAllfailoverGroups) | **GET** /failoverGroups | Get array of all Failover groups
[**getAllfailoverRecorders**](RSApi.md#getAllfailoverRecorders) | **GET** /failoverRecorders | Get array of all enabled Failover recorders
[**getAllfailoverRecordersInAfailoverGroups**](RSApi.md#getAllfailoverRecordersInAfailoverGroups) | **GET** /failoverGroups/{id}/failoverRecorders | Get array of all failoverRecorders
[**getAllhardwareDriversInArecordingServers**](RSApi.md#getAllhardwareDriversInArecordingServers) | **GET** /recordingServers/{id}/hardwareDrivers | Get array of all hardwareDrivers
[**getAllhardwareInArecordingServers**](RSApi.md#getAllhardwareInArecordingServers) | **GET** /recordingServers/{id}/hardware | Get array of all hardware
[**getAllrecordingServerFailovers**](RSApi.md#getAllrecordingServerFailovers) | **GET** /recordingServerFailovers | Get array of all Failover settings
[**getAllrecordingServerFailoversInArecordingServers**](RSApi.md#getAllrecordingServerFailoversInArecordingServers) | **GET** /recordingServers/{id}/recordingServerFailovers | Get array of all recordingServerFailovers
[**getAllrecordingServerMulticasts**](RSApi.md#getAllrecordingServerMulticasts) | **GET** /recordingServerMulticasts | Get array of all enabled Multicast
[**getAllrecordingServerMulticastsInArecordingServers**](RSApi.md#getAllrecordingServerMulticastsInArecordingServers) | **GET** /recordingServers/{id}/recordingServerMulticasts | Get array of all recordingServerMulticasts
[**getAllrecordingServers**](RSApi.md#getAllrecordingServers) | **GET** /recordingServers | Get array of all enabled Recording Server
[**getAllstoragesInArecordingServers**](RSApi.md#getAllstoragesInArecordingServers) | **GET** /recordingServers/{id}/storages | Get array of all storages
[**getOnehardwareDriversInArecordingServers**](RSApi.md#getOnehardwareDriversInArecordingServers) | **GET** /recordingServers/{idParent}/hardwareDrivers/{id} | Get specific hardwareDrivers
[**getOnestoragesInArecordingServers**](RSApi.md#getOnestoragesInArecordingServers) | **GET** /recordingServers/{idParent}/storages/{id} | Get specific storages
[**getfailoverGroupsById**](RSApi.md#getfailoverGroupsById) | **GET** /failoverGroups/{id} | Get specific object of Failover groups
[**getfailoverRecordersById**](RSApi.md#getfailoverRecordersById) | **GET** /failoverRecorders/{id} | Get specific object of Failover recorders
[**getrecordingServerFailoversById**](RSApi.md#getrecordingServerFailoversById) | **GET** /recordingServerFailovers/{id} | Get specific object of Failover settings
[**getrecordingServerMulticastsById**](RSApi.md#getrecordingServerMulticastsById) | **GET** /recordingServerMulticasts/{id} | Get specific object of Multicast
[**getrecordingServersById**](RSApi.md#getrecordingServersById) | **GET** /recordingServers/{id} | Get specific object of Recording Server
[**patchfailoverGroupsById**](RSApi.md#patchfailoverGroupsById) | **PATCH** /failoverGroups/{id} | Update provided fields on Failover groups
[**patchfailoverRecordersById**](RSApi.md#patchfailoverRecordersById) | **PATCH** /failoverRecorders/{id} | Update provided fields on Failover recorders
[**patchrecordingServerFailoversById**](RSApi.md#patchrecordingServerFailoversById) | **PATCH** /recordingServerFailovers/{id} | Update provided fields on Failover settings
[**patchrecordingServerMulticastsById**](RSApi.md#patchrecordingServerMulticastsById) | **PATCH** /recordingServerMulticasts/{id} | Update provided fields on Multicast
[**patchrecordingServersById**](RSApi.md#patchrecordingServersById) | **PATCH** /recordingServers/{id} | Update provided fields on Recording Server
[**postTaskForrecordingServers**](RSApi.md#postTaskForrecordingServers) | **POST** /recordingServers/{id} | Perform a task
[**postfailoverGroupsById**](RSApi.md#postfailoverGroupsById) | **POST** /failoverGroups | Add new failoverGroups, or task&#x3D;MoveFailoverGroup
[**postrecordingServersByIdstorages**](RSApi.md#postrecordingServersByIdstorages) | **POST** /recordingServers/{id}/storages | Add a storages to a recordingServers
[**putfailoverGroupsById**](RSApi.md#putfailoverGroupsById) | **PUT** /failoverGroups/{id} | Update all fields on Failover groups
[**putfailoverRecordersById**](RSApi.md#putfailoverRecordersById) | **PUT** /failoverRecorders/{id} | Update all fields on Failover recorders
[**putrecordingServerFailoversById**](RSApi.md#putrecordingServerFailoversById) | **PUT** /recordingServerFailovers/{id} | Update all fields on Failover settings
[**putrecordingServerMulticastsById**](RSApi.md#putrecordingServerMulticastsById) | **PUT** /recordingServerMulticasts/{id} | Update all fields on Multicast
[**putrecordingServersById**](RSApi.md#putrecordingServersById) | **PUT** /recordingServers/{id} | Update all fields on Recording Server

<a name="deletefailoverGroupsById"></a>
# **deletefailoverGroupsById**
> InlineResponse2018 deletefailoverGroupsById(id)

Delete a failoverGroups

Failover groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RSApi();
let id = "id_example"; // String | Id of the object

apiInstance.deletefailoverGroupsById(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the object | 

### Return type

[**InlineResponse2018**](InlineResponse2018.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleterecordingServersByIdhardware"></a>
# **deleterecordingServersByIdhardware**
> InlineResponse20065 deleterecordingServersByIdhardware(idParent, id)

Remove a hardware from a recordingServers

Recording Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RSApi();
let idParent = "idParent_example"; // String | Id of parent object
let id = "id_example"; // String | Id of the object

apiInstance.deleterecordingServersByIdhardware(idParent, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idParent** | **String**| Id of parent object | 
 **id** | **String**| Id of the object | 

### Return type

[**InlineResponse20065**](InlineResponse20065.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleterecordingServersByIdstorages"></a>
# **deleterecordingServersByIdstorages**
> InlineResponse20121 deleterecordingServersByIdstorages(idParent, id)

Remove a storages from a recordingServers

Recording Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RSApi();
let idParent = "idParent_example"; // String | Id of parent object
let id = "id_example"; // String | Id of the object

apiInstance.deleterecordingServersByIdstorages(idParent, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idParent** | **String**| Id of parent object | 
 **id** | **String**| Id of the object | 

### Return type

[**InlineResponse20121**](InlineResponse20121.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllfailoverGroups"></a>
# **getAllfailoverGroups**
> InlineResponse20052 getAllfailoverGroups()

Get array of all Failover groups

Failover groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RSApi();
apiInstance.getAllfailoverGroups((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse20052**](InlineResponse20052.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllfailoverRecorders"></a>
# **getAllfailoverRecorders**
> InlineResponse20055 getAllfailoverRecorders()

Get array of all enabled Failover recorders

Failover recorders. To include disabled items add ?disabled to the request.

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RSApi();
apiInstance.getAllfailoverRecorders((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse20055**](InlineResponse20055.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllfailoverRecordersInAfailoverGroups"></a>
# **getAllfailoverRecordersInAfailoverGroups**
> InlineResponse20055 getAllfailoverRecordersInAfailoverGroups(id)

Get array of all failoverRecorders

Failover groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RSApi();
let id = "id_example"; // String | Id of the failoverGroup object

apiInstance.getAllfailoverRecordersInAfailoverGroups(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the failoverGroup object | 

### Return type

[**InlineResponse20055**](InlineResponse20055.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllhardwareDriversInArecordingServers"></a>
# **getAllhardwareDriversInArecordingServers**
> InlineResponse200126 getAllhardwareDriversInArecordingServers(id)

Get array of all hardwareDrivers

Recording Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RSApi();
let id = "id_example"; // String | Id of the recordingServer object

apiInstance.getAllhardwareDriversInArecordingServers(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the recordingServer object | 

### Return type

[**InlineResponse200126**](InlineResponse200126.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllhardwareInArecordingServers"></a>
# **getAllhardwareInArecordingServers**
> InlineResponse20063 getAllhardwareInArecordingServers(id)

Get array of all hardware

Recording Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RSApi();
let id = "id_example"; // String | Id of the recordingServer object

apiInstance.getAllhardwareInArecordingServers(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the recordingServer object | 

### Return type

[**InlineResponse20063**](InlineResponse20063.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllrecordingServerFailovers"></a>
# **getAllrecordingServerFailovers**
> InlineResponse200127 getAllrecordingServerFailovers()

Get array of all Failover settings

Failover settings

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RSApi();
apiInstance.getAllrecordingServerFailovers((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse200127**](InlineResponse200127.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllrecordingServerFailoversInArecordingServers"></a>
# **getAllrecordingServerFailoversInArecordingServers**
> InlineResponse200127 getAllrecordingServerFailoversInArecordingServers(id)

Get array of all recordingServerFailovers

Recording Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RSApi();
let id = "id_example"; // String | Id of the recordingServer object

apiInstance.getAllrecordingServerFailoversInArecordingServers(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the recordingServer object | 

### Return type

[**InlineResponse200127**](InlineResponse200127.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllrecordingServerMulticasts"></a>
# **getAllrecordingServerMulticasts**
> InlineResponse200128 getAllrecordingServerMulticasts()

Get array of all enabled Multicast

Multicast. To include disabled items add ?disabled to the request.

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RSApi();
apiInstance.getAllrecordingServerMulticasts((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse200128**](InlineResponse200128.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllrecordingServerMulticastsInArecordingServers"></a>
# **getAllrecordingServerMulticastsInArecordingServers**
> InlineResponse200128 getAllrecordingServerMulticastsInArecordingServers(id)

Get array of all recordingServerMulticasts

Recording Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RSApi();
let id = "id_example"; // String | Id of the recordingServer object

apiInstance.getAllrecordingServerMulticastsInArecordingServers(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the recordingServer object | 

### Return type

[**InlineResponse200128**](InlineResponse200128.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllrecordingServers"></a>
# **getAllrecordingServers**
> InlineResponse200122 getAllrecordingServers()

Get array of all enabled Recording Server

Recording Server. To include disabled items add ?disabled to the request.

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RSApi();
apiInstance.getAllrecordingServers((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse200122**](InlineResponse200122.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllstoragesInArecordingServers"></a>
# **getAllstoragesInArecordingServers**
> InlineResponse200129 getAllstoragesInArecordingServers(id)

Get array of all storages

Recording Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RSApi();
let id = "id_example"; // String | Id of the recordingServer object

apiInstance.getAllstoragesInArecordingServers(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the recordingServer object | 

### Return type

[**InlineResponse200129**](InlineResponse200129.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOnehardwareDriversInArecordingServers"></a>
# **getOnehardwareDriversInArecordingServers**
> InlineResponse200126 getOnehardwareDriversInArecordingServers(idParent, id)

Get specific hardwareDrivers

Recording Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RSApi();
let idParent = "idParent_example"; // String | Id of the recordingServer object
let id = "id_example"; // String | Id of the hardwareDriver object

apiInstance.getOnehardwareDriversInArecordingServers(idParent, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idParent** | **String**| Id of the recordingServer object | 
 **id** | **String**| Id of the hardwareDriver object | 

### Return type

[**InlineResponse200126**](InlineResponse200126.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOnestoragesInArecordingServers"></a>
# **getOnestoragesInArecordingServers**
> InlineResponse200129 getOnestoragesInArecordingServers(idParent, id)

Get specific storages

Recording Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RSApi();
let idParent = "idParent_example"; // String | Id of parent object
let id = "id_example"; // String | Id of the object

apiInstance.getOnestoragesInArecordingServers(idParent, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idParent** | **String**| Id of parent object | 
 **id** | **String**| Id of the object | 

### Return type

[**InlineResponse200129**](InlineResponse200129.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getfailoverGroupsById"></a>
# **getfailoverGroupsById**
> InlineResponse20054 getfailoverGroupsById(id, opts)

Get specific object of Failover groups

Failover groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RSApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getfailoverGroupsById(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the object | 
 **tasks** | **String**| Get list of all tasks supported by this object | [optional] 

### Return type

[**InlineResponse20054**](InlineResponse20054.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getfailoverRecordersById"></a>
# **getfailoverRecordersById**
> InlineResponse20056 getfailoverRecordersById(id, opts)

Get specific object of Failover recorders

Failover recorders

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RSApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getfailoverRecordersById(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the object | 
 **tasks** | **String**| Get list of all tasks supported by this object | [optional] 

### Return type

[**InlineResponse20056**](InlineResponse20056.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getrecordingServerFailoversById"></a>
# **getrecordingServerFailoversById**
> InlineResponse200130 getrecordingServerFailoversById(id, opts)

Get specific object of Failover settings

Failover settings

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RSApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getrecordingServerFailoversById(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the object | 
 **tasks** | **String**| Get list of all tasks supported by this object | [optional] 

### Return type

[**InlineResponse200130**](InlineResponse200130.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getrecordingServerMulticastsById"></a>
# **getrecordingServerMulticastsById**
> InlineResponse200132 getrecordingServerMulticastsById(id, opts)

Get specific object of Multicast

Multicast

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RSApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getrecordingServerMulticastsById(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the object | 
 **tasks** | **String**| Get list of all tasks supported by this object | [optional] 

### Return type

[**InlineResponse200132**](InlineResponse200132.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getrecordingServersById"></a>
# **getrecordingServersById**
> InlineResponse200123 getrecordingServersById(id, opts)

Get specific object of Recording Server

Recording Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RSApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getrecordingServersById(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the object | 
 **tasks** | **String**| Get list of all tasks supported by this object | [optional] 

### Return type

[**InlineResponse200123**](InlineResponse200123.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchfailoverGroupsById"></a>
# **patchfailoverGroupsById**
> InlineResponse2018 patchfailoverGroupsById(id, opts)

Update provided fields on Failover groups

Failover groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RSApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.FailoverGroups() // FailoverGroups | 
};
apiInstance.patchfailoverGroupsById(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the object | 
 **body** | [**FailoverGroups**](FailoverGroups.md)|  | [optional] 

### Return type

[**InlineResponse2018**](InlineResponse2018.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchfailoverRecordersById"></a>
# **patchfailoverRecordersById**
> InlineResponse20057 patchfailoverRecordersById(id, opts)

Update provided fields on Failover recorders

Failover recorders

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RSApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.FailoverRecorders() // FailoverRecorders | 
};
apiInstance.patchfailoverRecordersById(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the object | 
 **body** | [**FailoverRecorders**](FailoverRecorders.md)|  | [optional] 

### Return type

[**InlineResponse20057**](InlineResponse20057.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchrecordingServerFailoversById"></a>
# **patchrecordingServerFailoversById**
> InlineResponse200131 patchrecordingServerFailoversById(id, opts)

Update provided fields on Failover settings

Failover settings

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RSApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.RecordingServerFailovers() // RecordingServerFailovers | 
};
apiInstance.patchrecordingServerFailoversById(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the object | 
 **body** | [**RecordingServerFailovers**](RecordingServerFailovers.md)|  | [optional] 

### Return type

[**InlineResponse200131**](InlineResponse200131.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchrecordingServerMulticastsById"></a>
# **patchrecordingServerMulticastsById**
> InlineResponse200133 patchrecordingServerMulticastsById(id, opts)

Update provided fields on Multicast

Multicast

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RSApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.RecordingServerMulticasts() // RecordingServerMulticasts | 
};
apiInstance.patchrecordingServerMulticastsById(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the object | 
 **body** | [**RecordingServerMulticasts**](RecordingServerMulticasts.md)|  | [optional] 

### Return type

[**InlineResponse200133**](InlineResponse200133.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchrecordingServersById"></a>
# **patchrecordingServersById**
> InlineResponse200124 patchrecordingServersById(id, opts)

Update provided fields on Recording Server

Recording Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RSApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.RecordingServers() // RecordingServers | 
};
apiInstance.patchrecordingServersById(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the object | 
 **body** | [**RecordingServers**](RecordingServers.md)|  | [optional] 

### Return type

[**InlineResponse200124**](InlineResponse200124.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postTaskForrecordingServers"></a>
# **postTaskForrecordingServers**
> InlineResponse200125 postTaskForrecordingServers(id, task, opts)

Perform a task

Recording Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RSApi();
let id = "id_example"; // String | Id of the object
let task = "task_example"; // String | task=AddHardware, or task=GetOtherDevicesWithMediaOnRecorder, or task=HardwareScan, or task=HardwareScanExpress, or task=LoadTasks
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.RecordingServersIdBody() // RecordingServersIdBody | 
};
apiInstance.postTaskForrecordingServers(id, task, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the object | 
 **task** | **String**| task&#x3D;AddHardware, or task&#x3D;GetOtherDevicesWithMediaOnRecorder, or task&#x3D;HardwareScan, or task&#x3D;HardwareScanExpress, or task&#x3D;LoadTasks | 
 **body** | [**RecordingServersIdBody**](RecordingServersIdBody.md)|  | [optional] 

### Return type

[**InlineResponse200125**](InlineResponse200125.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postfailoverGroupsById"></a>
# **postfailoverGroupsById**
> InlineResponse20053 postfailoverGroupsById(opts)

Add new failoverGroups, or task&#x3D;MoveFailoverGroup

Failover groups, or perform a task

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RSApi();
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.FailoverGroupsBody() // FailoverGroupsBody | 
};
apiInstance.postfailoverGroupsById(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**FailoverGroupsBody**](FailoverGroupsBody.md)|  | [optional] 

### Return type

[**InlineResponse20053**](InlineResponse20053.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postrecordingServersByIdstorages"></a>
# **postrecordingServersByIdstorages**
> InlineResponse20121 postrecordingServersByIdstorages(id, opts)

Add a storages to a recordingServers

Recording Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RSApi();
let id = "id_example"; // String | Id of the recordingServer object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.Storages() // Storages | 
};
apiInstance.postrecordingServersByIdstorages(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the recordingServer object | 
 **body** | [**Storages**](Storages.md)|  | [optional] 

### Return type

[**InlineResponse20121**](InlineResponse20121.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putfailoverGroupsById"></a>
# **putfailoverGroupsById**
> InlineResponse2018 putfailoverGroupsById(id, opts)

Update all fields on Failover groups

Failover groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RSApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.FailoverGroups() // FailoverGroups | 
};
apiInstance.putfailoverGroupsById(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the object | 
 **body** | [**FailoverGroups**](FailoverGroups.md)|  | [optional] 

### Return type

[**InlineResponse2018**](InlineResponse2018.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putfailoverRecordersById"></a>
# **putfailoverRecordersById**
> InlineResponse20057 putfailoverRecordersById(id, opts)

Update all fields on Failover recorders

Failover recorders

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RSApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.FailoverRecorders() // FailoverRecorders | 
};
apiInstance.putfailoverRecordersById(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the object | 
 **body** | [**FailoverRecorders**](FailoverRecorders.md)|  | [optional] 

### Return type

[**InlineResponse20057**](InlineResponse20057.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putrecordingServerFailoversById"></a>
# **putrecordingServerFailoversById**
> InlineResponse200131 putrecordingServerFailoversById(id, opts)

Update all fields on Failover settings

Failover settings

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RSApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.RecordingServerFailovers() // RecordingServerFailovers | 
};
apiInstance.putrecordingServerFailoversById(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the object | 
 **body** | [**RecordingServerFailovers**](RecordingServerFailovers.md)|  | [optional] 

### Return type

[**InlineResponse200131**](InlineResponse200131.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putrecordingServerMulticastsById"></a>
# **putrecordingServerMulticastsById**
> InlineResponse200133 putrecordingServerMulticastsById(id, opts)

Update all fields on Multicast

Multicast

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RSApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.RecordingServerMulticasts() // RecordingServerMulticasts | 
};
apiInstance.putrecordingServerMulticastsById(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the object | 
 **body** | [**RecordingServerMulticasts**](RecordingServerMulticasts.md)|  | [optional] 

### Return type

[**InlineResponse200133**](InlineResponse200133.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putrecordingServersById"></a>
# **putrecordingServersById**
> InlineResponse200124 putrecordingServersById(id, opts)

Update all fields on Recording Server

Recording Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RSApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.RecordingServers() // RecordingServers | 
};
apiInstance.putrecordingServersById(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the object | 
 **body** | [**RecordingServers**](RecordingServers.md)|  | [optional] 

### Return type

[**InlineResponse200124**](InlineResponse200124.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

