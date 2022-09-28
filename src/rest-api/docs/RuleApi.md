# MilestoneIntegrationPlatformVmsResTfulApi.RuleApi

All URIs are relative to *https://localhost/API/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteaudioMessagesById**](RuleApi.md#deleteaudioMessagesById) | **DELETE** /audioMessages/{id} | Delete a audioMessages
[**deleterulesById**](RuleApi.md#deleterulesById) | **DELETE** /rules/{id} | Delete a rules
[**deletetimeProfilesById**](RuleApi.md#deletetimeProfilesById) | **DELETE** /timeProfiles/{id} | Delete a timeProfiles
[**getAllaudioMessages**](RuleApi.md#getAllaudioMessages) | **GET** /audioMessages | Get array of all Audio message
[**getAllrules**](RuleApi.md#getAllrules) | **GET** /rules | Get array of all enabled Rule
[**getAlltimeProfiles**](RuleApi.md#getAlltimeProfiles) | **GET** /timeProfiles | Get array of all Time profile
[**getaudioMessagesById**](RuleApi.md#getaudioMessagesById) | **GET** /audioMessages/{id} | Get specific object of Audio message
[**getrulesById**](RuleApi.md#getrulesById) | **GET** /rules/{id} | Get specific object of Rule
[**gettimeProfilesById**](RuleApi.md#gettimeProfilesById) | **GET** /timeProfiles/{id} | Get specific object of Time profile
[**patchaudioMessagesById**](RuleApi.md#patchaudioMessagesById) | **PATCH** /audioMessages/{id} | Update provided fields on Audio message
[**patchrulesById**](RuleApi.md#patchrulesById) | **PATCH** /rules/{id} | Update provided fields on Rule
[**patchtimeProfilesById**](RuleApi.md#patchtimeProfilesById) | **PATCH** /timeProfiles/{id} | Update provided fields on Time profile
[**postTaskForaudioMessages**](RuleApi.md#postTaskForaudioMessages) | **POST** /audioMessages/{id} | Perform a task
[**postaudioMessagesById**](RuleApi.md#postaudioMessagesById) | **POST** /audioMessages | Add new audioMessages
[**postrulesById**](RuleApi.md#postrulesById) | **POST** /rules | Add new rules
[**posttimeProfilesById**](RuleApi.md#posttimeProfilesById) | **POST** /timeProfiles | Add new timeProfiles
[**putaudioMessagesById**](RuleApi.md#putaudioMessagesById) | **PUT** /audioMessages/{id} | Update all fields on Audio message
[**putrulesById**](RuleApi.md#putrulesById) | **PUT** /rules/{id} | Update all fields on Rule
[**puttimeProfilesById**](RuleApi.md#puttimeProfilesById) | **PUT** /timeProfiles/{id} | Update all fields on Time profile

<a name="deleteaudioMessagesById"></a>
# **deleteaudioMessagesById**
> InlineResponse2012 deleteaudioMessagesById(id)

Delete a audioMessages

Audio message

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RuleApi();
let id = "id_example"; // String | Id of the object

apiInstance.deleteaudioMessagesById(id, (error, data, response) => {
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

[**InlineResponse2012**](InlineResponse2012.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleterulesById"></a>
# **deleterulesById**
> InlineResponse20123 deleterulesById(id)

Delete a rules

Rule

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RuleApi();
let id = "id_example"; // String | Id of the object

apiInstance.deleterulesById(id, (error, data, response) => {
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

[**InlineResponse20123**](InlineResponse20123.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletetimeProfilesById"></a>
# **deletetimeProfilesById**
> InlineResponse20127 deletetimeProfilesById(id)

Delete a timeProfiles

Time profile

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RuleApi();
let id = "id_example"; // String | Id of the object

apiInstance.deletetimeProfilesById(id, (error, data, response) => {
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

[**InlineResponse20127**](InlineResponse20127.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllaudioMessages"></a>
# **getAllaudioMessages**
> InlineResponse20015 getAllaudioMessages()

Get array of all Audio message

Audio message

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RuleApi();
apiInstance.getAllaudioMessages((error, data, response) => {
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

[**InlineResponse20015**](InlineResponse20015.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllrules"></a>
# **getAllrules**
> InlineResponse200141 getAllrules()

Get array of all enabled Rule

Rule. To include disabled items add ?disabled to the request.

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RuleApi();
apiInstance.getAllrules((error, data, response) => {
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

[**InlineResponse200141**](InlineResponse200141.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAlltimeProfiles"></a>
# **getAlltimeProfiles**
> InlineResponse200167 getAlltimeProfiles()

Get array of all Time profile

Time profile

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RuleApi();
apiInstance.getAlltimeProfiles((error, data, response) => {
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

[**InlineResponse200167**](InlineResponse200167.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getaudioMessagesById"></a>
# **getaudioMessagesById**
> InlineResponse20016 getaudioMessagesById(id, opts)

Get specific object of Audio message

Audio message

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RuleApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getaudioMessagesById(id, opts, (error, data, response) => {
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

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getrulesById"></a>
# **getrulesById**
> InlineResponse200142 getrulesById(id, opts)

Get specific object of Rule

Rule

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RuleApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getrulesById(id, opts, (error, data, response) => {
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

[**InlineResponse200142**](InlineResponse200142.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="gettimeProfilesById"></a>
# **gettimeProfilesById**
> InlineResponse200171 gettimeProfilesById(id, opts)

Get specific object of Time profile

Time profile

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RuleApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.gettimeProfilesById(id, opts, (error, data, response) => {
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

[**InlineResponse200171**](InlineResponse200171.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchaudioMessagesById"></a>
# **patchaudioMessagesById**
> InlineResponse2012 patchaudioMessagesById(id, opts)

Update provided fields on Audio message

Audio message

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RuleApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.AudioMessages() // AudioMessages | 
};
apiInstance.patchaudioMessagesById(id, opts, (error, data, response) => {
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
 **body** | [**AudioMessages**](AudioMessages.md)|  | [optional] 

### Return type

[**InlineResponse2012**](InlineResponse2012.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchrulesById"></a>
# **patchrulesById**
> InlineResponse20123 patchrulesById(id, opts)

Update provided fields on Rule

Rule

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RuleApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.Rules() // Rules | 
};
apiInstance.patchrulesById(id, opts, (error, data, response) => {
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
 **body** | [**Rules**](Rules.md)|  | [optional] 

### Return type

[**InlineResponse20123**](InlineResponse20123.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchtimeProfilesById"></a>
# **patchtimeProfilesById**
> InlineResponse20127 patchtimeProfilesById(id, opts)

Update provided fields on Time profile

Time profile

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RuleApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.TimeProfiles() // TimeProfiles | 
};
apiInstance.patchtimeProfilesById(id, opts, (error, data, response) => {
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
 **body** | [**TimeProfiles**](TimeProfiles.md)|  | [optional] 

### Return type

[**InlineResponse20127**](InlineResponse20127.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postTaskForaudioMessages"></a>
# **postTaskForaudioMessages**
> InlineResponse20017 postTaskForaudioMessages(id, task)

Perform a task

Audio message

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RuleApi();
let id = "id_example"; // String | Id of the object
let task = "task_example"; // String | task=GetAudioMessageContent, or task=SetAudioMessageContent

apiInstance.postTaskForaudioMessages(id, task, (error, data, response) => {
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
 **task** | **String**| task&#x3D;GetAudioMessageContent, or task&#x3D;SetAudioMessageContent | 

### Return type

[**InlineResponse20017**](InlineResponse20017.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postaudioMessagesById"></a>
# **postaudioMessagesById**
> InlineResponse2012 postaudioMessagesById(opts)

Add new audioMessages

Audio message

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RuleApi();
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.AudioMessages() // AudioMessages | 
};
apiInstance.postaudioMessagesById(opts, (error, data, response) => {
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
 **body** | [**AudioMessages**](AudioMessages.md)|  | [optional] 

### Return type

[**InlineResponse2012**](InlineResponse2012.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postrulesById"></a>
# **postrulesById**
> InlineResponse20123 postrulesById(opts)

Add new rules

Rule

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RuleApi();
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.Rules() // Rules | 
};
apiInstance.postrulesById(opts, (error, data, response) => {
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
 **body** | [**Rules**](Rules.md)|  | [optional] 

### Return type

[**InlineResponse20123**](InlineResponse20123.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="posttimeProfilesById"></a>
# **posttimeProfilesById**
> InlineResponse20127 posttimeProfilesById(opts)

Add new timeProfiles

Time profile

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RuleApi();
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.TimeProfiles() // TimeProfiles | 
};
apiInstance.posttimeProfilesById(opts, (error, data, response) => {
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
 **body** | [**TimeProfiles**](TimeProfiles.md)|  | [optional] 

### Return type

[**InlineResponse20127**](InlineResponse20127.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putaudioMessagesById"></a>
# **putaudioMessagesById**
> InlineResponse2012 putaudioMessagesById(id, opts)

Update all fields on Audio message

Audio message

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RuleApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.AudioMessages() // AudioMessages | 
};
apiInstance.putaudioMessagesById(id, opts, (error, data, response) => {
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
 **body** | [**AudioMessages**](AudioMessages.md)|  | [optional] 

### Return type

[**InlineResponse2012**](InlineResponse2012.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putrulesById"></a>
# **putrulesById**
> InlineResponse20123 putrulesById(id, opts)

Update all fields on Rule

Rule

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RuleApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.Rules() // Rules | 
};
apiInstance.putrulesById(id, opts, (error, data, response) => {
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
 **body** | [**Rules**](Rules.md)|  | [optional] 

### Return type

[**InlineResponse20123**](InlineResponse20123.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="puttimeProfilesById"></a>
# **puttimeProfilesById**
> InlineResponse20127 puttimeProfilesById(id, opts)

Update all fields on Time profile

Time profile

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RuleApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.TimeProfiles() // TimeProfiles | 
};
apiInstance.puttimeProfilesById(id, opts, (error, data, response) => {
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
 **body** | [**TimeProfiles**](TimeProfiles.md)|  | [optional] 

### Return type

[**InlineResponse20127**](InlineResponse20127.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

