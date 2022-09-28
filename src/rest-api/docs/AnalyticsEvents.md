# MilestoneIntegrationPlatformVmsResTfulApi.AnalyticsEvents

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**displayName** | **String** |  | [optional] 
**id** | **String** | ID | [optional] 
**name** | **String** | Name | [optional] 
**lastModified** | **String** | Last modified | [optional] 
**description** | **String** | Description | [optional] 
**sourceArray** | **[String]** | Source itemtypes. Contains an array of possible sources of the event.  Can contain *Camera*, *Hardware* and other itemtype values. For MIP plugin events the source itemtype is *MIPItem* and the filter contains the MIP Kind of source.  The actual source is selected in the rule and alarm definition configuration. | [optional] 
**relations** | [**AnalyticsEventsRelations**](AnalyticsEventsRelations.md) |  | [optional] 
