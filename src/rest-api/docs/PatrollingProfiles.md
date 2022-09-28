# MilestoneIntegrationPlatformVmsResTfulApi.PatrollingProfiles

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**displayName** | **String** |  | [optional] 
**name** | **String** | Name | [optional] 
**description** | **String** | Description | [optional] 
**id** | **String** | ID | [optional] 
**customizeTransitions** | **Boolean** | Customize transitions. Indicates if transition from one preset to another should to be configured | [optional] 
**initSpeed** | **Number** | Initial transition: Speed. A value between 0.0 and 1.0, where 1.0 is full speed | [optional] 
**initTransitionTime** | **Number** | Initial transition: Transition time. The number of seconds it is expected to take for the movement to complete | [optional] 
**endPresetId** | **String** | End position: Preset. . Value map to display names:  c25bd736-7da0-489f-90b6-215746fb845f&#x3D;Ptz Preset 1   6512d13a-7404-44ff-8e01-cb028b3c2111&#x3D;Ptz Preset 2    | [optional] 
**endSpeed** | **Number** | End position: Speed. A value between 0.0 and 1.0, where 1.0 is full speed | [optional] 
**endTransitionTime** | **Number** | End position: Transition time. The number of seconds it is expected to take for the movement to complete | [optional] 
**patrollingEntries** | [**PatrollingEntries**](PatrollingEntries.md) |  | [optional] 
**relations** | [**PatrollingProfilesRelations**](PatrollingProfilesRelations.md) |  | [optional] 

<a name="EndPresetIdEnum"></a>
## Enum: EndPresetIdEnum

* `c25bd7367da0489f90b6215746fb845f` (value: `"c25bd736-7da0-489f-90b6-215746fb845f"`)
* `_6512d13a740444ff8e01Cb028b3c2111` (value: `"6512d13a-7404-44ff-8e01-cb028b3c2111"`)

