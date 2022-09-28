# MilestoneIntegrationPlatformVmsResTfulApi.ToolOptions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**displayName** | **String** |  | [optional] 
**ptzManualSessionTimeoutSec** | **Number** | Timeout for manual PTZ sessions (sec). A value in seconds.  Value need to be in hours: e.g. multiple of 3600, or in minutes: multiple of 60, or in seconds: with max value of 999 | [optional] 
**pausePatrollingTimeoutSec** | **Number** | Timeout for pause patrolling sessions (sec). A value in seconds.  Value need to be in hours: e.g. multiple of 3600, or in minutes: multiple of 60, or in seconds: with max value of 999 | [optional] 
**ptzReservedSessionTimeoutSec** | **Number** | Timeout for reserved PTZ sessions (sec). A value in seconds.  Value need to be in hours: e.g. multiple of 3600, or in minutes: multiple of 60, or in seconds: with max value of 999 | [optional] 
**deviceErrorTimeoutSec** | **String** | Ignore device communication errors for. The number of seconds to pass before logging a device communication error. Legal values are 0,1,5,10,15,30,45,60,120,300. Value map to display names:  0&#x3D;0   5&#x3D;5   10&#x3D;10   15&#x3D;15   30&#x3D;30   45&#x3D;45   60&#x3D;60   120&#x3D;120   300&#x3D;300    | [optional] 
**relations** | [**ToolOptionsRelations**](ToolOptionsRelations.md) |  | [optional] 

<a name="DeviceErrorTimeoutSecEnum"></a>
## Enum: DeviceErrorTimeoutSecEnum

* `_0` (value: `"0"`)
* `_5` (value: `"5"`)
* `_10` (value: `"10"`)
* `_15` (value: `"15"`)
* `_30` (value: `"30"`)
* `_45` (value: `"45"`)
* `_60` (value: `"60"`)
* `_120` (value: `"120"`)
* `_300` (value: `"300"`)

