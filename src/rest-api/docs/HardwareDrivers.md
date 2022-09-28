# MilestoneIntegrationPlatformVmsResTfulApi.HardwareDrivers

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**displayName** | **String** |  | [optional] 
**id** | **String** | ID | [optional] 
**name** | **String** | Name | [optional] 
**groupName** | **String** | Driver group name | [optional] 
**_number** | **Number** | Driver number | [optional] 
**useCount** | **Number** | Number of hardware using driver | [optional] 
**driverVersion** | **String** | Version | [optional] 
**driverRevision** | **String** | Revision | [optional] 
**driverType** | **String** | Driver type. Value map to display names:  Unknown&#x3D;Unknown   DevicePack&#x3D;DevicePack   InterconnectedProduct&#x3D;InterconnectedProduct    | [optional] 
**relations** | [**HardwareDriversRelations**](HardwareDriversRelations.md) |  | [optional] 

<a name="DriverTypeEnum"></a>
## Enum: DriverTypeEnum

* `unknown` (value: `"Unknown"`)
* `devicePack` (value: `"DevicePack"`)
* `interconnectedProduct` (value: `"InterconnectedProduct"`)

