# MilestoneIntegrationPlatformVmsResTfulApi.EventsApi

All URIs are relative to *https://localhost/API/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteanalyticsEventsById**](EventsApi.md#deleteanalyticsEventsById) | **DELETE** /analyticsEvents/{id} | Delete a analyticsEvents
[**deletegenericEventDataSourcesById**](EventsApi.md#deletegenericEventDataSourcesById) | **DELETE** /genericEventDataSources/{id} | Delete a genericEventDataSources
[**deletegenericEventsById**](EventsApi.md#deletegenericEventsById) | **DELETE** /genericEvents/{id} | Delete a genericEvents
[**deleteuserDefinedEventsById**](EventsApi.md#deleteuserDefinedEventsById) | **DELETE** /userDefinedEvents/{id} | Delete a userDefinedEvents
[**getAllanalyticsEvents**](EventsApi.md#getAllanalyticsEvents) | **GET** /analyticsEvents | Get array of all Analytics event
[**getAllanalyticsEventsInAeventTypeGroups**](EventsApi.md#getAllanalyticsEventsInAeventTypeGroups) | **GET** /eventTypeGroups/{id}/analyticsEvents | Get array of all analyticsEvents
[**getAlleventTypeGroups**](EventsApi.md#getAlleventTypeGroups) | **GET** /eventTypeGroups | Get array of all Event Group
[**getAlleventTypesInAeventTypeGroups**](EventsApi.md#getAlleventTypesInAeventTypeGroups) | **GET** /eventTypeGroups/{id}/eventTypes | Get array of all eventTypes
[**getAllgenericEventDataSources**](EventsApi.md#getAllgenericEventDataSources) | **GET** /genericEventDataSources | Get array of all enabled Generic event data sources
[**getAllgenericEvents**](EventsApi.md#getAllgenericEvents) | **GET** /genericEvents | Get array of all enabled Generic events
[**getAllgenericEventsInAeventTypeGroups**](EventsApi.md#getAllgenericEventsInAeventTypeGroups) | **GET** /eventTypeGroups/{id}/genericEvents | Get array of all genericEvents
[**getAlluserDefinedEvents**](EventsApi.md#getAlluserDefinedEvents) | **GET** /userDefinedEvents | Get array of all User-defined event
[**getAlluserDefinedEventsInAeventTypeGroups**](EventsApi.md#getAlluserDefinedEventsInAeventTypeGroups) | **GET** /eventTypeGroups/{id}/userDefinedEvents | Get array of all userDefinedEvents
[**getanalyticsEventsById**](EventsApi.md#getanalyticsEventsById) | **GET** /analyticsEvents/{id} | Get specific object of Analytics event
[**geteventTypeGroupsById**](EventsApi.md#geteventTypeGroupsById) | **GET** /eventTypeGroups/{id} | Get specific object of Event Group
[**geteventTypesById**](EventsApi.md#geteventTypesById) | **GET** /eventTypes/{id} | Get specific object of Events
[**getgenericEventDataSourcesById**](EventsApi.md#getgenericEventDataSourcesById) | **GET** /genericEventDataSources/{id} | Get specific object of Generic event data sources
[**getgenericEventsById**](EventsApi.md#getgenericEventsById) | **GET** /genericEvents/{id} | Get specific object of Generic events
[**getuserDefinedEventsById**](EventsApi.md#getuserDefinedEventsById) | **GET** /userDefinedEvents/{id} | Get specific object of User-defined event
[**patchanalyticsEventsById**](EventsApi.md#patchanalyticsEventsById) | **PATCH** /analyticsEvents/{id} | Update provided fields on Analytics event
[**patcheventTypeGroupsById**](EventsApi.md#patcheventTypeGroupsById) | **PATCH** /eventTypeGroups/{id} | Update provided fields on Event Group
[**patcheventTypesById**](EventsApi.md#patcheventTypesById) | **PATCH** /eventTypes/{id} | Update provided fields on Events
[**patchgenericEventDataSourcesById**](EventsApi.md#patchgenericEventDataSourcesById) | **PATCH** /genericEventDataSources/{id} | Update provided fields on Generic event data sources
[**patchgenericEventsById**](EventsApi.md#patchgenericEventsById) | **PATCH** /genericEvents/{id} | Update provided fields on Generic events
[**patchuserDefinedEventsById**](EventsApi.md#patchuserDefinedEventsById) | **PATCH** /userDefinedEvents/{id} | Update provided fields on User-defined event
[**postTaskForuserDefinedEvents**](EventsApi.md#postTaskForuserDefinedEvents) | **POST** /userDefinedEvents/{id} | Perform a task
[**postanalyticsEventsById**](EventsApi.md#postanalyticsEventsById) | **POST** /analyticsEvents | Add new analyticsEvents
[**postgenericEventDataSourcesById**](EventsApi.md#postgenericEventDataSourcesById) | **POST** /genericEventDataSources | Add new genericEventDataSources
[**postgenericEventsById**](EventsApi.md#postgenericEventsById) | **POST** /genericEvents | Add new genericEvents
[**postuserDefinedEventsById**](EventsApi.md#postuserDefinedEventsById) | **POST** /userDefinedEvents | Add new userDefinedEvents
[**putanalyticsEventsById**](EventsApi.md#putanalyticsEventsById) | **PUT** /analyticsEvents/{id} | Update all fields on Analytics event
[**puteventTypeGroupsById**](EventsApi.md#puteventTypeGroupsById) | **PUT** /eventTypeGroups/{id} | Update all fields on Event Group
[**puteventTypesById**](EventsApi.md#puteventTypesById) | **PUT** /eventTypes/{id} | Update all fields on Events
[**putgenericEventDataSourcesById**](EventsApi.md#putgenericEventDataSourcesById) | **PUT** /genericEventDataSources/{id} | Update all fields on Generic event data sources
[**putgenericEventsById**](EventsApi.md#putgenericEventsById) | **PUT** /genericEvents/{id} | Update all fields on Generic events
[**putuserDefinedEventsById**](EventsApi.md#putuserDefinedEventsById) | **PUT** /userDefinedEvents/{id} | Update all fields on User-defined event

<a name="deleteanalyticsEventsById"></a>
# **deleteanalyticsEventsById**
> InlineResponse2011 deleteanalyticsEventsById(id)

Delete a analyticsEvents

Analytics event

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.EventsApi();
let id = "id_example"; // String | Id of the object

apiInstance.deleteanalyticsEventsById(id, (error, data, response) => {
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

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletegenericEventDataSourcesById"></a>
# **deletegenericEventDataSourcesById**
> InlineResponse20110 deletegenericEventDataSourcesById(id)

Delete a genericEventDataSources

Generic event data sources

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.EventsApi();
let id = "id_example"; // String | Id of the object

apiInstance.deletegenericEventDataSourcesById(id, (error, data, response) => {
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

[**InlineResponse20110**](InlineResponse20110.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletegenericEventsById"></a>
# **deletegenericEventsById**
> InlineResponse2019 deletegenericEventsById(id)

Delete a genericEvents

Generic events

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.EventsApi();
let id = "id_example"; // String | Id of the object

apiInstance.deletegenericEventsById(id, (error, data, response) => {
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

[**InlineResponse2019**](InlineResponse2019.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteuserDefinedEventsById"></a>
# **deleteuserDefinedEventsById**
> InlineResponse20128 deleteuserDefinedEventsById(id)

Delete a userDefinedEvents

User-defined event

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.EventsApi();
let id = "id_example"; // String | Id of the object

apiInstance.deleteuserDefinedEventsById(id, (error, data, response) => {
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

[**InlineResponse20128**](InlineResponse20128.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllanalyticsEvents"></a>
# **getAllanalyticsEvents**
> InlineResponse2009 getAllanalyticsEvents()

Get array of all Analytics event

Analytics event

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.EventsApi();
apiInstance.getAllanalyticsEvents((error, data, response) => {
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

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllanalyticsEventsInAeventTypeGroups"></a>
# **getAllanalyticsEventsInAeventTypeGroups**
> InlineResponse2009 getAllanalyticsEventsInAeventTypeGroups(id)

Get array of all analyticsEvents

Event Group

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.EventsApi();
let id = "id_example"; // String | Id of the eventTypeGroup object

apiInstance.getAllanalyticsEventsInAeventTypeGroups(id, (error, data, response) => {
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
 **id** | **String**| Id of the eventTypeGroup object | 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAlleventTypeGroups"></a>
# **getAlleventTypeGroups**
> InlineResponse20046 getAlleventTypeGroups()

Get array of all Event Group

Event Group

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.EventsApi();
apiInstance.getAlleventTypeGroups((error, data, response) => {
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

[**InlineResponse20046**](InlineResponse20046.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAlleventTypesInAeventTypeGroups"></a>
# **getAlleventTypesInAeventTypeGroups**
> InlineResponse20049 getAlleventTypesInAeventTypeGroups(id)

Get array of all eventTypes

Event Group

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.EventsApi();
let id = "id_example"; // String | Id of the eventTypeGroup object

apiInstance.getAlleventTypesInAeventTypeGroups(id, (error, data, response) => {
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
 **id** | **String**| Id of the eventTypeGroup object | 

### Return type

[**InlineResponse20049**](InlineResponse20049.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllgenericEventDataSources"></a>
# **getAllgenericEventDataSources**
> InlineResponse20059 getAllgenericEventDataSources()

Get array of all enabled Generic event data sources

Generic event data sources. To include disabled items add ?disabled to the request.

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.EventsApi();
apiInstance.getAllgenericEventDataSources((error, data, response) => {
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

[**InlineResponse20059**](InlineResponse20059.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllgenericEvents"></a>
# **getAllgenericEvents**
> InlineResponse20050 getAllgenericEvents()

Get array of all enabled Generic events

Generic events. To include disabled items add ?disabled to the request.

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.EventsApi();
apiInstance.getAllgenericEvents((error, data, response) => {
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

[**InlineResponse20050**](InlineResponse20050.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllgenericEventsInAeventTypeGroups"></a>
# **getAllgenericEventsInAeventTypeGroups**
> InlineResponse20050 getAllgenericEventsInAeventTypeGroups(id)

Get array of all genericEvents

Event Group

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.EventsApi();
let id = "id_example"; // String | Id of the eventTypeGroup object

apiInstance.getAllgenericEventsInAeventTypeGroups(id, (error, data, response) => {
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
 **id** | **String**| Id of the eventTypeGroup object | 

### Return type

[**InlineResponse20050**](InlineResponse20050.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAlluserDefinedEvents"></a>
# **getAlluserDefinedEvents**
> InlineResponse20051 getAlluserDefinedEvents()

Get array of all User-defined event

User-defined event

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.EventsApi();
apiInstance.getAlluserDefinedEvents((error, data, response) => {
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

[**InlineResponse20051**](InlineResponse20051.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAlluserDefinedEventsInAeventTypeGroups"></a>
# **getAlluserDefinedEventsInAeventTypeGroups**
> InlineResponse20051 getAlluserDefinedEventsInAeventTypeGroups(id)

Get array of all userDefinedEvents

Event Group

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.EventsApi();
let id = "id_example"; // String | Id of the eventTypeGroup object

apiInstance.getAlluserDefinedEventsInAeventTypeGroups(id, (error, data, response) => {
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
 **id** | **String**| Id of the eventTypeGroup object | 

### Return type

[**InlineResponse20051**](InlineResponse20051.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getanalyticsEventsById"></a>
# **getanalyticsEventsById**
> InlineResponse20010 getanalyticsEventsById(id, opts)

Get specific object of Analytics event

Analytics event

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.EventsApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getanalyticsEventsById(id, opts, (error, data, response) => {
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

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="geteventTypeGroupsById"></a>
# **geteventTypeGroupsById**
> InlineResponse20047 geteventTypeGroupsById(id, opts)

Get specific object of Event Group

Event Group

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.EventsApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.geteventTypeGroupsById(id, opts, (error, data, response) => {
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

[**InlineResponse20047**](InlineResponse20047.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="geteventTypesById"></a>
# **geteventTypesById**
> InlineResponse20044 geteventTypesById(id, opts)

Get specific object of Events

Events

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.EventsApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.geteventTypesById(id, opts, (error, data, response) => {
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

[**InlineResponse20044**](InlineResponse20044.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getgenericEventDataSourcesById"></a>
# **getgenericEventDataSourcesById**
> InlineResponse20060 getgenericEventDataSourcesById(id, opts)

Get specific object of Generic event data sources

Generic event data sources

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.EventsApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getgenericEventDataSourcesById(id, opts, (error, data, response) => {
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

[**InlineResponse20060**](InlineResponse20060.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getgenericEventsById"></a>
# **getgenericEventsById**
> InlineResponse20058 getgenericEventsById(id, opts)

Get specific object of Generic events

Generic events

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.EventsApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getgenericEventsById(id, opts, (error, data, response) => {
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

[**InlineResponse20058**](InlineResponse20058.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getuserDefinedEventsById"></a>
# **getuserDefinedEventsById**
> InlineResponse200174 getuserDefinedEventsById(id, opts)

Get specific object of User-defined event

User-defined event

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.EventsApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getuserDefinedEventsById(id, opts, (error, data, response) => {
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

[**InlineResponse200174**](InlineResponse200174.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchanalyticsEventsById"></a>
# **patchanalyticsEventsById**
> InlineResponse2011 patchanalyticsEventsById(id, opts)

Update provided fields on Analytics event

Analytics event

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.EventsApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.AnalyticsEvents() // AnalyticsEvents | 
};
apiInstance.patchanalyticsEventsById(id, opts, (error, data, response) => {
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
 **body** | [**AnalyticsEvents**](AnalyticsEvents.md)|  | [optional] 

### Return type

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patcheventTypeGroupsById"></a>
# **patcheventTypeGroupsById**
> InlineResponse20048 patcheventTypeGroupsById(id, opts)

Update provided fields on Event Group

Event Group

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.EventsApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.EventTypeGroups() // EventTypeGroups | 
};
apiInstance.patcheventTypeGroupsById(id, opts, (error, data, response) => {
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
 **body** | [**EventTypeGroups**](EventTypeGroups.md)|  | [optional] 

### Return type

[**InlineResponse20048**](InlineResponse20048.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patcheventTypesById"></a>
# **patcheventTypesById**
> InlineResponse20045 patcheventTypesById(id, opts)

Update provided fields on Events

Events

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.EventsApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.EventTypes() // EventTypes | 
};
apiInstance.patcheventTypesById(id, opts, (error, data, response) => {
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
 **body** | [**EventTypes**](EventTypes.md)|  | [optional] 

### Return type

[**InlineResponse20045**](InlineResponse20045.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchgenericEventDataSourcesById"></a>
# **patchgenericEventDataSourcesById**
> InlineResponse20110 patchgenericEventDataSourcesById(id, opts)

Update provided fields on Generic event data sources

Generic event data sources

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.EventsApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.GenericEventDataSources() // GenericEventDataSources | 
};
apiInstance.patchgenericEventDataSourcesById(id, opts, (error, data, response) => {
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
 **body** | [**GenericEventDataSources**](GenericEventDataSources.md)|  | [optional] 

### Return type

[**InlineResponse20110**](InlineResponse20110.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchgenericEventsById"></a>
# **patchgenericEventsById**
> InlineResponse2019 patchgenericEventsById(id, opts)

Update provided fields on Generic events

Generic events

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.EventsApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.GenericEvents() // GenericEvents | 
};
apiInstance.patchgenericEventsById(id, opts, (error, data, response) => {
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
 **body** | [**GenericEvents**](GenericEvents.md)|  | [optional] 

### Return type

[**InlineResponse2019**](InlineResponse2019.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchuserDefinedEventsById"></a>
# **patchuserDefinedEventsById**
> InlineResponse20128 patchuserDefinedEventsById(id, opts)

Update provided fields on User-defined event

User-defined event

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.EventsApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.UserDefinedEvents() // UserDefinedEvents | 
};
apiInstance.patchuserDefinedEventsById(id, opts, (error, data, response) => {
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
 **body** | [**UserDefinedEvents**](UserDefinedEvents.md)|  | [optional] 

### Return type

[**InlineResponse20128**](InlineResponse20128.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postTaskForuserDefinedEvents"></a>
# **postTaskForuserDefinedEvents**
> InlineResponse20080 postTaskForuserDefinedEvents(id, task, opts)

Perform a task

User-defined event

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.EventsApi();
let id = "id_example"; // String | Id of the object
let task = "task_example"; // String | task=ChangeSecurityPermissions
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.ChangeSecurityPermissionsRequestBody() // ChangeSecurityPermissionsRequestBody | 
};
apiInstance.postTaskForuserDefinedEvents(id, task, opts, (error, data, response) => {
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

<a name="postanalyticsEventsById"></a>
# **postanalyticsEventsById**
> InlineResponse2011 postanalyticsEventsById(opts)

Add new analyticsEvents

Analytics event

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.EventsApi();
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.AnalyticsEvents() // AnalyticsEvents | 
};
apiInstance.postanalyticsEventsById(opts, (error, data, response) => {
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
 **body** | [**AnalyticsEvents**](AnalyticsEvents.md)|  | [optional] 

### Return type

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postgenericEventDataSourcesById"></a>
# **postgenericEventDataSourcesById**
> InlineResponse20110 postgenericEventDataSourcesById(opts)

Add new genericEventDataSources

Generic event data sources

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.EventsApi();
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.GenericEventDataSources() // GenericEventDataSources | 
};
apiInstance.postgenericEventDataSourcesById(opts, (error, data, response) => {
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
 **body** | [**GenericEventDataSources**](GenericEventDataSources.md)|  | [optional] 

### Return type

[**InlineResponse20110**](InlineResponse20110.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postgenericEventsById"></a>
# **postgenericEventsById**
> InlineResponse2019 postgenericEventsById(opts)

Add new genericEvents

Generic events

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.EventsApi();
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.GenericEvents() // GenericEvents | 
};
apiInstance.postgenericEventsById(opts, (error, data, response) => {
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
 **body** | [**GenericEvents**](GenericEvents.md)|  | [optional] 

### Return type

[**InlineResponse2019**](InlineResponse2019.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postuserDefinedEventsById"></a>
# **postuserDefinedEventsById**
> InlineResponse20128 postuserDefinedEventsById(opts)

Add new userDefinedEvents

User-defined event

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.EventsApi();
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.UserDefinedEvents() // UserDefinedEvents | 
};
apiInstance.postuserDefinedEventsById(opts, (error, data, response) => {
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
 **body** | [**UserDefinedEvents**](UserDefinedEvents.md)|  | [optional] 

### Return type

[**InlineResponse20128**](InlineResponse20128.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putanalyticsEventsById"></a>
# **putanalyticsEventsById**
> InlineResponse2011 putanalyticsEventsById(id, opts)

Update all fields on Analytics event

Analytics event

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.EventsApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.AnalyticsEvents() // AnalyticsEvents | 
};
apiInstance.putanalyticsEventsById(id, opts, (error, data, response) => {
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
 **body** | [**AnalyticsEvents**](AnalyticsEvents.md)|  | [optional] 

### Return type

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="puteventTypeGroupsById"></a>
# **puteventTypeGroupsById**
> InlineResponse20048 puteventTypeGroupsById(id, opts)

Update all fields on Event Group

Event Group

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.EventsApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.EventTypeGroups() // EventTypeGroups | 
};
apiInstance.puteventTypeGroupsById(id, opts, (error, data, response) => {
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
 **body** | [**EventTypeGroups**](EventTypeGroups.md)|  | [optional] 

### Return type

[**InlineResponse20048**](InlineResponse20048.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="puteventTypesById"></a>
# **puteventTypesById**
> InlineResponse20045 puteventTypesById(id, opts)

Update all fields on Events

Events

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.EventsApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.EventTypes() // EventTypes | 
};
apiInstance.puteventTypesById(id, opts, (error, data, response) => {
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
 **body** | [**EventTypes**](EventTypes.md)|  | [optional] 

### Return type

[**InlineResponse20045**](InlineResponse20045.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putgenericEventDataSourcesById"></a>
# **putgenericEventDataSourcesById**
> InlineResponse20110 putgenericEventDataSourcesById(id, opts)

Update all fields on Generic event data sources

Generic event data sources

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.EventsApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.GenericEventDataSources() // GenericEventDataSources | 
};
apiInstance.putgenericEventDataSourcesById(id, opts, (error, data, response) => {
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
 **body** | [**GenericEventDataSources**](GenericEventDataSources.md)|  | [optional] 

### Return type

[**InlineResponse20110**](InlineResponse20110.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putgenericEventsById"></a>
# **putgenericEventsById**
> InlineResponse2019 putgenericEventsById(id, opts)

Update all fields on Generic events

Generic events

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.EventsApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.GenericEvents() // GenericEvents | 
};
apiInstance.putgenericEventsById(id, opts, (error, data, response) => {
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
 **body** | [**GenericEvents**](GenericEvents.md)|  | [optional] 

### Return type

[**InlineResponse2019**](InlineResponse2019.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putuserDefinedEventsById"></a>
# **putuserDefinedEventsById**
> InlineResponse20128 putuserDefinedEventsById(id, opts)

Update all fields on User-defined event

User-defined event

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.EventsApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.UserDefinedEvents() // UserDefinedEvents | 
};
apiInstance.putuserDefinedEventsById(id, opts, (error, data, response) => {
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
 **body** | [**UserDefinedEvents**](UserDefinedEvents.md)|  | [optional] 

### Return type

[**InlineResponse20128**](InlineResponse20128.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

