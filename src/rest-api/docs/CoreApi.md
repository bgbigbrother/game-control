# MilestoneIntegrationPlatformVmsResTfulApi.CoreApi

All URIs are relative to *https://localhost/API/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteloginProvidersById**](CoreApi.md#deleteloginProvidersById) | **DELETE** /loginProviders/{id} | Delete a loginProviders
[**deleteloginProvidersByIdregisteredClaims**](CoreApi.md#deleteloginProvidersByIdregisteredClaims) | **DELETE** /loginProviders/{idParent}/registeredClaims/{id} | Remove a registeredClaims from a loginProviders
[**getAllTranslations**](CoreApi.md#getAllTranslations) | **GET** /translations | Get list of all translations for one language
[**getAllaccessControlSystemsInAsites**](CoreApi.md#getAllaccessControlSystemsInAsites) | **GET** /sites/{id}/accessControlSystems | Get array of all accessControlSystems
[**getAllalarmDefinitionsInAsites**](CoreApi.md#getAllalarmDefinitionsInAsites) | **GET** /sites/{id}/alarmDefinitions | Get array of all alarmDefinitions
[**getAllanalyticsEventsInAsites**](CoreApi.md#getAllanalyticsEventsInAsites) | **GET** /sites/{id}/analyticsEvents | Get array of all analyticsEvents
[**getAllbasicUsersInAsites**](CoreApi.md#getAllbasicUsersInAsites) | **GET** /sites/{id}/basicUsers | Get array of all basicUsers
[**getAllcameraGroupsInAsites**](CoreApi.md#getAllcameraGroupsInAsites) | **GET** /sites/{id}/cameraGroups | Get array of all cameraGroups
[**getAllchildSites**](CoreApi.md#getAllchildSites) | **GET** /childSites | Get array of all Child sites
[**getAllchildSitesInAchildSites**](CoreApi.md#getAllchildSitesInAchildSites) | **GET** /childSites/{id}/childSites | Get array of all childSites
[**getAllchildSitesInAsites**](CoreApi.md#getAllchildSitesInAsites) | **GET** /sites/{id}/childSites | Get array of all childSites
[**getAllclientProfilesInAsites**](CoreApi.md#getAllclientProfilesInAsites) | **GET** /sites/{id}/clientProfiles | Get array of all clientProfiles
[**getAlleventTypeGroupsInAsites**](CoreApi.md#getAlleventTypeGroupsInAsites) | **GET** /sites/{id}/eventTypeGroups | Get array of all eventTypeGroups
[**getAllfailoverGroupsInAsites**](CoreApi.md#getAllfailoverGroupsInAsites) | **GET** /sites/{id}/failoverGroups | Get array of all failoverGroups
[**getAllgenericEventDataSourcesInAsites**](CoreApi.md#getAllgenericEventDataSourcesInAsites) | **GET** /sites/{id}/genericEventDataSources | Get array of all genericEventDataSources
[**getAllgenericEventsInAsites**](CoreApi.md#getAllgenericEventsInAsites) | **GET** /sites/{id}/genericEvents | Get array of all genericEvents
[**getAllgisMapLocationsInAsites**](CoreApi.md#getAllgisMapLocationsInAsites) | **GET** /sites/{id}/gisMapLocations | Get array of all gisMapLocations
[**getAllinputEventGroupsInAsites**](CoreApi.md#getAllinputEventGroupsInAsites) | **GET** /sites/{id}/inputEventGroups | Get array of all inputEventGroups
[**getAlllayoutGroupsInAsites**](CoreApi.md#getAlllayoutGroupsInAsites) | **GET** /sites/{id}/layoutGroups | Get array of all layoutGroups
[**getAlllicenseDetailsInAlicenseInformations**](CoreApi.md#getAlllicenseDetailsInAlicenseInformations) | **GET** /licenseInformations/{id}/licenseDetails | Get array of all licenseDetails
[**getAlllicenseInformations**](CoreApi.md#getAlllicenseInformations) | **GET** /licenseInformations | Get array of all License information
[**getAlllicenseInformationsInAsites**](CoreApi.md#getAlllicenseInformationsInAsites) | **GET** /sites/{id}/licenseInformations | Get array of all licenseInformations
[**getAlllicenseInstalledProductsInAlicenseInformations**](CoreApi.md#getAlllicenseInstalledProductsInAlicenseInformations) | **GET** /licenseInformations/{id}/licenseInstalledProducts | Get array of all licenseInstalledProducts
[**getAlllicenseOverviewAllInAlicenseInformations**](CoreApi.md#getAlllicenseOverviewAllInAlicenseInformations) | **GET** /licenseInformations/{id}/licenseOverviewAll | Get array of all licenseOverviewAll
[**getAllloginProviders**](CoreApi.md#getAllloginProviders) | **GET** /loginProviders | Get array of all enabled External IDP
[**getAllloginProvidersInAsites**](CoreApi.md#getAllloginProvidersInAsites) | **GET** /sites/{id}/loginProviders | Get array of all loginProviders
[**getAlllprMatchListsInAsites**](CoreApi.md#getAlllprMatchListsInAsites) | **GET** /sites/{id}/lprMatchLists | Get array of all lprMatchLists
[**getAllmetadataGroupsInAsites**](CoreApi.md#getAllmetadataGroupsInAsites) | **GET** /sites/{id}/metadataGroups | Get array of all metadataGroups
[**getAllmicrophoneGroupsInAsites**](CoreApi.md#getAllmicrophoneGroupsInAsites) | **GET** /sites/{id}/microphoneGroups | Get array of all microphoneGroups
[**getAlloutputGroupsInAsites**](CoreApi.md#getAlloutputGroupsInAsites) | **GET** /sites/{id}/outputGroups | Get array of all outputGroups
[**getAllowner**](CoreApi.md#getAllowner) | **GET** /owner | Get array of all Basic Owner Information
[**getAllownerInAsites**](CoreApi.md#getAllownerInAsites) | **GET** /sites/{id}/owner | Get array of all owner
[**getAllpatrollingProfiles**](CoreApi.md#getAllpatrollingProfiles) | **GET** /patrollingProfiles | Get array of all Patrolling profile
[**getAllrecordingServersInAsites**](CoreApi.md#getAllrecordingServersInAsites) | **GET** /sites/{id}/recordingServers | Get array of all recordingServers
[**getAllregisteredClaims**](CoreApi.md#getAllregisteredClaims) | **GET** /registeredClaims | Get array of all Registered claims
[**getAllregisteredClaimsInAloginProviders**](CoreApi.md#getAllregisteredClaimsInAloginProviders) | **GET** /loginProviders/{id}/registeredClaims | Get array of all registeredClaims
[**getAllrolesInAsites**](CoreApi.md#getAllrolesInAsites) | **GET** /sites/{id}/roles | Get array of all roles
[**getAllrulesInAsites**](CoreApi.md#getAllrulesInAsites) | **GET** /sites/{id}/rules | Get array of all rules
[**getAllsaveSearchesInAsites**](CoreApi.md#getAllsaveSearchesInAsites) | **GET** /sites/{id}/saveSearches | Get array of all saveSearches
[**getAllsiteAddressesInAchildSites**](CoreApi.md#getAllsiteAddressesInAchildSites) | **GET** /childSites/{id}/siteAddresses | Get array of all siteAddresses
[**getAllsites**](CoreApi.md#getAllsites) | **GET** /sites | Get array of all Management Server
[**getAllspeakerGroupsInAsites**](CoreApi.md#getAllspeakerGroupsInAsites) | **GET** /sites/{id}/speakerGroups | Get array of all speakerGroups
[**getAllsystemAddressesInAsites**](CoreApi.md#getAllsystemAddressesInAsites) | **GET** /sites/{id}/systemAddresses | Get array of all systemAddresses
[**getAlltasks**](CoreApi.md#getAlltasks) | **GET** /tasks | Get array of all Tasks
[**getAlltimeProfilesInAsites**](CoreApi.md#getAlltimeProfilesInAsites) | **GET** /sites/{id}/timeProfiles | Get array of all timeProfiles
[**getAlltoolOptions**](CoreApi.md#getAlltoolOptions) | **GET** /toolOptions | Get array of all System options
[**getAlltoolOptionsInAsites**](CoreApi.md#getAlltoolOptionsInAsites) | **GET** /sites/{id}/toolOptions | Get array of all toolOptions
[**getAlluserDefinedEventsInAsites**](CoreApi.md#getAlluserDefinedEventsInAsites) | **GET** /sites/{id}/userDefinedEvents | Get array of all userDefinedEvents
[**getAllvideoWallsInAsites**](CoreApi.md#getAllvideoWallsInAsites) | **GET** /sites/{id}/videoWalls | Get array of all videoWalls
[**getAllviewGroupsInAsites**](CoreApi.md#getAllviewGroupsInAsites) | **GET** /sites/{id}/viewGroups | Get array of all viewGroups
[**getchildSitesById**](CoreApi.md#getchildSitesById) | **GET** /childSites/{id} | Get specific object of Child sites
[**getlicenseInformationsById**](CoreApi.md#getlicenseInformationsById) | **GET** /licenseInformations/{id} | Get specific object of License information
[**getloginProvidersById**](CoreApi.md#getloginProvidersById) | **GET** /loginProviders/{id} | Get specific object of External IDP
[**getownerById**](CoreApi.md#getownerById) | **GET** /owner/{id} | Get specific object of Basic Owner Information
[**getpatrollingProfilesById**](CoreApi.md#getpatrollingProfilesById) | **GET** /patrollingProfiles/{id} | Get specific object of Patrolling profile
[**getregisteredClaimsById**](CoreApi.md#getregisteredClaimsById) | **GET** /registeredClaims/{id} | Get specific object of Registered claims
[**getsitesById**](CoreApi.md#getsitesById) | **GET** /sites/{id} | Get specific object of Management Server
[**gettasksById**](CoreApi.md#gettasksById) | **GET** /tasks/{id} | Get specific object of Tasks
[**gettoolOptionsById**](CoreApi.md#gettoolOptionsById) | **GET** /toolOptions/{id} | Get specific object of System options
[**patchchildSitesById**](CoreApi.md#patchchildSitesById) | **PATCH** /childSites/{id} | Update provided fields on Child sites
[**patchlicenseInformationsById**](CoreApi.md#patchlicenseInformationsById) | **PATCH** /licenseInformations/{id} | Update provided fields on License information
[**patchloginProvidersById**](CoreApi.md#patchloginProvidersById) | **PATCH** /loginProviders/{id} | Update provided fields on External IDP
[**patchownerById**](CoreApi.md#patchownerById) | **PATCH** /owner/{id} | Update provided fields on Basic Owner Information
[**patchpatrollingProfilesById**](CoreApi.md#patchpatrollingProfilesById) | **PATCH** /patrollingProfiles/{id} | Update provided fields on Patrolling profile
[**patchregisteredClaimsById**](CoreApi.md#patchregisteredClaimsById) | **PATCH** /registeredClaims/{id} | Update provided fields on Registered claims
[**patchsitesById**](CoreApi.md#patchsitesById) | **PATCH** /sites/{id} | Update provided fields on Management Server
[**patchtoolOptionsById**](CoreApi.md#patchtoolOptionsById) | **PATCH** /toolOptions/{id} | Update provided fields on System options
[**postTaskForlicenseInformations**](CoreApi.md#postTaskForlicenseInformations) | **POST** /licenseInformations/{id} | Perform a task
[**postTaskForowner**](CoreApi.md#postTaskForowner) | **POST** /owner/{id} | Perform a task
[**postTaskForpatrollingProfiles**](CoreApi.md#postTaskForpatrollingProfiles) | **POST** /patrollingProfiles/{id} | Perform a task
[**postTaskForsites**](CoreApi.md#postTaskForsites) | **POST** /sites | Perform a task
[**postloginProvidersById**](CoreApi.md#postloginProvidersById) | **POST** /loginProviders | Add new loginProviders
[**postloginProvidersByIdregisteredClaims**](CoreApi.md#postloginProvidersByIdregisteredClaims) | **POST** /loginProviders/{id}/registeredClaims | Add a registeredClaims to a loginProviders
[**putchildSitesById**](CoreApi.md#putchildSitesById) | **PUT** /childSites/{id} | Update all fields on Child sites
[**putlicenseInformationsById**](CoreApi.md#putlicenseInformationsById) | **PUT** /licenseInformations/{id} | Update all fields on License information
[**putloginProvidersById**](CoreApi.md#putloginProvidersById) | **PUT** /loginProviders/{id} | Update all fields on External IDP
[**putownerById**](CoreApi.md#putownerById) | **PUT** /owner/{id} | Update all fields on Basic Owner Information
[**putpatrollingProfilesById**](CoreApi.md#putpatrollingProfilesById) | **PUT** /patrollingProfiles/{id} | Update all fields on Patrolling profile
[**putregisteredClaimsById**](CoreApi.md#putregisteredClaimsById) | **PUT** /registeredClaims/{id} | Update all fields on Registered claims
[**putsitesById**](CoreApi.md#putsitesById) | **PUT** /sites/{id} | Update all fields on Management Server
[**puttoolOptionsById**](CoreApi.md#puttoolOptionsById) | **PUT** /toolOptions/{id} | Update all fields on System options

<a name="deleteloginProvidersById"></a>
# **deleteloginProvidersById**
> InlineResponse20114 deleteloginProvidersById(id)

Delete a loginProviders

External IDP

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the object

apiInstance.deleteloginProvidersById(id, (error, data, response) => {
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

[**InlineResponse20114**](InlineResponse20114.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteloginProvidersByIdregisteredClaims"></a>
# **deleteloginProvidersByIdregisteredClaims**
> InlineResponse20115 deleteloginProvidersByIdregisteredClaims(idParent, id)

Remove a registeredClaims from a loginProviders

External IDP

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let idParent = "idParent_example"; // String | Id of parent object
let id = "id_example"; // String | Id of the object

apiInstance.deleteloginProvidersByIdregisteredClaims(idParent, id, (error, data, response) => {
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

[**InlineResponse20115**](InlineResponse20115.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllTranslations"></a>
# **getAllTranslations**
> InlineResponse200186 getAllTranslations(language)

Get list of all translations for one language

Get list of all translations for one language

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let language = "language_example"; // String | Select what language to translate to, e.g. en-us

apiInstance.getAllTranslations(language, (error, data, response) => {
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
 **language** | **String**| Select what language to translate to, e.g. en-us | 

### Return type

[**InlineResponse200186**](InlineResponse200186.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllaccessControlSystemsInAsites"></a>
# **getAllaccessControlSystemsInAsites**
> InlineResponse200 getAllaccessControlSystemsInAsites(id)

Get array of all accessControlSystems

Management Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the site object

apiInstance.getAllaccessControlSystemsInAsites(id, (error, data, response) => {
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
 **id** | **String**| Id of the site object | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllalarmDefinitionsInAsites"></a>
# **getAllalarmDefinitionsInAsites**
> InlineResponse2007 getAllalarmDefinitionsInAsites(id)

Get array of all alarmDefinitions

Management Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the site object

apiInstance.getAllalarmDefinitionsInAsites(id, (error, data, response) => {
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
 **id** | **String**| Id of the site object | 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllanalyticsEventsInAsites"></a>
# **getAllanalyticsEventsInAsites**
> InlineResponse2009 getAllanalyticsEventsInAsites(id)

Get array of all analyticsEvents

Management Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the site object

apiInstance.getAllanalyticsEventsInAsites(id, (error, data, response) => {
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
 **id** | **String**| Id of the site object | 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllbasicUsersInAsites"></a>
# **getAllbasicUsersInAsites**
> InlineResponse20022 getAllbasicUsersInAsites(id)

Get array of all basicUsers

Management Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the site object

apiInstance.getAllbasicUsersInAsites(id, (error, data, response) => {
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
 **id** | **String**| Id of the site object | 

### Return type

[**InlineResponse20022**](InlineResponse20022.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllcameraGroupsInAsites"></a>
# **getAllcameraGroupsInAsites**
> InlineResponse20040 getAllcameraGroupsInAsites(id)

Get array of all cameraGroups

Management Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the site object

apiInstance.getAllcameraGroupsInAsites(id, (error, data, response) => {
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
 **id** | **String**| Id of the site object | 

### Return type

[**InlineResponse20040**](InlineResponse20040.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllchildSites"></a>
# **getAllchildSites**
> InlineResponse200146 getAllchildSites()

Get array of all Child sites

Child sites

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
apiInstance.getAllchildSites((error, data, response) => {
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

[**InlineResponse200146**](InlineResponse200146.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllchildSitesInAchildSites"></a>
# **getAllchildSitesInAchildSites**
> InlineResponse200146 getAllchildSitesInAchildSites(id)

Get array of all childSites

Child sites

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the childSite object

apiInstance.getAllchildSitesInAchildSites(id, (error, data, response) => {
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
 **id** | **String**| Id of the childSite object | 

### Return type

[**InlineResponse200146**](InlineResponse200146.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllchildSitesInAsites"></a>
# **getAllchildSitesInAsites**
> InlineResponse200146 getAllchildSitesInAsites(id)

Get array of all childSites

Management Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the site object

apiInstance.getAllchildSitesInAsites(id, (error, data, response) => {
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
 **id** | **String**| Id of the site object | 

### Return type

[**InlineResponse200146**](InlineResponse200146.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllclientProfilesInAsites"></a>
# **getAllclientProfilesInAsites**
> InlineResponse20042 getAllclientProfilesInAsites(id)

Get array of all clientProfiles

Management Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the site object

apiInstance.getAllclientProfilesInAsites(id, (error, data, response) => {
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
 **id** | **String**| Id of the site object | 

### Return type

[**InlineResponse20042**](InlineResponse20042.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAlleventTypeGroupsInAsites"></a>
# **getAlleventTypeGroupsInAsites**
> InlineResponse20046 getAlleventTypeGroupsInAsites(id)

Get array of all eventTypeGroups

Management Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the site object

apiInstance.getAlleventTypeGroupsInAsites(id, (error, data, response) => {
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
 **id** | **String**| Id of the site object | 

### Return type

[**InlineResponse20046**](InlineResponse20046.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllfailoverGroupsInAsites"></a>
# **getAllfailoverGroupsInAsites**
> InlineResponse20052 getAllfailoverGroupsInAsites(id)

Get array of all failoverGroups

Management Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the site object

apiInstance.getAllfailoverGroupsInAsites(id, (error, data, response) => {
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
 **id** | **String**| Id of the site object | 

### Return type

[**InlineResponse20052**](InlineResponse20052.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllgenericEventDataSourcesInAsites"></a>
# **getAllgenericEventDataSourcesInAsites**
> InlineResponse20059 getAllgenericEventDataSourcesInAsites(id)

Get array of all genericEventDataSources

Management Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the site object

apiInstance.getAllgenericEventDataSourcesInAsites(id, (error, data, response) => {
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
 **id** | **String**| Id of the site object | 

### Return type

[**InlineResponse20059**](InlineResponse20059.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllgenericEventsInAsites"></a>
# **getAllgenericEventsInAsites**
> InlineResponse20050 getAllgenericEventsInAsites(id)

Get array of all genericEvents

Management Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the site object

apiInstance.getAllgenericEventsInAsites(id, (error, data, response) => {
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
 **id** | **String**| Id of the site object | 

### Return type

[**InlineResponse20050**](InlineResponse20050.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllgisMapLocationsInAsites"></a>
# **getAllgisMapLocationsInAsites**
> InlineResponse20061 getAllgisMapLocationsInAsites(id)

Get array of all gisMapLocations

Management Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the site object

apiInstance.getAllgisMapLocationsInAsites(id, (error, data, response) => {
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
 **id** | **String**| Id of the site object | 

### Return type

[**InlineResponse20061**](InlineResponse20061.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllinputEventGroupsInAsites"></a>
# **getAllinputEventGroupsInAsites**
> InlineResponse20081 getAllinputEventGroupsInAsites(id)

Get array of all inputEventGroups

Management Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the site object

apiInstance.getAllinputEventGroupsInAsites(id, (error, data, response) => {
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
 **id** | **String**| Id of the site object | 

### Return type

[**InlineResponse20081**](InlineResponse20081.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAlllayoutGroupsInAsites"></a>
# **getAlllayoutGroupsInAsites**
> InlineResponse20083 getAlllayoutGroupsInAsites(id)

Get array of all layoutGroups

Management Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the site object

apiInstance.getAlllayoutGroupsInAsites(id, (error, data, response) => {
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
 **id** | **String**| Id of the site object | 

### Return type

[**InlineResponse20083**](InlineResponse20083.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAlllicenseDetailsInAlicenseInformations"></a>
# **getAlllicenseDetailsInAlicenseInformations**
> InlineResponse20091 getAlllicenseDetailsInAlicenseInformations(id)

Get array of all licenseDetails

License information

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the licenseInformation object

apiInstance.getAlllicenseDetailsInAlicenseInformations(id, (error, data, response) => {
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
 **id** | **String**| Id of the licenseInformation object | 

### Return type

[**InlineResponse20091**](InlineResponse20091.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAlllicenseInformations"></a>
# **getAlllicenseInformations**
> InlineResponse20087 getAlllicenseInformations()

Get array of all License information

License information

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
apiInstance.getAlllicenseInformations((error, data, response) => {
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

[**InlineResponse20087**](InlineResponse20087.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAlllicenseInformationsInAsites"></a>
# **getAlllicenseInformationsInAsites**
> InlineResponse20087 getAlllicenseInformationsInAsites(id)

Get array of all licenseInformations

Management Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the site object

apiInstance.getAlllicenseInformationsInAsites(id, (error, data, response) => {
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
 **id** | **String**| Id of the site object | 

### Return type

[**InlineResponse20087**](InlineResponse20087.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAlllicenseInstalledProductsInAlicenseInformations"></a>
# **getAlllicenseInstalledProductsInAlicenseInformations**
> InlineResponse20092 getAlllicenseInstalledProductsInAlicenseInformations(id)

Get array of all licenseInstalledProducts

License information

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the licenseInformation object

apiInstance.getAlllicenseInstalledProductsInAlicenseInformations(id, (error, data, response) => {
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
 **id** | **String**| Id of the licenseInformation object | 

### Return type

[**InlineResponse20092**](InlineResponse20092.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAlllicenseOverviewAllInAlicenseInformations"></a>
# **getAlllicenseOverviewAllInAlicenseInformations**
> InlineResponse20093 getAlllicenseOverviewAllInAlicenseInformations(id)

Get array of all licenseOverviewAll

License information

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the licenseInformation object

apiInstance.getAlllicenseOverviewAllInAlicenseInformations(id, (error, data, response) => {
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
 **id** | **String**| Id of the licenseInformation object | 

### Return type

[**InlineResponse20093**](InlineResponse20093.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllloginProviders"></a>
# **getAllloginProviders**
> InlineResponse20094 getAllloginProviders()

Get array of all enabled External IDP

External IDP. To include disabled items add ?disabled to the request.

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
apiInstance.getAllloginProviders((error, data, response) => {
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

[**InlineResponse20094**](InlineResponse20094.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllloginProvidersInAsites"></a>
# **getAllloginProvidersInAsites**
> InlineResponse20094 getAllloginProvidersInAsites(id)

Get array of all loginProviders

Management Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the site object

apiInstance.getAllloginProvidersInAsites(id, (error, data, response) => {
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
 **id** | **String**| Id of the site object | 

### Return type

[**InlineResponse20094**](InlineResponse20094.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAlllprMatchListsInAsites"></a>
# **getAlllprMatchListsInAsites**
> InlineResponse20097 getAlllprMatchListsInAsites(id)

Get array of all lprMatchLists

Management Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the site object

apiInstance.getAlllprMatchListsInAsites(id, (error, data, response) => {
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
 **id** | **String**| Id of the site object | 

### Return type

[**InlineResponse20097**](InlineResponse20097.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllmetadataGroupsInAsites"></a>
# **getAllmetadataGroupsInAsites**
> InlineResponse200102 getAllmetadataGroupsInAsites(id)

Get array of all metadataGroups

Management Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the site object

apiInstance.getAllmetadataGroupsInAsites(id, (error, data, response) => {
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
 **id** | **String**| Id of the site object | 

### Return type

[**InlineResponse200102**](InlineResponse200102.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllmicrophoneGroupsInAsites"></a>
# **getAllmicrophoneGroupsInAsites**
> InlineResponse200106 getAllmicrophoneGroupsInAsites(id)

Get array of all microphoneGroups

Management Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the site object

apiInstance.getAllmicrophoneGroupsInAsites(id, (error, data, response) => {
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
 **id** | **String**| Id of the site object | 

### Return type

[**InlineResponse200106**](InlineResponse200106.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAlloutputGroupsInAsites"></a>
# **getAlloutputGroupsInAsites**
> InlineResponse200118 getAlloutputGroupsInAsites(id)

Get array of all outputGroups

Management Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the site object

apiInstance.getAlloutputGroupsInAsites(id, (error, data, response) => {
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
 **id** | **String**| Id of the site object | 

### Return type

[**InlineResponse200118**](InlineResponse200118.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllowner"></a>
# **getAllowner**
> InlineResponse20018 getAllowner()

Get array of all Basic Owner Information

Basic Owner Information

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
apiInstance.getAllowner((error, data, response) => {
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

[**InlineResponse20018**](InlineResponse20018.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllownerInAsites"></a>
# **getAllownerInAsites**
> InlineResponse20018 getAllownerInAsites(id)

Get array of all owner

Management Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the site object

apiInstance.getAllownerInAsites(id, (error, data, response) => {
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
 **id** | **String**| Id of the site object | 

### Return type

[**InlineResponse20018**](InlineResponse20018.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllpatrollingProfiles"></a>
# **getAllpatrollingProfiles**
> InlineResponse20035 getAllpatrollingProfiles()

Get array of all Patrolling profile

Patrolling profile

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
apiInstance.getAllpatrollingProfiles((error, data, response) => {
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

[**InlineResponse20035**](InlineResponse20035.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllrecordingServersInAsites"></a>
# **getAllrecordingServersInAsites**
> InlineResponse200122 getAllrecordingServersInAsites(id)

Get array of all recordingServers

Management Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the site object

apiInstance.getAllrecordingServersInAsites(id, (error, data, response) => {
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
 **id** | **String**| Id of the site object | 

### Return type

[**InlineResponse200122**](InlineResponse200122.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllregisteredClaims"></a>
# **getAllregisteredClaims**
> InlineResponse20096 getAllregisteredClaims()

Get array of all Registered claims

Registered claims

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
apiInstance.getAllregisteredClaims((error, data, response) => {
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

[**InlineResponse20096**](InlineResponse20096.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllregisteredClaimsInAloginProviders"></a>
# **getAllregisteredClaimsInAloginProviders**
> InlineResponse20096 getAllregisteredClaimsInAloginProviders(id)

Get array of all registeredClaims

External IDP

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the loginProvider object

apiInstance.getAllregisteredClaimsInAloginProviders(id, (error, data, response) => {
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
 **id** | **String**| Id of the loginProvider object | 

### Return type

[**InlineResponse20096**](InlineResponse20096.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllrolesInAsites"></a>
# **getAllrolesInAsites**
> InlineResponse200135 getAllrolesInAsites(id)

Get array of all roles

Management Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the site object

apiInstance.getAllrolesInAsites(id, (error, data, response) => {
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
 **id** | **String**| Id of the site object | 

### Return type

[**InlineResponse200135**](InlineResponse200135.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllrulesInAsites"></a>
# **getAllrulesInAsites**
> InlineResponse200141 getAllrulesInAsites(id)

Get array of all rules

Management Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the site object

apiInstance.getAllrulesInAsites(id, (error, data, response) => {
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
 **id** | **String**| Id of the site object | 

### Return type

[**InlineResponse200141**](InlineResponse200141.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllsaveSearchesInAsites"></a>
# **getAllsaveSearchesInAsites**
> InlineResponse200143 getAllsaveSearchesInAsites(id)

Get array of all saveSearches

Management Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the site object

apiInstance.getAllsaveSearchesInAsites(id, (error, data, response) => {
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
 **id** | **String**| Id of the site object | 

### Return type

[**InlineResponse200143**](InlineResponse200143.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllsiteAddressesInAchildSites"></a>
# **getAllsiteAddressesInAchildSites**
> InlineResponse200149 getAllsiteAddressesInAchildSites(id)

Get array of all siteAddresses

Child sites

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the childSite object

apiInstance.getAllsiteAddressesInAchildSites(id, (error, data, response) => {
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
 **id** | **String**| Id of the childSite object | 

### Return type

[**InlineResponse200149**](InlineResponse200149.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllsites"></a>
# **getAllsites**
> InlineResponse200162 getAllsites()

Get array of all Management Server

Management Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
apiInstance.getAllsites((error, data, response) => {
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

[**InlineResponse200162**](InlineResponse200162.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllspeakerGroupsInAsites"></a>
# **getAllspeakerGroupsInAsites**
> InlineResponse200152 getAllspeakerGroupsInAsites(id)

Get array of all speakerGroups

Management Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the site object

apiInstance.getAllspeakerGroupsInAsites(id, (error, data, response) => {
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
 **id** | **String**| Id of the site object | 

### Return type

[**InlineResponse200152**](InlineResponse200152.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllsystemAddressesInAsites"></a>
# **getAllsystemAddressesInAsites**
> InlineResponse200166 getAllsystemAddressesInAsites(id)

Get array of all systemAddresses

Management Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the site object

apiInstance.getAllsystemAddressesInAsites(id, (error, data, response) => {
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
 **id** | **String**| Id of the site object | 

### Return type

[**InlineResponse200166**](InlineResponse200166.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAlltasks"></a>
# **getAlltasks**
> InlineResponse200184 getAlltasks()

Get array of all Tasks

Tasks

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
apiInstance.getAlltasks((error, data, response) => {
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

[**InlineResponse200184**](InlineResponse200184.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAlltimeProfilesInAsites"></a>
# **getAlltimeProfilesInAsites**
> InlineResponse200167 getAlltimeProfilesInAsites(id)

Get array of all timeProfiles

Management Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the site object

apiInstance.getAlltimeProfilesInAsites(id, (error, data, response) => {
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
 **id** | **String**| Id of the site object | 

### Return type

[**InlineResponse200167**](InlineResponse200167.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAlltoolOptions"></a>
# **getAlltoolOptions**
> InlineResponse200168 getAlltoolOptions()

Get array of all System options

System options

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
apiInstance.getAlltoolOptions((error, data, response) => {
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

[**InlineResponse200168**](InlineResponse200168.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAlltoolOptionsInAsites"></a>
# **getAlltoolOptionsInAsites**
> InlineResponse200168 getAlltoolOptionsInAsites(id)

Get array of all toolOptions

Management Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the site object

apiInstance.getAlltoolOptionsInAsites(id, (error, data, response) => {
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
 **id** | **String**| Id of the site object | 

### Return type

[**InlineResponse200168**](InlineResponse200168.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAlluserDefinedEventsInAsites"></a>
# **getAlluserDefinedEventsInAsites**
> InlineResponse20051 getAlluserDefinedEventsInAsites(id)

Get array of all userDefinedEvents

Management Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the site object

apiInstance.getAlluserDefinedEventsInAsites(id, (error, data, response) => {
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
 **id** | **String**| Id of the site object | 

### Return type

[**InlineResponse20051**](InlineResponse20051.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllvideoWallsInAsites"></a>
# **getAllvideoWallsInAsites**
> InlineResponse200169 getAllvideoWallsInAsites(id)

Get array of all videoWalls

Management Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the site object

apiInstance.getAllvideoWallsInAsites(id, (error, data, response) => {
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
 **id** | **String**| Id of the site object | 

### Return type

[**InlineResponse200169**](InlineResponse200169.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllviewGroupsInAsites"></a>
# **getAllviewGroupsInAsites**
> InlineResponse200170 getAllviewGroupsInAsites(id)

Get array of all viewGroups

Management Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the site object

apiInstance.getAllviewGroupsInAsites(id, (error, data, response) => {
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
 **id** | **String**| Id of the site object | 

### Return type

[**InlineResponse200170**](InlineResponse200170.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getchildSitesById"></a>
# **getchildSitesById**
> InlineResponse200147 getchildSitesById(id, opts)

Get specific object of Child sites

Child sites

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getchildSitesById(id, opts, (error, data, response) => {
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

[**InlineResponse200147**](InlineResponse200147.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getlicenseInformationsById"></a>
# **getlicenseInformationsById**
> InlineResponse20088 getlicenseInformationsById(id, opts)

Get specific object of License information

License information

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getlicenseInformationsById(id, opts, (error, data, response) => {
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

[**InlineResponse20088**](InlineResponse20088.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getloginProvidersById"></a>
# **getloginProvidersById**
> InlineResponse20095 getloginProvidersById(id, opts)

Get specific object of External IDP

External IDP

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getloginProvidersById(id, opts, (error, data, response) => {
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

[**InlineResponse20095**](InlineResponse20095.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getownerById"></a>
# **getownerById**
> InlineResponse20019 getownerById(id, opts)

Get specific object of Basic Owner Information

Basic Owner Information

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getownerById(id, opts, (error, data, response) => {
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

[**InlineResponse20019**](InlineResponse20019.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getpatrollingProfilesById"></a>
# **getpatrollingProfilesById**
> InlineResponse200120 getpatrollingProfilesById(id, opts)

Get specific object of Patrolling profile

Patrolling profile

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getpatrollingProfilesById(id, opts, (error, data, response) => {
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

[**InlineResponse200120**](InlineResponse200120.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getregisteredClaimsById"></a>
# **getregisteredClaimsById**
> InlineResponse200134 getregisteredClaimsById(id, opts)

Get specific object of Registered claims

Registered claims

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getregisteredClaimsById(id, opts, (error, data, response) => {
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

[**InlineResponse200134**](InlineResponse200134.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getsitesById"></a>
# **getsitesById**
> InlineResponse200164 getsitesById(id, opts)

Get specific object of Management Server

Management Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getsitesById(id, opts, (error, data, response) => {
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

[**InlineResponse200164**](InlineResponse200164.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="gettasksById"></a>
# **gettasksById**
> InlineResponse200185 gettasksById(id, opts)

Get specific object of Tasks

Tasks

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.gettasksById(id, opts, (error, data, response) => {
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

[**InlineResponse200185**](InlineResponse200185.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="gettoolOptionsById"></a>
# **gettoolOptionsById**
> InlineResponse200172 gettoolOptionsById(id, opts)

Get specific object of System options

System options

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.gettoolOptionsById(id, opts, (error, data, response) => {
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

[**InlineResponse200172**](InlineResponse200172.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchchildSitesById"></a>
# **patchchildSitesById**
> InlineResponse200148 patchchildSitesById(id, opts)

Update provided fields on Child sites

Child sites

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.ChildSites() // ChildSites | 
};
apiInstance.patchchildSitesById(id, opts, (error, data, response) => {
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
 **body** | [**ChildSites**](ChildSites.md)|  | [optional] 

### Return type

[**InlineResponse200148**](InlineResponse200148.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchlicenseInformationsById"></a>
# **patchlicenseInformationsById**
> InlineResponse20089 patchlicenseInformationsById(id, opts)

Update provided fields on License information

License information

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.LicenseInformations() // LicenseInformations | 
};
apiInstance.patchlicenseInformationsById(id, opts, (error, data, response) => {
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
 **body** | [**LicenseInformations**](LicenseInformations.md)|  | [optional] 

### Return type

[**InlineResponse20089**](InlineResponse20089.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchloginProvidersById"></a>
# **patchloginProvidersById**
> InlineResponse20114 patchloginProvidersById(id, opts)

Update provided fields on External IDP

External IDP

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.LoginProviders() // LoginProviders | 
};
apiInstance.patchloginProvidersById(id, opts, (error, data, response) => {
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
 **body** | [**LoginProviders**](LoginProviders.md)|  | [optional] 

### Return type

[**InlineResponse20114**](InlineResponse20114.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchownerById"></a>
# **patchownerById**
> InlineResponse20020 patchownerById(id, opts)

Update provided fields on Basic Owner Information

Basic Owner Information

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.Owner() // Owner | 
};
apiInstance.patchownerById(id, opts, (error, data, response) => {
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
 **body** | [**Owner**](Owner.md)|  | [optional] 

### Return type

[**InlineResponse20020**](InlineResponse20020.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchpatrollingProfilesById"></a>
# **patchpatrollingProfilesById**
> InlineResponse2014 patchpatrollingProfilesById(id, opts)

Update provided fields on Patrolling profile

Patrolling profile

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.PatrollingProfiles() // PatrollingProfiles | 
};
apiInstance.patchpatrollingProfilesById(id, opts, (error, data, response) => {
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
 **body** | [**PatrollingProfiles**](PatrollingProfiles.md)|  | [optional] 

### Return type

[**InlineResponse2014**](InlineResponse2014.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchregisteredClaimsById"></a>
# **patchregisteredClaimsById**
> InlineResponse20115 patchregisteredClaimsById(id, opts)

Update provided fields on Registered claims

Registered claims

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.RegisteredClaims() // RegisteredClaims | 
};
apiInstance.patchregisteredClaimsById(id, opts, (error, data, response) => {
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
 **body** | [**RegisteredClaims**](RegisteredClaims.md)|  | [optional] 

### Return type

[**InlineResponse20115**](InlineResponse20115.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchsitesById"></a>
# **patchsitesById**
> InlineResponse200165 patchsitesById(id, opts)

Update provided fields on Management Server

Management Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.Sites() // Sites | 
};
apiInstance.patchsitesById(id, opts, (error, data, response) => {
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
 **body** | [**Sites**](Sites.md)|  | [optional] 

### Return type

[**InlineResponse200165**](InlineResponse200165.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchtoolOptionsById"></a>
# **patchtoolOptionsById**
> InlineResponse200173 patchtoolOptionsById(id, opts)

Update provided fields on System options

System options

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.ToolOptions() // ToolOptions | 
};
apiInstance.patchtoolOptionsById(id, opts, (error, data, response) => {
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
 **body** | [**ToolOptions**](ToolOptions.md)|  | [optional] 

### Return type

[**InlineResponse200173**](InlineResponse200173.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postTaskForlicenseInformations"></a>
# **postTaskForlicenseInformations**
> InlineResponse20090 postTaskForlicenseInformations(id, task, opts)

Perform a task

License information

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the object
let task = "task_example"; // String | task=ActivateLicense, or task=RequestLicense, or task=ChangeLicense, or task=UpdateLicense, or task=StopAutomaticLicenseActivation
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.LicenseInformationsIdBody() // LicenseInformationsIdBody | 
};
apiInstance.postTaskForlicenseInformations(id, task, opts, (error, data, response) => {
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
 **task** | **String**| task&#x3D;ActivateLicense, or task&#x3D;RequestLicense, or task&#x3D;ChangeLicense, or task&#x3D;UpdateLicense, or task&#x3D;StopAutomaticLicenseActivation | 
 **body** | [**LicenseInformationsIdBody**](LicenseInformationsIdBody.md)|  | [optional] 

### Return type

[**InlineResponse20090**](InlineResponse20090.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postTaskForowner"></a>
# **postTaskForowner**
> InlineResponse20021 postTaskForowner(id, task, opts)

Perform a task

Basic Owner Information

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the object
let task = "task_example"; // String | task=AddBasicOwnerInfo, or task=RemoveBasicOwnerInfo
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.OwnerIdBody() // OwnerIdBody | 
};
apiInstance.postTaskForowner(id, task, opts, (error, data, response) => {
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
 **task** | **String**| task&#x3D;AddBasicOwnerInfo, or task&#x3D;RemoveBasicOwnerInfo | 
 **body** | [**OwnerIdBody**](OwnerIdBody.md)|  | [optional] 

### Return type

[**InlineResponse20021**](InlineResponse20021.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postTaskForpatrollingProfiles"></a>
# **postTaskForpatrollingProfiles**
> InlineResponse200121 postTaskForpatrollingProfiles(id, task, opts)

Perform a task

Patrolling profile

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the object
let task = "task_example"; // String | task=AddPatrollingEntry, or task=RemovePatrollingEntry
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.PatrollingProfilesIdBody() // PatrollingProfilesIdBody | 
};
apiInstance.postTaskForpatrollingProfiles(id, task, opts, (error, data, response) => {
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
 **task** | **String**| task&#x3D;AddPatrollingEntry, or task&#x3D;RemovePatrollingEntry | 
 **body** | [**PatrollingProfilesIdBody**](PatrollingProfilesIdBody.md)|  | [optional] 

### Return type

[**InlineResponse200121**](InlineResponse200121.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postTaskForsites"></a>
# **postTaskForsites**
> InlineResponse200163 postTaskForsites(task, opts)

Perform a task

Management Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let task = "task_example"; // String | task=LoadTasks, or task=ClientLogOnSupported, or task=UploadFileChunk
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.SitesBody() // SitesBody | 
};
apiInstance.postTaskForsites(task, opts, (error, data, response) => {
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
 **task** | **String**| task&#x3D;LoadTasks, or task&#x3D;ClientLogOnSupported, or task&#x3D;UploadFileChunk | 
 **body** | [**SitesBody**](SitesBody.md)|  | [optional] 

### Return type

[**InlineResponse200163**](InlineResponse200163.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postloginProvidersById"></a>
# **postloginProvidersById**
> InlineResponse20114 postloginProvidersById(opts)

Add new loginProviders

External IDP

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.LoginProviders() // LoginProviders | 
};
apiInstance.postloginProvidersById(opts, (error, data, response) => {
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
 **body** | [**LoginProviders**](LoginProviders.md)|  | [optional] 

### Return type

[**InlineResponse20114**](InlineResponse20114.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postloginProvidersByIdregisteredClaims"></a>
# **postloginProvidersByIdregisteredClaims**
> InlineResponse20115 postloginProvidersByIdregisteredClaims(id, opts)

Add a registeredClaims to a loginProviders

External IDP

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the loginProvider object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.RegisteredClaims() // RegisteredClaims | 
};
apiInstance.postloginProvidersByIdregisteredClaims(id, opts, (error, data, response) => {
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
 **id** | **String**| Id of the loginProvider object | 
 **body** | [**RegisteredClaims**](RegisteredClaims.md)|  | [optional] 

### Return type

[**InlineResponse20115**](InlineResponse20115.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putchildSitesById"></a>
# **putchildSitesById**
> InlineResponse200148 putchildSitesById(id, opts)

Update all fields on Child sites

Child sites

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.ChildSites() // ChildSites | 
};
apiInstance.putchildSitesById(id, opts, (error, data, response) => {
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
 **body** | [**ChildSites**](ChildSites.md)|  | [optional] 

### Return type

[**InlineResponse200148**](InlineResponse200148.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putlicenseInformationsById"></a>
# **putlicenseInformationsById**
> InlineResponse20089 putlicenseInformationsById(id, opts)

Update all fields on License information

License information

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.LicenseInformations() // LicenseInformations | 
};
apiInstance.putlicenseInformationsById(id, opts, (error, data, response) => {
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
 **body** | [**LicenseInformations**](LicenseInformations.md)|  | [optional] 

### Return type

[**InlineResponse20089**](InlineResponse20089.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putloginProvidersById"></a>
# **putloginProvidersById**
> InlineResponse20114 putloginProvidersById(id, opts)

Update all fields on External IDP

External IDP

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.LoginProviders() // LoginProviders | 
};
apiInstance.putloginProvidersById(id, opts, (error, data, response) => {
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
 **body** | [**LoginProviders**](LoginProviders.md)|  | [optional] 

### Return type

[**InlineResponse20114**](InlineResponse20114.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putownerById"></a>
# **putownerById**
> InlineResponse20020 putownerById(id, opts)

Update all fields on Basic Owner Information

Basic Owner Information

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.Owner() // Owner | 
};
apiInstance.putownerById(id, opts, (error, data, response) => {
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
 **body** | [**Owner**](Owner.md)|  | [optional] 

### Return type

[**InlineResponse20020**](InlineResponse20020.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putpatrollingProfilesById"></a>
# **putpatrollingProfilesById**
> InlineResponse2014 putpatrollingProfilesById(id, opts)

Update all fields on Patrolling profile

Patrolling profile

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.PatrollingProfiles() // PatrollingProfiles | 
};
apiInstance.putpatrollingProfilesById(id, opts, (error, data, response) => {
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
 **body** | [**PatrollingProfiles**](PatrollingProfiles.md)|  | [optional] 

### Return type

[**InlineResponse2014**](InlineResponse2014.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putregisteredClaimsById"></a>
# **putregisteredClaimsById**
> InlineResponse20115 putregisteredClaimsById(id, opts)

Update all fields on Registered claims

Registered claims

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.RegisteredClaims() // RegisteredClaims | 
};
apiInstance.putregisteredClaimsById(id, opts, (error, data, response) => {
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
 **body** | [**RegisteredClaims**](RegisteredClaims.md)|  | [optional] 

### Return type

[**InlineResponse20115**](InlineResponse20115.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putsitesById"></a>
# **putsitesById**
> InlineResponse200165 putsitesById(id, opts)

Update all fields on Management Server

Management Server

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.Sites() // Sites | 
};
apiInstance.putsitesById(id, opts, (error, data, response) => {
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
 **body** | [**Sites**](Sites.md)|  | [optional] 

### Return type

[**InlineResponse200165**](InlineResponse200165.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="puttoolOptionsById"></a>
# **puttoolOptionsById**
> InlineResponse200173 puttoolOptionsById(id, opts)

Update all fields on System options

System options

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.CoreApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.ToolOptions() // ToolOptions | 
};
apiInstance.puttoolOptionsById(id, opts, (error, data, response) => {
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
 **body** | [**ToolOptions**](ToolOptions.md)|  | [optional] 

### Return type

[**InlineResponse200173**](InlineResponse200173.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

