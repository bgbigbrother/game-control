# MilestoneIntegrationPlatformVmsResTfulApi.VAPApi

All URIs are relative to *https://localhost/API/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deletealarmDefinitionsById**](VAPApi.md#deletealarmDefinitionsById) | **DELETE** /alarmDefinitions/{id} | Delete a alarmDefinitions
[**deletelprMatchListsById**](VAPApi.md#deletelprMatchListsById) | **DELETE** /lprMatchLists/{id} | Delete a lprMatchLists
[**deletemipKindsById**](VAPApi.md#deletemipKindsById) | **DELETE** /mipKinds/{id} | Delete a mipKinds
[**deletemipKindsByIdmipItems**](VAPApi.md#deletemipKindsByIdmipItems) | **DELETE** /mipKinds/{idParent}/mipItems/{id} | Remove a mipItems from a mipKinds
[**getAllaccessControlSystems**](VAPApi.md#getAllaccessControlSystems) | **GET** /accessControlSystems | Get array of all Access control systems
[**getAllaccessControlUnits**](VAPApi.md#getAllaccessControlUnits) | **GET** /accessControlUnits | Get array of all Access control units
[**getAllaccessControlUnitsInAaccessControlSystems**](VAPApi.md#getAllaccessControlUnitsInAaccessControlSystems) | **GET** /accessControlSystems/{id}/accessControlUnits | Get array of all accessControlUnits
[**getAllaccessControlUnitsInAaccessControlUnits**](VAPApi.md#getAllaccessControlUnitsInAaccessControlUnits) | **GET** /accessControlUnits/{id}/accessControlUnits | Get array of all accessControlUnits
[**getAllalarmDefinitions**](VAPApi.md#getAllalarmDefinitions) | **GET** /alarmDefinitions | Get array of all enabled Alarm definitions
[**getAlllprMatchLists**](VAPApi.md#getAlllprMatchLists) | **GET** /lprMatchLists | Get array of all lprMatchLists
[**getAllmipItems**](VAPApi.md#getAllmipItems) | **GET** /mipItems | Get array of all enabled Item folder
[**getAllmipItemsInAmipItems**](VAPApi.md#getAllmipItemsInAmipItems) | **GET** /mipItems/{id}/mipItems | Get array of all mipItems
[**getAllmipItemsInAmipKinds**](VAPApi.md#getAllmipItemsInAmipKinds) | **GET** /mipKinds/{id}/mipItems | Get array of all mipItems
[**getAllmipKinds**](VAPApi.md#getAllmipKinds) | **GET** /mipKinds | Get array of all MIP kinds
[**getaccessControlSystemsById**](VAPApi.md#getaccessControlSystemsById) | **GET** /accessControlSystems/{id} | Get specific object of Access control systems
[**getaccessControlUnitsById**](VAPApi.md#getaccessControlUnitsById) | **GET** /accessControlUnits/{id} | Get specific object of Access control units
[**getalarmDefinitionsById**](VAPApi.md#getalarmDefinitionsById) | **GET** /alarmDefinitions/{id} | Get specific object of Alarm definitions
[**getlprMatchListsById**](VAPApi.md#getlprMatchListsById) | **GET** /lprMatchLists/{id} | Get specific object of lprMatchLists
[**getmipItemsById**](VAPApi.md#getmipItemsById) | **GET** /mipItems/{id} | Get specific object of Item folder
[**getmipKindsById**](VAPApi.md#getmipKindsById) | **GET** /mipKinds/{id} | Get specific object of MIP kinds
[**patchaccessControlSystemsById**](VAPApi.md#patchaccessControlSystemsById) | **PATCH** /accessControlSystems/{id} | Update provided fields on Access control systems
[**patchaccessControlUnitsById**](VAPApi.md#patchaccessControlUnitsById) | **PATCH** /accessControlUnits/{id} | Update provided fields on Access control units
[**patchalarmDefinitionsById**](VAPApi.md#patchalarmDefinitionsById) | **PATCH** /alarmDefinitions/{id} | Update provided fields on Alarm definitions
[**patchlprMatchListsById**](VAPApi.md#patchlprMatchListsById) | **PATCH** /lprMatchLists/{id} | Update provided fields on lprMatchLists
[**patchmipItemsById**](VAPApi.md#patchmipItemsById) | **PATCH** /mipItems/{id} | Update provided fields on Item folder
[**patchmipKindsById**](VAPApi.md#patchmipKindsById) | **PATCH** /mipKinds/{id} | Update provided fields on MIP kinds
[**postTaskForaccessControlSystems**](VAPApi.md#postTaskForaccessControlSystems) | **POST** /accessControlSystems/{id} | Perform a task
[**postTaskForlprMatchLists**](VAPApi.md#postTaskForlprMatchLists) | **POST** /lprMatchLists/{id} | Perform a task
[**postalarmDefinitionsById**](VAPApi.md#postalarmDefinitionsById) | **POST** /alarmDefinitions | Add new alarmDefinitions
[**postlprMatchListsById**](VAPApi.md#postlprMatchListsById) | **POST** /lprMatchLists | Add new lprMatchLists
[**postmipKindsById**](VAPApi.md#postmipKindsById) | **POST** /mipKinds | Add new mipKinds, or task&#x3D;GetMIPOptionProperty, or task&#x3D;SetMIPOptionProperty, or task&#x3D;MIPItemDataVersionSum
[**postmipKindsByIdmipItems**](VAPApi.md#postmipKindsByIdmipItems) | **POST** /mipKinds/{id}/mipItems | Add a mipItems to a mipKinds
[**putaccessControlSystemsById**](VAPApi.md#putaccessControlSystemsById) | **PUT** /accessControlSystems/{id} | Update all fields on Access control systems
[**putaccessControlUnitsById**](VAPApi.md#putaccessControlUnitsById) | **PUT** /accessControlUnits/{id} | Update all fields on Access control units
[**putalarmDefinitionsById**](VAPApi.md#putalarmDefinitionsById) | **PUT** /alarmDefinitions/{id} | Update all fields on Alarm definitions
[**putlprMatchListsById**](VAPApi.md#putlprMatchListsById) | **PUT** /lprMatchLists/{id} | Update all fields on lprMatchLists
[**putmipItemsById**](VAPApi.md#putmipItemsById) | **PUT** /mipItems/{id} | Update all fields on Item folder
[**putmipKindsById**](VAPApi.md#putmipKindsById) | **PUT** /mipKinds/{id} | Update all fields on MIP kinds

<a name="deletealarmDefinitionsById"></a>
# **deletealarmDefinitionsById**
> InlineResponse201 deletealarmDefinitionsById(id)

Delete a alarmDefinitions

Alarm definitions

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.VAPApi();
let id = "id_example"; // String | Id of the object

apiInstance.deletealarmDefinitionsById(id, (error, data, response) => {
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

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletelprMatchListsById"></a>
# **deletelprMatchListsById**
> InlineResponse20116 deletelprMatchListsById(id)

Delete a lprMatchLists

Delete a lprMatchLists

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.VAPApi();
let id = "id_example"; // String | Id of the object

apiInstance.deletelprMatchListsById(id, (error, data, response) => {
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

[**InlineResponse20116**](InlineResponse20116.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletemipKindsById"></a>
# **deletemipKindsById**
> InlineResponse20119 deletemipKindsById(id)

Delete a mipKinds

MIP kinds

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.VAPApi();
let id = "id_example"; // String | Id of the object

apiInstance.deletemipKindsById(id, (error, data, response) => {
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

[**InlineResponse20119**](InlineResponse20119.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletemipKindsByIdmipItems"></a>
# **deletemipKindsByIdmipItems**
> InlineResponse200110 deletemipKindsByIdmipItems(idParent, id)

Remove a mipItems from a mipKinds

MIP kinds

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.VAPApi();
let idParent = "idParent_example"; // String | Id of parent object
let id = "id_example"; // String | Id of the object

apiInstance.deletemipKindsByIdmipItems(idParent, id, (error, data, response) => {
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

[**InlineResponse200110**](InlineResponse200110.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllaccessControlSystems"></a>
# **getAllaccessControlSystems**
> InlineResponse200 getAllaccessControlSystems()

Get array of all Access control systems

Access control systems

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.VAPApi();
apiInstance.getAllaccessControlSystems((error, data, response) => {
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

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllaccessControlUnits"></a>
# **getAllaccessControlUnits**
> InlineResponse2004 getAllaccessControlUnits()

Get array of all Access control units

Access control units

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.VAPApi();
apiInstance.getAllaccessControlUnits((error, data, response) => {
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

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllaccessControlUnitsInAaccessControlSystems"></a>
# **getAllaccessControlUnitsInAaccessControlSystems**
> InlineResponse2004 getAllaccessControlUnitsInAaccessControlSystems(id)

Get array of all accessControlUnits

Access control systems

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.VAPApi();
let id = "id_example"; // String | Id of the accessControlSystem object

apiInstance.getAllaccessControlUnitsInAaccessControlSystems(id, (error, data, response) => {
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
 **id** | **String**| Id of the accessControlSystem object | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllaccessControlUnitsInAaccessControlUnits"></a>
# **getAllaccessControlUnitsInAaccessControlUnits**
> InlineResponse2004 getAllaccessControlUnitsInAaccessControlUnits(id)

Get array of all accessControlUnits

Access control units

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.VAPApi();
let id = "id_example"; // String | Id of the accessControlUnit object

apiInstance.getAllaccessControlUnitsInAaccessControlUnits(id, (error, data, response) => {
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
 **id** | **String**| Id of the accessControlUnit object | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllalarmDefinitions"></a>
# **getAllalarmDefinitions**
> InlineResponse2007 getAllalarmDefinitions()

Get array of all enabled Alarm definitions

Alarm definitions. To include disabled items add ?disabled to the request.

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.VAPApi();
apiInstance.getAllalarmDefinitions((error, data, response) => {
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

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAlllprMatchLists"></a>
# **getAlllprMatchLists**
> InlineResponse20097 getAlllprMatchLists()

Get array of all lprMatchLists

Get array of all lprMatchLists

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.VAPApi();
apiInstance.getAlllprMatchLists((error, data, response) => {
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

[**InlineResponse20097**](InlineResponse20097.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllmipItems"></a>
# **getAllmipItems**
> InlineResponse200108 getAllmipItems()

Get array of all enabled Item folder

Item folder. To include disabled items add ?disabled to the request.

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.VAPApi();
apiInstance.getAllmipItems((error, data, response) => {
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

[**InlineResponse200108**](InlineResponse200108.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllmipItemsInAmipItems"></a>
# **getAllmipItemsInAmipItems**
> InlineResponse200108 getAllmipItemsInAmipItems(id)

Get array of all mipItems

Item folder

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.VAPApi();
let id = "id_example"; // String | Id of the mipItem object

apiInstance.getAllmipItemsInAmipItems(id, (error, data, response) => {
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
 **id** | **String**| Id of the mipItem object | 

### Return type

[**InlineResponse200108**](InlineResponse200108.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllmipItemsInAmipKinds"></a>
# **getAllmipItemsInAmipKinds**
> InlineResponse200108 getAllmipItemsInAmipKinds(id)

Get array of all mipItems

MIP kinds

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.VAPApi();
let id = "id_example"; // String | Id of the mipKind object

apiInstance.getAllmipItemsInAmipKinds(id, (error, data, response) => {
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
 **id** | **String**| Id of the mipKind object | 

### Return type

[**InlineResponse200108**](InlineResponse200108.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllmipKinds"></a>
# **getAllmipKinds**
> InlineResponse200111 getAllmipKinds()

Get array of all MIP kinds

MIP kinds

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.VAPApi();
apiInstance.getAllmipKinds((error, data, response) => {
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

[**InlineResponse200111**](InlineResponse200111.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getaccessControlSystemsById"></a>
# **getaccessControlSystemsById**
> InlineResponse2001 getaccessControlSystemsById(id, opts)

Get specific object of Access control systems

Access control systems

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.VAPApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getaccessControlSystemsById(id, opts, (error, data, response) => {
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

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getaccessControlUnitsById"></a>
# **getaccessControlUnitsById**
> InlineResponse2005 getaccessControlUnitsById(id, opts)

Get specific object of Access control units

Access control units

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.VAPApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getaccessControlUnitsById(id, opts, (error, data, response) => {
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

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getalarmDefinitionsById"></a>
# **getalarmDefinitionsById**
> InlineResponse2008 getalarmDefinitionsById(id, opts)

Get specific object of Alarm definitions

Alarm definitions

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.VAPApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getalarmDefinitionsById(id, opts, (error, data, response) => {
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

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getlprMatchListsById"></a>
# **getlprMatchListsById**
> InlineResponse20098 getlprMatchListsById(id, opts)

Get specific object of lprMatchLists

Get specific object of lprMatchLists

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.VAPApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getlprMatchListsById(id, opts, (error, data, response) => {
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

[**InlineResponse20098**](InlineResponse20098.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getmipItemsById"></a>
# **getmipItemsById**
> InlineResponse200109 getmipItemsById(id, opts)

Get specific object of Item folder

Item folder

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.VAPApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getmipItemsById(id, opts, (error, data, response) => {
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

[**InlineResponse200109**](InlineResponse200109.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getmipKindsById"></a>
# **getmipKindsById**
> InlineResponse200113 getmipKindsById(id, opts)

Get specific object of MIP kinds

MIP kinds

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.VAPApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getmipKindsById(id, opts, (error, data, response) => {
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

[**InlineResponse200113**](InlineResponse200113.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchaccessControlSystemsById"></a>
# **patchaccessControlSystemsById**
> InlineResponse2002 patchaccessControlSystemsById(id, opts)

Update provided fields on Access control systems

Access control systems

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.VAPApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.AccessControlSystems() // AccessControlSystems | 
};
apiInstance.patchaccessControlSystemsById(id, opts, (error, data, response) => {
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
 **body** | [**AccessControlSystems**](AccessControlSystems.md)|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchaccessControlUnitsById"></a>
# **patchaccessControlUnitsById**
> InlineResponse2006 patchaccessControlUnitsById(id, opts)

Update provided fields on Access control units

Access control units

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.VAPApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.AccessControlUnits() // AccessControlUnits | 
};
apiInstance.patchaccessControlUnitsById(id, opts, (error, data, response) => {
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
 **body** | [**AccessControlUnits**](AccessControlUnits.md)|  | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchalarmDefinitionsById"></a>
# **patchalarmDefinitionsById**
> InlineResponse201 patchalarmDefinitionsById(id, opts)

Update provided fields on Alarm definitions

Alarm definitions

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.VAPApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.AlarmDefinitions() // AlarmDefinitions | 
};
apiInstance.patchalarmDefinitionsById(id, opts, (error, data, response) => {
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
 **body** | [**AlarmDefinitions**](AlarmDefinitions.md)|  | [optional] 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchlprMatchListsById"></a>
# **patchlprMatchListsById**
> InlineResponse20116 patchlprMatchListsById(id, opts)

Update provided fields on lprMatchLists

Update provided fields on lprMatchLists

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.VAPApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.LprMatchLists() // LprMatchLists | 
};
apiInstance.patchlprMatchListsById(id, opts, (error, data, response) => {
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
 **body** | [**LprMatchLists**](LprMatchLists.md)|  | [optional] 

### Return type

[**InlineResponse20116**](InlineResponse20116.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchmipItemsById"></a>
# **patchmipItemsById**
> InlineResponse200110 patchmipItemsById(id, opts)

Update provided fields on Item folder

Item folder

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.VAPApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.MipItems() // MipItems | 
};
apiInstance.patchmipItemsById(id, opts, (error, data, response) => {
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
 **body** | [**MipItems**](MipItems.md)|  | [optional] 

### Return type

[**InlineResponse200110**](InlineResponse200110.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchmipKindsById"></a>
# **patchmipKindsById**
> InlineResponse20119 patchmipKindsById(id, opts)

Update provided fields on MIP kinds

MIP kinds

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.VAPApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.MipKinds() // MipKinds | 
};
apiInstance.patchmipKindsById(id, opts, (error, data, response) => {
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
 **body** | [**MipKinds**](MipKinds.md)|  | [optional] 

### Return type

[**InlineResponse20119**](InlineResponse20119.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postTaskForaccessControlSystems"></a>
# **postTaskForaccessControlSystems**
> InlineResponse2003 postTaskForaccessControlSystems(id, task, opts)

Perform a task

Access control systems

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.VAPApi();
let id = "id_example"; // String | Id of the object
let task = "task_example"; // String | task=GetInternalUnitPath
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.GetInternalUnitPathRequestBody() // GetInternalUnitPathRequestBody | 
};
apiInstance.postTaskForaccessControlSystems(id, task, opts, (error, data, response) => {
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
 **task** | **String**| task&#x3D;GetInternalUnitPath | 
 **body** | [**GetInternalUnitPathRequestBody**](GetInternalUnitPathRequestBody.md)|  | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postTaskForlprMatchLists"></a>
# **postTaskForlprMatchLists**
> InlineResponse20099 postTaskForlprMatchLists(id, task, opts)

Perform a task

Perform one of 5 tasks

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.VAPApi();
let id = "id_example"; // String | Id of the object
let task = "task_example"; // String | task=MethodIdGetCustomFieldsForRegistrationNumber, or task=MethodIdGetRegistrationNumbersInfo, or task=MethodIdAddOrEditRegistrationNumbersInfo, or task=MethodIdDeleteRegistrationNumbers, or task=MethodIdDeleteAllRegistrationNumbers
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.LprMatchListsIdBody() // LprMatchListsIdBody | 
};
apiInstance.postTaskForlprMatchLists(id, task, opts, (error, data, response) => {
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
 **task** | **String**| task&#x3D;MethodIdGetCustomFieldsForRegistrationNumber, or task&#x3D;MethodIdGetRegistrationNumbersInfo, or task&#x3D;MethodIdAddOrEditRegistrationNumbersInfo, or task&#x3D;MethodIdDeleteRegistrationNumbers, or task&#x3D;MethodIdDeleteAllRegistrationNumbers | 
 **body** | [**LprMatchListsIdBody**](LprMatchListsIdBody.md)|  | [optional] 

### Return type

[**InlineResponse20099**](InlineResponse20099.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postalarmDefinitionsById"></a>
# **postalarmDefinitionsById**
> InlineResponse201 postalarmDefinitionsById(opts)

Add new alarmDefinitions

Alarm definitions

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.VAPApi();
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.AlarmDefinitions() // AlarmDefinitions | 
};
apiInstance.postalarmDefinitionsById(opts, (error, data, response) => {
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
 **body** | [**AlarmDefinitions**](AlarmDefinitions.md)|  | [optional] 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postlprMatchListsById"></a>
# **postlprMatchListsById**
> InlineResponse20116 postlprMatchListsById(opts)

Add new lprMatchLists

Add new lprMatchLists

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.VAPApi();
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.LprMatchLists() // LprMatchLists | 
};
apiInstance.postlprMatchListsById(opts, (error, data, response) => {
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
 **body** | [**LprMatchLists**](LprMatchLists.md)|  | [optional] 

### Return type

[**InlineResponse20116**](InlineResponse20116.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postmipKindsById"></a>
# **postmipKindsById**
> InlineResponse200112 postmipKindsById(opts)

Add new mipKinds, or task&#x3D;GetMIPOptionProperty, or task&#x3D;SetMIPOptionProperty, or task&#x3D;MIPItemDataVersionSum

MIP kinds, or perform a task

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.VAPApi();
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.MipKindsBody() // MipKindsBody | 
};
apiInstance.postmipKindsById(opts, (error, data, response) => {
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
 **body** | [**MipKindsBody**](MipKindsBody.md)|  | [optional] 

### Return type

[**InlineResponse200112**](InlineResponse200112.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postmipKindsByIdmipItems"></a>
# **postmipKindsByIdmipItems**
> InlineResponse200110 postmipKindsByIdmipItems(id, opts)

Add a mipItems to a mipKinds

MIP kinds

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.VAPApi();
let id = "id_example"; // String | Id of the mipKind object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.MipItems() // MipItems | 
};
apiInstance.postmipKindsByIdmipItems(id, opts, (error, data, response) => {
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
 **id** | **String**| Id of the mipKind object | 
 **body** | [**MipItems**](MipItems.md)|  | [optional] 

### Return type

[**InlineResponse200110**](InlineResponse200110.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putaccessControlSystemsById"></a>
# **putaccessControlSystemsById**
> InlineResponse2002 putaccessControlSystemsById(id, opts)

Update all fields on Access control systems

Access control systems

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.VAPApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.AccessControlSystems() // AccessControlSystems | 
};
apiInstance.putaccessControlSystemsById(id, opts, (error, data, response) => {
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
 **body** | [**AccessControlSystems**](AccessControlSystems.md)|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putaccessControlUnitsById"></a>
# **putaccessControlUnitsById**
> InlineResponse2006 putaccessControlUnitsById(id, opts)

Update all fields on Access control units

Access control units

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.VAPApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.AccessControlUnits() // AccessControlUnits | 
};
apiInstance.putaccessControlUnitsById(id, opts, (error, data, response) => {
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
 **body** | [**AccessControlUnits**](AccessControlUnits.md)|  | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putalarmDefinitionsById"></a>
# **putalarmDefinitionsById**
> InlineResponse201 putalarmDefinitionsById(id, opts)

Update all fields on Alarm definitions

Alarm definitions

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.VAPApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.AlarmDefinitions() // AlarmDefinitions | 
};
apiInstance.putalarmDefinitionsById(id, opts, (error, data, response) => {
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
 **body** | [**AlarmDefinitions**](AlarmDefinitions.md)|  | [optional] 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putlprMatchListsById"></a>
# **putlprMatchListsById**
> InlineResponse20116 putlprMatchListsById(id, opts)

Update all fields on lprMatchLists

Update all fields on lprMatchLists

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.VAPApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.LprMatchLists() // LprMatchLists | 
};
apiInstance.putlprMatchListsById(id, opts, (error, data, response) => {
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
 **body** | [**LprMatchLists**](LprMatchLists.md)|  | [optional] 

### Return type

[**InlineResponse20116**](InlineResponse20116.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putmipItemsById"></a>
# **putmipItemsById**
> InlineResponse200110 putmipItemsById(id, opts)

Update all fields on Item folder

Item folder

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.VAPApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.MipItems() // MipItems | 
};
apiInstance.putmipItemsById(id, opts, (error, data, response) => {
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
 **body** | [**MipItems**](MipItems.md)|  | [optional] 

### Return type

[**InlineResponse200110**](InlineResponse200110.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putmipKindsById"></a>
# **putmipKindsById**
> InlineResponse20119 putmipKindsById(id, opts)

Update all fields on MIP kinds

MIP kinds

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.VAPApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.MipKinds() // MipKinds | 
};
apiInstance.putmipKindsById(id, opts, (error, data, response) => {
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
 **body** | [**MipKinds**](MipKinds.md)|  | [optional] 

### Return type

[**InlineResponse20119**](InlineResponse20119.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

