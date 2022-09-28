# MilestoneIntegrationPlatformVmsResTfulApi.Rules

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **Boolean** |  | [optional] 
**displayName** | **String** |  | [optional] 
**id** | **String** | ID | [optional] 
**name** | **String** | Name | [optional] 
**description** | **String** | Description | [optional] 
**startRuleType** | **String** | Start rule type. . Value map to display names:  TimeInterval&#x3D;Interval rule type   Event&#x3D;Event rule type   RecurringTime&#x3D;Recurring rule type    | [optional] 
**stopRuleType** | **String** | Stop rule type. . Value map to display names:  TimeInterval&#x3D;Interval rule type   Event&#x3D;Event rule type   Timer&#x3D;Timer rule type   None&#x3D;None    | [optional] 
**always** | **Boolean** | Always | [optional] 
**withinTimeProfile** | **Boolean** | Within selected time in &lt;time profile&gt; | [optional] 
**outsideTimeProfile** | **Boolean** | Outside selected time in &lt;time profile&gt; | [optional] 
**timeOfDayBetween** | **Boolean** | Within the time period &lt;start time&gt; to &lt;end time&gt; | [optional] 
**daysOfWeek** | **Boolean** | Day(s) of week  | [optional] 
**startActions** | **String** | Start actions. Value map to display names:  StartRecording&#x3D;Start recording on &lt;devices&gt;   PtzMoveToDefault&#x3D;Move to default preset on &lt;devices&gt; with PTZ &lt;priority&gt;   PtzMoveToPreset&#x3D;Move &lt;device&gt; to &lt;preset&gt; position with PTZ &lt;priority&gt;   SetDeviceOutputState&#x3D;Set device output to &lt;state&gt;   StartSetFramerate&#x3D;Set live frame rate on &lt;devices&gt;   StartSetRecordingFramerate&#x3D;Set recording framerate to &lt;framerate&gt; on &lt;devices&gt;   StartFeed&#x3D;Start feed on &lt;devices&gt;   RetrieveEdgeStorage&#x3D;Retrieve and store remote recordings from &lt;devices&gt;   RetrieveEdgeStorageTimeOrMetadata&#x3D;Retrieve and store remote recordings between &lt;start and end time&gt; from &lt;devices&gt;   StartRecordAllFrames&#x3D;Set recording frame rate to all frames for MPEG-4/H.264/H.265 on &lt;devices&gt;   SetBookmark&#x3D;Create bookmark on &lt;devices&gt;   CreateLogEntry&#x3D;Make new &lt;log entry&gt;   VideoWallSetToCameras&#x3D;Set &lt;video wall&gt; &lt;monitor&gt; to show &lt;cameras&gt;   VideoWallSetToText&#x3D;Set &lt;video wall&gt; &lt;monitor&gt; to show text *&lt;message&gt;*   VideoWallSetToPreset&#x3D;Set &lt;video wall&gt; to &lt;preset&gt;   ActivateArchiving&#x3D;Activate archiving on &lt;archives&gt;   VideoWallRemoveCameras&#x3D;Remove &lt;cameras&gt; from &lt;video wall&gt; &lt;monitor&gt;   DeviceChangeSettings&#x3D;Apply new settings on &lt;devices&gt;   StartPatrolling&#x3D;Start patrolling on &lt;device&gt;   PausePatrolling&#x3D;Pause patrolling on &lt;devices&gt;   MIPAction:9c75c34f-8fe4-5267-91a4-357d9962ec6c&#x3D;Lock Door Unit, Access Point   MIPAction:47c713ce-920e-5b05-ae25-b7cbc2f66235&#x3D;Unlock Door Unit, Access Point   StartPluginOnDevices&#x3D;Start plug-in on &lt;devices&gt;   StopPluginOnDevices&#x3D;Stop plug-in on &lt;devices&gt;   TriggerEventOnRemoteSite&#x3D;On &lt;site&gt; trigger &lt;user-defined event&gt;    | [optional] 
**stopActions** | **String** | Stop actions. Value map to display names:  StopRecording&#x3D;Stop recording   PtzMoveToDefault&#x3D;Move to default preset on &lt;devices&gt; with PTZ &lt;priority&gt;   PtzMoveToPreset&#x3D;Move &lt;device&gt; to &lt;preset&gt; position with PTZ &lt;priority&gt;   SetDeviceOutputState&#x3D;Set device output to &lt;state&gt;   StopSetFramerate&#x3D;Restore default live frame rate   StopSetRecordingFramerate&#x3D;Reset recording framerate to default   StopFeed&#x3D;Stop feed   StopRecordAllFrames&#x3D;Restore default recording frame rate of keyframes for MPEG-4/H.264/H.265   VideoWallSetToCameras&#x3D;Set &lt;video wall&gt; &lt;monitor&gt; to show &lt;cameras&gt;   VideoWallSetToText&#x3D;Set &lt;video wall&gt; &lt;monitor&gt; to show text *&lt;message&gt;*   VideoWallSetToPreset&#x3D;Set &lt;video wall&gt; to &lt;preset&gt;   VideoWallRemoveCameras&#x3D;Remove &lt;cameras&gt; from &lt;video wall&gt; &lt;monitor&gt;   DeviceChangeSettings&#x3D;Apply new settings on &lt;devices&gt;   StopPatrolling&#x3D;Stop patrolling on &lt;device&gt;   ResumePatrolling&#x3D;Resume patrolling   MIPAction:9c75c34f-8fe4-5267-91a4-357d9962ec6c&#x3D;Lock Door Unit, Access Point   MIPAction:47c713ce-920e-5b05-ae25-b7cbc2f66235&#x3D;Unlock Door Unit, Access Point   StartPluginOnDevices&#x3D;Start plug-in on &lt;devices&gt;   StopPluginOnDevices&#x3D;Stop plug-in on &lt;devices&gt;   TriggerEventOnRemoteSite&#x3D;On &lt;site&gt; trigger &lt;user-defined event&gt;    | [optional] 
**relations** | [**RulesRelations**](RulesRelations.md) |  | [optional] 

<a name="StartRuleTypeEnum"></a>
## Enum: StartRuleTypeEnum

* `timeInterval` (value: `"TimeInterval"`)
* `event` (value: `"Event"`)
* `recurringTime` (value: `"RecurringTime"`)


<a name="StopRuleTypeEnum"></a>
## Enum: StopRuleTypeEnum

* `timeInterval` (value: `"TimeInterval"`)
* `event` (value: `"Event"`)
* `timer` (value: `"Timer"`)
* `none` (value: `"None"`)


<a name="StartActionsEnum"></a>
## Enum: StartActionsEnum

* `startRecording` (value: `"StartRecording"`)
* `ptzMoveToDefault` (value: `"PtzMoveToDefault"`)
* `ptzMoveToPreset` (value: `"PtzMoveToPreset"`)
* `setDeviceOutputState` (value: `"SetDeviceOutputState"`)
* `startSetFramerate` (value: `"StartSetFramerate"`)
* `startSetRecordingFramerate` (value: `"StartSetRecordingFramerate"`)
* `startFeed` (value: `"StartFeed"`)
* `retrieveEdgeStorage` (value: `"RetrieveEdgeStorage"`)
* `retrieveEdgeStorageTimeOrMetadata` (value: `"RetrieveEdgeStorageTimeOrMetadata"`)
* `startRecordAllFrames` (value: `"StartRecordAllFrames"`)
* `setBookmark` (value: `"SetBookmark"`)
* `createLogEntry` (value: `"CreateLogEntry"`)
* `videoWallSetToCameras` (value: `"VideoWallSetToCameras"`)
* `videoWallSetToText` (value: `"VideoWallSetToText"`)
* `videoWallSetToPreset` (value: `"VideoWallSetToPreset"`)
* `activateArchiving` (value: `"ActivateArchiving"`)
* `videoWallRemoveCameras` (value: `"VideoWallRemoveCameras"`)
* `deviceChangeSettings` (value: `"DeviceChangeSettings"`)
* `startPatrolling` (value: `"StartPatrolling"`)
* `pausePatrolling` (value: `"PausePatrolling"`)
* `mIPAction9c75c34f8fe4526791a4357d9962ec6c` (value: `"MIPAction:9c75c34f-8fe4-5267-91a4-357d9962ec6c"`)
* `mIPAction47c713ce920e5b05Ae25B7cbc2f66235` (value: `"MIPAction:47c713ce-920e-5b05-ae25-b7cbc2f66235"`)
* `startPluginOnDevices` (value: `"StartPluginOnDevices"`)
* `stopPluginOnDevices` (value: `"StopPluginOnDevices"`)
* `triggerEventOnRemoteSite` (value: `"TriggerEventOnRemoteSite"`)


<a name="StopActionsEnum"></a>
## Enum: StopActionsEnum

* `stopRecording` (value: `"StopRecording"`)
* `ptzMoveToDefault` (value: `"PtzMoveToDefault"`)
* `ptzMoveToPreset` (value: `"PtzMoveToPreset"`)
* `setDeviceOutputState` (value: `"SetDeviceOutputState"`)
* `stopSetFramerate` (value: `"StopSetFramerate"`)
* `stopSetRecordingFramerate` (value: `"StopSetRecordingFramerate"`)
* `stopFeed` (value: `"StopFeed"`)
* `stopRecordAllFrames` (value: `"StopRecordAllFrames"`)
* `videoWallSetToCameras` (value: `"VideoWallSetToCameras"`)
* `videoWallSetToText` (value: `"VideoWallSetToText"`)
* `videoWallSetToPreset` (value: `"VideoWallSetToPreset"`)
* `videoWallRemoveCameras` (value: `"VideoWallRemoveCameras"`)
* `deviceChangeSettings` (value: `"DeviceChangeSettings"`)
* `stopPatrolling` (value: `"StopPatrolling"`)
* `resumePatrolling` (value: `"ResumePatrolling"`)
* `mIPAction9c75c34f8fe4526791a4357d9962ec6c` (value: `"MIPAction:9c75c34f-8fe4-5267-91a4-357d9962ec6c"`)
* `mIPAction47c713ce920e5b05Ae25B7cbc2f66235` (value: `"MIPAction:47c713ce-920e-5b05-ae25-b7cbc2f66235"`)
* `startPluginOnDevices` (value: `"StartPluginOnDevices"`)
* `stopPluginOnDevices` (value: `"StopPluginOnDevices"`)
* `triggerEventOnRemoteSite` (value: `"TriggerEventOnRemoteSite"`)

