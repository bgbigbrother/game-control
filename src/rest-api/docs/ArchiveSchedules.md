# MilestoneIntegrationPlatformVmsResTfulApi.ArchiveSchedules

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**displayName** | **String** |  | [optional] 
**frequencyType** | **String** | Recurrence pattern. Sets the recurrence pattern to daily, weekly or monthly. Value map to display names:  Unknown&#x3D;Unknown   Daily&#x3D;Daily   Weekly&#x3D;Weekly   Monthly&#x3D;Monthly   MonthlyRelative&#x3D;MonthlyRelative    | [optional] 
**frequencyRecurrenceFactor** | **Number** | Recurrence pattern on weeks/months. Sets the recurrence pattern to daily, weekly or monthly. | [optional] 
**frequencyInterval** | **Number** | Recurrence pattern on days. Defines the ‘Recurrence pattern on days’, which determines how often the archiving is scheduled to run. This property is always interpreted relative to the value of the ‘Recurrence pattern’ property. | [optional] 
**frequencyRelativeInterval** | **String** | Recurrence pattern on relative weekday. Defines the ordinal value of a day relative to the first day of the month, such as first, second or last. Value map to display names:  First&#x3D;First   Second&#x3D;Second   Third&#x3D;Third   Fourth&#x3D;Fourth   Last&#x3D;Last    | [optional] 
**frequencySubDayType** | **String** | Daily recurrence range type. Defines how often the archiving reoccurs on the same day. Value map to display names:  Unknown&#x3D;Unknown   Once&#x3D;Once   Hour&#x3D;Hour    | [optional] 
**frequencySubDayInterval** | **Number** | Hourly recurrence range type. Defines the interval between scheduled archiving that run during the day. | [optional] 
**activeStartTimeOfDay** | **Number** | Recurrence range start time. Defines the time when the archiving schedule starts for the day in seconds. The value have to be between 0 and 86399. | [optional] 
**activeEndTimeOfDay** | **Number** | Recurrence range end time. Defines the time when the archiving schedule ends for the day in seconds. The value have to be between 0 and 86399. | [optional] 

<a name="FrequencyTypeEnum"></a>
## Enum: FrequencyTypeEnum

* `unknown` (value: `"Unknown"`)
* `daily` (value: `"Daily"`)
* `weekly` (value: `"Weekly"`)
* `monthly` (value: `"Monthly"`)
* `monthlyRelative` (value: `"MonthlyRelative"`)


<a name="FrequencyRelativeIntervalEnum"></a>
## Enum: FrequencyRelativeIntervalEnum

* `first` (value: `"First"`)
* `second` (value: `"Second"`)
* `third` (value: `"Third"`)
* `fourth` (value: `"Fourth"`)
* `last` (value: `"Last"`)


<a name="FrequencySubDayTypeEnum"></a>
## Enum: FrequencySubDayTypeEnum

* `unknown` (value: `"Unknown"`)
* `once` (value: `"Once"`)
* `hour` (value: `"Hour"`)

