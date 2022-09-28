# MilestoneIntegrationPlatformVmsResTfulApi.EventTypes

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**displayName** | **String** |  | [optional] 
**id** | **String** | ID | [optional] 
**name** | **String** | Name | [optional] 
**lastModified** | **String** | Last modified | [optional] 
**description** | **String** | Description | [optional] 
**generatorType** | **String** | Originator type | [optional] 
**generatorSubtype** | **String** | Originator sub type | [optional] 
**generatorName** | **String** | Originator name | [optional] 
**generatorID** | **String** | Originator ID | [optional] 
**generatorGroupName** | **String** | Originator group name | [optional] 
**generatorGroupId** | **String** | Originator group ID | [optional] 
**occursGlobally** | **Boolean** | Occurs globally | [optional] 
**builtIn** | **Boolean** | Built in | [optional] 
**counterEventID** | **String** | Counter event ID | [optional] 
**sourceArray** | **[String]** | Source itemtypes. Contains an array of possible sources of the event.  Can contain *Camera*, *Hardware* and other itemtype values. For MIP plugin events the source itemtype is *MIPItem* and the filter contains the MIP Kind of source.  The actual source is selected in the rule and alarm definition configuration. | [optional] 
**sourceFilterArray** | **[String]** | Source filters. Contains an array where the index is matching the sources. Content is formatted as {value} or {type},{value}.  If source is \&quot;MIPItem\&quot; this value is the kind as defined in MIPKind - Like \&quot;3b559f2e-3693-5463-a6fb-005c1f0259dc\&quot;.  | [optional] 
**relations** | [**EventTypesRelations**](EventTypesRelations.md) |  | [optional] 
