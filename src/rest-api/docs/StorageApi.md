# MilestoneIntegrationPlatformVmsResTfulApi.StorageApi

All URIs are relative to *https://localhost/API/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deletestoragesByIdarchiveStorages**](StorageApi.md#deletestoragesByIdarchiveStorages) | **DELETE** /storages/{idParent}/archiveStorages/{id} | Remove a archiveStorages from a storages
[**getAllarchiveStorageInformation**](StorageApi.md#getAllarchiveStorageInformation) | **GET** /archiveStorageInformation | Get array of all archiveStorageInformation
[**getAllarchiveStoragesInAstorages**](StorageApi.md#getAllarchiveStoragesInAstorages) | **GET** /storages/{id}/archiveStorages | Get array of all archiveStorages
[**getAllstorageInformation**](StorageApi.md#getAllstorageInformation) | **GET** /storageInformation | Get array of all storageInformation
[**getOnearchiveStoragesInAstorages**](StorageApi.md#getOnearchiveStoragesInAstorages) | **GET** /storages/{idParent}/archiveStorages/{id} | Get specific archiveStorages
[**getarchiveStorageInformationById**](StorageApi.md#getarchiveStorageInformationById) | **GET** /archiveStorageInformation/{id} | Get specific object of archiveStorageInformation
[**getstorageInformationById**](StorageApi.md#getstorageInformationById) | **GET** /storageInformation/{id} | Get specific object of storageInformation
[**patcharchiveStorageInformationById**](StorageApi.md#patcharchiveStorageInformationById) | **PATCH** /archiveStorageInformation/{id} | Update provided fields on archiveStorageInformation
[**patchstorageInformationById**](StorageApi.md#patchstorageInformationById) | **PATCH** /storageInformation/{id} | Update provided fields on storageInformation
[**postTaskForarchiveStorages**](StorageApi.md#postTaskForarchiveStorages) | **POST** /archiveStorages/{id} | Perform a task
[**postTaskForstorages**](StorageApi.md#postTaskForstorages) | **POST** /storages/{id} | Perform a task
[**poststoragesByIdarchiveStorages**](StorageApi.md#poststoragesByIdarchiveStorages) | **POST** /storages/{id}/archiveStorages | Add a archiveStorages to a storages
[**putarchiveStorageInformationById**](StorageApi.md#putarchiveStorageInformationById) | **PUT** /archiveStorageInformation/{id} | Update all fields on archiveStorageInformation
[**putstorageInformationById**](StorageApi.md#putstorageInformationById) | **PUT** /storageInformation/{id} | Update all fields on storageInformation

<a name="deletestoragesByIdarchiveStorages"></a>
# **deletestoragesByIdarchiveStorages**
> InlineResponse20126 deletestoragesByIdarchiveStorages(idParent, id)

Remove a archiveStorages from a storages

Storage

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.StorageApi();
let idParent = "idParent_example"; // String | Id of parent object
let id = "id_example"; // String | Id of the object

apiInstance.deletestoragesByIdarchiveStorages(idParent, id, (error, data, response) => {
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

[**InlineResponse20126**](InlineResponse20126.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllarchiveStorageInformation"></a>
# **getAllarchiveStorageInformation**
> InlineResponse20012 getAllarchiveStorageInformation()

Get array of all archiveStorageInformation

Get array of all archiveStorageInformation

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.StorageApi();
apiInstance.getAllarchiveStorageInformation((error, data, response) => {
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

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllarchiveStoragesInAstorages"></a>
# **getAllarchiveStoragesInAstorages**
> InlineResponse200154 getAllarchiveStoragesInAstorages(id)

Get array of all archiveStorages

Storage

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.StorageApi();
let id = "id_example"; // String | Id of the storage object

apiInstance.getAllarchiveStoragesInAstorages(id, (error, data, response) => {
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
 **id** | **String**| Id of the storage object | 

### Return type

[**InlineResponse200154**](InlineResponse200154.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllstorageInformation"></a>
# **getAllstorageInformation**
> InlineResponse200156 getAllstorageInformation()

Get array of all storageInformation

Get array of all storageInformation

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.StorageApi();
apiInstance.getAllstorageInformation((error, data, response) => {
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

[**InlineResponse200156**](InlineResponse200156.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOnearchiveStoragesInAstorages"></a>
# **getOnearchiveStoragesInAstorages**
> InlineResponse200154 getOnearchiveStoragesInAstorages(idParent, id)

Get specific archiveStorages

Storage

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.StorageApi();
let idParent = "idParent_example"; // String | Id of parent object
let id = "id_example"; // String | Id of the object

apiInstance.getOnearchiveStoragesInAstorages(idParent, id, (error, data, response) => {
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

[**InlineResponse200154**](InlineResponse200154.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getarchiveStorageInformationById"></a>
# **getarchiveStorageInformationById**
> InlineResponse20013 getarchiveStorageInformationById(id, opts)

Get specific object of archiveStorageInformation

Get specific object of archiveStorageInformation

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.StorageApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getarchiveStorageInformationById(id, opts, (error, data, response) => {
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

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getstorageInformationById"></a>
# **getstorageInformationById**
> InlineResponse200157 getstorageInformationById(id, opts)

Get specific object of storageInformation

Get specific object of storageInformation

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.StorageApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getstorageInformationById(id, opts, (error, data, response) => {
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

[**InlineResponse200157**](InlineResponse200157.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patcharchiveStorageInformationById"></a>
# **patcharchiveStorageInformationById**
> InlineResponse20014 patcharchiveStorageInformationById(id, opts)

Update provided fields on archiveStorageInformation

Update provided fields on archiveStorageInformation

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.StorageApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.ArchiveStorageInformation() // ArchiveStorageInformation | 
};
apiInstance.patcharchiveStorageInformationById(id, opts, (error, data, response) => {
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
 **body** | [**ArchiveStorageInformation**](ArchiveStorageInformation.md)|  | [optional] 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchstorageInformationById"></a>
# **patchstorageInformationById**
> InlineResponse200158 patchstorageInformationById(id, opts)

Update provided fields on storageInformation

Update provided fields on storageInformation

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.StorageApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.StorageInformation() // StorageInformation | 
};
apiInstance.patchstorageInformationById(id, opts, (error, data, response) => {
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
 **body** | [**StorageInformation**](StorageInformation.md)|  | [optional] 

### Return type

[**InlineResponse200158**](InlineResponse200158.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postTaskForarchiveStorages"></a>
# **postTaskForarchiveStorages**
> InlineResponse20011 postTaskForarchiveStorages(id, task, opts)

Perform a task

Archives

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.StorageApi();
let id = "id_example"; // String | Id of the object
let task = "task_example"; // String | task=ReadArchiveStorageInformation, or task=SetFramerateReductionArchiveStorage, or task=MoveArchiveStorage
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.ArchiveStoragesIdBody() // ArchiveStoragesIdBody | 
};
apiInstance.postTaskForarchiveStorages(id, task, opts, (error, data, response) => {
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
 **task** | **String**| task&#x3D;ReadArchiveStorageInformation, or task&#x3D;SetFramerateReductionArchiveStorage, or task&#x3D;MoveArchiveStorage | 
 **body** | [**ArchiveStoragesIdBody**](ArchiveStoragesIdBody.md)|  | [optional] 

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postTaskForstorages"></a>
# **postTaskForstorages**
> InlineResponse200155 postTaskForstorages(id, task, opts)

Perform a task

Storage

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.StorageApi();
let id = "id_example"; // String | Id of the object
let task = "task_example"; // String | task=GetDevicesUsingStorage, or task=ReadStorageInformation, or task=SetStorageAsDefault, or task=EnableEncryption, or task=MoveRecordingStorage
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.StoragesIdBody() // StoragesIdBody | 
};
apiInstance.postTaskForstorages(id, task, opts, (error, data, response) => {
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
 **task** | **String**| task&#x3D;GetDevicesUsingStorage, or task&#x3D;ReadStorageInformation, or task&#x3D;SetStorageAsDefault, or task&#x3D;EnableEncryption, or task&#x3D;MoveRecordingStorage | 
 **body** | [**StoragesIdBody**](StoragesIdBody.md)|  | [optional] 

### Return type

[**InlineResponse200155**](InlineResponse200155.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="poststoragesByIdarchiveStorages"></a>
# **poststoragesByIdarchiveStorages**
> InlineResponse20126 poststoragesByIdarchiveStorages(id, opts)

Add a archiveStorages to a storages

Storage

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.StorageApi();
let id = "id_example"; // String | Id of the storage object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.ArchiveStorages() // ArchiveStorages | 
};
apiInstance.poststoragesByIdarchiveStorages(id, opts, (error, data, response) => {
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
 **id** | **String**| Id of the storage object | 
 **body** | [**ArchiveStorages**](ArchiveStorages.md)|  | [optional] 

### Return type

[**InlineResponse20126**](InlineResponse20126.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putarchiveStorageInformationById"></a>
# **putarchiveStorageInformationById**
> InlineResponse20014 putarchiveStorageInformationById(id, opts)

Update all fields on archiveStorageInformation

Update all fields on archiveStorageInformation

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.StorageApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.ArchiveStorageInformation() // ArchiveStorageInformation | 
};
apiInstance.putarchiveStorageInformationById(id, opts, (error, data, response) => {
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
 **body** | [**ArchiveStorageInformation**](ArchiveStorageInformation.md)|  | [optional] 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putstorageInformationById"></a>
# **putstorageInformationById**
> InlineResponse200158 putstorageInformationById(id, opts)

Update all fields on storageInformation

Update all fields on storageInformation

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.StorageApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.StorageInformation() // StorageInformation | 
};
apiInstance.putstorageInformationById(id, opts, (error, data, response) => {
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
 **body** | [**StorageInformation**](StorageInformation.md)|  | [optional] 

### Return type

[**InlineResponse200158**](InlineResponse200158.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

