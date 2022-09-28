# MilestoneIntegrationPlatformVmsResTfulApi.SaveSearches

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**displayName** | **String** |  | [optional] 
**id** | **String** | ID | [optional] 
**name** | **String** | Name | [optional] 
**description** | **String** | Description | [optional] 
**searchQuery** | **String** | Search query | [optional] 
**availability** | **String** | Availability. Value map to display names:  Private&#x3D;Private   Public&#x3D;Public    | [optional] 
**includesScopeItems** | **Boolean** | Devices are included in the search query | [optional] 
**relations** | [**SaveSearchesRelations**](SaveSearchesRelations.md) |  | [optional] 

<a name="AvailabilityEnum"></a>
## Enum: AvailabilityEnum

* `_private` (value: `"Private"`)
* `_public` (value: `"Public"`)

