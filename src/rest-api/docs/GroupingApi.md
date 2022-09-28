# MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi

All URIs are relative to *https://localhost/API/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deletecameraGroupsById**](GroupingApi.md#deletecameraGroupsById) | **DELETE** /cameraGroups/{id} | Delete a cameraGroups
[**deletecameraGroupsByIdcameras**](GroupingApi.md#deletecameraGroupsByIdcameras) | **DELETE** /cameraGroups/{idParent}/cameras/{id} | Remove a cameras from a cameraGroups
[**deleteinputEventGroupsById**](GroupingApi.md#deleteinputEventGroupsById) | **DELETE** /inputEventGroups/{id} | Delete a inputEventGroups
[**deleteinputEventGroupsByIdinputEvents**](GroupingApi.md#deleteinputEventGroupsByIdinputEvents) | **DELETE** /inputEventGroups/{idParent}/inputEvents/{id} | Remove a inputEvents from a inputEventGroups
[**deletemetadataGroupsById**](GroupingApi.md#deletemetadataGroupsById) | **DELETE** /metadataGroups/{id} | Delete a metadataGroups
[**deletemetadataGroupsByIdmetadata**](GroupingApi.md#deletemetadataGroupsByIdmetadata) | **DELETE** /metadataGroups/{idParent}/metadata/{id} | Remove a metadata from a metadataGroups
[**deletemicrophoneGroupsById**](GroupingApi.md#deletemicrophoneGroupsById) | **DELETE** /microphoneGroups/{id} | Delete a microphoneGroups
[**deletemicrophoneGroupsByIdmicrophones**](GroupingApi.md#deletemicrophoneGroupsByIdmicrophones) | **DELETE** /microphoneGroups/{idParent}/microphones/{id} | Remove a microphones from a microphoneGroups
[**deleteoutputGroupsById**](GroupingApi.md#deleteoutputGroupsById) | **DELETE** /outputGroups/{id} | Delete a outputGroups
[**deleteoutputGroupsByIdoutputs**](GroupingApi.md#deleteoutputGroupsByIdoutputs) | **DELETE** /outputGroups/{idParent}/outputs/{id} | Remove a outputs from a outputGroups
[**deletespeakerGroupsById**](GroupingApi.md#deletespeakerGroupsById) | **DELETE** /speakerGroups/{id} | Delete a speakerGroups
[**deletespeakerGroupsByIdspeakers**](GroupingApi.md#deletespeakerGroupsByIdspeakers) | **DELETE** /speakerGroups/{idParent}/speakers/{id} | Remove a speakers from a speakerGroups
[**getAllcameraGroups**](GroupingApi.md#getAllcameraGroups) | **GET** /cameraGroups | Get array of all Camera groups
[**getAllcameraGroupsInAcameraGroups**](GroupingApi.md#getAllcameraGroupsInAcameraGroups) | **GET** /cameraGroups/{id}/cameraGroups | Get array of all cameraGroups
[**getAllcamerasInAcameraGroups**](GroupingApi.md#getAllcamerasInAcameraGroups) | **GET** /cameraGroups/{id}/cameras | Get array of all cameras
[**getAllinputEventGroups**](GroupingApi.md#getAllinputEventGroups) | **GET** /inputEventGroups | Get array of all Input groups
[**getAllinputEventGroupsInAinputEventGroups**](GroupingApi.md#getAllinputEventGroupsInAinputEventGroups) | **GET** /inputEventGroups/{id}/inputEventGroups | Get array of all inputEventGroups
[**getAllinputEventsInAinputEventGroups**](GroupingApi.md#getAllinputEventsInAinputEventGroups) | **GET** /inputEventGroups/{id}/inputEvents | Get array of all inputEvents
[**getAllmetadataGroups**](GroupingApi.md#getAllmetadataGroups) | **GET** /metadataGroups | Get array of all Metadata groups
[**getAllmetadataGroupsInAmetadataGroups**](GroupingApi.md#getAllmetadataGroupsInAmetadataGroups) | **GET** /metadataGroups/{id}/metadataGroups | Get array of all metadataGroups
[**getAllmetadataInAmetadataGroups**](GroupingApi.md#getAllmetadataInAmetadataGroups) | **GET** /metadataGroups/{id}/metadata | Get array of all metadata
[**getAllmicrophoneGroups**](GroupingApi.md#getAllmicrophoneGroups) | **GET** /microphoneGroups | Get array of all Microphone groups
[**getAllmicrophoneGroupsInAmicrophoneGroups**](GroupingApi.md#getAllmicrophoneGroupsInAmicrophoneGroups) | **GET** /microphoneGroups/{id}/microphoneGroups | Get array of all microphoneGroups
[**getAllmicrophonesInAmicrophoneGroups**](GroupingApi.md#getAllmicrophonesInAmicrophoneGroups) | **GET** /microphoneGroups/{id}/microphones | Get array of all microphones
[**getAlloutputGroups**](GroupingApi.md#getAlloutputGroups) | **GET** /outputGroups | Get array of all Output groups
[**getAlloutputGroupsInAoutputGroups**](GroupingApi.md#getAlloutputGroupsInAoutputGroups) | **GET** /outputGroups/{id}/outputGroups | Get array of all outputGroups
[**getAlloutputsInAoutputGroups**](GroupingApi.md#getAlloutputsInAoutputGroups) | **GET** /outputGroups/{id}/outputs | Get array of all outputs
[**getAllspeakerGroups**](GroupingApi.md#getAllspeakerGroups) | **GET** /speakerGroups | Get array of all Speaker groups
[**getAllspeakerGroupsInAspeakerGroups**](GroupingApi.md#getAllspeakerGroupsInAspeakerGroups) | **GET** /speakerGroups/{id}/speakerGroups | Get array of all speakerGroups
[**getAllspeakersInAspeakerGroups**](GroupingApi.md#getAllspeakersInAspeakerGroups) | **GET** /speakerGroups/{id}/speakers | Get array of all speakers
[**getOnecamerasInAcameraGroups**](GroupingApi.md#getOnecamerasInAcameraGroups) | **GET** /cameraGroups/{idParent}/cameras/{id} | Get specific cameras
[**getOneinputEventsInAinputEventGroups**](GroupingApi.md#getOneinputEventsInAinputEventGroups) | **GET** /inputEventGroups/{idParent}/inputEvents/{id} | Get specific inputEvents
[**getOnemetadataInAmetadataGroups**](GroupingApi.md#getOnemetadataInAmetadataGroups) | **GET** /metadataGroups/{idParent}/metadata/{id} | Get specific metadata
[**getOnemicrophonesInAmicrophoneGroups**](GroupingApi.md#getOnemicrophonesInAmicrophoneGroups) | **GET** /microphoneGroups/{idParent}/microphones/{id} | Get specific microphones
[**getOneoutputsInAoutputGroups**](GroupingApi.md#getOneoutputsInAoutputGroups) | **GET** /outputGroups/{idParent}/outputs/{id} | Get specific outputs
[**getOnespeakersInAspeakerGroups**](GroupingApi.md#getOnespeakersInAspeakerGroups) | **GET** /speakerGroups/{idParent}/speakers/{id} | Get specific speakers
[**getcameraGroupsById**](GroupingApi.md#getcameraGroupsById) | **GET** /cameraGroups/{id} | Get specific object of Camera groups
[**getinputEventGroupsById**](GroupingApi.md#getinputEventGroupsById) | **GET** /inputEventGroups/{id} | Get specific object of Input groups
[**getmetadataGroupsById**](GroupingApi.md#getmetadataGroupsById) | **GET** /metadataGroups/{id} | Get specific object of Metadata groups
[**getmicrophoneGroupsById**](GroupingApi.md#getmicrophoneGroupsById) | **GET** /microphoneGroups/{id} | Get specific object of Microphone groups
[**getoutputGroupsById**](GroupingApi.md#getoutputGroupsById) | **GET** /outputGroups/{id} | Get specific object of Output groups
[**getspeakerGroupsById**](GroupingApi.md#getspeakerGroupsById) | **GET** /speakerGroups/{id} | Get specific object of Speaker groups
[**patchcameraGroupsById**](GroupingApi.md#patchcameraGroupsById) | **PATCH** /cameraGroups/{id} | Update provided fields on Camera groups
[**patchinputEventGroupsById**](GroupingApi.md#patchinputEventGroupsById) | **PATCH** /inputEventGroups/{id} | Update provided fields on Input groups
[**patchmetadataGroupsById**](GroupingApi.md#patchmetadataGroupsById) | **PATCH** /metadataGroups/{id} | Update provided fields on Metadata groups
[**patchmicrophoneGroupsById**](GroupingApi.md#patchmicrophoneGroupsById) | **PATCH** /microphoneGroups/{id} | Update provided fields on Microphone groups
[**patchoutputGroupsById**](GroupingApi.md#patchoutputGroupsById) | **PATCH** /outputGroups/{id} | Update provided fields on Output groups
[**patchspeakerGroupsById**](GroupingApi.md#patchspeakerGroupsById) | **PATCH** /speakerGroups/{id} | Update provided fields on Speaker groups
[**postcameraGroupsById**](GroupingApi.md#postcameraGroupsById) | **POST** /cameraGroups | Add new cameraGroups
[**postcameraGroupsByIdcameras**](GroupingApi.md#postcameraGroupsByIdcameras) | **POST** /cameraGroups/{id}/cameras | Add a cameras to a cameraGroups
[**postinputEventGroupsById**](GroupingApi.md#postinputEventGroupsById) | **POST** /inputEventGroups | Add new inputEventGroups
[**postinputEventGroupsByIdinputEvents**](GroupingApi.md#postinputEventGroupsByIdinputEvents) | **POST** /inputEventGroups/{id}/inputEvents | Add a inputEvents to a inputEventGroups
[**postmetadataGroupsById**](GroupingApi.md#postmetadataGroupsById) | **POST** /metadataGroups | Add new metadataGroups
[**postmetadataGroupsByIdmetadata**](GroupingApi.md#postmetadataGroupsByIdmetadata) | **POST** /metadataGroups/{id}/metadata | Add a metadata to a metadataGroups
[**postmicrophoneGroupsById**](GroupingApi.md#postmicrophoneGroupsById) | **POST** /microphoneGroups | Add new microphoneGroups
[**postmicrophoneGroupsByIdmicrophones**](GroupingApi.md#postmicrophoneGroupsByIdmicrophones) | **POST** /microphoneGroups/{id}/microphones | Add a microphones to a microphoneGroups
[**postoutputGroupsById**](GroupingApi.md#postoutputGroupsById) | **POST** /outputGroups | Add new outputGroups
[**postoutputGroupsByIdoutputs**](GroupingApi.md#postoutputGroupsByIdoutputs) | **POST** /outputGroups/{id}/outputs | Add a outputs to a outputGroups
[**postspeakerGroupsById**](GroupingApi.md#postspeakerGroupsById) | **POST** /speakerGroups | Add new speakerGroups
[**postspeakerGroupsByIdspeakers**](GroupingApi.md#postspeakerGroupsByIdspeakers) | **POST** /speakerGroups/{id}/speakers | Add a speakers to a speakerGroups
[**putcameraGroupsById**](GroupingApi.md#putcameraGroupsById) | **PUT** /cameraGroups/{id} | Update all fields on Camera groups
[**putinputEventGroupsById**](GroupingApi.md#putinputEventGroupsById) | **PUT** /inputEventGroups/{id} | Update all fields on Input groups
[**putmetadataGroupsById**](GroupingApi.md#putmetadataGroupsById) | **PUT** /metadataGroups/{id} | Update all fields on Metadata groups
[**putmicrophoneGroupsById**](GroupingApi.md#putmicrophoneGroupsById) | **PUT** /microphoneGroups/{id} | Update all fields on Microphone groups
[**putoutputGroupsById**](GroupingApi.md#putoutputGroupsById) | **PUT** /outputGroups/{id} | Update all fields on Output groups
[**putspeakerGroupsById**](GroupingApi.md#putspeakerGroupsById) | **PUT** /speakerGroups/{id} | Update all fields on Speaker groups

<a name="deletecameraGroupsById"></a>
# **deletecameraGroupsById**
> InlineResponse2016 deletecameraGroupsById(id)

Delete a cameraGroups

Camera groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the object

apiInstance.deletecameraGroupsById(id, (error, data, response) => {
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

[**InlineResponse2016**](InlineResponse2016.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletecameraGroupsByIdcameras"></a>
# **deletecameraGroupsByIdcameras**
> InlineResponse20028 deletecameraGroupsByIdcameras(idParent, id)

Remove a cameras from a cameraGroups

Camera groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let idParent = "idParent_example"; // String | Id of parent object
let id = "id_example"; // String | Id of the object

apiInstance.deletecameraGroupsByIdcameras(idParent, id, (error, data, response) => {
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

[**InlineResponse20028**](InlineResponse20028.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteinputEventGroupsById"></a>
# **deleteinputEventGroupsById**
> InlineResponse20112 deleteinputEventGroupsById(id)

Delete a inputEventGroups

Input groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the object

apiInstance.deleteinputEventGroupsById(id, (error, data, response) => {
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

[**InlineResponse20112**](InlineResponse20112.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteinputEventGroupsByIdinputEvents"></a>
# **deleteinputEventGroupsByIdinputEvents**
> InlineResponse20079 deleteinputEventGroupsByIdinputEvents(idParent, id)

Remove a inputEvents from a inputEventGroups

Input groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let idParent = "idParent_example"; // String | Id of parent object
let id = "id_example"; // String | Id of the object

apiInstance.deleteinputEventGroupsByIdinputEvents(idParent, id, (error, data, response) => {
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

[**InlineResponse20079**](InlineResponse20079.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletemetadataGroupsById"></a>
# **deletemetadataGroupsById**
> InlineResponse20117 deletemetadataGroupsById(id)

Delete a metadataGroups

Metadata groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the object

apiInstance.deletemetadataGroupsById(id, (error, data, response) => {
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

[**InlineResponse20117**](InlineResponse20117.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletemetadataGroupsByIdmetadata"></a>
# **deletemetadataGroupsByIdmetadata**
> InlineResponse200101 deletemetadataGroupsByIdmetadata(idParent, id)

Remove a metadata from a metadataGroups

Metadata groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let idParent = "idParent_example"; // String | Id of parent object
let id = "id_example"; // String | Id of the object

apiInstance.deletemetadataGroupsByIdmetadata(idParent, id, (error, data, response) => {
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

[**InlineResponse200101**](InlineResponse200101.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletemicrophoneGroupsById"></a>
# **deletemicrophoneGroupsById**
> InlineResponse20118 deletemicrophoneGroupsById(id)

Delete a microphoneGroups

Microphone groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the object

apiInstance.deletemicrophoneGroupsById(id, (error, data, response) => {
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

[**InlineResponse20118**](InlineResponse20118.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletemicrophoneGroupsByIdmicrophones"></a>
# **deletemicrophoneGroupsByIdmicrophones**
> InlineResponse200105 deletemicrophoneGroupsByIdmicrophones(idParent, id)

Remove a microphones from a microphoneGroups

Microphone groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let idParent = "idParent_example"; // String | Id of parent object
let id = "id_example"; // String | Id of the object

apiInstance.deletemicrophoneGroupsByIdmicrophones(idParent, id, (error, data, response) => {
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

[**InlineResponse200105**](InlineResponse200105.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteoutputGroupsById"></a>
# **deleteoutputGroupsById**
> InlineResponse20120 deleteoutputGroupsById(id)

Delete a outputGroups

Output groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the object

apiInstance.deleteoutputGroupsById(id, (error, data, response) => {
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

[**InlineResponse20120**](InlineResponse20120.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteoutputGroupsByIdoutputs"></a>
# **deleteoutputGroupsByIdoutputs**
> InlineResponse200117 deleteoutputGroupsByIdoutputs(idParent, id)

Remove a outputs from a outputGroups

Output groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let idParent = "idParent_example"; // String | Id of parent object
let id = "id_example"; // String | Id of the object

apiInstance.deleteoutputGroupsByIdoutputs(idParent, id, (error, data, response) => {
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

[**InlineResponse200117**](InlineResponse200117.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletespeakerGroupsById"></a>
# **deletespeakerGroupsById**
> InlineResponse20125 deletespeakerGroupsById(id)

Delete a speakerGroups

Speaker groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the object

apiInstance.deletespeakerGroupsById(id, (error, data, response) => {
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

[**InlineResponse20125**](InlineResponse20125.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletespeakerGroupsByIdspeakers"></a>
# **deletespeakerGroupsByIdspeakers**
> InlineResponse200151 deletespeakerGroupsByIdspeakers(idParent, id)

Remove a speakers from a speakerGroups

Speaker groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let idParent = "idParent_example"; // String | Id of parent object
let id = "id_example"; // String | Id of the object

apiInstance.deletespeakerGroupsByIdspeakers(idParent, id, (error, data, response) => {
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

[**InlineResponse200151**](InlineResponse200151.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllcameraGroups"></a>
# **getAllcameraGroups**
> InlineResponse20040 getAllcameraGroups()

Get array of all Camera groups

Camera groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
apiInstance.getAllcameraGroups((error, data, response) => {
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

[**InlineResponse20040**](InlineResponse20040.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllcameraGroupsInAcameraGroups"></a>
# **getAllcameraGroupsInAcameraGroups**
> InlineResponse20040 getAllcameraGroupsInAcameraGroups(id)

Get array of all cameraGroups

Camera groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the cameraGroup object

apiInstance.getAllcameraGroupsInAcameraGroups(id, (error, data, response) => {
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
 **id** | **String**| Id of the cameraGroup object | 

### Return type

[**InlineResponse20040**](InlineResponse20040.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllcamerasInAcameraGroups"></a>
# **getAllcamerasInAcameraGroups**
> InlineResponse20026 getAllcamerasInAcameraGroups(id)

Get array of all cameras

Camera groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the cameraGroup object

apiInstance.getAllcamerasInAcameraGroups(id, (error, data, response) => {
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
 **id** | **String**| Id of the cameraGroup object | 

### Return type

[**InlineResponse20026**](InlineResponse20026.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllinputEventGroups"></a>
# **getAllinputEventGroups**
> InlineResponse20081 getAllinputEventGroups()

Get array of all Input groups

Input groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
apiInstance.getAllinputEventGroups((error, data, response) => {
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

[**InlineResponse20081**](InlineResponse20081.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllinputEventGroupsInAinputEventGroups"></a>
# **getAllinputEventGroupsInAinputEventGroups**
> InlineResponse20081 getAllinputEventGroupsInAinputEventGroups(id)

Get array of all inputEventGroups

Input groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the inputEventGroup object

apiInstance.getAllinputEventGroupsInAinputEventGroups(id, (error, data, response) => {
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
 **id** | **String**| Id of the inputEventGroup object | 

### Return type

[**InlineResponse20081**](InlineResponse20081.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllinputEventsInAinputEventGroups"></a>
# **getAllinputEventsInAinputEventGroups**
> InlineResponse20069 getAllinputEventsInAinputEventGroups(id)

Get array of all inputEvents

Input groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the inputEventGroup object

apiInstance.getAllinputEventsInAinputEventGroups(id, (error, data, response) => {
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
 **id** | **String**| Id of the inputEventGroup object | 

### Return type

[**InlineResponse20069**](InlineResponse20069.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllmetadataGroups"></a>
# **getAllmetadataGroups**
> InlineResponse200102 getAllmetadataGroups()

Get array of all Metadata groups

Metadata groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
apiInstance.getAllmetadataGroups((error, data, response) => {
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

[**InlineResponse200102**](InlineResponse200102.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllmetadataGroupsInAmetadataGroups"></a>
# **getAllmetadataGroupsInAmetadataGroups**
> InlineResponse200102 getAllmetadataGroupsInAmetadataGroups(id)

Get array of all metadataGroups

Metadata groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the metadataGroup object

apiInstance.getAllmetadataGroupsInAmetadataGroups(id, (error, data, response) => {
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
 **id** | **String**| Id of the metadataGroup object | 

### Return type

[**InlineResponse200102**](InlineResponse200102.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllmetadataInAmetadataGroups"></a>
# **getAllmetadataInAmetadataGroups**
> InlineResponse20070 getAllmetadataInAmetadataGroups(id)

Get array of all metadata

Metadata groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the metadataGroup object

apiInstance.getAllmetadataInAmetadataGroups(id, (error, data, response) => {
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
 **id** | **String**| Id of the metadataGroup object | 

### Return type

[**InlineResponse20070**](InlineResponse20070.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllmicrophoneGroups"></a>
# **getAllmicrophoneGroups**
> InlineResponse200106 getAllmicrophoneGroups()

Get array of all Microphone groups

Microphone groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
apiInstance.getAllmicrophoneGroups((error, data, response) => {
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

[**InlineResponse200106**](InlineResponse200106.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllmicrophoneGroupsInAmicrophoneGroups"></a>
# **getAllmicrophoneGroupsInAmicrophoneGroups**
> InlineResponse200106 getAllmicrophoneGroupsInAmicrophoneGroups(id)

Get array of all microphoneGroups

Microphone groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the microphoneGroup object

apiInstance.getAllmicrophoneGroupsInAmicrophoneGroups(id, (error, data, response) => {
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
 **id** | **String**| Id of the microphoneGroup object | 

### Return type

[**InlineResponse200106**](InlineResponse200106.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllmicrophonesInAmicrophoneGroups"></a>
# **getAllmicrophonesInAmicrophoneGroups**
> InlineResponse20071 getAllmicrophonesInAmicrophoneGroups(id)

Get array of all microphones

Microphone groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the microphoneGroup object

apiInstance.getAllmicrophonesInAmicrophoneGroups(id, (error, data, response) => {
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
 **id** | **String**| Id of the microphoneGroup object | 

### Return type

[**InlineResponse20071**](InlineResponse20071.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAlloutputGroups"></a>
# **getAlloutputGroups**
> InlineResponse200118 getAlloutputGroups()

Get array of all Output groups

Output groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
apiInstance.getAlloutputGroups((error, data, response) => {
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

[**InlineResponse200118**](InlineResponse200118.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAlloutputGroupsInAoutputGroups"></a>
# **getAlloutputGroupsInAoutputGroups**
> InlineResponse200118 getAlloutputGroupsInAoutputGroups(id)

Get array of all outputGroups

Output groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the outputGroup object

apiInstance.getAlloutputGroupsInAoutputGroups(id, (error, data, response) => {
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
 **id** | **String**| Id of the outputGroup object | 

### Return type

[**InlineResponse200118**](InlineResponse200118.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAlloutputsInAoutputGroups"></a>
# **getAlloutputsInAoutputGroups**
> InlineResponse20072 getAlloutputsInAoutputGroups(id)

Get array of all outputs

Output groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the outputGroup object

apiInstance.getAlloutputsInAoutputGroups(id, (error, data, response) => {
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
 **id** | **String**| Id of the outputGroup object | 

### Return type

[**InlineResponse20072**](InlineResponse20072.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllspeakerGroups"></a>
# **getAllspeakerGroups**
> InlineResponse200152 getAllspeakerGroups()

Get array of all Speaker groups

Speaker groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
apiInstance.getAllspeakerGroups((error, data, response) => {
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

[**InlineResponse200152**](InlineResponse200152.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllspeakerGroupsInAspeakerGroups"></a>
# **getAllspeakerGroupsInAspeakerGroups**
> InlineResponse200152 getAllspeakerGroupsInAspeakerGroups(id)

Get array of all speakerGroups

Speaker groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the speakerGroup object

apiInstance.getAllspeakerGroupsInAspeakerGroups(id, (error, data, response) => {
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
 **id** | **String**| Id of the speakerGroup object | 

### Return type

[**InlineResponse200152**](InlineResponse200152.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllspeakersInAspeakerGroups"></a>
# **getAllspeakersInAspeakerGroups**
> InlineResponse20073 getAllspeakersInAspeakerGroups(id)

Get array of all speakers

Speaker groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the speakerGroup object

apiInstance.getAllspeakersInAspeakerGroups(id, (error, data, response) => {
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
 **id** | **String**| Id of the speakerGroup object | 

### Return type

[**InlineResponse20073**](InlineResponse20073.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOnecamerasInAcameraGroups"></a>
# **getOnecamerasInAcameraGroups**
> InlineResponse20026 getOnecamerasInAcameraGroups(idParent, id)

Get specific cameras

Camera groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let idParent = "idParent_example"; // String | Id of parent object
let id = "id_example"; // String | Id of the object

apiInstance.getOnecamerasInAcameraGroups(idParent, id, (error, data, response) => {
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

[**InlineResponse20026**](InlineResponse20026.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOneinputEventsInAinputEventGroups"></a>
# **getOneinputEventsInAinputEventGroups**
> InlineResponse20069 getOneinputEventsInAinputEventGroups(idParent, id)

Get specific inputEvents

Input groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let idParent = "idParent_example"; // String | Id of parent object
let id = "id_example"; // String | Id of the object

apiInstance.getOneinputEventsInAinputEventGroups(idParent, id, (error, data, response) => {
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

[**InlineResponse20069**](InlineResponse20069.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOnemetadataInAmetadataGroups"></a>
# **getOnemetadataInAmetadataGroups**
> InlineResponse20070 getOnemetadataInAmetadataGroups(idParent, id)

Get specific metadata

Metadata groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let idParent = "idParent_example"; // String | Id of parent object
let id = "id_example"; // String | Id of the object

apiInstance.getOnemetadataInAmetadataGroups(idParent, id, (error, data, response) => {
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

[**InlineResponse20070**](InlineResponse20070.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOnemicrophonesInAmicrophoneGroups"></a>
# **getOnemicrophonesInAmicrophoneGroups**
> InlineResponse20071 getOnemicrophonesInAmicrophoneGroups(idParent, id)

Get specific microphones

Microphone groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let idParent = "idParent_example"; // String | Id of parent object
let id = "id_example"; // String | Id of the object

apiInstance.getOnemicrophonesInAmicrophoneGroups(idParent, id, (error, data, response) => {
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

[**InlineResponse20071**](InlineResponse20071.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOneoutputsInAoutputGroups"></a>
# **getOneoutputsInAoutputGroups**
> InlineResponse20072 getOneoutputsInAoutputGroups(idParent, id)

Get specific outputs

Output groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let idParent = "idParent_example"; // String | Id of parent object
let id = "id_example"; // String | Id of the object

apiInstance.getOneoutputsInAoutputGroups(idParent, id, (error, data, response) => {
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

[**InlineResponse20072**](InlineResponse20072.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOnespeakersInAspeakerGroups"></a>
# **getOnespeakersInAspeakerGroups**
> InlineResponse20073 getOnespeakersInAspeakerGroups(idParent, id)

Get specific speakers

Speaker groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let idParent = "idParent_example"; // String | Id of parent object
let id = "id_example"; // String | Id of the object

apiInstance.getOnespeakersInAspeakerGroups(idParent, id, (error, data, response) => {
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

[**InlineResponse20073**](InlineResponse20073.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getcameraGroupsById"></a>
# **getcameraGroupsById**
> InlineResponse20041 getcameraGroupsById(id, opts)

Get specific object of Camera groups

Camera groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getcameraGroupsById(id, opts, (error, data, response) => {
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

[**InlineResponse20041**](InlineResponse20041.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getinputEventGroupsById"></a>
# **getinputEventGroupsById**
> InlineResponse20082 getinputEventGroupsById(id, opts)

Get specific object of Input groups

Input groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getinputEventGroupsById(id, opts, (error, data, response) => {
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

[**InlineResponse20082**](InlineResponse20082.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getmetadataGroupsById"></a>
# **getmetadataGroupsById**
> InlineResponse200103 getmetadataGroupsById(id, opts)

Get specific object of Metadata groups

Metadata groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getmetadataGroupsById(id, opts, (error, data, response) => {
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

[**InlineResponse200103**](InlineResponse200103.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getmicrophoneGroupsById"></a>
# **getmicrophoneGroupsById**
> InlineResponse200107 getmicrophoneGroupsById(id, opts)

Get specific object of Microphone groups

Microphone groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getmicrophoneGroupsById(id, opts, (error, data, response) => {
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

[**InlineResponse200107**](InlineResponse200107.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getoutputGroupsById"></a>
# **getoutputGroupsById**
> InlineResponse200119 getoutputGroupsById(id, opts)

Get specific object of Output groups

Output groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getoutputGroupsById(id, opts, (error, data, response) => {
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

[**InlineResponse200119**](InlineResponse200119.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getspeakerGroupsById"></a>
# **getspeakerGroupsById**
> InlineResponse200153 getspeakerGroupsById(id, opts)

Get specific object of Speaker groups

Speaker groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getspeakerGroupsById(id, opts, (error, data, response) => {
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

[**InlineResponse200153**](InlineResponse200153.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchcameraGroupsById"></a>
# **patchcameraGroupsById**
> InlineResponse2016 patchcameraGroupsById(id, opts)

Update provided fields on Camera groups

Camera groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.CameraGroups() // CameraGroups | 
};
apiInstance.patchcameraGroupsById(id, opts, (error, data, response) => {
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
 **body** | [**CameraGroups**](CameraGroups.md)|  | [optional] 

### Return type

[**InlineResponse2016**](InlineResponse2016.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchinputEventGroupsById"></a>
# **patchinputEventGroupsById**
> InlineResponse20112 patchinputEventGroupsById(id, opts)

Update provided fields on Input groups

Input groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.InputEventGroups() // InputEventGroups | 
};
apiInstance.patchinputEventGroupsById(id, opts, (error, data, response) => {
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
 **body** | [**InputEventGroups**](InputEventGroups.md)|  | [optional] 

### Return type

[**InlineResponse20112**](InlineResponse20112.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchmetadataGroupsById"></a>
# **patchmetadataGroupsById**
> InlineResponse20117 patchmetadataGroupsById(id, opts)

Update provided fields on Metadata groups

Metadata groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.MetadataGroups() // MetadataGroups | 
};
apiInstance.patchmetadataGroupsById(id, opts, (error, data, response) => {
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
 **body** | [**MetadataGroups**](MetadataGroups.md)|  | [optional] 

### Return type

[**InlineResponse20117**](InlineResponse20117.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchmicrophoneGroupsById"></a>
# **patchmicrophoneGroupsById**
> InlineResponse20118 patchmicrophoneGroupsById(id, opts)

Update provided fields on Microphone groups

Microphone groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.MicrophoneGroups() // MicrophoneGroups | 
};
apiInstance.patchmicrophoneGroupsById(id, opts, (error, data, response) => {
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
 **body** | [**MicrophoneGroups**](MicrophoneGroups.md)|  | [optional] 

### Return type

[**InlineResponse20118**](InlineResponse20118.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchoutputGroupsById"></a>
# **patchoutputGroupsById**
> InlineResponse20120 patchoutputGroupsById(id, opts)

Update provided fields on Output groups

Output groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.OutputGroups() // OutputGroups | 
};
apiInstance.patchoutputGroupsById(id, opts, (error, data, response) => {
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
 **body** | [**OutputGroups**](OutputGroups.md)|  | [optional] 

### Return type

[**InlineResponse20120**](InlineResponse20120.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchspeakerGroupsById"></a>
# **patchspeakerGroupsById**
> InlineResponse20125 patchspeakerGroupsById(id, opts)

Update provided fields on Speaker groups

Speaker groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.SpeakerGroups() // SpeakerGroups | 
};
apiInstance.patchspeakerGroupsById(id, opts, (error, data, response) => {
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
 **body** | [**SpeakerGroups**](SpeakerGroups.md)|  | [optional] 

### Return type

[**InlineResponse20125**](InlineResponse20125.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postcameraGroupsById"></a>
# **postcameraGroupsById**
> InlineResponse2016 postcameraGroupsById(opts)

Add new cameraGroups

Camera groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.CameraGroups() // CameraGroups | 
};
apiInstance.postcameraGroupsById(opts, (error, data, response) => {
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
 **body** | [**CameraGroups**](CameraGroups.md)|  | [optional] 

### Return type

[**InlineResponse2016**](InlineResponse2016.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postcameraGroupsByIdcameras"></a>
# **postcameraGroupsByIdcameras**
> InlineResponse20028 postcameraGroupsByIdcameras(id, opts)

Add a cameras to a cameraGroups

Camera groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the cameraGroup object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.Cameras() // Cameras | 
};
apiInstance.postcameraGroupsByIdcameras(id, opts, (error, data, response) => {
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
 **id** | **String**| Id of the cameraGroup object | 
 **body** | [**Cameras**](Cameras.md)|  | [optional] 

### Return type

[**InlineResponse20028**](InlineResponse20028.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postinputEventGroupsById"></a>
# **postinputEventGroupsById**
> InlineResponse20112 postinputEventGroupsById(opts)

Add new inputEventGroups

Input groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.InputEventGroups() // InputEventGroups | 
};
apiInstance.postinputEventGroupsById(opts, (error, data, response) => {
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
 **body** | [**InputEventGroups**](InputEventGroups.md)|  | [optional] 

### Return type

[**InlineResponse20112**](InlineResponse20112.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postinputEventGroupsByIdinputEvents"></a>
# **postinputEventGroupsByIdinputEvents**
> InlineResponse20079 postinputEventGroupsByIdinputEvents(id, opts)

Add a inputEvents to a inputEventGroups

Input groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the inputEventGroup object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.InputEvents() // InputEvents | 
};
apiInstance.postinputEventGroupsByIdinputEvents(id, opts, (error, data, response) => {
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
 **id** | **String**| Id of the inputEventGroup object | 
 **body** | [**InputEvents**](InputEvents.md)|  | [optional] 

### Return type

[**InlineResponse20079**](InlineResponse20079.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postmetadataGroupsById"></a>
# **postmetadataGroupsById**
> InlineResponse20117 postmetadataGroupsById(opts)

Add new metadataGroups

Metadata groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.MetadataGroups() // MetadataGroups | 
};
apiInstance.postmetadataGroupsById(opts, (error, data, response) => {
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
 **body** | [**MetadataGroups**](MetadataGroups.md)|  | [optional] 

### Return type

[**InlineResponse20117**](InlineResponse20117.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postmetadataGroupsByIdmetadata"></a>
# **postmetadataGroupsByIdmetadata**
> InlineResponse200101 postmetadataGroupsByIdmetadata(id, opts)

Add a metadata to a metadataGroups

Metadata groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the metadataGroup object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.Metadata() // Metadata | 
};
apiInstance.postmetadataGroupsByIdmetadata(id, opts, (error, data, response) => {
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
 **id** | **String**| Id of the metadataGroup object | 
 **body** | [**Metadata**](Metadata.md)|  | [optional] 

### Return type

[**InlineResponse200101**](InlineResponse200101.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postmicrophoneGroupsById"></a>
# **postmicrophoneGroupsById**
> InlineResponse20118 postmicrophoneGroupsById(opts)

Add new microphoneGroups

Microphone groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.MicrophoneGroups() // MicrophoneGroups | 
};
apiInstance.postmicrophoneGroupsById(opts, (error, data, response) => {
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
 **body** | [**MicrophoneGroups**](MicrophoneGroups.md)|  | [optional] 

### Return type

[**InlineResponse20118**](InlineResponse20118.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postmicrophoneGroupsByIdmicrophones"></a>
# **postmicrophoneGroupsByIdmicrophones**
> InlineResponse200105 postmicrophoneGroupsByIdmicrophones(id, opts)

Add a microphones to a microphoneGroups

Microphone groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the microphoneGroup object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.Microphones() // Microphones | 
};
apiInstance.postmicrophoneGroupsByIdmicrophones(id, opts, (error, data, response) => {
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
 **id** | **String**| Id of the microphoneGroup object | 
 **body** | [**Microphones**](Microphones.md)|  | [optional] 

### Return type

[**InlineResponse200105**](InlineResponse200105.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postoutputGroupsById"></a>
# **postoutputGroupsById**
> InlineResponse20120 postoutputGroupsById(opts)

Add new outputGroups

Output groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.OutputGroups() // OutputGroups | 
};
apiInstance.postoutputGroupsById(opts, (error, data, response) => {
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
 **body** | [**OutputGroups**](OutputGroups.md)|  | [optional] 

### Return type

[**InlineResponse20120**](InlineResponse20120.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postoutputGroupsByIdoutputs"></a>
# **postoutputGroupsByIdoutputs**
> InlineResponse200117 postoutputGroupsByIdoutputs(id, opts)

Add a outputs to a outputGroups

Output groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the outputGroup object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.Outputs() // Outputs | 
};
apiInstance.postoutputGroupsByIdoutputs(id, opts, (error, data, response) => {
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
 **id** | **String**| Id of the outputGroup object | 
 **body** | [**Outputs**](Outputs.md)|  | [optional] 

### Return type

[**InlineResponse200117**](InlineResponse200117.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postspeakerGroupsById"></a>
# **postspeakerGroupsById**
> InlineResponse20125 postspeakerGroupsById(opts)

Add new speakerGroups

Speaker groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.SpeakerGroups() // SpeakerGroups | 
};
apiInstance.postspeakerGroupsById(opts, (error, data, response) => {
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
 **body** | [**SpeakerGroups**](SpeakerGroups.md)|  | [optional] 

### Return type

[**InlineResponse20125**](InlineResponse20125.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postspeakerGroupsByIdspeakers"></a>
# **postspeakerGroupsByIdspeakers**
> InlineResponse200151 postspeakerGroupsByIdspeakers(id, opts)

Add a speakers to a speakerGroups

Speaker groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the speakerGroup object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.Speakers() // Speakers | 
};
apiInstance.postspeakerGroupsByIdspeakers(id, opts, (error, data, response) => {
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
 **id** | **String**| Id of the speakerGroup object | 
 **body** | [**Speakers**](Speakers.md)|  | [optional] 

### Return type

[**InlineResponse200151**](InlineResponse200151.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putcameraGroupsById"></a>
# **putcameraGroupsById**
> InlineResponse2016 putcameraGroupsById(id, opts)

Update all fields on Camera groups

Camera groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.CameraGroups() // CameraGroups | 
};
apiInstance.putcameraGroupsById(id, opts, (error, data, response) => {
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
 **body** | [**CameraGroups**](CameraGroups.md)|  | [optional] 

### Return type

[**InlineResponse2016**](InlineResponse2016.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putinputEventGroupsById"></a>
# **putinputEventGroupsById**
> InlineResponse20112 putinputEventGroupsById(id, opts)

Update all fields on Input groups

Input groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.InputEventGroups() // InputEventGroups | 
};
apiInstance.putinputEventGroupsById(id, opts, (error, data, response) => {
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
 **body** | [**InputEventGroups**](InputEventGroups.md)|  | [optional] 

### Return type

[**InlineResponse20112**](InlineResponse20112.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putmetadataGroupsById"></a>
# **putmetadataGroupsById**
> InlineResponse20117 putmetadataGroupsById(id, opts)

Update all fields on Metadata groups

Metadata groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.MetadataGroups() // MetadataGroups | 
};
apiInstance.putmetadataGroupsById(id, opts, (error, data, response) => {
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
 **body** | [**MetadataGroups**](MetadataGroups.md)|  | [optional] 

### Return type

[**InlineResponse20117**](InlineResponse20117.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putmicrophoneGroupsById"></a>
# **putmicrophoneGroupsById**
> InlineResponse20118 putmicrophoneGroupsById(id, opts)

Update all fields on Microphone groups

Microphone groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.MicrophoneGroups() // MicrophoneGroups | 
};
apiInstance.putmicrophoneGroupsById(id, opts, (error, data, response) => {
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
 **body** | [**MicrophoneGroups**](MicrophoneGroups.md)|  | [optional] 

### Return type

[**InlineResponse20118**](InlineResponse20118.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putoutputGroupsById"></a>
# **putoutputGroupsById**
> InlineResponse20120 putoutputGroupsById(id, opts)

Update all fields on Output groups

Output groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.OutputGroups() // OutputGroups | 
};
apiInstance.putoutputGroupsById(id, opts, (error, data, response) => {
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
 **body** | [**OutputGroups**](OutputGroups.md)|  | [optional] 

### Return type

[**InlineResponse20120**](InlineResponse20120.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putspeakerGroupsById"></a>
# **putspeakerGroupsById**
> InlineResponse20125 putspeakerGroupsById(id, opts)

Update all fields on Speaker groups

Speaker groups

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.GroupingApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.SpeakerGroups() // SpeakerGroups | 
};
apiInstance.putspeakerGroupsById(id, opts, (error, data, response) => {
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
 **body** | [**SpeakerGroups**](SpeakerGroups.md)|  | [optional] 

### Return type

[**InlineResponse20125**](InlineResponse20125.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

