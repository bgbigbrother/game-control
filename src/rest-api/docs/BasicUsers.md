# MilestoneIntegrationPlatformVmsResTfulApi.BasicUsers

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**displayName** | **String** |  | [optional] 
**id** | **String** | ID | [optional] 
**name** | **String** | Name | [optional] 
**description** | **String** | Description | [optional] 
**createdDate** | **String** | Created date | [optional] 
**lastModified** | **String** | Last modified | [optional] 
**sid** | **String** | SID | [optional] 
**canChangePassword** | **Boolean** | Can change password | [optional] 
**forcePasswordChange** | **Boolean** | Force change password | [optional] 
**status** | **String** | Status. Value map to display names:  Enabled&#x3D;Enabled   LockedOutByAdmin&#x3D;LockedOutByAdmin   LockedOutBySystem&#x3D;LockedOutBySystem    | [optional] 
**lockoutEnd** | **String** | User locked until | [optional] 
**isExternal** | **Boolean** | Is external | [optional] 
**relations** | [**BasicUsersRelations**](BasicUsersRelations.md) |  | [optional] 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `enabled` (value: `"Enabled"`)
* `lockedOutByAdmin` (value: `"LockedOutByAdmin"`)
* `lockedOutBySystem` (value: `"LockedOutBySystem"`)

