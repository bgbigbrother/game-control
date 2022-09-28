# MilestoneIntegrationPlatformVmsResTfulApi.AlarmDefinitions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **Boolean** |  | [optional] 
**displayName** | **String** |  | [optional] 
**id** | **String** | ID | [optional] 
**name** | **String** | Name | [optional] 
**description** | **String** | Description | [optional] 
**eventTypeGroup** | **String** | Triggering event group. Defines a group of events in the same area. Value map to display names:  1eacbcad-d566-4375-834b-cfbe3d937caa&#x3D;Device Events   6b90aee7-e6a5-4b5c-82aa-1686c19afe19&#x3D;Hardware Events   b1ca6710-f244-4ce2-8daf-662e342c405a&#x3D;System Events   64d2c24b-a92f-48a0-b9ca-707af7828d67&#x3D;Recording Server Events   5946b6fa-44d9-4f4c-82bb-46a17b924265&#x3D;External Events   2fb8e979-188e-44cc-b1b7-a7ed9c91e5c0&#x3D;System Monitor Events   00000000-0000-0000-0000-000000000000&#x3D;Undefined   1d3e945c-ecf3-49eb-85b2-3f79b8a14927&#x3D;Match lists   a96692c8-51b1-4f87-b12c-0d3d9cbfc5a4&#x3D;Analytics Events    | [optional] 
**eventType** | **String** | Triggering event type. Defines the type of event that should trigger an alarm, when received from the source defined. Value map to display names:  0fcb1955-0e80-4fd4-a78a-db47ee89700c&#x3D;External Event    | [optional] 
**sourceList** | [**[PathUserDefinedEvents]**](PathUserDefinedEvents.md) |  | [optional] 
**enableRule** | **String** | Enable rule. Defines when the alarm can be triggered. Options are: Always, by TimeProfile or by events.  When TimeProfile is defined the TimeProfile property must contain a valid TimeProfile path, when enabled by events then both EnablingEvents and DisablingEvents must be defined. Value map to display names:  0&#x3D;Always   1&#x3D;TimeProfile   2&#x3D;EventTriggered    | [optional] 
**timeProfile** | [**PathTimeProfiles**](PathTimeProfiles.md) |  | [optional] 
**enableEventList** | [**[PathUserDefinedEvents]**](PathUserDefinedEvents.md) |  | [optional] 
**disableEventList** | [**[PathUserDefinedEvents]**](PathUserDefinedEvents.md) |  | [optional] 
**managementTimeoutTime** | **String** | Operator action time limit. If operator action is required within a specific time, the time is defined here.  Format is like: HH:mm.ss. Valid values are the same as defined in the Management Client, e.g. 1 minute, 5 minutes etc.  Default is 1 minute. | [optional] 
**managementTimeoutEventList** | [**[PathUserDefinedEvents]**](PathUserDefinedEvents.md) |  | [optional] 
**relatedCameraList** | [**[PathCameras]**](PathCameras.md) |  | [optional] 
**mapType** | **String** | Alarm manager view. Value map to display names:  0&#x3D;None   1&#x3D;Map   2&#x3D;Smart Map    | [optional] 
**relatedMap** | **String** | Related map. Defines what map to show in the alarm manager, when alarm is selected. Value map to display names:  00000000-0000-0000-0000-000000000000&#x3D;    | [optional] 
**owner** | **String** | Owner. Defines the initial owner. Should be formatted as Identity.ToString() does, like *John Doe (Acme/JD)* | [optional] 
**priority** | **String** | Priority. Sets the priority. Can be High, Medium, Low. Value map to display names:  8188ff24-b5da-4c19-9ebf-c1d8fc2caa75&#x3D;High   9ad9338b-22ba-4f2e-bf62-e6948ae99bbf&#x3D;Medium   34f1f987-6854-44fb-88a5-daa0add1e38a&#x3D;Low   583eabf3-b1c2-46a4-a26c-4f0ba9a8287d&#x3D;Custom    | [optional] 
**category** | **String** | Alarm category. Sets the category of the alarm. Valid options are defined in the Management Client. Value map to display names:  00000000-0000-0000-0000-000000000000&#x3D;   7558fed5-d92a-4b39-a98d-cec5158ae205&#x3D;Test category    | [optional] 
**triggerEventlist** | [**[PathUserDefinedEvents]**](PathUserDefinedEvents.md) |  | [optional] 
**autoClose** | **Boolean** | Auto-close alarm: . Defines if an alarm should be closed automatically upon reception of a specific message from save source. | [optional] 
**relations** | [**AlarmDefinitionsRelations**](AlarmDefinitionsRelations.md) |  | [optional] 

<a name="EventTypeGroupEnum"></a>
## Enum: EventTypeGroupEnum

* `_1eacbcadD5664375834bCfbe3d937caa` (value: `"1eacbcad-d566-4375-834b-cfbe3d937caa"`)
* `_6b90aee7E6a54b5c82aa1686c19afe19` (value: `"6b90aee7-e6a5-4b5c-82aa-1686c19afe19"`)
* `b1ca6710F2444ce28daf662e342c405a` (value: `"b1ca6710-f244-4ce2-8daf-662e342c405a"`)
* `_64d2c24bA92f48a0B9ca707af7828d67` (value: `"64d2c24b-a92f-48a0-b9ca-707af7828d67"`)
* `_5946b6fa44d94f4c82bb46a17b924265` (value: `"5946b6fa-44d9-4f4c-82bb-46a17b924265"`)
* `_2fb8e979188e44ccB1b7A7ed9c91e5c0` (value: `"2fb8e979-188e-44cc-b1b7-a7ed9c91e5c0"`)
* `_00000000000000000000000000000000` (value: `"00000000-0000-0000-0000-000000000000"`)
* `_1d3e945cEcf349eb85b23f79b8a14927` (value: `"1d3e945c-ecf3-49eb-85b2-3f79b8a14927"`)
* `a96692c851b14f87B12c0d3d9cbfc5a4` (value: `"a96692c8-51b1-4f87-b12c-0d3d9cbfc5a4"`)


<a name="EventTypeEnum"></a>
## Enum: EventTypeEnum

* `_0fcb19550e804fd4A78aDb47ee89700c` (value: `"0fcb1955-0e80-4fd4-a78a-db47ee89700c"`)


<a name="EnableRuleEnum"></a>
## Enum: EnableRuleEnum

* `_0` (value: `"0"`)
* `_1` (value: `"1"`)
* `_2` (value: `"2"`)


<a name="MapTypeEnum"></a>
## Enum: MapTypeEnum

* `_0` (value: `"0"`)
* `_1` (value: `"1"`)
* `_2` (value: `"2"`)


<a name="RelatedMapEnum"></a>
## Enum: RelatedMapEnum

* `_00000000000000000000000000000000` (value: `"00000000-0000-0000-0000-000000000000"`)


<a name="PriorityEnum"></a>
## Enum: PriorityEnum

* `_8188ff24B5da4c199ebfC1d8fc2caa75` (value: `"8188ff24-b5da-4c19-9ebf-c1d8fc2caa75"`)
* `_9ad9338b22ba4f2eBf62E6948ae99bbf` (value: `"9ad9338b-22ba-4f2e-bf62-e6948ae99bbf"`)
* `_34f1f987685444fb88a5Daa0add1e38a` (value: `"34f1f987-6854-44fb-88a5-daa0add1e38a"`)
* `_583eabf3B1c246a4A26c4f0ba9a8287d` (value: `"583eabf3-b1c2-46a4-a26c-4f0ba9a8287d"`)


<a name="CategoryEnum"></a>
## Enum: CategoryEnum

* `_00000000000000000000000000000000` (value: `"00000000-0000-0000-0000-000000000000"`)
* `_7558fed5D92a4b39A98dCec5158ae205` (value: `"7558fed5-d92a-4b39-a98d-cec5158ae205"`)

