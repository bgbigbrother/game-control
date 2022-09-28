# MilestoneIntegrationPlatformVmsResTfulApi.StorageInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**displayName** | **String** |  | [optional] 
**anyTablesWithData** | **String** | Any table with data. Specifies if status regarding data usage have been received from the recording server (Unknown if no status have been received). Value map to display names:  Unknown&#x3D;Unknown   ContainsData&#x3D;ContainsData   DoesNotContainData&#x3D;DoesNotContainData    | [optional] 
**lastUpdated** | **String** | Last update. Shows when status regarding data usage was received from the recording server | [optional] 
**lockedUsedSpace** | **Number** | Locked data (MB). Evidence locked data in storage or archive (in MB) | [optional] 
**usedSpace** | **Number** | Used space (MB). Data in storage or archive (in MB) | [optional] 
**relations** | [**StorageInformationRelations**](StorageInformationRelations.md) |  | [optional] 

<a name="AnyTablesWithDataEnum"></a>
## Enum: AnyTablesWithDataEnum

* `unknown` (value: `"Unknown"`)
* `containsData` (value: `"ContainsData"`)
* `doesNotContainData` (value: `"DoesNotContainData"`)

