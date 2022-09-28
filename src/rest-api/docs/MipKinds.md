# MilestoneIntegrationPlatformVmsResTfulApi.MipKinds

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**displayName** | **String** |  | [optional] 
**id** | **String** | ID | [optional] 
**name** | **String** | Name | [optional] 
**pluginId** | **String** | Plugin ID | [optional] 
**pluginName** | **String** | Plugin name | [optional] 
**kindType** | **String** | Define content type ITEM or OPTION. Value map to display names:  ITEM&#x3D;Item   OPTION&#x3D;Option    | [optional] 
**securityAction** | **String** | Comma separated list of action IDs . Contains a comma separated list of ActionId*s. If security is not to be used, this field should be set to String.Empty.  Note that when used, the *GENERIC_READ* , *GENERIC_WRITE* and *ADMIN_SECURITY* actionId*s should always be available. | [optional] 
**displayOnGisMap** | **Boolean** | Display on GIS map (if supported by plugin) | [optional] 
**parentKind** | **String** | Parent kind | [optional] 
**dataVersion** | **Number** | Sum of all DataVersions | [optional] 
**modifiedUser** | **String** | Modified by user | [optional] 
**lastModified** | **String** | Last modified | [optional] 
**relations** | [**MipKindsRelations**](MipKindsRelations.md) |  | [optional] 

<a name="KindTypeEnum"></a>
## Enum: KindTypeEnum

* `ITEM` (value: `"ITEM"`)
* `OPTION` (value: `"OPTION"`)

