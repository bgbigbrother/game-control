# MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi

All URIs are relative to *https://localhost/API/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deletecamerasByIdpatrollingProfiles**](DeviceConfigApi.md#deletecamerasByIdpatrollingProfiles) | **DELETE** /cameras/{idParent}/patrollingProfiles/{id} | Remove a patrollingProfiles from a cameras
[**deletecamerasByIdptzPresets**](DeviceConfigApi.md#deletecamerasByIdptzPresets) | **DELETE** /cameras/{idParent}/ptzPresets/{id} | Remove a ptzPresets from a cameras
[**getAllcameras**](DeviceConfigApi.md#getAllcameras) | **GET** /cameras | Get array of all enabled Camera
[**getAllcamerasInAhardware**](DeviceConfigApi.md#getAllcamerasInAhardware) | **GET** /hardware/{id}/cameras | Get array of all cameras
[**getAllclientSettingsInAcameras**](DeviceConfigApi.md#getAllclientSettingsInAcameras) | **GET** /cameras/{id}/clientSettings | Get array of all clientSettings
[**getAllclientSettingsInAmetadata**](DeviceConfigApi.md#getAllclientSettingsInAmetadata) | **GET** /metadata/{id}/clientSettings | Get array of all clientSettings
[**getAllclientSettingsInAmicrophones**](DeviceConfigApi.md#getAllclientSettingsInAmicrophones) | **GET** /microphones/{id}/clientSettings | Get array of all clientSettings
[**getAllclientSettingsInAspeakers**](DeviceConfigApi.md#getAllclientSettingsInAspeakers) | **GET** /speakers/{id}/clientSettings | Get array of all clientSettings
[**getAllcustomPropertiesInAcameras**](DeviceConfigApi.md#getAllcustomPropertiesInAcameras) | **GET** /cameras/{id}/customProperties | Get array of all customProperties
[**getAllcustomPropertiesInAhardware**](DeviceConfigApi.md#getAllcustomPropertiesInAhardware) | **GET** /hardware/{id}/customProperties | Get array of all customProperties
[**getAllcustomPropertiesInAinputEvents**](DeviceConfigApi.md#getAllcustomPropertiesInAinputEvents) | **GET** /inputEvents/{id}/customProperties | Get array of all customProperties
[**getAllcustomPropertiesInAmetadata**](DeviceConfigApi.md#getAllcustomPropertiesInAmetadata) | **GET** /metadata/{id}/customProperties | Get array of all customProperties
[**getAllcustomPropertiesInAmicrophones**](DeviceConfigApi.md#getAllcustomPropertiesInAmicrophones) | **GET** /microphones/{id}/customProperties | Get array of all customProperties
[**getAllcustomPropertiesInAoutputs**](DeviceConfigApi.md#getAllcustomPropertiesInAoutputs) | **GET** /outputs/{id}/customProperties | Get array of all customProperties
[**getAllcustomPropertiesInAspeakers**](DeviceConfigApi.md#getAllcustomPropertiesInAspeakers) | **GET** /speakers/{id}/customProperties | Get array of all customProperties
[**getAllhardware**](DeviceConfigApi.md#getAllhardware) | **GET** /hardware | Get array of all enabled Hardware
[**getAllhardwareDeviceEvents**](DeviceConfigApi.md#getAllhardwareDeviceEvents) | **GET** /hardwareDeviceEvents | Get array of all Hardware device event
[**getAllhardwareDeviceEventsInAcameras**](DeviceConfigApi.md#getAllhardwareDeviceEventsInAcameras) | **GET** /cameras/{id}/hardwareDeviceEvents | Get array of all hardwareDeviceEvents
[**getAllhardwareDeviceEventsInAhardware**](DeviceConfigApi.md#getAllhardwareDeviceEventsInAhardware) | **GET** /hardware/{id}/hardwareDeviceEvents | Get array of all hardwareDeviceEvents
[**getAllhardwareDeviceEventsInAinputEvents**](DeviceConfigApi.md#getAllhardwareDeviceEventsInAinputEvents) | **GET** /inputEvents/{id}/hardwareDeviceEvents | Get array of all hardwareDeviceEvents
[**getAllhardwareDeviceEventsInAmetadata**](DeviceConfigApi.md#getAllhardwareDeviceEventsInAmetadata) | **GET** /metadata/{id}/hardwareDeviceEvents | Get array of all hardwareDeviceEvents
[**getAllhardwareDeviceEventsInAmicrophones**](DeviceConfigApi.md#getAllhardwareDeviceEventsInAmicrophones) | **GET** /microphones/{id}/hardwareDeviceEvents | Get array of all hardwareDeviceEvents
[**getAllhardwareDeviceEventsInAoutputs**](DeviceConfigApi.md#getAllhardwareDeviceEventsInAoutputs) | **GET** /outputs/{id}/hardwareDeviceEvents | Get array of all hardwareDeviceEvents
[**getAllhardwareDeviceEventsInAspeakers**](DeviceConfigApi.md#getAllhardwareDeviceEventsInAspeakers) | **GET** /speakers/{id}/hardwareDeviceEvents | Get array of all hardwareDeviceEvents
[**getAllhardwareDriverSettingsInAhardware**](DeviceConfigApi.md#getAllhardwareDriverSettingsInAhardware) | **GET** /hardware/{id}/hardwareDriverSettings | Get array of all hardwareDriverSettings
[**getAllhardwarePtzSettings**](DeviceConfigApi.md#getAllhardwarePtzSettings) | **GET** /hardwarePtzSettings | Get array of all PTZ
[**getAllhardwarePtzSettingsInAhardware**](DeviceConfigApi.md#getAllhardwarePtzSettingsInAhardware) | **GET** /hardware/{id}/hardwarePtzSettings | Get array of all hardwarePtzSettings
[**getAllinputEvents**](DeviceConfigApi.md#getAllinputEvents) | **GET** /inputEvents | Get array of all enabled Input
[**getAllinputEventsInAhardware**](DeviceConfigApi.md#getAllinputEventsInAhardware) | **GET** /hardware/{id}/inputEvents | Get array of all inputEvents
[**getAllmetadata**](DeviceConfigApi.md#getAllmetadata) | **GET** /metadata | Get array of all enabled Metadata
[**getAllmetadataInAhardware**](DeviceConfigApi.md#getAllmetadataInAhardware) | **GET** /hardware/{id}/metadata | Get array of all metadata
[**getAllmicrophones**](DeviceConfigApi.md#getAllmicrophones) | **GET** /microphones | Get array of all enabled Microphone
[**getAllmicrophonesInAhardware**](DeviceConfigApi.md#getAllmicrophonesInAhardware) | **GET** /hardware/{id}/microphones | Get array of all microphones
[**getAllmotionDetectionsInAcameras**](DeviceConfigApi.md#getAllmotionDetectionsInAcameras) | **GET** /cameras/{id}/motionDetections | Get array of all motionDetections
[**getAlloutputs**](DeviceConfigApi.md#getAlloutputs) | **GET** /outputs | Get array of all enabled Output
[**getAlloutputsInAhardware**](DeviceConfigApi.md#getAlloutputsInAhardware) | **GET** /hardware/{id}/outputs | Get array of all outputs
[**getAllpatrollingProfilesInAcameras**](DeviceConfigApi.md#getAllpatrollingProfilesInAcameras) | **GET** /cameras/{id}/patrollingProfiles | Get array of all patrollingProfiles
[**getAllprivacyProtectionsInAcameras**](DeviceConfigApi.md#getAllprivacyProtectionsInAcameras) | **GET** /cameras/{id}/privacyProtections | Get array of all privacyProtections
[**getAllptzPresetsInAcameras**](DeviceConfigApi.md#getAllptzPresetsInAcameras) | **GET** /cameras/{id}/ptzPresets | Get array of all ptzPresets
[**getAllsettingsInAcameras**](DeviceConfigApi.md#getAllsettingsInAcameras) | **GET** /cameras/{id}/settings | Get array of all settings
[**getAllsettingsInAinputEvents**](DeviceConfigApi.md#getAllsettingsInAinputEvents) | **GET** /inputEvents/{id}/settings | Get array of all settings
[**getAllsettingsInAmetadata**](DeviceConfigApi.md#getAllsettingsInAmetadata) | **GET** /metadata/{id}/settings | Get array of all settings
[**getAllsettingsInAmicrophones**](DeviceConfigApi.md#getAllsettingsInAmicrophones) | **GET** /microphones/{id}/settings | Get array of all settings
[**getAllsettingsInAoutputs**](DeviceConfigApi.md#getAllsettingsInAoutputs) | **GET** /outputs/{id}/settings | Get array of all settings
[**getAllsettingsInAspeakers**](DeviceConfigApi.md#getAllsettingsInAspeakers) | **GET** /speakers/{id}/settings | Get array of all settings
[**getAllspeakers**](DeviceConfigApi.md#getAllspeakers) | **GET** /speakers | Get array of all enabled Speaker
[**getAllspeakersInAhardware**](DeviceConfigApi.md#getAllspeakersInAhardware) | **GET** /hardware/{id}/speakers | Get array of all speakers
[**getAllstreamsInAcameras**](DeviceConfigApi.md#getAllstreamsInAcameras) | **GET** /cameras/{id}/streams | Get array of all streams
[**getOnecamerasInAhardware**](DeviceConfigApi.md#getOnecamerasInAhardware) | **GET** /hardware/{idParent}/cameras/{id} | Get specific cameras
[**getOneclientSettingsInAcameras**](DeviceConfigApi.md#getOneclientSettingsInAcameras) | **GET** /cameras/{idParent}/clientSettings/{id} | Get specific clientSettings
[**getOneclientSettingsInAmetadata**](DeviceConfigApi.md#getOneclientSettingsInAmetadata) | **GET** /metadata/{idParent}/clientSettings/{id} | Get specific clientSettings
[**getOneclientSettingsInAmicrophones**](DeviceConfigApi.md#getOneclientSettingsInAmicrophones) | **GET** /microphones/{idParent}/clientSettings/{id} | Get specific clientSettings
[**getOneclientSettingsInAspeakers**](DeviceConfigApi.md#getOneclientSettingsInAspeakers) | **GET** /speakers/{idParent}/clientSettings/{id} | Get specific clientSettings
[**getOnecustomPropertiesInAcameras**](DeviceConfigApi.md#getOnecustomPropertiesInAcameras) | **GET** /cameras/{idParent}/customProperties/{id} | Get specific customProperties
[**getOnecustomPropertiesInAhardware**](DeviceConfigApi.md#getOnecustomPropertiesInAhardware) | **GET** /hardware/{idParent}/customProperties/{id} | Get specific customProperties
[**getOnecustomPropertiesInAinputEvents**](DeviceConfigApi.md#getOnecustomPropertiesInAinputEvents) | **GET** /inputEvents/{idParent}/customProperties/{id} | Get specific customProperties
[**getOnecustomPropertiesInAmetadata**](DeviceConfigApi.md#getOnecustomPropertiesInAmetadata) | **GET** /metadata/{idParent}/customProperties/{id} | Get specific customProperties
[**getOnecustomPropertiesInAmicrophones**](DeviceConfigApi.md#getOnecustomPropertiesInAmicrophones) | **GET** /microphones/{idParent}/customProperties/{id} | Get specific customProperties
[**getOnecustomPropertiesInAoutputs**](DeviceConfigApi.md#getOnecustomPropertiesInAoutputs) | **GET** /outputs/{idParent}/customProperties/{id} | Get specific customProperties
[**getOnecustomPropertiesInAspeakers**](DeviceConfigApi.md#getOnecustomPropertiesInAspeakers) | **GET** /speakers/{idParent}/customProperties/{id} | Get specific customProperties
[**getOnehardwareDriverSettingsInAhardware**](DeviceConfigApi.md#getOnehardwareDriverSettingsInAhardware) | **GET** /hardware/{idParent}/hardwareDriverSettings/{id} | Get specific hardwareDriverSettings
[**getOneinputEventsInAhardware**](DeviceConfigApi.md#getOneinputEventsInAhardware) | **GET** /hardware/{idParent}/inputEvents/{id} | Get specific inputEvents
[**getOnemetadataInAhardware**](DeviceConfigApi.md#getOnemetadataInAhardware) | **GET** /hardware/{idParent}/metadata/{id} | Get specific metadata
[**getOnemicrophonesInAhardware**](DeviceConfigApi.md#getOnemicrophonesInAhardware) | **GET** /hardware/{idParent}/microphones/{id} | Get specific microphones
[**getOnemotionDetectionsInAcameras**](DeviceConfigApi.md#getOnemotionDetectionsInAcameras) | **GET** /cameras/{idParent}/motionDetections/{id} | Get specific motionDetections
[**getOneoutputsInAhardware**](DeviceConfigApi.md#getOneoutputsInAhardware) | **GET** /hardware/{idParent}/outputs/{id} | Get specific outputs
[**getOneprivacyProtectionsInAcameras**](DeviceConfigApi.md#getOneprivacyProtectionsInAcameras) | **GET** /cameras/{idParent}/privacyProtections/{id} | Get specific privacyProtections
[**getOneptzPresetsInAcameras**](DeviceConfigApi.md#getOneptzPresetsInAcameras) | **GET** /cameras/{idParent}/ptzPresets/{id} | Get specific ptzPresets
[**getOnesettingsInAcameras**](DeviceConfigApi.md#getOnesettingsInAcameras) | **GET** /cameras/{idParent}/settings/{id} | Get specific settings
[**getOnesettingsInAinputEvents**](DeviceConfigApi.md#getOnesettingsInAinputEvents) | **GET** /inputEvents/{idParent}/settings/{id} | Get specific settings
[**getOnesettingsInAmetadata**](DeviceConfigApi.md#getOnesettingsInAmetadata) | **GET** /metadata/{idParent}/settings/{id} | Get specific settings
[**getOnesettingsInAmicrophones**](DeviceConfigApi.md#getOnesettingsInAmicrophones) | **GET** /microphones/{idParent}/settings/{id} | Get specific settings
[**getOnesettingsInAoutputs**](DeviceConfigApi.md#getOnesettingsInAoutputs) | **GET** /outputs/{idParent}/settings/{id} | Get specific settings
[**getOnesettingsInAspeakers**](DeviceConfigApi.md#getOnesettingsInAspeakers) | **GET** /speakers/{idParent}/settings/{id} | Get specific settings
[**getOnespeakersInAhardware**](DeviceConfigApi.md#getOnespeakersInAhardware) | **GET** /hardware/{idParent}/speakers/{id} | Get specific speakers
[**getOnestreamsInAcameras**](DeviceConfigApi.md#getOnestreamsInAcameras) | **GET** /cameras/{idParent}/streams/{id} | Get specific streams
[**getcamerasById**](DeviceConfigApi.md#getcamerasById) | **GET** /cameras/{id} | Get specific object of Camera
[**gethardwareById**](DeviceConfigApi.md#gethardwareById) | **GET** /hardware/{id} | Get specific object of Hardware
[**gethardwareDeviceEventsById**](DeviceConfigApi.md#gethardwareDeviceEventsById) | **GET** /hardwareDeviceEvents/{id} | Get specific object of Hardware device event
[**gethardwarePtzSettingsById**](DeviceConfigApi.md#gethardwarePtzSettingsById) | **GET** /hardwarePtzSettings/{id} | Get specific object of PTZ
[**getinputEventsById**](DeviceConfigApi.md#getinputEventsById) | **GET** /inputEvents/{id} | Get specific object of Input
[**getmetadataById**](DeviceConfigApi.md#getmetadataById) | **GET** /metadata/{id} | Get specific object of Metadata
[**getmicrophonesById**](DeviceConfigApi.md#getmicrophonesById) | **GET** /microphones/{id} | Get specific object of Microphone
[**getoutputsById**](DeviceConfigApi.md#getoutputsById) | **GET** /outputs/{id} | Get specific object of Output
[**getspeakersById**](DeviceConfigApi.md#getspeakersById) | **GET** /speakers/{id} | Get specific object of Speaker
[**getstreamsById**](DeviceConfigApi.md#getstreamsById) | **GET** /streams/{id} | Get specific object of Stream
[**patchcamerasById**](DeviceConfigApi.md#patchcamerasById) | **PATCH** /cameras/{id} | Update provided fields on Camera
[**patchhardwareById**](DeviceConfigApi.md#patchhardwareById) | **PATCH** /hardware/{id} | Update provided fields on Hardware
[**patchhardwareDeviceEventsById**](DeviceConfigApi.md#patchhardwareDeviceEventsById) | **PATCH** /hardwareDeviceEvents/{id} | Update provided fields on Hardware device event
[**patchhardwarePtzSettingsById**](DeviceConfigApi.md#patchhardwarePtzSettingsById) | **PATCH** /hardwarePtzSettings/{id} | Update provided fields on PTZ
[**patchinputEventsById**](DeviceConfigApi.md#patchinputEventsById) | **PATCH** /inputEvents/{id} | Update provided fields on Input
[**patchmetadataById**](DeviceConfigApi.md#patchmetadataById) | **PATCH** /metadata/{id} | Update provided fields on Metadata
[**patchmicrophonesById**](DeviceConfigApi.md#patchmicrophonesById) | **PATCH** /microphones/{id} | Update provided fields on Microphone
[**patchoutputsById**](DeviceConfigApi.md#patchoutputsById) | **PATCH** /outputs/{id} | Update provided fields on Output
[**patchspeakersById**](DeviceConfigApi.md#patchspeakersById) | **PATCH** /speakers/{id} | Update provided fields on Speaker
[**patchstreamsById**](DeviceConfigApi.md#patchstreamsById) | **PATCH** /streams/{id} | Update provided fields on Stream
[**postTaskForcameras**](DeviceConfigApi.md#postTaskForcameras) | **POST** /cameras/{id} | Perform a task
[**postTaskForhardware**](DeviceConfigApi.md#postTaskForhardware) | **POST** /hardware/{id} | Perform a task
[**postTaskForinputEvents**](DeviceConfigApi.md#postTaskForinputEvents) | **POST** /inputEvents/{id} | Perform a task
[**postTaskFormetadata**](DeviceConfigApi.md#postTaskFormetadata) | **POST** /metadata/{id} | Perform a task
[**postTaskFormicrophones**](DeviceConfigApi.md#postTaskFormicrophones) | **POST** /microphones/{id} | Perform a task
[**postTaskForoutputs**](DeviceConfigApi.md#postTaskForoutputs) | **POST** /outputs/{id} | Perform a task
[**postTaskForspeakers**](DeviceConfigApi.md#postTaskForspeakers) | **POST** /speakers/{id} | Perform a task
[**postTaskForstreams**](DeviceConfigApi.md#postTaskForstreams) | **POST** /streams/{id} | Perform a task
[**postcamerasByIdpatrollingProfiles**](DeviceConfigApi.md#postcamerasByIdpatrollingProfiles) | **POST** /cameras/{id}/patrollingProfiles | Add a patrollingProfiles to a cameras
[**postcamerasByIdptzPresets**](DeviceConfigApi.md#postcamerasByIdptzPresets) | **POST** /cameras/{id}/ptzPresets | Add a ptzPresets to a cameras, or task&#x3D;DefaultPtzPreset, or task&#x3D;GetDevicePresets
[**putcamerasById**](DeviceConfigApi.md#putcamerasById) | **PUT** /cameras/{id} | Update all fields on Camera
[**puthardwareById**](DeviceConfigApi.md#puthardwareById) | **PUT** /hardware/{id} | Update all fields on Hardware
[**puthardwareDeviceEventsById**](DeviceConfigApi.md#puthardwareDeviceEventsById) | **PUT** /hardwareDeviceEvents/{id} | Update all fields on Hardware device event
[**puthardwarePtzSettingsById**](DeviceConfigApi.md#puthardwarePtzSettingsById) | **PUT** /hardwarePtzSettings/{id} | Update all fields on PTZ
[**putinputEventsById**](DeviceConfigApi.md#putinputEventsById) | **PUT** /inputEvents/{id} | Update all fields on Input
[**putmetadataById**](DeviceConfigApi.md#putmetadataById) | **PUT** /metadata/{id} | Update all fields on Metadata
[**putmicrophonesById**](DeviceConfigApi.md#putmicrophonesById) | **PUT** /microphones/{id} | Update all fields on Microphone
[**putoutputsById**](DeviceConfigApi.md#putoutputsById) | **PUT** /outputs/{id} | Update all fields on Output
[**putspeakersById**](DeviceConfigApi.md#putspeakersById) | **PUT** /speakers/{id} | Update all fields on Speaker
[**putstreamsById**](DeviceConfigApi.md#putstreamsById) | **PUT** /streams/{id} | Update all fields on Stream

<a name="deletecamerasByIdpatrollingProfiles"></a>
# **deletecamerasByIdpatrollingProfiles**
> InlineResponse2014 deletecamerasByIdpatrollingProfiles(idParent, id)

Remove a patrollingProfiles from a cameras

Camera

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let idParent = "idParent_example"; // String | Id of parent object
let id = "id_example"; // String | Id of the object

apiInstance.deletecamerasByIdpatrollingProfiles(idParent, id, (error, data, response) => {
  if (error) {
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

[**InlineResponse2014**](InlineResponse2014.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletecamerasByIdptzPresets"></a>
# **deletecamerasByIdptzPresets**
> InlineResponse2015 deletecamerasByIdptzPresets(idParent, id)

Remove a ptzPresets from a cameras

Camera

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let idParent = "idParent_example"; // String | Id of parent object
let id = "id_example"; // String | Id of the object

apiInstance.deletecamerasByIdptzPresets(idParent, id, (error, data, response) => {
  if (error) {
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

[**InlineResponse2015**](InlineResponse2015.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllcameras"></a>
# **getAllcameras**
> InlineResponse20026 getAllcameras()

Get array of all enabled Camera

Camera. To include disabled items add ?disabled to the request.

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
apiInstance.getAllcameras((error, data, response) => {
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

[**InlineResponse20026**](InlineResponse20026.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllcamerasInAhardware"></a>
# **getAllcamerasInAhardware**
> InlineResponse20026 getAllcamerasInAhardware(id)

Get array of all cameras

Hardware

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the hardware object

apiInstance.getAllcamerasInAhardware(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the hardware object | 

### Return type

[**InlineResponse20026**](InlineResponse20026.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllclientSettingsInAcameras"></a>
# **getAllclientSettingsInAcameras**
> InlineResponse20030 getAllclientSettingsInAcameras(id)

Get array of all clientSettings

Camera

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the camera object

apiInstance.getAllclientSettingsInAcameras(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the camera object | 

### Return type

[**InlineResponse20030**](InlineResponse20030.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllclientSettingsInAmetadata"></a>
# **getAllclientSettingsInAmetadata**
> InlineResponse20030 getAllclientSettingsInAmetadata(id)

Get array of all clientSettings

Metadata

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the metadata object

apiInstance.getAllclientSettingsInAmetadata(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the metadata object | 

### Return type

[**InlineResponse20030**](InlineResponse20030.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllclientSettingsInAmicrophones"></a>
# **getAllclientSettingsInAmicrophones**
> InlineResponse20030 getAllclientSettingsInAmicrophones(id)

Get array of all clientSettings

Microphone

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the microphone object

apiInstance.getAllclientSettingsInAmicrophones(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the microphone object | 

### Return type

[**InlineResponse20030**](InlineResponse20030.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllclientSettingsInAspeakers"></a>
# **getAllclientSettingsInAspeakers**
> InlineResponse20030 getAllclientSettingsInAspeakers(id)

Get array of all clientSettings

Speaker

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the speaker object

apiInstance.getAllclientSettingsInAspeakers(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the speaker object | 

### Return type

[**InlineResponse20030**](InlineResponse20030.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllcustomPropertiesInAcameras"></a>
# **getAllcustomPropertiesInAcameras**
> InlineResponse20031 getAllcustomPropertiesInAcameras(id)

Get array of all customProperties

Camera

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the camera object

apiInstance.getAllcustomPropertiesInAcameras(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the camera object | 

### Return type

[**InlineResponse20031**](InlineResponse20031.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllcustomPropertiesInAhardware"></a>
# **getAllcustomPropertiesInAhardware**
> InlineResponse20031 getAllcustomPropertiesInAhardware(id)

Get array of all customProperties

Hardware

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the hardware object

apiInstance.getAllcustomPropertiesInAhardware(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the hardware object | 

### Return type

[**InlineResponse20031**](InlineResponse20031.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllcustomPropertiesInAinputEvents"></a>
# **getAllcustomPropertiesInAinputEvents**
> InlineResponse20031 getAllcustomPropertiesInAinputEvents(id)

Get array of all customProperties

Input

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the inputEvent object

apiInstance.getAllcustomPropertiesInAinputEvents(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the inputEvent object | 

### Return type

[**InlineResponse20031**](InlineResponse20031.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllcustomPropertiesInAmetadata"></a>
# **getAllcustomPropertiesInAmetadata**
> InlineResponse20031 getAllcustomPropertiesInAmetadata(id)

Get array of all customProperties

Metadata

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the metadata object

apiInstance.getAllcustomPropertiesInAmetadata(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the metadata object | 

### Return type

[**InlineResponse20031**](InlineResponse20031.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllcustomPropertiesInAmicrophones"></a>
# **getAllcustomPropertiesInAmicrophones**
> InlineResponse20031 getAllcustomPropertiesInAmicrophones(id)

Get array of all customProperties

Microphone

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the microphone object

apiInstance.getAllcustomPropertiesInAmicrophones(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the microphone object | 

### Return type

[**InlineResponse20031**](InlineResponse20031.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllcustomPropertiesInAoutputs"></a>
# **getAllcustomPropertiesInAoutputs**
> InlineResponse20031 getAllcustomPropertiesInAoutputs(id)

Get array of all customProperties

Output

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the output object

apiInstance.getAllcustomPropertiesInAoutputs(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the output object | 

### Return type

[**InlineResponse20031**](InlineResponse20031.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllcustomPropertiesInAspeakers"></a>
# **getAllcustomPropertiesInAspeakers**
> InlineResponse20031 getAllcustomPropertiesInAspeakers(id)

Get array of all customProperties

Speaker

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the speaker object

apiInstance.getAllcustomPropertiesInAspeakers(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the speaker object | 

### Return type

[**InlineResponse20031**](InlineResponse20031.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllhardware"></a>
# **getAllhardware**
> InlineResponse20063 getAllhardware()

Get array of all enabled Hardware

Hardware. To include disabled items add ?disabled to the request.

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
apiInstance.getAllhardware((error, data, response) => {
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

[**InlineResponse20063**](InlineResponse20063.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllhardwareDeviceEvents"></a>
# **getAllhardwareDeviceEvents**
> InlineResponse20033 getAllhardwareDeviceEvents()

Get array of all Hardware device event

Hardware device event

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
apiInstance.getAllhardwareDeviceEvents((error, data, response) => {
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

[**InlineResponse20033**](InlineResponse20033.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllhardwareDeviceEventsInAcameras"></a>
# **getAllhardwareDeviceEventsInAcameras**
> InlineResponse20033 getAllhardwareDeviceEventsInAcameras(id)

Get array of all hardwareDeviceEvents

Camera

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the camera object

apiInstance.getAllhardwareDeviceEventsInAcameras(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the camera object | 

### Return type

[**InlineResponse20033**](InlineResponse20033.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllhardwareDeviceEventsInAhardware"></a>
# **getAllhardwareDeviceEventsInAhardware**
> InlineResponse20033 getAllhardwareDeviceEventsInAhardware(id)

Get array of all hardwareDeviceEvents

Hardware

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the hardware object

apiInstance.getAllhardwareDeviceEventsInAhardware(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the hardware object | 

### Return type

[**InlineResponse20033**](InlineResponse20033.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllhardwareDeviceEventsInAinputEvents"></a>
# **getAllhardwareDeviceEventsInAinputEvents**
> InlineResponse20033 getAllhardwareDeviceEventsInAinputEvents(id)

Get array of all hardwareDeviceEvents

Input

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the inputEvent object

apiInstance.getAllhardwareDeviceEventsInAinputEvents(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the inputEvent object | 

### Return type

[**InlineResponse20033**](InlineResponse20033.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllhardwareDeviceEventsInAmetadata"></a>
# **getAllhardwareDeviceEventsInAmetadata**
> InlineResponse20033 getAllhardwareDeviceEventsInAmetadata(id)

Get array of all hardwareDeviceEvents

Metadata

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the metadata object

apiInstance.getAllhardwareDeviceEventsInAmetadata(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the metadata object | 

### Return type

[**InlineResponse20033**](InlineResponse20033.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllhardwareDeviceEventsInAmicrophones"></a>
# **getAllhardwareDeviceEventsInAmicrophones**
> InlineResponse20033 getAllhardwareDeviceEventsInAmicrophones(id)

Get array of all hardwareDeviceEvents

Microphone

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the microphone object

apiInstance.getAllhardwareDeviceEventsInAmicrophones(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the microphone object | 

### Return type

[**InlineResponse20033**](InlineResponse20033.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllhardwareDeviceEventsInAoutputs"></a>
# **getAllhardwareDeviceEventsInAoutputs**
> InlineResponse20033 getAllhardwareDeviceEventsInAoutputs(id)

Get array of all hardwareDeviceEvents

Output

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the output object

apiInstance.getAllhardwareDeviceEventsInAoutputs(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the output object | 

### Return type

[**InlineResponse20033**](InlineResponse20033.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllhardwareDeviceEventsInAspeakers"></a>
# **getAllhardwareDeviceEventsInAspeakers**
> InlineResponse20033 getAllhardwareDeviceEventsInAspeakers(id)

Get array of all hardwareDeviceEvents

Speaker

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the speaker object

apiInstance.getAllhardwareDeviceEventsInAspeakers(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the speaker object | 

### Return type

[**InlineResponse20033**](InlineResponse20033.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllhardwareDriverSettingsInAhardware"></a>
# **getAllhardwareDriverSettingsInAhardware**
> InlineResponse20067 getAllhardwareDriverSettingsInAhardware(id)

Get array of all hardwareDriverSettings

Hardware

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the hardware object

apiInstance.getAllhardwareDriverSettingsInAhardware(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the hardware object | 

### Return type

[**InlineResponse20067**](InlineResponse20067.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllhardwarePtzSettings"></a>
# **getAllhardwarePtzSettings**
> InlineResponse20068 getAllhardwarePtzSettings()

Get array of all PTZ

PTZ

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
apiInstance.getAllhardwarePtzSettings((error, data, response) => {
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

[**InlineResponse20068**](InlineResponse20068.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllhardwarePtzSettingsInAhardware"></a>
# **getAllhardwarePtzSettingsInAhardware**
> InlineResponse20068 getAllhardwarePtzSettingsInAhardware(id)

Get array of all hardwarePtzSettings

Hardware

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the hardware object

apiInstance.getAllhardwarePtzSettingsInAhardware(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the hardware object | 

### Return type

[**InlineResponse20068**](InlineResponse20068.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllinputEvents"></a>
# **getAllinputEvents**
> InlineResponse20069 getAllinputEvents()

Get array of all enabled Input

Input. To include disabled items add ?disabled to the request.

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
apiInstance.getAllinputEvents((error, data, response) => {
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

[**InlineResponse20069**](InlineResponse20069.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllinputEventsInAhardware"></a>
# **getAllinputEventsInAhardware**
> InlineResponse20069 getAllinputEventsInAhardware(id)

Get array of all inputEvents

Hardware

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the hardware object

apiInstance.getAllinputEventsInAhardware(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the hardware object | 

### Return type

[**InlineResponse20069**](InlineResponse20069.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllmetadata"></a>
# **getAllmetadata**
> InlineResponse20070 getAllmetadata()

Get array of all enabled Metadata

Metadata. To include disabled items add ?disabled to the request.

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
apiInstance.getAllmetadata((error, data, response) => {
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

[**InlineResponse20070**](InlineResponse20070.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllmetadataInAhardware"></a>
# **getAllmetadataInAhardware**
> InlineResponse20070 getAllmetadataInAhardware(id)

Get array of all metadata

Hardware

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the hardware object

apiInstance.getAllmetadataInAhardware(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the hardware object | 

### Return type

[**InlineResponse20070**](InlineResponse20070.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllmicrophones"></a>
# **getAllmicrophones**
> InlineResponse20071 getAllmicrophones()

Get array of all enabled Microphone

Microphone. To include disabled items add ?disabled to the request.

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
apiInstance.getAllmicrophones((error, data, response) => {
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

[**InlineResponse20071**](InlineResponse20071.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllmicrophonesInAhardware"></a>
# **getAllmicrophonesInAhardware**
> InlineResponse20071 getAllmicrophonesInAhardware(id)

Get array of all microphones

Hardware

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the hardware object

apiInstance.getAllmicrophonesInAhardware(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the hardware object | 

### Return type

[**InlineResponse20071**](InlineResponse20071.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllmotionDetectionsInAcameras"></a>
# **getAllmotionDetectionsInAcameras**
> InlineResponse20034 getAllmotionDetectionsInAcameras(id)

Get array of all motionDetections

Camera

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the camera object

apiInstance.getAllmotionDetectionsInAcameras(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the camera object | 

### Return type

[**InlineResponse20034**](InlineResponse20034.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAlloutputs"></a>
# **getAlloutputs**
> InlineResponse20072 getAlloutputs()

Get array of all enabled Output

Output. To include disabled items add ?disabled to the request.

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
apiInstance.getAlloutputs((error, data, response) => {
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

[**InlineResponse20072**](InlineResponse20072.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAlloutputsInAhardware"></a>
# **getAlloutputsInAhardware**
> InlineResponse20072 getAlloutputsInAhardware(id)

Get array of all outputs

Hardware

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the hardware object

apiInstance.getAlloutputsInAhardware(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the hardware object | 

### Return type

[**InlineResponse20072**](InlineResponse20072.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllpatrollingProfilesInAcameras"></a>
# **getAllpatrollingProfilesInAcameras**
> InlineResponse20035 getAllpatrollingProfilesInAcameras(id)

Get array of all patrollingProfiles

Camera

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the camera object

apiInstance.getAllpatrollingProfilesInAcameras(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the camera object | 

### Return type

[**InlineResponse20035**](InlineResponse20035.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllprivacyProtectionsInAcameras"></a>
# **getAllprivacyProtectionsInAcameras**
> InlineResponse20036 getAllprivacyProtectionsInAcameras(id)

Get array of all privacyProtections

Camera

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the camera object

apiInstance.getAllprivacyProtectionsInAcameras(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the camera object | 

### Return type

[**InlineResponse20036**](InlineResponse20036.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllptzPresetsInAcameras"></a>
# **getAllptzPresetsInAcameras**
> InlineResponse20037 getAllptzPresetsInAcameras(id)

Get array of all ptzPresets

Camera

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object

apiInstance.getAllptzPresetsInAcameras(id, (error, data, response) => {
  if (error) {
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

[**InlineResponse20037**](InlineResponse20037.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllsettingsInAcameras"></a>
# **getAllsettingsInAcameras**
> InlineResponse20032 getAllsettingsInAcameras(id)

Get array of all settings

Camera

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the camera object

apiInstance.getAllsettingsInAcameras(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the camera object | 

### Return type

[**InlineResponse20032**](InlineResponse20032.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllsettingsInAinputEvents"></a>
# **getAllsettingsInAinputEvents**
> InlineResponse20032 getAllsettingsInAinputEvents(id)

Get array of all settings

Input

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the inputEvent object

apiInstance.getAllsettingsInAinputEvents(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the inputEvent object | 

### Return type

[**InlineResponse20032**](InlineResponse20032.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllsettingsInAmetadata"></a>
# **getAllsettingsInAmetadata**
> InlineResponse20032 getAllsettingsInAmetadata(id)

Get array of all settings

Metadata

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the metadata object

apiInstance.getAllsettingsInAmetadata(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the metadata object | 

### Return type

[**InlineResponse20032**](InlineResponse20032.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllsettingsInAmicrophones"></a>
# **getAllsettingsInAmicrophones**
> InlineResponse20032 getAllsettingsInAmicrophones(id)

Get array of all settings

Microphone

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the microphone object

apiInstance.getAllsettingsInAmicrophones(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the microphone object | 

### Return type

[**InlineResponse20032**](InlineResponse20032.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllsettingsInAoutputs"></a>
# **getAllsettingsInAoutputs**
> InlineResponse20032 getAllsettingsInAoutputs(id)

Get array of all settings

Output

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the output object

apiInstance.getAllsettingsInAoutputs(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the output object | 

### Return type

[**InlineResponse20032**](InlineResponse20032.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllsettingsInAspeakers"></a>
# **getAllsettingsInAspeakers**
> InlineResponse20032 getAllsettingsInAspeakers(id)

Get array of all settings

Speaker

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the speaker object

apiInstance.getAllsettingsInAspeakers(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the speaker object | 

### Return type

[**InlineResponse20032**](InlineResponse20032.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllspeakers"></a>
# **getAllspeakers**
> InlineResponse20073 getAllspeakers()

Get array of all enabled Speaker

Speaker. To include disabled items add ?disabled to the request.

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
apiInstance.getAllspeakers((error, data, response) => {
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

[**InlineResponse20073**](InlineResponse20073.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllspeakersInAhardware"></a>
# **getAllspeakersInAhardware**
> InlineResponse20073 getAllspeakersInAhardware(id)

Get array of all speakers

Hardware

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the hardware object

apiInstance.getAllspeakersInAhardware(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the hardware object | 

### Return type

[**InlineResponse20073**](InlineResponse20073.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllstreamsInAcameras"></a>
# **getAllstreamsInAcameras**
> InlineResponse20039 getAllstreamsInAcameras(id)

Get array of all streams

Camera

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the camera object

apiInstance.getAllstreamsInAcameras(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the camera object | 

### Return type

[**InlineResponse20039**](InlineResponse20039.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOnecamerasInAhardware"></a>
# **getOnecamerasInAhardware**
> InlineResponse20026 getOnecamerasInAhardware(idParent, id)

Get specific cameras

Hardware

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let idParent = "idParent_example"; // String | Id of the hardware object
let id = "id_example"; // String | Id of the camera object

apiInstance.getOnecamerasInAhardware(idParent, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idParent** | **String**| Id of the hardware object | 
 **id** | **String**| Id of the camera object | 

### Return type

[**InlineResponse20026**](InlineResponse20026.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOneclientSettingsInAcameras"></a>
# **getOneclientSettingsInAcameras**
> InlineResponse20030 getOneclientSettingsInAcameras(idParent, id)

Get specific clientSettings

Camera

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let idParent = "idParent_example"; // String | Id of the camera object
let id = "id_example"; // String | Id of the clientSetting object

apiInstance.getOneclientSettingsInAcameras(idParent, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idParent** | **String**| Id of the camera object | 
 **id** | **String**| Id of the clientSetting object | 

### Return type

[**InlineResponse20030**](InlineResponse20030.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOneclientSettingsInAmetadata"></a>
# **getOneclientSettingsInAmetadata**
> InlineResponse20030 getOneclientSettingsInAmetadata(idParent, id)

Get specific clientSettings

Metadata

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let idParent = "idParent_example"; // String | Id of the metadata object
let id = "id_example"; // String | Id of the clientSetting object

apiInstance.getOneclientSettingsInAmetadata(idParent, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idParent** | **String**| Id of the metadata object | 
 **id** | **String**| Id of the clientSetting object | 

### Return type

[**InlineResponse20030**](InlineResponse20030.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOneclientSettingsInAmicrophones"></a>
# **getOneclientSettingsInAmicrophones**
> InlineResponse20030 getOneclientSettingsInAmicrophones(idParent, id)

Get specific clientSettings

Microphone

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let idParent = "idParent_example"; // String | Id of the microphone object
let id = "id_example"; // String | Id of the clientSetting object

apiInstance.getOneclientSettingsInAmicrophones(idParent, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idParent** | **String**| Id of the microphone object | 
 **id** | **String**| Id of the clientSetting object | 

### Return type

[**InlineResponse20030**](InlineResponse20030.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOneclientSettingsInAspeakers"></a>
# **getOneclientSettingsInAspeakers**
> InlineResponse20030 getOneclientSettingsInAspeakers(idParent, id)

Get specific clientSettings

Speaker

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let idParent = "idParent_example"; // String | Id of the speaker object
let id = "id_example"; // String | Id of the clientSetting object

apiInstance.getOneclientSettingsInAspeakers(idParent, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idParent** | **String**| Id of the speaker object | 
 **id** | **String**| Id of the clientSetting object | 

### Return type

[**InlineResponse20030**](InlineResponse20030.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOnecustomPropertiesInAcameras"></a>
# **getOnecustomPropertiesInAcameras**
> InlineResponse20031 getOnecustomPropertiesInAcameras(idParent, id)

Get specific customProperties

Camera

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let idParent = "idParent_example"; // String | Id of the camera object
let id = "id_example"; // String | Id of the customPropertie object

apiInstance.getOnecustomPropertiesInAcameras(idParent, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idParent** | **String**| Id of the camera object | 
 **id** | **String**| Id of the customPropertie object | 

### Return type

[**InlineResponse20031**](InlineResponse20031.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOnecustomPropertiesInAhardware"></a>
# **getOnecustomPropertiesInAhardware**
> InlineResponse20031 getOnecustomPropertiesInAhardware(idParent, id)

Get specific customProperties

Hardware

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let idParent = "idParent_example"; // String | Id of the hardware object
let id = "id_example"; // String | Id of the customPropertie object

apiInstance.getOnecustomPropertiesInAhardware(idParent, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idParent** | **String**| Id of the hardware object | 
 **id** | **String**| Id of the customPropertie object | 

### Return type

[**InlineResponse20031**](InlineResponse20031.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOnecustomPropertiesInAinputEvents"></a>
# **getOnecustomPropertiesInAinputEvents**
> InlineResponse20031 getOnecustomPropertiesInAinputEvents(idParent, id)

Get specific customProperties

Input

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let idParent = "idParent_example"; // String | Id of the inputEvent object
let id = "id_example"; // String | Id of the customPropertie object

apiInstance.getOnecustomPropertiesInAinputEvents(idParent, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idParent** | **String**| Id of the inputEvent object | 
 **id** | **String**| Id of the customPropertie object | 

### Return type

[**InlineResponse20031**](InlineResponse20031.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOnecustomPropertiesInAmetadata"></a>
# **getOnecustomPropertiesInAmetadata**
> InlineResponse20031 getOnecustomPropertiesInAmetadata(idParent, id)

Get specific customProperties

Metadata

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let idParent = "idParent_example"; // String | Id of the metadata object
let id = "id_example"; // String | Id of the customPropertie object

apiInstance.getOnecustomPropertiesInAmetadata(idParent, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idParent** | **String**| Id of the metadata object | 
 **id** | **String**| Id of the customPropertie object | 

### Return type

[**InlineResponse20031**](InlineResponse20031.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOnecustomPropertiesInAmicrophones"></a>
# **getOnecustomPropertiesInAmicrophones**
> InlineResponse20031 getOnecustomPropertiesInAmicrophones(idParent, id)

Get specific customProperties

Microphone

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let idParent = "idParent_example"; // String | Id of the microphone object
let id = "id_example"; // String | Id of the customPropertie object

apiInstance.getOnecustomPropertiesInAmicrophones(idParent, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idParent** | **String**| Id of the microphone object | 
 **id** | **String**| Id of the customPropertie object | 

### Return type

[**InlineResponse20031**](InlineResponse20031.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOnecustomPropertiesInAoutputs"></a>
# **getOnecustomPropertiesInAoutputs**
> InlineResponse20031 getOnecustomPropertiesInAoutputs(idParent, id)

Get specific customProperties

Output

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let idParent = "idParent_example"; // String | Id of the output object
let id = "id_example"; // String | Id of the customPropertie object

apiInstance.getOnecustomPropertiesInAoutputs(idParent, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idParent** | **String**| Id of the output object | 
 **id** | **String**| Id of the customPropertie object | 

### Return type

[**InlineResponse20031**](InlineResponse20031.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOnecustomPropertiesInAspeakers"></a>
# **getOnecustomPropertiesInAspeakers**
> InlineResponse20031 getOnecustomPropertiesInAspeakers(idParent, id)

Get specific customProperties

Speaker

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let idParent = "idParent_example"; // String | Id of the speaker object
let id = "id_example"; // String | Id of the customPropertie object

apiInstance.getOnecustomPropertiesInAspeakers(idParent, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idParent** | **String**| Id of the speaker object | 
 **id** | **String**| Id of the customPropertie object | 

### Return type

[**InlineResponse20031**](InlineResponse20031.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOnehardwareDriverSettingsInAhardware"></a>
# **getOnehardwareDriverSettingsInAhardware**
> InlineResponse20067 getOnehardwareDriverSettingsInAhardware(idParent, id)

Get specific hardwareDriverSettings

Hardware

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let idParent = "idParent_example"; // String | Id of the hardware object
let id = "id_example"; // String | Id of the hardwareDriverSetting object

apiInstance.getOnehardwareDriverSettingsInAhardware(idParent, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idParent** | **String**| Id of the hardware object | 
 **id** | **String**| Id of the hardwareDriverSetting object | 

### Return type

[**InlineResponse20067**](InlineResponse20067.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOneinputEventsInAhardware"></a>
# **getOneinputEventsInAhardware**
> InlineResponse20069 getOneinputEventsInAhardware(idParent, id)

Get specific inputEvents

Hardware

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let idParent = "idParent_example"; // String | Id of the hardware object
let id = "id_example"; // String | Id of the inputEvent object

apiInstance.getOneinputEventsInAhardware(idParent, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idParent** | **String**| Id of the hardware object | 
 **id** | **String**| Id of the inputEvent object | 

### Return type

[**InlineResponse20069**](InlineResponse20069.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOnemetadataInAhardware"></a>
# **getOnemetadataInAhardware**
> InlineResponse20070 getOnemetadataInAhardware(idParent, id)

Get specific metadata

Hardware

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let idParent = "idParent_example"; // String | Id of the hardware object
let id = "id_example"; // String | Id of the metadata object

apiInstance.getOnemetadataInAhardware(idParent, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idParent** | **String**| Id of the hardware object | 
 **id** | **String**| Id of the metadata object | 

### Return type

[**InlineResponse20070**](InlineResponse20070.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOnemicrophonesInAhardware"></a>
# **getOnemicrophonesInAhardware**
> InlineResponse20071 getOnemicrophonesInAhardware(idParent, id)

Get specific microphones

Hardware

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let idParent = "idParent_example"; // String | Id of the hardware object
let id = "id_example"; // String | Id of the microphone object

apiInstance.getOnemicrophonesInAhardware(idParent, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idParent** | **String**| Id of the hardware object | 
 **id** | **String**| Id of the microphone object | 

### Return type

[**InlineResponse20071**](InlineResponse20071.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOnemotionDetectionsInAcameras"></a>
# **getOnemotionDetectionsInAcameras**
> InlineResponse20034 getOnemotionDetectionsInAcameras(idParent, id)

Get specific motionDetections

Camera

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let idParent = "idParent_example"; // String | Id of the camera object
let id = "id_example"; // String | Id of the motionDetection object

apiInstance.getOnemotionDetectionsInAcameras(idParent, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idParent** | **String**| Id of the camera object | 
 **id** | **String**| Id of the motionDetection object | 

### Return type

[**InlineResponse20034**](InlineResponse20034.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOneoutputsInAhardware"></a>
# **getOneoutputsInAhardware**
> InlineResponse20072 getOneoutputsInAhardware(idParent, id)

Get specific outputs

Hardware

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let idParent = "idParent_example"; // String | Id of the hardware object
let id = "id_example"; // String | Id of the output object

apiInstance.getOneoutputsInAhardware(idParent, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idParent** | **String**| Id of the hardware object | 
 **id** | **String**| Id of the output object | 

### Return type

[**InlineResponse20072**](InlineResponse20072.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOneprivacyProtectionsInAcameras"></a>
# **getOneprivacyProtectionsInAcameras**
> InlineResponse20036 getOneprivacyProtectionsInAcameras(idParent, id)

Get specific privacyProtections

Camera

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let idParent = "idParent_example"; // String | Id of the camera object
let id = "id_example"; // String | Id of the privacyProtection object

apiInstance.getOneprivacyProtectionsInAcameras(idParent, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idParent** | **String**| Id of the camera object | 
 **id** | **String**| Id of the privacyProtection object | 

### Return type

[**InlineResponse20036**](InlineResponse20036.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOneptzPresetsInAcameras"></a>
# **getOneptzPresetsInAcameras**
> InlineResponse20037 getOneptzPresetsInAcameras(idParent, id)

Get specific ptzPresets

Camera

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let idParent = "idParent_example"; // String | Id of parent object
let id = "id_example"; // String | Id of the object

apiInstance.getOneptzPresetsInAcameras(idParent, id, (error, data, response) => {
  if (error) {
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

[**InlineResponse20037**](InlineResponse20037.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOnesettingsInAcameras"></a>
# **getOnesettingsInAcameras**
> InlineResponse20032 getOnesettingsInAcameras(idParent, id)

Get specific settings

Camera

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let idParent = "idParent_example"; // String | Id of the camera object
let id = "id_example"; // String | Id of the setting object

apiInstance.getOnesettingsInAcameras(idParent, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idParent** | **String**| Id of the camera object | 
 **id** | **String**| Id of the setting object | 

### Return type

[**InlineResponse20032**](InlineResponse20032.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOnesettingsInAinputEvents"></a>
# **getOnesettingsInAinputEvents**
> InlineResponse20032 getOnesettingsInAinputEvents(idParent, id)

Get specific settings

Input

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let idParent = "idParent_example"; // String | Id of the inputEvent object
let id = "id_example"; // String | Id of the setting object

apiInstance.getOnesettingsInAinputEvents(idParent, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idParent** | **String**| Id of the inputEvent object | 
 **id** | **String**| Id of the setting object | 

### Return type

[**InlineResponse20032**](InlineResponse20032.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOnesettingsInAmetadata"></a>
# **getOnesettingsInAmetadata**
> InlineResponse20032 getOnesettingsInAmetadata(idParent, id)

Get specific settings

Metadata

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let idParent = "idParent_example"; // String | Id of the metadata object
let id = "id_example"; // String | Id of the setting object

apiInstance.getOnesettingsInAmetadata(idParent, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idParent** | **String**| Id of the metadata object | 
 **id** | **String**| Id of the setting object | 

### Return type

[**InlineResponse20032**](InlineResponse20032.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOnesettingsInAmicrophones"></a>
# **getOnesettingsInAmicrophones**
> InlineResponse20032 getOnesettingsInAmicrophones(idParent, id)

Get specific settings

Microphone

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let idParent = "idParent_example"; // String | Id of the microphone object
let id = "id_example"; // String | Id of the setting object

apiInstance.getOnesettingsInAmicrophones(idParent, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idParent** | **String**| Id of the microphone object | 
 **id** | **String**| Id of the setting object | 

### Return type

[**InlineResponse20032**](InlineResponse20032.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOnesettingsInAoutputs"></a>
# **getOnesettingsInAoutputs**
> InlineResponse20032 getOnesettingsInAoutputs(idParent, id)

Get specific settings

Output

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let idParent = "idParent_example"; // String | Id of the output object
let id = "id_example"; // String | Id of the setting object

apiInstance.getOnesettingsInAoutputs(idParent, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idParent** | **String**| Id of the output object | 
 **id** | **String**| Id of the setting object | 

### Return type

[**InlineResponse20032**](InlineResponse20032.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOnesettingsInAspeakers"></a>
# **getOnesettingsInAspeakers**
> InlineResponse20032 getOnesettingsInAspeakers(idParent, id)

Get specific settings

Speaker

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let idParent = "idParent_example"; // String | Id of the speaker object
let id = "id_example"; // String | Id of the setting object

apiInstance.getOnesettingsInAspeakers(idParent, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idParent** | **String**| Id of the speaker object | 
 **id** | **String**| Id of the setting object | 

### Return type

[**InlineResponse20032**](InlineResponse20032.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOnespeakersInAhardware"></a>
# **getOnespeakersInAhardware**
> InlineResponse20073 getOnespeakersInAhardware(idParent, id)

Get specific speakers

Hardware

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let idParent = "idParent_example"; // String | Id of the hardware object
let id = "id_example"; // String | Id of the speaker object

apiInstance.getOnespeakersInAhardware(idParent, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idParent** | **String**| Id of the hardware object | 
 **id** | **String**| Id of the speaker object | 

### Return type

[**InlineResponse20073**](InlineResponse20073.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOnestreamsInAcameras"></a>
# **getOnestreamsInAcameras**
> InlineResponse20039 getOnestreamsInAcameras(idParent, id)

Get specific streams

Camera

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let idParent = "idParent_example"; // String | Id of the camera object
let id = "id_example"; // String | Id of the stream object

apiInstance.getOnestreamsInAcameras(idParent, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idParent** | **String**| Id of the camera object | 
 **id** | **String**| Id of the stream object | 

### Return type

[**InlineResponse20039**](InlineResponse20039.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getcamerasById"></a>
# **getcamerasById**
> InlineResponse20027 getcamerasById(id, opts)

Get specific object of Camera

Camera

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getcamerasById(id, opts, (error, data, response) => {
  if (error) {
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

[**InlineResponse20027**](InlineResponse20027.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="gethardwareById"></a>
# **gethardwareById**
> InlineResponse20064 gethardwareById(id, opts)

Get specific object of Hardware

Hardware

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.gethardwareById(id, opts, (error, data, response) => {
  if (error) {
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

[**InlineResponse20064**](InlineResponse20064.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="gethardwareDeviceEventsById"></a>
# **gethardwareDeviceEventsById**
> InlineResponse20074 gethardwareDeviceEventsById(id, opts)

Get specific object of Hardware device event

Hardware device event

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.gethardwareDeviceEventsById(id, opts, (error, data, response) => {
  if (error) {
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

[**InlineResponse20074**](InlineResponse20074.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="gethardwarePtzSettingsById"></a>
# **gethardwarePtzSettingsById**
> InlineResponse20076 gethardwarePtzSettingsById(id, opts)

Get specific object of PTZ

PTZ

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.gethardwarePtzSettingsById(id, opts, (error, data, response) => {
  if (error) {
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

[**InlineResponse20076**](InlineResponse20076.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getinputEventsById"></a>
# **getinputEventsById**
> InlineResponse20078 getinputEventsById(id, opts)

Get specific object of Input

Input

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getinputEventsById(id, opts, (error, data, response) => {
  if (error) {
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

[**InlineResponse20078**](InlineResponse20078.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getmetadataById"></a>
# **getmetadataById**
> InlineResponse200100 getmetadataById(id, opts)

Get specific object of Metadata

Metadata

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getmetadataById(id, opts, (error, data, response) => {
  if (error) {
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

[**InlineResponse200100**](InlineResponse200100.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getmicrophonesById"></a>
# **getmicrophonesById**
> InlineResponse200104 getmicrophonesById(id, opts)

Get specific object of Microphone

Microphone

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getmicrophonesById(id, opts, (error, data, response) => {
  if (error) {
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

[**InlineResponse200104**](InlineResponse200104.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getoutputsById"></a>
# **getoutputsById**
> InlineResponse200116 getoutputsById(id, opts)

Get specific object of Output

Output

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getoutputsById(id, opts, (error, data, response) => {
  if (error) {
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

[**InlineResponse200116**](InlineResponse200116.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getspeakersById"></a>
# **getspeakersById**
> InlineResponse200150 getspeakersById(id, opts)

Get specific object of Speaker

Speaker

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getspeakersById(id, opts, (error, data, response) => {
  if (error) {
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

[**InlineResponse200150**](InlineResponse200150.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getstreamsById"></a>
# **getstreamsById**
> InlineResponse200159 getstreamsById(id, opts)

Get specific object of Stream

Stream

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'tasks': "tasks_example" // String | Get list of all tasks supported by this object
};
apiInstance.getstreamsById(id, opts, (error, data, response) => {
  if (error) {
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

[**InlineResponse200159**](InlineResponse200159.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchcamerasById"></a>
# **patchcamerasById**
> InlineResponse20028 patchcamerasById(id, opts)

Update provided fields on Camera

Camera

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.Cameras() // Cameras | 
};
apiInstance.patchcamerasById(id, opts, (error, data, response) => {
  if (error) {
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
 **body** | [**Cameras**](Cameras.md)|  | [optional] 

### Return type

[**InlineResponse20028**](InlineResponse20028.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchhardwareById"></a>
# **patchhardwareById**
> InlineResponse20065 patchhardwareById(id, opts)

Update provided fields on Hardware

Hardware

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.Hardware() // Hardware | 
};
apiInstance.patchhardwareById(id, opts, (error, data, response) => {
  if (error) {
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
 **body** | [**Hardware**](Hardware.md)|  | [optional] 

### Return type

[**InlineResponse20065**](InlineResponse20065.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchhardwareDeviceEventsById"></a>
# **patchhardwareDeviceEventsById**
> InlineResponse20075 patchhardwareDeviceEventsById(id, opts)

Update provided fields on Hardware device event

Hardware device event

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.HardwareDeviceEvents() // HardwareDeviceEvents | 
};
apiInstance.patchhardwareDeviceEventsById(id, opts, (error, data, response) => {
  if (error) {
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
 **body** | [**HardwareDeviceEvents**](HardwareDeviceEvents.md)|  | [optional] 

### Return type

[**InlineResponse20075**](InlineResponse20075.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchhardwarePtzSettingsById"></a>
# **patchhardwarePtzSettingsById**
> InlineResponse20077 patchhardwarePtzSettingsById(id, opts)

Update provided fields on PTZ

PTZ

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.HardwarePtzSettings() // HardwarePtzSettings | 
};
apiInstance.patchhardwarePtzSettingsById(id, opts, (error, data, response) => {
  if (error) {
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
 **body** | [**HardwarePtzSettings**](HardwarePtzSettings.md)|  | [optional] 

### Return type

[**InlineResponse20077**](InlineResponse20077.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchinputEventsById"></a>
# **patchinputEventsById**
> InlineResponse20079 patchinputEventsById(id, opts)

Update provided fields on Input

Input

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.InputEvents() // InputEvents | 
};
apiInstance.patchinputEventsById(id, opts, (error, data, response) => {
  if (error) {
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
 **body** | [**InputEvents**](InputEvents.md)|  | [optional] 

### Return type

[**InlineResponse20079**](InlineResponse20079.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchmetadataById"></a>
# **patchmetadataById**
> InlineResponse200101 patchmetadataById(id, opts)

Update provided fields on Metadata

Metadata

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.Metadata() // Metadata | 
};
apiInstance.patchmetadataById(id, opts, (error, data, response) => {
  if (error) {
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
 **body** | [**Metadata**](Metadata.md)|  | [optional] 

### Return type

[**InlineResponse200101**](InlineResponse200101.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchmicrophonesById"></a>
# **patchmicrophonesById**
> InlineResponse200105 patchmicrophonesById(id, opts)

Update provided fields on Microphone

Microphone

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.Microphones() // Microphones | 
};
apiInstance.patchmicrophonesById(id, opts, (error, data, response) => {
  if (error) {
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
 **body** | [**Microphones**](Microphones.md)|  | [optional] 

### Return type

[**InlineResponse200105**](InlineResponse200105.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchoutputsById"></a>
# **patchoutputsById**
> InlineResponse200117 patchoutputsById(id, opts)

Update provided fields on Output

Output

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.Outputs() // Outputs | 
};
apiInstance.patchoutputsById(id, opts, (error, data, response) => {
  if (error) {
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
 **body** | [**Outputs**](Outputs.md)|  | [optional] 

### Return type

[**InlineResponse200117**](InlineResponse200117.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchspeakersById"></a>
# **patchspeakersById**
> InlineResponse200151 patchspeakersById(id, opts)

Update provided fields on Speaker

Speaker

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.Speakers() // Speakers | 
};
apiInstance.patchspeakersById(id, opts, (error, data, response) => {
  if (error) {
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
 **body** | [**Speakers**](Speakers.md)|  | [optional] 

### Return type

[**InlineResponse200151**](InlineResponse200151.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchstreamsById"></a>
# **patchstreamsById**
> InlineResponse200160 patchstreamsById(id, opts)

Update provided fields on Stream

Stream

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.Streams() // Streams | 
};
apiInstance.patchstreamsById(id, opts, (error, data, response) => {
  if (error) {
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
 **body** | [**Streams**](Streams.md)|  | [optional] 

### Return type

[**InlineResponse200160**](InlineResponse200160.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postTaskForcameras"></a>
# **postTaskForcameras**
> InlineResponse20029 postTaskForcameras(id, task, opts)

Perform a task

Camera

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let task = "task_example"; // String | task=GetOtherRecordingServersWithMedia, or task=GetOtherRecordingStoragesWithMedia, or task=RetrieveEdgeStorage, or task=TruncateStorage, or task=TruncateStorageOnOtherRecordingServer, or task=ChangeDeviceRecordingStorage, or task=ChangeSecurityPermissions
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.CamerasIdBody() // CamerasIdBody | 
};
apiInstance.postTaskForcameras(id, task, opts, (error, data, response) => {
  if (error) {
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
 **task** | **String**| task&#x3D;GetOtherRecordingServersWithMedia, or task&#x3D;GetOtherRecordingStoragesWithMedia, or task&#x3D;RetrieveEdgeStorage, or task&#x3D;TruncateStorage, or task&#x3D;TruncateStorageOnOtherRecordingServer, or task&#x3D;ChangeDeviceRecordingStorage, or task&#x3D;ChangeSecurityPermissions | 
 **body** | [**CamerasIdBody**](CamerasIdBody.md)|  | [optional] 

### Return type

[**InlineResponse20029**](InlineResponse20029.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postTaskForhardware"></a>
# **postTaskForhardware**
> InlineResponse20066 postTaskForhardware(id, task, opts)

Perform a task

Hardware

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let task = "task_example"; // String | task=ReadPasswordHardware, or task=ChangePasswordHardware, or task=UpdateFirmwareHardware, or task=MoveHardware, or task=UpdateHardware
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.HardwareIdBody() // HardwareIdBody | 
};
apiInstance.postTaskForhardware(id, task, opts, (error, data, response) => {
  if (error) {
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
 **task** | **String**| task&#x3D;ReadPasswordHardware, or task&#x3D;ChangePasswordHardware, or task&#x3D;UpdateFirmwareHardware, or task&#x3D;MoveHardware, or task&#x3D;UpdateHardware | 
 **body** | [**HardwareIdBody**](HardwareIdBody.md)|  | [optional] 

### Return type

[**InlineResponse20066**](InlineResponse20066.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postTaskForinputEvents"></a>
# **postTaskForinputEvents**
> InlineResponse20080 postTaskForinputEvents(id, task, opts)

Perform a task

Input

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let task = "task_example"; // String | task=ChangeSecurityPermissions
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.ChangeSecurityPermissionsRequestBody() // ChangeSecurityPermissionsRequestBody | 
};
apiInstance.postTaskForinputEvents(id, task, opts, (error, data, response) => {
  if (error) {
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

<a name="postTaskFormetadata"></a>
# **postTaskFormetadata**
> InlineResponse20029 postTaskFormetadata(id, task, opts)

Perform a task

Metadata

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let task = "task_example"; // String | task=GetOtherRecordingServersWithMedia, or task=GetOtherRecordingStoragesWithMedia, or task=RetrieveEdgeStorage, or task=TruncateStorage, or task=TruncateStorageOnOtherRecordingServer, or task=ChangeDeviceRecordingStorage, or task=ChangeSecurityPermissions
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.MetadataIdBody() // MetadataIdBody | 
};
apiInstance.postTaskFormetadata(id, task, opts, (error, data, response) => {
  if (error) {
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
 **task** | **String**| task&#x3D;GetOtherRecordingServersWithMedia, or task&#x3D;GetOtherRecordingStoragesWithMedia, or task&#x3D;RetrieveEdgeStorage, or task&#x3D;TruncateStorage, or task&#x3D;TruncateStorageOnOtherRecordingServer, or task&#x3D;ChangeDeviceRecordingStorage, or task&#x3D;ChangeSecurityPermissions | 
 **body** | [**MetadataIdBody**](MetadataIdBody.md)|  | [optional] 

### Return type

[**InlineResponse20029**](InlineResponse20029.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postTaskFormicrophones"></a>
# **postTaskFormicrophones**
> InlineResponse20029 postTaskFormicrophones(id, task, opts)

Perform a task

Microphone

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let task = "task_example"; // String | task=GetOtherRecordingServersWithMedia, or task=GetOtherRecordingStoragesWithMedia, or task=RetrieveEdgeStorage, or task=TruncateStorage, or task=TruncateStorageOnOtherRecordingServer, or task=ChangeDeviceRecordingStorage, or task=ChangeSecurityPermissions
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.MicrophonesIdBody() // MicrophonesIdBody | 
};
apiInstance.postTaskFormicrophones(id, task, opts, (error, data, response) => {
  if (error) {
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
 **task** | **String**| task&#x3D;GetOtherRecordingServersWithMedia, or task&#x3D;GetOtherRecordingStoragesWithMedia, or task&#x3D;RetrieveEdgeStorage, or task&#x3D;TruncateStorage, or task&#x3D;TruncateStorageOnOtherRecordingServer, or task&#x3D;ChangeDeviceRecordingStorage, or task&#x3D;ChangeSecurityPermissions | 
 **body** | [**MicrophonesIdBody**](MicrophonesIdBody.md)|  | [optional] 

### Return type

[**InlineResponse20029**](InlineResponse20029.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postTaskForoutputs"></a>
# **postTaskForoutputs**
> InlineResponse20080 postTaskForoutputs(id, task, opts)

Perform a task

Output

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let task = "task_example"; // String | task=ChangeSecurityPermissions
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.ChangeSecurityPermissionsRequestBody() // ChangeSecurityPermissionsRequestBody | 
};
apiInstance.postTaskForoutputs(id, task, opts, (error, data, response) => {
  if (error) {
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

<a name="postTaskForspeakers"></a>
# **postTaskForspeakers**
> InlineResponse20029 postTaskForspeakers(id, task, opts)

Perform a task

Speaker

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let task = "task_example"; // String | task=GetOtherRecordingServersWithMedia, or task=GetOtherRecordingStoragesWithMedia, or task=RetrieveEdgeStorage, or task=TruncateStorage, or task=TruncateStorageOnOtherRecordingServer, or task=ChangeDeviceRecordingStorage, or task=ChangeSecurityPermissions
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.SpeakersIdBody() // SpeakersIdBody | 
};
apiInstance.postTaskForspeakers(id, task, opts, (error, data, response) => {
  if (error) {
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
 **task** | **String**| task&#x3D;GetOtherRecordingServersWithMedia, or task&#x3D;GetOtherRecordingStoragesWithMedia, or task&#x3D;RetrieveEdgeStorage, or task&#x3D;TruncateStorage, or task&#x3D;TruncateStorageOnOtherRecordingServer, or task&#x3D;ChangeDeviceRecordingStorage, or task&#x3D;ChangeSecurityPermissions | 
 **body** | [**SpeakersIdBody**](SpeakersIdBody.md)|  | [optional] 

### Return type

[**InlineResponse20029**](InlineResponse20029.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postTaskForstreams"></a>
# **postTaskForstreams**
> InlineResponse200161 postTaskForstreams(id, task, opts)

Perform a task

Stream

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let task = "task_example"; // String | task=AddStream, or task=RemoveStream
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.StreamsIdBody() // StreamsIdBody | 
};
apiInstance.postTaskForstreams(id, task, opts, (error, data, response) => {
  if (error) {
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
 **task** | **String**| task&#x3D;AddStream, or task&#x3D;RemoveStream | 
 **body** | [**StreamsIdBody**](StreamsIdBody.md)|  | [optional] 

### Return type

[**InlineResponse200161**](InlineResponse200161.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postcamerasByIdpatrollingProfiles"></a>
# **postcamerasByIdpatrollingProfiles**
> InlineResponse2014 postcamerasByIdpatrollingProfiles(id, opts)

Add a patrollingProfiles to a cameras

Camera

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the camera object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.PatrollingProfiles() // PatrollingProfiles | 
};
apiInstance.postcamerasByIdpatrollingProfiles(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the camera object | 
 **body** | [**PatrollingProfiles**](PatrollingProfiles.md)|  | [optional] 

### Return type

[**InlineResponse2014**](InlineResponse2014.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postcamerasByIdptzPresets"></a>
# **postcamerasByIdptzPresets**
> InlineResponse20038 postcamerasByIdptzPresets(id, opts)

Add a ptzPresets to a cameras, or task&#x3D;DefaultPtzPreset, or task&#x3D;GetDevicePresets

Camera, or perform a task

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.IdPtzPresetsBody() // IdPtzPresetsBody | 
};
apiInstance.postcamerasByIdptzPresets(id, opts, (error, data, response) => {
  if (error) {
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
 **body** | [**IdPtzPresetsBody**](IdPtzPresetsBody.md)|  | [optional] 

### Return type

[**InlineResponse20038**](InlineResponse20038.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putcamerasById"></a>
# **putcamerasById**
> InlineResponse20028 putcamerasById(id, opts)

Update all fields on Camera

Camera

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.Cameras() // Cameras | 
};
apiInstance.putcamerasById(id, opts, (error, data, response) => {
  if (error) {
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
 **body** | [**Cameras**](Cameras.md)|  | [optional] 

### Return type

[**InlineResponse20028**](InlineResponse20028.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="puthardwareById"></a>
# **puthardwareById**
> InlineResponse20065 puthardwareById(id, opts)

Update all fields on Hardware

Hardware

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.Hardware() // Hardware | 
};
apiInstance.puthardwareById(id, opts, (error, data, response) => {
  if (error) {
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
 **body** | [**Hardware**](Hardware.md)|  | [optional] 

### Return type

[**InlineResponse20065**](InlineResponse20065.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="puthardwareDeviceEventsById"></a>
# **puthardwareDeviceEventsById**
> InlineResponse20075 puthardwareDeviceEventsById(id, opts)

Update all fields on Hardware device event

Hardware device event

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.HardwareDeviceEvents() // HardwareDeviceEvents | 
};
apiInstance.puthardwareDeviceEventsById(id, opts, (error, data, response) => {
  if (error) {
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
 **body** | [**HardwareDeviceEvents**](HardwareDeviceEvents.md)|  | [optional] 

### Return type

[**InlineResponse20075**](InlineResponse20075.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="puthardwarePtzSettingsById"></a>
# **puthardwarePtzSettingsById**
> InlineResponse20077 puthardwarePtzSettingsById(id, opts)

Update all fields on PTZ

PTZ

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.HardwarePtzSettings() // HardwarePtzSettings | 
};
apiInstance.puthardwarePtzSettingsById(id, opts, (error, data, response) => {
  if (error) {
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
 **body** | [**HardwarePtzSettings**](HardwarePtzSettings.md)|  | [optional] 

### Return type

[**InlineResponse20077**](InlineResponse20077.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putinputEventsById"></a>
# **putinputEventsById**
> InlineResponse20079 putinputEventsById(id, opts)

Update all fields on Input

Input

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.InputEvents() // InputEvents | 
};
apiInstance.putinputEventsById(id, opts, (error, data, response) => {
  if (error) {
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
 **body** | [**InputEvents**](InputEvents.md)|  | [optional] 

### Return type

[**InlineResponse20079**](InlineResponse20079.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putmetadataById"></a>
# **putmetadataById**
> InlineResponse200101 putmetadataById(id, opts)

Update all fields on Metadata

Metadata

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.Metadata() // Metadata | 
};
apiInstance.putmetadataById(id, opts, (error, data, response) => {
  if (error) {
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
 **body** | [**Metadata**](Metadata.md)|  | [optional] 

### Return type

[**InlineResponse200101**](InlineResponse200101.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putmicrophonesById"></a>
# **putmicrophonesById**
> InlineResponse200105 putmicrophonesById(id, opts)

Update all fields on Microphone

Microphone

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.Microphones() // Microphones | 
};
apiInstance.putmicrophonesById(id, opts, (error, data, response) => {
  if (error) {
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
 **body** | [**Microphones**](Microphones.md)|  | [optional] 

### Return type

[**InlineResponse200105**](InlineResponse200105.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putoutputsById"></a>
# **putoutputsById**
> InlineResponse200117 putoutputsById(id, opts)

Update all fields on Output

Output

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.Outputs() // Outputs | 
};
apiInstance.putoutputsById(id, opts, (error, data, response) => {
  if (error) {
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
 **body** | [**Outputs**](Outputs.md)|  | [optional] 

### Return type

[**InlineResponse200117**](InlineResponse200117.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putspeakersById"></a>
# **putspeakersById**
> InlineResponse200151 putspeakersById(id, opts)

Update all fields on Speaker

Speaker

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.Speakers() // Speakers | 
};
apiInstance.putspeakersById(id, opts, (error, data, response) => {
  if (error) {
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
 **body** | [**Speakers**](Speakers.md)|  | [optional] 

### Return type

[**InlineResponse200151**](InlineResponse200151.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putstreamsById"></a>
# **putstreamsById**
> InlineResponse200160 putstreamsById(id, opts)

Update all fields on Stream

Stream

### Example
```javascript
import {MilestoneIntegrationPlatformVmsResTfulApi} from 'milestone_integration_platform_vms_res_tful_api';
let defaultClient = MilestoneIntegrationPlatformVmsResTfulApi.ApiClient.instance;
// Configure HTTP basic authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.username = 'YOUR USERNAME';
bearerAuth.password = 'YOUR PASSWORD';

let apiInstance = new MilestoneIntegrationPlatformVmsResTfulApi.DeviceConfigApi();
let id = "id_example"; // String | Id of the object
let opts = { 
  'body': new MilestoneIntegrationPlatformVmsResTfulApi.Streams() // Streams | 
};
apiInstance.putstreamsById(id, opts, (error, data, response) => {
  if (error) {
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
 **body** | [**Streams**](Streams.md)|  | [optional] 

### Return type

[**InlineResponse200160**](InlineResponse200160.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

