# MilestoneIntegrationPlatformVmsResTfulApi.RecordingServerFailovers

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**displayName** | **String** |  | [optional] 
**id** | **String** | ID | [optional] 
**primaryFailoverGroup** | **String** | Primary failover group. . Value map to display names:  FailoverGroup[00000000-0000-0000-0000-000000000000]&#x3D;Not used   FailoverGroup[27D6C895-6C73-4192-B58A-6E6055FD9353]&#x3D;MyFailoverGroup    | [optional] 
**secondaryFailoverGroup** | **String** | Secondary failover group. . Value map to display names:  FailoverGroup[00000000-0000-0000-0000-000000000000]&#x3D;Not used   FailoverGroup[27D6C895-6C73-4192-B58A-6E6055FD9353]&#x3D;MyFailoverGroup    | [optional] 
**hotStandby** | **String** | Hot standby. . Value map to display names:  FailoverRecorder[936631D8-CD32-408E-A876-C8FE7A7C67EA]&#x3D;rootLevelFailover    | [optional] 
**failoverPort** | **Number** | Failover port | [optional] 
**relations** | [**RecordingServerFailoversRelations**](RecordingServerFailoversRelations.md) |  | [optional] 

<a name="PrimaryFailoverGroupEnum"></a>
## Enum: PrimaryFailoverGroupEnum

* `_00000000000000000000000000000000` (value: `"FailoverGroup[00000000-0000-0000-0000-000000000000]"`)
* `_27D6C8956C734192B58A6E6055FD9353` (value: `"FailoverGroup[27D6C895-6C73-4192-B58A-6E6055FD9353]"`)


<a name="SecondaryFailoverGroupEnum"></a>
## Enum: SecondaryFailoverGroupEnum

* `_00000000000000000000000000000000` (value: `"FailoverGroup[00000000-0000-0000-0000-000000000000]"`)
* `_27D6C8956C734192B58A6E6055FD9353` (value: `"FailoverGroup[27D6C895-6C73-4192-B58A-6E6055FD9353]"`)


<a name="HotStandbyEnum"></a>
## Enum: HotStandbyEnum

* `failoverRecorder936631D8CD32408EA876C8FE7A7C67EA` (value: `"FailoverRecorder[936631D8-CD32-408E-A876-C8FE7A7C67EA]"`)

