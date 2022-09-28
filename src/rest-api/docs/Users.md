# MilestoneIntegrationPlatformVmsResTfulApi.Users

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sid** | **String** | SID | [optional] 
**identityType** | **String** | User type. Value map to display names:  InvalidIdentity&#x3D;InvalidIdentity   UnknownIdentityType&#x3D;UnknownIdentityType   WindowsUser&#x3D;WindowsUser   WindowsGroup&#x3D;WindowsGroup   Role&#x3D;Role   BasicUser&#x3D;BasicUser    | [optional] 
**accountName** | **String** | Account name | [optional] 
**displayName** | **String** | Role display name | [optional] 
**domain** | **String** | Domain | [optional] 
**description** | **String** | Description | [optional] 
**memberOf** | **String** | Member of groups. Only filled when getting specific user, call the GetItem(item.Path) to fill the property | [optional] 
**memberOfRoles** | **String** | Member of roles. Only filled when getting specific user, call the GetItem(item.Path) to fill the property | [optional] 
**members** | **String** | Members. Only filled when getting specific user, call the GetItem(item.Path) to fill the property | [optional] 
**relations** | [**UsersRelations**](UsersRelations.md) |  | [optional] 

<a name="IdentityTypeEnum"></a>
## Enum: IdentityTypeEnum

* `invalidIdentity` (value: `"InvalidIdentity"`)
* `unknownIdentityType` (value: `"UnknownIdentityType"`)
* `windowsUser` (value: `"WindowsUser"`)
* `windowsGroup` (value: `"WindowsGroup"`)
* `role` (value: `"Role"`)
* `basicUser` (value: `"BasicUser"`)

