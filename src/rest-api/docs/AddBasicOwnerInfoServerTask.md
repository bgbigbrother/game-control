# MilestoneIntegrationPlatformVmsResTfulApi.AddBasicOwnerInfoServerTask

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**displayName** | **String** |  | [optional] 
**tagType** | **String** | Select tag type. . Value map to display names:  address.Name&#x3D;Address - Name   address.Address&#x3D;Address - Address   address.State&#x3D;Address - State   address.Phone&#x3D;Address - Phone   address.Country&#x3D;Address - Country   address.ZipCode&#x3D;Address - Zip code   admin.Name&#x3D;Admin - Name   admin.Address&#x3D;Admin - Address   admin.Phone&#x3D;Admin - Phone   additional.AdditionalInfo&#x3D;Additional - Additional    | [optional] 
**tagValue** | **String** | Value of selected tag. This property can contain any of the BasicInformation fields. The DisplayName contains the readable name, like *Address*, while the Key is prefixed with the group name, e.g. *address.Address* or *admin.Address*.  | [optional] 

<a name="TagTypeEnum"></a>
## Enum: TagTypeEnum

* `addressName` (value: `"address.Name"`)
* `addressAddress` (value: `"address.Address"`)
* `addressState` (value: `"address.State"`)
* `addressPhone` (value: `"address.Phone"`)
* `addressCountry` (value: `"address.Country"`)
* `addressZipCode` (value: `"address.ZipCode"`)
* `adminName` (value: `"admin.Name"`)
* `adminAddress` (value: `"admin.Address"`)
* `adminPhone` (value: `"admin.Phone"`)
* `additionalAdditionalInfo` (value: `"additional.AdditionalInfo"`)

