# MilestoneIntegrationPlatformVmsResTfulApi.Roles

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**displayName** | **String** |  | [optional] 
**id** | **String** | ID | [optional] 
**name** | **String** | Name | [optional] 
**description** | **String** | Description | [optional] 
**roleType** | **String** | Type of role. Value map to display names:  Adminstrative&#x3D;Adminstrative   UserDefined&#x3D;UserDefined    | [optional] 
**lastModified** | **String** | Last modified | [optional] 
**dualAuthorizationRequired** | **Boolean** | Login authorization required | [optional] 
**makeUsersAnonymousDuringPTZSession** | **Boolean** | Make users anonymous during PTZ session | [optional] 
**allowMobileClientLogOn** | **Boolean** | Allow Mobile Client login. Allow members of the role to log in from a Mobile Client | [optional] 
**allowSmartClientLogOn** | **Boolean** | Allow Smart Client login. Allow members of the role to log in from a Smart Client | [optional] 
**allowWebClientLogOn** | **Boolean** | Allow Web Client login. Allow members of the role to log in from a Web Client | [optional] 
**relations** | [**RolesRelations**](RolesRelations.md) |  | [optional] 

<a name="RoleTypeEnum"></a>
## Enum: RoleTypeEnum

* `adminstrative` (value: `"Adminstrative"`)
* `userDefined` (value: `"UserDefined"`)

