# MilestoneIntegrationPlatformVmsResTfulApi.TimeProfileAppointmentRecur

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**displayName** | **String** |  | [optional] 
**appointmentRootId** | **String** | ID of the recurrence | [optional] 
**allDayEvent** | **Boolean** | All day event | [optional] 
**startDateTime** | **String** | Start time | [optional] 
**endDateTime** | **String** | End time | [optional] 
**subject** | **String** | Subject | [optional] 
**recurrenceDescription** | **String** | Description | [optional] 
**recurrenceOccurrenceStartTime** | **String** | Start time. The start time of each appointment, formatted as HH:mm:ss (seconds are ignored) | [optional] 
**recurrenceOccurrenceDuration** | **String** | Duration | [optional] 
**recurrencePatternType** | **String** | Define occurrences. Setting Define occurrences to Explicit will use the specific relevant values, for example Date in the month repeated each month - while setting Define occurrences to Calculated will calculate what the date should be, based on Days of the week as bitmask and Week number within the month, for example second Tuesday in each month. Value map to display names:  Explicit&#x3D;Explicit   Calculated&#x3D;Calculated    | [optional] 
**recurrencePatternFrequency** | **String** | Frequency. Value map to display names:  Daily&#x3D;Daily   Weekly&#x3D;Weekly   Monthly&#x3D;Monthly   Yearly&#x3D;Yearly    | [optional] 
**recurrencePatternInterval** | **Number** | Interval | [optional] 
**recurrencePatternDaysOfWeek** | **Number** | Days of the week as bitmask. Bitmask for what days to include. Bit 0 is Sunday, 1 is Monday etc. Value of 127 (hexadecimal 7f) indicates all days of the week. | [optional] 
**recurrencePatternDayOfMonth** | **Number** | Date in the month. Used when frequency is Monthly or Yearly | [optional] 
**recurrencePatternMonthOfYear** | **Number** | Month. Used when Frequency is Yearly | [optional] 
**recurrencePatternOccurrenceOfDayInMonth** | **String** | Week number within the month. Defines the day of the week within the month for which the occurrence takes place. For example if bitmask defines 4 &#x3D; Tuesdays, and this field is Second then the result is the second time it is a Tuesday in each month. Used when Frequency is Monthly or Yearly, and Define occurrences is Calculated.   Possible values: None First Second Third Fourth Last. Value map to display names:  None&#x3D;None   First&#x3D;First   Second&#x3D;Second   Third&#x3D;Third   Fourth&#x3D;Fourth   Last&#x3D;Last    | [optional] 
**recurrenceRangeStartDate** | **String** | Start of occurrences | [optional] 
**recurrenceRangeEndDate** | **String** | End of occurrences | [optional] 
**recurrenceRangeLimit** | **String** | End of occurrences is defined by:. Value map to display names:  NoLimit&#x3D;NoLimit   LimitByNumberOfOccurrences&#x3D;LimitByNumberOfOccurrences   LimitByDate&#x3D;LimitByDate    | [optional] 
**recurrenceRangeMaxOccurrences** | **Number** | End of occurrences by count | [optional] 

<a name="RecurrencePatternTypeEnum"></a>
## Enum: RecurrencePatternTypeEnum

* `explicit` (value: `"Explicit"`)
* `calculated` (value: `"Calculated"`)


<a name="RecurrencePatternFrequencyEnum"></a>
## Enum: RecurrencePatternFrequencyEnum

* `daily` (value: `"Daily"`)
* `weekly` (value: `"Weekly"`)
* `monthly` (value: `"Monthly"`)
* `yearly` (value: `"Yearly"`)


<a name="RecurrencePatternOccurrenceOfDayInMonthEnum"></a>
## Enum: RecurrencePatternOccurrenceOfDayInMonthEnum

* `none` (value: `"None"`)
* `first` (value: `"First"`)
* `second` (value: `"Second"`)
* `third` (value: `"Third"`)
* `fourth` (value: `"Fourth"`)
* `last` (value: `"Last"`)


<a name="RecurrenceRangeLimitEnum"></a>
## Enum: RecurrenceRangeLimitEnum

* `noLimit` (value: `"NoLimit"`)
* `limitByNumberOfOccurrences` (value: `"LimitByNumberOfOccurrences"`)
* `limitByDate` (value: `"LimitByDate"`)

