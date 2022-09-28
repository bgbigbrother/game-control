# MilestoneIntegrationPlatformVmsResTfulApi.ClientApi

All URIs are relative to *https://localhost/API/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteclientProfilesById**](ClientApi.md#deleteclientProfilesById) | **DELETE** /clientProfiles/{id} | Delete a clientProfiles
[**deletegisMapLocationsById**](ClientApi.md#deletegisMapLocationsById) | **DELETE** /gisMapLocations/{id} | Delete a gisMapLocations
[**deletelayoutGroupsByIdlayouts**](ClientApi.md#deletelayoutGroupsByIdlayouts) | **DELETE** /layoutGroups/{idParent}/layouts/{id} | Remove a layouts from a layoutGroups
[**deletesaveSearchesById**](ClientApi.md#deletesaveSearchesById) | **DELETE** /saveSearches/{id} | Delete a saveSearches
[**deletevideoWallsById**](ClientApi.md#deletevideoWallsById) | **DELETE** /videoWalls/{id} | Delete a videoWalls
[**deletevideoWallsByIdmonitors**](ClientApi.md#deletevideoWallsByIdmonitors) | **DELETE** /videoWalls/{idParent}/monitors/{id} | Remove a monitors from a videoWalls
[**deletevideoWallsByIdvideoWallPresets**](ClientApi.md#deletevideoWallsByIdvideoWallPresets) | **DELETE** /videoWalls/{idParent}/videoWallPresets/{id} | Remove a videoWallPresets from a videoWalls
[**deleteviewGroupsById**](ClientApi.md#deleteviewGroupsById) | **DELETE** /viewGroups/{id} | Delete a viewGroups
[**deleteviewGroupsByIdviews**](ClientApi.md#deleteviewGroupsByIdviews) | **DELETE** /viewGroups/{idParent}/views/{id} | Remove a views from a viewGroups
[**getAllclientProfiles**](ClientApi.md#getAllclientProfiles) | **GET** /clientProfiles | Get array of all Client profile
[**getAllgisMapLocations**](ClientApi.md#getAllgisMapLocations) | **GET** /gisMapLocations | Get array of all GIS map locations
[**getAlllayoutGroups**](ClientApi.md#getAlllayoutGroups) | **GET** /layoutGroups | Get array of all layoutGroups
[**getAlllayoutsInAlayoutGroups**](ClientApi.md#getAlllayoutsInAlayoutGroups) | **GET** /layoutGroups/{id}/layouts | Get array of all layouts
[**getAllmonitorPresetsInAmonitors**](ClientApi.md#getAllmonitorPresetsInAmonitors) | **GET** /monitors/{id}/monitorPresets | Get array of all monitorPresets
[**getAllmonitorsInAvideoWalls**](ClientApi.md#getAllmonitorsInAvideoWalls) | **GET** /videoWalls/{id}/monitors | Get array of all monitors
[**getAllsaveSearches**](ClientApi.md#getAllsaveSearches) | **GET** /saveSearches | Get array of all saveSearches
[**getAllvideoWallPresets**](ClientApi.md#getAllvideoWallPresets) | **GET** /videoWallPresets | Get array of all Video wall preset
[**getAllvideoWallPresetsInAvideoWalls**](ClientApi.md#getAllvideoWallPresetsInAvideoWalls) | **GET** /videoWalls/{id}/videoWallPresets | Get array of all videoWallPresets
[**getAllvideoWalls**](ClientApi.md#getAllvideoWalls) | **GET** /videoWalls | Get array of all Video wall
[**getAllviewGroups**](ClientApi.md#getAllviewGroups) | **GET** /viewGroups | Get array of all View groups
[**getAllviewGroupsInAviewGroups**](ClientApi.md#getAllviewGroupsInAviewGroups) | **GET** /viewGroups/{id}/viewGroups | Get array of all viewGroups
[**getAllviews**](ClientApi.md#getAllviews) | **GET** /views | Get array of all View folder
[**getAllviewsInAviewGroups**](ClientApi.md#getAllviewsInAviewGroups) | **GET** /viewGroups/{id}/views | Get array of all views
[**getOnelayoutsInAlayoutGroups**](ClientApi.md#getOnelayoutsInAlayoutGroups) | **GET** /layoutGroups/{idParent}/layouts/{id} | Get specific layouts
[**getOnemonitorPresetsInAmonitors**](ClientApi.md#getOnemonitorPresetsInAmonitors) | **GET** /monitors/{idParent}/monitorPresets/{id} | Get specific monitorPresets
[**getOnemonitorsInAvideoWalls**](ClientApi.md#getOnemonitorsInAvideoWalls) | **GET** /videoWalls/{idParent}/monitors/{id} | Get specific monitors
[**getclientProfilesById**](ClientApi.md#getclientProfilesById) | **GET** /clientProfiles/{id} | Get specific object of Client profile
[**getgisMapLocationsById**](ClientApi.md#getgisMapLocationsById) | **GET** /gisMapLocations/{id} | Get specific object of GIS map locations
[**getlayoutGroupsById**](ClientApi.md#getlayoutGroupsById) | **GET** /layoutGroups/{id} | Get specific object of layoutGroups
[**getsaveSearchesById**](ClientApi.md#getsaveSearchesById) | **GET** /saveSearches/{id} | Get specific object of saveSearches
[**getvideoWallPresetsById**](ClientApi.md#getvideoWallPresetsById) | **GET** /videoWallPresets/{id} | Get specific object of Video wall preset
[**getvideoWallsById**](ClientApi.md#getvideoWallsById) | **GET** /videoWalls/{id} | Get specific object of Video wall
[**getviewGroupsById**](ClientApi.md#getviewGroupsById) | **GET** /viewGroups/{id} | Get specific object of View groups
[**getviewsById**](ClientApi.md#getviewsById) | **GET** /views/{id} | Get specific object of View folder
[**patchclientProfilesById**](ClientApi.md#patchclientProfilesById) | **PATCH** /clientProfiles/{id} | Update provided fields on Client profile
[**patchgisMapLocationsById**](ClientApi.md#patchgisMapLocationsById) | **PATCH** /gisMapLocations/{id} | Update provided fields on GIS map locations
[**patchlayoutGroupsById**](ClientApi.md#patchlayoutGroupsById) | **PATCH** /layoutGroups/{id} | Update provided fields on layoutGroups
[**patchsaveSearchesById**](ClientApi.md#patchsaveSearchesById) | **PATCH** /saveSearches/{id} | Update provided fields on saveSearches
[**patchvideoWallPresetsById**](ClientApi.md#patchvideoWallPresetsById) | **PATCH** /videoWallPresets/{id} | Update provided fields on Video wall preset
[**patchvideoWallsById**](ClientApi.md#patchvideoWallsById) | **PATCH** /videoWalls/{id} | Update provided fields on Video wall
[**patchviewGroupsById**](ClientApi.md#patchviewGroupsById) | **PATCH** /viewGroups/{id} | Update provided fields on View groups
[**patchviewsById**](ClientApi.md#patchviewsById) | **PATCH** /views/{id} | Update provided fields on View folder
[**postTaskForclientProfiles**](ClientApi.md#postTaskForclientProfiles) | **POST** /clientProfiles/{id} | Perform a task
[**postTaskFormonitors**](ClientApi.md#postTaskFormonitors) | **POST** /monitors/{id} | Perform a task
[**postTaskForvideoWallPresets**](ClientApi.md#postTaskForvideoWallPresets) | **POST** /videoWallPresets/{id} | Perform a task
[**postTaskForvideoWalls**](ClientApi.md#postTaskForvideoWalls) | **POST** /videoWalls/{id} | Perform a task
[**postclientProfilesById**](ClientApi.md#postclientProfilesById) | **POST** /clientProfiles | Add new clientProfiles
[**postgisMapLocationsById**](ClientApi.md#postgisMapLocationsById) | **POST** /gisMapLocations | Add new gisMapLocations
[**postlayoutGroupsByIdlayouts**](ClientApi.md#postlayoutGroupsByIdlayouts) | **POST** /layoutGroups/{id}/layouts | Add a layouts to a layoutGroups
[**postsaveSearchesById**](ClientApi.md#postsaveSearchesById) | **POST** /saveSearches | Add new saveSearches, or task&#x3D;UpdateSaveSearch, or task&#x3D;GetSaveSearch, or task&#x3D;FindSaveSearches
[**postvideoWallsById**](ClientApi.md#postvideoWallsById) | **POST** /videoWalls | Add new videoWalls
[**postvideoWallsByIdmonitors**](ClientApi.md#postvideoWallsByIdmonitors) | **POST** /videoWalls/{id}/monitors | Add a monitors to a videoWalls
[**postvideoWallsByIdvideoWallPresets**](ClientApi.md#postvideoWallsByIdvideoWallPresets) | **POST** /videoWalls/{id}/videoWallPresets | Add a videoWallPresets to a videoWalls
[**postviewGroupsById**](ClientApi.md#postviewGroupsById) | **POST** /viewGroups | Add new viewGroups
[**postviewGroupsByIdviews**](ClientApi.md#postviewGroupsByIdviews) | **POST** /viewGroups/{id}/views | Add a views to a viewGroups
[**putclientProfilesById**](ClientApi.md#putclientProfilesById) | **PUT** /clientProfiles/{id} | Update all fields on Client profile
[**putgisMapLocationsById**](ClientApi.md#putgisMapLocationsById) | **PUT** /gisMapLocations/{id} | Update all fields on GIS map locations
[**putlayoutGroupsById**](ClientApi.md#putlayoutGroupsById) | **PUT** /layoutGroups/{id} | Update all fields on layoutGroups
[**putsaveSearchesById**](ClientApi.md#putsaveSearchesById) | **PUT** /saveSearches/{id} | Update all fields on saveSearches
[**putvideoWallPresetsById**](ClientApi.md#putvideoWallPresetsById) | **PUT** /videoWallPresets/{id} | Update all fields on Video wall preset
[**putvideoWallsById**](ClientApi.md#putvideoWallsById) | **PUT** /videoWalls/{id} | Update all fields on Video wall
[**putviewGroupsById**](ClientApi.md#putviewGroupsById) | **PUT** /viewGroups/{id} | Update all fields on View groups
[**putviewsById**](ClientApi.md#putviewsById) | **PUT** /views/{id} | Update all fields on View folder

<a name="deleteclientProfilesById"></a>
# **deleteclientProfilesById**
> InlineResponse2017 deleteclientProfilesById(id)

Delete a clientProfiles

Client profile

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the object

apiInstance.deleteclientProfilesById(id, (error, data, response) => {
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

[**InlineResponse2017**](InlineResponse2017.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletegisMapLocationsById"></a>
# **deletegisMapLocationsById**
> InlineResponse20111 deletegisMapLocationsById(id)

Delete a gisMapLocations

GIS map locations

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the object

apiInstance.deletegisMapLocationsById(id, (error, data, response) => {
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

[**InlineResponse20111**](InlineResponse20111.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletelayoutGroupsByIdlayouts"></a>
# **deletelayoutGroupsByIdlayouts**
> InlineResponse20113 deletelayoutGroupsByIdlayouts(idParent, id)

Remove a layouts from a layoutGroups

Remove a layouts from a layoutGroups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let idParent = "idParent_example"; // String | Id of parent object
let id = "id_example"; // String | Id of the object

apiInstance.deletelayoutGroupsByIdlayouts(idParent, id, (error, data, response) => {
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

[**InlineResponse20113**](InlineResponse20113.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletesaveSearchesById"></a>
# **deletesaveSearchesById**
> InlineResponse20124 deletesaveSearchesById(id)

Delete a saveSearches

Delete a saveSearches

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the object

apiInstance.deletesaveSearchesById(id, (error, data, response) => {
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

[**InlineResponse20124**](InlineResponse20124.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletevideoWallsById"></a>
# **deletevideoWallsById**
> InlineResponse20129 deletevideoWallsById(id)

Delete a videoWalls

Video wall

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the object

apiInstance.deletevideoWallsById(id, (error, data, response) => {
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

[**InlineResponse20129**](InlineResponse20129.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletevideoWallsByIdmonitors"></a>
# **deletevideoWallsByIdmonitors**
> InlineResponse20130 deletevideoWallsByIdmonitors(idParent, id)

Remove a monitors from a videoWalls

Video wall

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let idParent = "idParent_example"; // String | Id of parent object
let id = "id_example"; // String | Id of the object

apiInstance.deletevideoWallsByIdmonitors(idParent, id, (error, data, response) => {
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

[**InlineResponse20130**](InlineResponse20130.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletevideoWallsByIdvideoWallPresets"></a>
# **deletevideoWallsByIdvideoWallPresets**
> InlineResponse20131 deletevideoWallsByIdvideoWallPresets(idParent, id)

Remove a videoWallPresets from a videoWalls

Video wall

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let idParent = "idParent_example"; // String | Id of parent object
let id = "id_example"; // String | Id of the object

apiInstance.deletevideoWallsByIdvideoWallPresets(idParent, id, (error, data, response) => {
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

[**InlineResponse20131**](InlineResponse20131.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteviewGroupsById"></a>
# **deleteviewGroupsById**
> InlineResponse20132 deleteviewGroupsById(id)

Delete a viewGroups

View groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the object

apiInstance.deleteviewGroupsById(id, (error, data, response) => {
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

[**InlineResponse20132**](InlineResponse20132.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteviewGroupsByIdviews"></a>
# **deleteviewGroupsByIdviews**
> InlineResponse200182 deleteviewGroupsByIdviews(idParent, id)

Remove a views from a viewGroups

View groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let idParent = "idParent_example"; // String | Id of parent object
let id = "id_example"; // String | Id of the object

apiInstance.deleteviewGroupsByIdviews(idParent, id, (error, data, response) => {
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

[**InlineResponse200182**](InlineResponse200182.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllclientProfiles"></a>
# **getAllclientProfiles**
> InlineResponse20042 getAllclientProfiles()

Get array of all Client profile

Client profile

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
apiInstance.getAllclientProfiles((error, data, response) => {
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

[**InlineResponse20042**](InlineResponse20042.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllgisMapLocations"></a>
# **getAllgisMapLocations**
> InlineResponse20061 getAllgisMapLocations()

Get array of all GIS map locations

GIS map locations

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
apiInstance.getAllgisMapLocations((error, data, response) => {
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

[**InlineResponse20061**](InlineResponse20061.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAlllayoutGroups"></a>
# **getAlllayoutGroups**
> InlineResponse20083 getAlllayoutGroups()

Get array of all layoutGroups

Get array of all layoutGroups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
apiInstance.getAlllayoutGroups((error, data, response) => {
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

[**InlineResponse20083**](InlineResponse20083.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAlllayoutsInAlayoutGroups"></a>
# **getAlllayoutsInAlayoutGroups**
> InlineResponse20086 getAlllayoutsInAlayoutGroups(id)

Get array of all layouts

Get array of all layouts

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the layoutGroup object

apiInstance.getAlllayoutsInAlayoutGroups(id, (error, data, response) => {
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
 **id** | **String**| Id of the layoutGroup object | 

### Return type

[**InlineResponse20086**](InlineResponse20086.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllmonitorPresetsInAmonitors"></a>
# **getAllmonitorPresetsInAmonitors**
> InlineResponse200114 getAllmonitorPresetsInAmonitors(id)

Get array of all monitorPresets

Monitor

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the monitor object

apiInstance.getAllmonitorPresetsInAmonitors(id, (error, data, response) => {
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
 **id** | **String**| Id of the monitor object | 

### Return type

[**InlineResponse200114**](InlineResponse200114.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllmonitorsInAvideoWalls"></a>
# **getAllmonitorsInAvideoWalls**
> InlineResponse200176 getAllmonitorsInAvideoWalls(id)

Get array of all monitors

Video wall

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the videoWall object

apiInstance.getAllmonitorsInAvideoWalls(id, (error, data, response) => {
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
 **id** | **String**| Id of the videoWall object | 

### Return type

[**InlineResponse200176**](InlineResponse200176.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllsaveSearches"></a>
# **getAllsaveSearches**
> InlineResponse200143 getAllsaveSearches()

Get array of all saveSearches

Get array of all saveSearches

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
apiInstance.getAllsaveSearches((error, data, response) => {
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

[**InlineResponse200143**](InlineResponse200143.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllvideoWallPresets"></a>
# **getAllvideoWallPresets**
> InlineResponse200177 getAllvideoWallPresets()

Get array of all Video wall preset

Video wall preset

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
apiInstance.getAllvideoWallPresets((error, data, response) => {
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

[**InlineResponse200177**](InlineResponse200177.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllvideoWallPresetsInAvideoWalls"></a>
# **getAllvideoWallPresetsInAvideoWalls**
> InlineResponse200177 getAllvideoWallPresetsInAvideoWalls(id)

Get array of all videoWallPresets

Video wall

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the videoWall object

apiInstance.getAllvideoWallPresetsInAvideoWalls(id, (error, data, response) => {
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
 **id** | **String**| Id of the videoWall object | 

### Return type

[**InlineResponse200177**](InlineResponse200177.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllvideoWalls"></a>
# **getAllvideoWalls**
> InlineResponse200169 getAllvideoWalls()

Get array of all Video wall

Video wall

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
apiInstance.getAllvideoWalls((error, data, response) => {
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

[**InlineResponse200169**](InlineResponse200169.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllviewGroups"></a>
# **getAllviewGroups**
> InlineResponse200170 getAllviewGroups()

Get array of all View groups

View groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
apiInstance.getAllviewGroups((error, data, response) => {
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

[**InlineResponse200170**](InlineResponse200170.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllviewGroupsInAviewGroups"></a>
# **getAllviewGroupsInAviewGroups**
> InlineResponse200170 getAllviewGroupsInAviewGroups(id)

Get array of all viewGroups

View groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the viewGroup object

apiInstance.getAllviewGroupsInAviewGroups(id, (error, data, response) => {
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
 **id** | **String**| Id of the viewGroup object | 

### Return type

[**InlineResponse200170**](InlineResponse200170.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllviews"></a>
# **getAllviews**
> InlineResponse200180 getAllviews()

Get array of all View folder

View folder

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
apiInstance.getAllviews((error, data, response) => {
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

[**InlineResponse200180**](InlineResponse200180.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllviewsInAviewGroups"></a>
# **getAllviewsInAviewGroups**
> InlineResponse200180 getAllviewsInAviewGroups(id)

Get array of all views

View groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the viewGroup object

apiInstance.getAllviewsInAviewGroups(id, (error, data, response) => {
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
 **id** | **String**| Id of the viewGroup object | 

### Return type

[**InlineResponse200180**](InlineResponse200180.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOnelayoutsInAlayoutGroups"></a>
# **getOnelayoutsInAlayoutGroups**
> InlineResponse20086 getOnelayoutsInAlayoutGroups(idParent, id)

Get specific layouts

Get specific layouts

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let idParent = "idParent_example"; // String | Id of parent object
let id = "id_example"; // String | Id of the object

apiInstance.getOnelayoutsInAlayoutGroups(idParent, id, (error, data, response) => {
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

[**InlineResponse20086**](InlineResponse20086.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOnemonitorPresetsInAmonitors"></a>
# **getOnemonitorPresetsInAmonitors**
> InlineResponse200114 getOnemonitorPresetsInAmonitors(idParent, id)

Get specific monitorPresets

Monitor

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let idParent = "idParent_example"; // String | Id of the monitor object
let id = "id_example"; // String | Id of the monitorPreset object

apiInstance.getOnemonitorPresetsInAmonitors(idParent, id, (error, data, response) => {
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
 **idParent** | **String**| Id of the monitor object | 
 **id** | **String**| Id of the monitorPreset object | 

### Return type

[**InlineResponse200114**](InlineResponse200114.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOnemonitorsInAvideoWalls"></a>
# **getOnemonitorsInAvideoWalls**
> InlineResponse200176 getOnemonitorsInAvideoWalls(idParent, id)

Get specific monitors

Video wall

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let idParent = "idParent_example"; // String | Id of parent object
let id = "id_example"; // String | Id of the object

apiInstance.getOnemonitorsInAvideoWalls(idParent, id, (error, data, response) => {
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

[**InlineResponse200176**](InlineResponse200176.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getclientProfilesById"></a>
# **getclientProfilesById**
> InlineResponse20043 getclientProfilesById(id, opts)

Get specific object of Client profile

Client profile

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getclientProfilesById(id, opts, (error, data, response) => {
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

[**InlineResponse20043**](InlineResponse20043.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getgisMapLocationsById"></a>
# **getgisMapLocationsById**
> InlineResponse20062 getgisMapLocationsById(id, opts)

Get specific object of GIS map locations

GIS map locations

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getgisMapLocationsById(id, opts, (error, data, response) => {
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

[**InlineResponse20062**](InlineResponse20062.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getlayoutGroupsById"></a>
# **getlayoutGroupsById**
> InlineResponse20084 getlayoutGroupsById(id, opts)

Get specific object of layoutGroups

Get specific object of layoutGroups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getlayoutGroupsById(id, opts, (error, data, response) => {
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

[**InlineResponse20084**](InlineResponse20084.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getsaveSearchesById"></a>
# **getsaveSearchesById**
> InlineResponse200145 getsaveSearchesById(id, opts)

Get specific object of saveSearches

Get specific object of saveSearches

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getsaveSearchesById(id, opts, (error, data, response) => {
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

[**InlineResponse200145**](InlineResponse200145.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getvideoWallPresetsById"></a>
# **getvideoWallPresetsById**
> InlineResponse200178 getvideoWallPresetsById(id, opts)

Get specific object of Video wall preset

Video wall preset

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getvideoWallPresetsById(id, opts, (error, data, response) => {
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

[**InlineResponse200178**](InlineResponse200178.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getvideoWallsById"></a>
# **getvideoWallsById**
> InlineResponse200175 getvideoWallsById(id, opts)

Get specific object of Video wall

Video wall

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getvideoWallsById(id, opts, (error, data, response) => {
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

[**InlineResponse200175**](InlineResponse200175.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getviewGroupsById"></a>
# **getviewGroupsById**
> InlineResponse200183 getviewGroupsById(id, opts)

Get specific object of View groups

View groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getviewGroupsById(id, opts, (error, data, response) => {
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

[**InlineResponse200183**](InlineResponse200183.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getviewsById"></a>
# **getviewsById**
> InlineResponse200181 getviewsById(id, opts)

Get specific object of View folder

View folder

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getviewsById(id, opts, (error, data, response) => {
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

[**InlineResponse200181**](InlineResponse200181.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchclientProfilesById"></a>
# **patchclientProfilesById**
> InlineResponse2017 patchclientProfilesById(id, opts)

Update provided fields on Client profile

Client profile

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.ClientProfiles() // ClientProfiles | 
};
apiInstance.patchclientProfilesById(id, opts, (error, data, response) => {
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
 **body** | [**ClientProfiles**](ClientProfiles.md)|  | [optional] 

### Return type

[**InlineResponse2017**](InlineResponse2017.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchgisMapLocationsById"></a>
# **patchgisMapLocationsById**
> InlineResponse20111 patchgisMapLocationsById(id, opts)

Update provided fields on GIS map locations

GIS map locations

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.GisMapLocations() // GisMapLocations | 
};
apiInstance.patchgisMapLocationsById(id, opts, (error, data, response) => {
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
 **body** | [**GisMapLocations**](GisMapLocations.md)|  | [optional] 

### Return type

[**InlineResponse20111**](InlineResponse20111.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchlayoutGroupsById"></a>
# **patchlayoutGroupsById**
> InlineResponse20085 patchlayoutGroupsById(id, opts)

Update provided fields on layoutGroups

Update provided fields on layoutGroups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.LayoutGroups() // LayoutGroups | 
};
apiInstance.patchlayoutGroupsById(id, opts, (error, data, response) => {
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
 **body** | [**LayoutGroups**](LayoutGroups.md)|  | [optional] 

### Return type

[**InlineResponse20085**](InlineResponse20085.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchsaveSearchesById"></a>
# **patchsaveSearchesById**
> InlineResponse20124 patchsaveSearchesById(id, opts)

Update provided fields on saveSearches

Update provided fields on saveSearches

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.SaveSearches() // SaveSearches | 
};
apiInstance.patchsaveSearchesById(id, opts, (error, data, response) => {
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
 **body** | [**SaveSearches**](SaveSearches.md)|  | [optional] 

### Return type

[**InlineResponse20124**](InlineResponse20124.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchvideoWallPresetsById"></a>
# **patchvideoWallPresetsById**
> InlineResponse20131 patchvideoWallPresetsById(id, opts)

Update provided fields on Video wall preset

Video wall preset

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.VideoWallPresets() // VideoWallPresets | 
};
apiInstance.patchvideoWallPresetsById(id, opts, (error, data, response) => {
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
 **body** | [**VideoWallPresets**](VideoWallPresets.md)|  | [optional] 

### Return type

[**InlineResponse20131**](InlineResponse20131.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchvideoWallsById"></a>
# **patchvideoWallsById**
> InlineResponse20129 patchvideoWallsById(id, opts)

Update provided fields on Video wall

Video wall

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.VideoWalls() // VideoWalls | 
};
apiInstance.patchvideoWallsById(id, opts, (error, data, response) => {
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
 **body** | [**VideoWalls**](VideoWalls.md)|  | [optional] 

### Return type

[**InlineResponse20129**](InlineResponse20129.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchviewGroupsById"></a>
# **patchviewGroupsById**
> InlineResponse20132 patchviewGroupsById(id, opts)

Update provided fields on View groups

View groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.ViewGroups() // ViewGroups | 
};
apiInstance.patchviewGroupsById(id, opts, (error, data, response) => {
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
 **body** | [**ViewGroups**](ViewGroups.md)|  | [optional] 

### Return type

[**InlineResponse20132**](InlineResponse20132.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchviewsById"></a>
# **patchviewsById**
> InlineResponse200182 patchviewsById(id, opts)

Update provided fields on View folder

View folder

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.Views() // Views | 
};
apiInstance.patchviewsById(id, opts, (error, data, response) => {
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
 **body** | [**Views**](Views.md)|  | [optional] 

### Return type

[**InlineResponse200182**](InlineResponse200182.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postTaskForclientProfiles"></a>
# **postTaskForclientProfiles**
> InlineResponse20017 postTaskForclientProfiles(id, task)

Perform a task

Client profile

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the object
let task = "task_example"; // String | task=ClientProfileUpPriority, or task=ClientProfileDownPriority

apiInstance.postTaskForclientProfiles(id, task, (error, data, response) => {
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
 **task** | **String**| task&#x3D;ClientProfileUpPriority, or task&#x3D;ClientProfileDownPriority | 

### Return type

[**InlineResponse20017**](InlineResponse20017.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postTaskFormonitors"></a>
# **postTaskFormonitors**
> InlineResponse200115 postTaskFormonitors(id, task, opts)

Perform a task

Monitor

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the object
let task = "task_example"; // String | task=ApplyCameras, or task=ApplyCamerasAndLayout, or task=RemoveCameras, or task=ApplyViewItemsXml, or task=ApplyMonitorState, or task=ApplyLayout, or task=ApplyTextAndLayout
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.MonitorsIdBody() // MonitorsIdBody | 
};
apiInstance.postTaskFormonitors(id, task, opts, (error, data, response) => {
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
 **task** | **String**| task&#x3D;ApplyCameras, or task&#x3D;ApplyCamerasAndLayout, or task&#x3D;RemoveCameras, or task&#x3D;ApplyViewItemsXml, or task&#x3D;ApplyMonitorState, or task&#x3D;ApplyLayout, or task&#x3D;ApplyTextAndLayout | 
 **body** | [**MonitorsIdBody**](MonitorsIdBody.md)|  | [optional] 

### Return type

[**InlineResponse200115**](InlineResponse200115.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postTaskForvideoWallPresets"></a>
# **postTaskForvideoWallPresets**
> InlineResponse200179 postTaskForvideoWallPresets(id, task)

Perform a task

Video wall preset

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the object
let task = "task_example"; // String | task=Activate

apiInstance.postTaskForvideoWallPresets(id, task, (error, data, response) => {
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
 **task** | **String**| task&#x3D;Activate | 

### Return type

[**InlineResponse200179**](InlineResponse200179.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postTaskForvideoWalls"></a>
# **postTaskForvideoWalls**
> InlineResponse20080 postTaskForvideoWalls(id, task, opts)

Perform a task

Video wall

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the object
let task = "task_example"; // String | task=ChangeSecurityPermissions
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.ChangeSecurityPermissionsRequestBody() // ChangeSecurityPermissionsRequestBody | 
};
apiInstance.postTaskForvideoWalls(id, task, opts, (error, data, response) => {
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
 **task** | **String**| task&#x3D;ChangeSecurityPermissions | 
 **body** | [**ChangeSecurityPermissionsRequestBody**](ChangeSecurityPermissionsRequestBody.md)|  | [optional] 

### Return type

[**InlineResponse20080**](InlineResponse20080.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postclientProfilesById"></a>
# **postclientProfilesById**
> InlineResponse2017 postclientProfilesById(opts)

Add new clientProfiles

Client profile

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.ClientProfiles() // ClientProfiles | 
};
apiInstance.postclientProfilesById(opts, (error, data, response) => {
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
 **body** | [**ClientProfiles**](ClientProfiles.md)|  | [optional] 

### Return type

[**InlineResponse2017**](InlineResponse2017.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postgisMapLocationsById"></a>
# **postgisMapLocationsById**
> InlineResponse20111 postgisMapLocationsById(opts)

Add new gisMapLocations

GIS map locations

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.GisMapLocations() // GisMapLocations | 
};
apiInstance.postgisMapLocationsById(opts, (error, data, response) => {
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
 **body** | [**GisMapLocations**](GisMapLocations.md)|  | [optional] 

### Return type

[**InlineResponse20111**](InlineResponse20111.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postlayoutGroupsByIdlayouts"></a>
# **postlayoutGroupsByIdlayouts**
> InlineResponse20113 postlayoutGroupsByIdlayouts(id, opts)

Add a layouts to a layoutGroups

Add a layouts to a layoutGroups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the layoutGroup object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.Layouts() // Layouts | 
};
apiInstance.postlayoutGroupsByIdlayouts(id, opts, (error, data, response) => {
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
 **id** | **String**| Id of the layoutGroup object | 
 **body** | [**Layouts**](Layouts.md)|  | [optional] 

### Return type

[**InlineResponse20113**](InlineResponse20113.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postsaveSearchesById"></a>
# **postsaveSearchesById**
> InlineResponse200144 postsaveSearchesById(opts)

Add new saveSearches, or task&#x3D;UpdateSaveSearch, or task&#x3D;GetSaveSearch, or task&#x3D;FindSaveSearches

Add new saveSearches, or perform a task

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.SaveSearchesBody() // SaveSearchesBody | 
};
apiInstance.postsaveSearchesById(opts, (error, data, response) => {
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
 **body** | [**SaveSearchesBody**](SaveSearchesBody.md)|  | [optional] 

### Return type

[**InlineResponse200144**](InlineResponse200144.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postvideoWallsById"></a>
# **postvideoWallsById**
> InlineResponse20129 postvideoWallsById(opts)

Add new videoWalls

Video wall

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.VideoWalls() // VideoWalls | 
};
apiInstance.postvideoWallsById(opts, (error, data, response) => {
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
 **body** | [**VideoWalls**](VideoWalls.md)|  | [optional] 

### Return type

[**InlineResponse20129**](InlineResponse20129.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postvideoWallsByIdmonitors"></a>
# **postvideoWallsByIdmonitors**
> InlineResponse20130 postvideoWallsByIdmonitors(id, opts)

Add a monitors to a videoWalls

Video wall

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the videoWall object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.Monitors() // Monitors | 
};
apiInstance.postvideoWallsByIdmonitors(id, opts, (error, data, response) => {
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
 **id** | **String**| Id of the videoWall object | 
 **body** | [**Monitors**](Monitors.md)|  | [optional] 

### Return type

[**InlineResponse20130**](InlineResponse20130.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postvideoWallsByIdvideoWallPresets"></a>
# **postvideoWallsByIdvideoWallPresets**
> InlineResponse20131 postvideoWallsByIdvideoWallPresets(id, opts)

Add a videoWallPresets to a videoWalls

Video wall

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the videoWall object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.VideoWallPresets() // VideoWallPresets | 
};
apiInstance.postvideoWallsByIdvideoWallPresets(id, opts, (error, data, response) => {
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
 **id** | **String**| Id of the videoWall object | 
 **body** | [**VideoWallPresets**](VideoWallPresets.md)|  | [optional] 

### Return type

[**InlineResponse20131**](InlineResponse20131.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postviewGroupsById"></a>
# **postviewGroupsById**
> InlineResponse20132 postviewGroupsById(opts)

Add new viewGroups

View groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.ViewGroups() // ViewGroups | 
};
apiInstance.postviewGroupsById(opts, (error, data, response) => {
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
 **body** | [**ViewGroups**](ViewGroups.md)|  | [optional] 

### Return type

[**InlineResponse20132**](InlineResponse20132.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postviewGroupsByIdviews"></a>
# **postviewGroupsByIdviews**
> InlineResponse200182 postviewGroupsByIdviews(id, opts)

Add a views to a viewGroups

View groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the viewGroup object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.Views() // Views | 
};
apiInstance.postviewGroupsByIdviews(id, opts, (error, data, response) => {
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
 **id** | **String**| Id of the viewGroup object | 
 **body** | [**Views**](Views.md)|  | [optional] 

### Return type

[**InlineResponse200182**](InlineResponse200182.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putclientProfilesById"></a>
# **putclientProfilesById**
> InlineResponse2017 putclientProfilesById(id, opts)

Update all fields on Client profile

Client profile

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.ClientProfiles() // ClientProfiles | 
};
apiInstance.putclientProfilesById(id, opts, (error, data, response) => {
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
 **body** | [**ClientProfiles**](ClientProfiles.md)|  | [optional] 

### Return type

[**InlineResponse2017**](InlineResponse2017.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putgisMapLocationsById"></a>
# **putgisMapLocationsById**
> InlineResponse20111 putgisMapLocationsById(id, opts)

Update all fields on GIS map locations

GIS map locations

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.GisMapLocations() // GisMapLocations | 
};
apiInstance.putgisMapLocationsById(id, opts, (error, data, response) => {
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
 **body** | [**GisMapLocations**](GisMapLocations.md)|  | [optional] 

### Return type

[**InlineResponse20111**](InlineResponse20111.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putlayoutGroupsById"></a>
# **putlayoutGroupsById**
> InlineResponse20085 putlayoutGroupsById(id, opts)

Update all fields on layoutGroups

Update all fields on layoutGroups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.LayoutGroups() // LayoutGroups | 
};
apiInstance.putlayoutGroupsById(id, opts, (error, data, response) => {
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
 **body** | [**LayoutGroups**](LayoutGroups.md)|  | [optional] 

### Return type

[**InlineResponse20085**](InlineResponse20085.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putsaveSearchesById"></a>
# **putsaveSearchesById**
> InlineResponse20124 putsaveSearchesById(id, opts)

Update all fields on saveSearches

Update all fields on saveSearches

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.SaveSearches() // SaveSearches | 
};
apiInstance.putsaveSearchesById(id, opts, (error, data, response) => {
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
 **body** | [**SaveSearches**](SaveSearches.md)|  | [optional] 

### Return type

[**InlineResponse20124**](InlineResponse20124.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putvideoWallPresetsById"></a>
# **putvideoWallPresetsById**
> InlineResponse20131 putvideoWallPresetsById(id, opts)

Update all fields on Video wall preset

Video wall preset

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.VideoWallPresets() // VideoWallPresets | 
};
apiInstance.putvideoWallPresetsById(id, opts, (error, data, response) => {
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
 **body** | [**VideoWallPresets**](VideoWallPresets.md)|  | [optional] 

### Return type

[**InlineResponse20131**](InlineResponse20131.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putvideoWallsById"></a>
# **putvideoWallsById**
> InlineResponse20129 putvideoWallsById(id, opts)

Update all fields on Video wall

Video wall

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.VideoWalls() // VideoWalls | 
};
apiInstance.putvideoWallsById(id, opts, (error, data, response) => {
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
 **body** | [**VideoWalls**](VideoWalls.md)|  | [optional] 

### Return type

[**InlineResponse20129**](InlineResponse20129.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putviewGroupsById"></a>
# **putviewGroupsById**
> InlineResponse20132 putviewGroupsById(id, opts)

Update all fields on View groups

View groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.ViewGroups() // ViewGroups | 
};
apiInstance.putviewGroupsById(id, opts, (error, data, response) => {
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
 **body** | [**ViewGroups**](ViewGroups.md)|  | [optional] 

### Return type

[**InlineResponse20132**](InlineResponse20132.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putviewsById"></a>
# **putviewsById**
> InlineResponse200182 putviewsById(id, opts)

Update all fields on View folder

View folder

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.Views() // Views | 
};
apiInstance.putviewsById(id, opts, (error, data, response) => {
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
 **body** | [**Views**](Views.md)|  | [optional] 

### Return type

[**InlineResponse200182**](InlineResponse200182.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

