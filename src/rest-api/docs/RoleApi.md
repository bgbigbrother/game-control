# MilestoneIntegrationPlatformVmsResTfulApi.RoleApi

All URIs are relative to *https://localhost/API/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deletebasicUsersById**](RoleApi.md#deletebasicUsersById) | **DELETE** /basicUsers/{id} | Delete a basicUsers
[**deleterolesById**](RoleApi.md#deleterolesById) | **DELETE** /roles/{id} | Delete a roles
[**getAllbasicUsers**](RoleApi.md#getAllbasicUsers) | **GET** /basicUsers | Get array of all Basic user
[**getAllclaimsInAbasicUsers**](RoleApi.md#getAllclaimsInAbasicUsers) | **GET** /basicUsers/{id}/claims | Get array of all claims
[**getAllclaimsInAroles**](RoleApi.md#getAllclaimsInAroles) | **GET** /roles/{id}/claims | Get array of all claims
[**getAllroles**](RoleApi.md#getAllroles) | **GET** /roles | Get array of all Role
[**getAllusersInAroles**](RoleApi.md#getAllusersInAroles) | **GET** /roles/{id}/users | Get array of all users
[**getOneusersInAroles**](RoleApi.md#getOneusersInAroles) | **GET** /roles/{idParent}/users/{id} | Get specific users
[**getbasicUsersById**](RoleApi.md#getbasicUsersById) | **GET** /basicUsers/{id} | Get specific object of Basic user
[**getrolesById**](RoleApi.md#getrolesById) | **GET** /roles/{id} | Get specific object of Role
[**patchbasicUsersById**](RoleApi.md#patchbasicUsersById) | **PATCH** /basicUsers/{id} | Update provided fields on Basic user
[**patchrolesById**](RoleApi.md#patchrolesById) | **PATCH** /roles/{id} | Update provided fields on Role
[**postTaskForbasicUsers**](RoleApi.md#postTaskForbasicUsers) | **POST** /basicUsers/{id} | Perform a task
[**postTaskForroles**](RoleApi.md#postTaskForroles) | **POST** /roles/{id} | Perform a task
[**postTaskForrolesusers**](RoleApi.md#postTaskForrolesusers) | **POST** /roles/{id}/users | Perform a task
[**postbasicUsersById**](RoleApi.md#postbasicUsersById) | **POST** /basicUsers | Add new basicUsers
[**postrolesById**](RoleApi.md#postrolesById) | **POST** /roles | Add new roles, or task&#x3D;CopyRole
[**putbasicUsersById**](RoleApi.md#putbasicUsersById) | **PUT** /basicUsers/{id} | Update all fields on Basic user
[**putrolesById**](RoleApi.md#putrolesById) | **PUT** /roles/{id} | Update all fields on Role

<a name="deletebasicUsersById"></a>
# **deletebasicUsersById**
> InlineResponse2013 deletebasicUsersById(id)

Delete a basicUsers

Basic user

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RoleApi();
let id = "id_example"; // String | Id of the object

apiInstance.deletebasicUsersById(id, (error, data, response) => {
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

[**InlineResponse2013**](InlineResponse2013.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleterolesById"></a>
# **deleterolesById**
> InlineResponse20122 deleterolesById(id)

Delete a roles

Role

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RoleApi();
let id = "id_example"; // String | Id of the object

apiInstance.deleterolesById(id, (error, data, response) => {
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

[**InlineResponse20122**](InlineResponse20122.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllbasicUsers"></a>
# **getAllbasicUsers**
> InlineResponse20022 getAllbasicUsers()

Get array of all Basic user

Basic user

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RoleApi();
apiInstance.getAllbasicUsers((error, data, response) => {
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

[**InlineResponse20022**](InlineResponse20022.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllclaimsInAbasicUsers"></a>
# **getAllclaimsInAbasicUsers**
> InlineResponse20025 getAllclaimsInAbasicUsers(id)

Get array of all claims

Basic user

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RoleApi();
let id = "id_example"; // String | Id of the basicUser object

apiInstance.getAllclaimsInAbasicUsers(id, (error, data, response) => {
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
 **id** | **String**| Id of the basicUser object | 

### Return type

[**InlineResponse20025**](InlineResponse20025.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllclaimsInAroles"></a>
# **getAllclaimsInAroles**
> InlineResponse20025 getAllclaimsInAroles(id)

Get array of all claims

Role

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RoleApi();
let id = "id_example"; // String | Id of the role object

apiInstance.getAllclaimsInAroles(id, (error, data, response) => {
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
 **id** | **String**| Id of the role object | 

### Return type

[**InlineResponse20025**](InlineResponse20025.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllroles"></a>
# **getAllroles**
> InlineResponse200135 getAllroles()

Get array of all Role

Role

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RoleApi();
apiInstance.getAllroles((error, data, response) => {
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

[**InlineResponse200135**](InlineResponse200135.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllusersInAroles"></a>
# **getAllusersInAroles**
> InlineResponse200139 getAllusersInAroles(id)

Get array of all users

Role

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RoleApi();
let id = "id_example"; // String | Id of the object

apiInstance.getAllusersInAroles(id, (error, data, response) => {
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

[**InlineResponse200139**](InlineResponse200139.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOneusersInAroles"></a>
# **getOneusersInAroles**
> InlineResponse200139 getOneusersInAroles(idParent, id)

Get specific users

Role

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RoleApi();
let idParent = "idParent_example"; // String | Id of the role object
let id = "id_example"; // String | Id of the user object

apiInstance.getOneusersInAroles(idParent, id, (error, data, response) => {
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
 **idParent** | **String**| Id of the role object | 
 **id** | **String**| Id of the user object | 

### Return type

[**InlineResponse200139**](InlineResponse200139.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getbasicUsersById"></a>
# **getbasicUsersById**
> InlineResponse20023 getbasicUsersById(id, opts)

Get specific object of Basic user

Basic user

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RoleApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getbasicUsersById(id, opts, (error, data, response) => {
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

[**InlineResponse20023**](InlineResponse20023.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getrolesById"></a>
# **getrolesById**
> InlineResponse200137 getrolesById(id, opts)

Get specific object of Role

Role

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RoleApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getrolesById(id, opts, (error, data, response) => {
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

[**InlineResponse200137**](InlineResponse200137.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchbasicUsersById"></a>
# **patchbasicUsersById**
> InlineResponse2013 patchbasicUsersById(id, opts)

Update provided fields on Basic user

Basic user

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RoleApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.BasicUsers() // BasicUsers | 
};
apiInstance.patchbasicUsersById(id, opts, (error, data, response) => {
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
 **body** | [**BasicUsers**](BasicUsers.md)|  | [optional] 

### Return type

[**InlineResponse2013**](InlineResponse2013.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchrolesById"></a>
# **patchrolesById**
> InlineResponse20122 patchrolesById(id, opts)

Update provided fields on Role

Role

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RoleApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.Roles() // Roles | 
};
apiInstance.patchrolesById(id, opts, (error, data, response) => {
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
 **body** | [**Roles**](Roles.md)|  | [optional] 

### Return type

[**InlineResponse20122**](InlineResponse20122.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postTaskForbasicUsers"></a>
# **postTaskForbasicUsers**
> InlineResponse20024 postTaskForbasicUsers(id, task, opts)

Perform a task

Basic user

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RoleApi();
let id = "id_example"; // String | Id of the object
let task = "task_example"; // String | task=ChangePasswordBasicUser
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.ChangePasswordBasicUserRequestBody() // ChangePasswordBasicUserRequestBody | 
};
apiInstance.postTaskForbasicUsers(id, task, opts, (error, data, response) => {
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
 **task** | **String**| task&#x3D;ChangePasswordBasicUser | 
 **body** | [**ChangePasswordBasicUserRequestBody**](ChangePasswordBasicUserRequestBody.md)|  | [optional] 

### Return type

[**InlineResponse20024**](InlineResponse20024.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postTaskForroles"></a>
# **postTaskForroles**
> InlineResponse200138 postTaskForroles(id, task, opts)

Perform a task

Role

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RoleApi();
let id = "id_example"; // String | Id of the object
let task = "task_example"; // String | task=SetClientTimeProfile, or task=GetClientTimeProfile, or task=SetClientProfile, or task=ChangeOverallSecurityPermissions
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.RolesIdBody() // RolesIdBody | 
};
apiInstance.postTaskForroles(id, task, opts, (error, data, response) => {
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
 **task** | **String**| task&#x3D;SetClientTimeProfile, or task&#x3D;GetClientTimeProfile, or task&#x3D;SetClientProfile, or task&#x3D;ChangeOverallSecurityPermissions | 
 **body** | [**RolesIdBody**](RolesIdBody.md)|  | [optional] 

### Return type

[**InlineResponse200138**](InlineResponse200138.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postTaskForrolesusers"></a>
# **postTaskForrolesusers**
> InlineResponse200140 postTaskForrolesusers(id, task, opts)

Perform a task

Role

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RoleApi();
let id = "id_example"; // String | Id of the object
let task = "task_example"; // String | task=AddRoleMember, or task=RemoveRoleMember
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.IdUsersBody() // IdUsersBody | 
};
apiInstance.postTaskForrolesusers(id, task, opts, (error, data, response) => {
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
 **task** | **String**| task&#x3D;AddRoleMember, or task&#x3D;RemoveRoleMember | 
 **body** | [**IdUsersBody**](IdUsersBody.md)|  | [optional] 

### Return type

[**InlineResponse200140**](InlineResponse200140.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postbasicUsersById"></a>
# **postbasicUsersById**
> InlineResponse2013 postbasicUsersById(opts)

Add new basicUsers

Basic user

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RoleApi();
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.BasicUsers() // BasicUsers | 
};
apiInstance.postbasicUsersById(opts, (error, data, response) => {
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
 **body** | [**BasicUsers**](BasicUsers.md)|  | [optional] 

### Return type

[**InlineResponse2013**](InlineResponse2013.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postrolesById"></a>
# **postrolesById**
> InlineResponse200136 postrolesById(opts)

Add new roles, or task&#x3D;CopyRole

Role, or perform a task

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RoleApi();
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.RolesBody() // RolesBody | 
};
apiInstance.postrolesById(opts, (error, data, response) => {
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
 **body** | [**RolesBody**](RolesBody.md)|  | [optional] 

### Return type

[**InlineResponse200136**](InlineResponse200136.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putbasicUsersById"></a>
# **putbasicUsersById**
> InlineResponse2013 putbasicUsersById(id, opts)

Update all fields on Basic user

Basic user

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RoleApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.BasicUsers() // BasicUsers | 
};
apiInstance.putbasicUsersById(id, opts, (error, data, response) => {
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
 **body** | [**BasicUsers**](BasicUsers.md)|  | [optional] 

### Return type

[**InlineResponse2013**](InlineResponse2013.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putrolesById"></a>
# **putrolesById**
> InlineResponse20122 putrolesById(id, opts)

Update all fields on Role

Role

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.RoleApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.Roles() // Roles | 
};
apiInstance.putrolesById(id, opts, (error, data, response) => {
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
 **body** | [**Roles**](Roles.md)|  | [optional] 

### Return type

[**InlineResponse20122**](InlineResponse20122.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

