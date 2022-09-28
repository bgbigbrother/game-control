# MilestoneIntegrationPlatformVmsResTfulApi.GenericEvents

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **Boolean** |  | [optional] 
**displayName** | **String** |  | [optional] 
**id** | **String** | ID | [optional] 
**name** | **String** | Name | [optional] 
**dataSource** | **String** | Data source. Value map to display names:  GenericEventDataSource[b867db0c-be9e-422b-b934-6fc7fa98c5d8]&#x3D;Compatible   GenericEventDataSource[8607bccc-2bb5-4b47-a7de-8225d14c4213]&#x3D;International   GenericEventDataSource[a553cf40-ff5f-4422-8b86-9637fbf3ce5d]&#x3D;MyGenericEventDataSource    | [optional] 
**expression** | **String** | Expression | [optional] 
**expressionType** | **String** | Expression type. Value map to display names:  0&#x3D;Search   1&#x3D;Match   2&#x3D;Regular expression    | [optional] 
**priority** | **Number** | Priority | [optional] 
**lastModified** | **String** | Last modified | [optional] 
**relations** | [**GenericEventsRelations**](GenericEventsRelations.md) |  | [optional] 

<a name="DataSourceEnum"></a>
## Enum: DataSourceEnum

* `b867db0cBe9e422bB9346fc7fa98c5d8` (value: `"GenericEventDataSource[b867db0c-be9e-422b-b934-6fc7fa98c5d8]"`)
* `_8607bccc2bb54b47A7de8225d14c4213` (value: `"GenericEventDataSource[8607bccc-2bb5-4b47-a7de-8225d14c4213]"`)
* `a553cf40Ff5f44228b869637fbf3ce5d` (value: `"GenericEventDataSource[a553cf40-ff5f-4422-8b86-9637fbf3ce5d]"`)


<a name="ExpressionTypeEnum"></a>
## Enum: ExpressionTypeEnum

* `_0` (value: `"0"`)
* `_1` (value: `"1"`)
* `_2` (value: `"2"`)

