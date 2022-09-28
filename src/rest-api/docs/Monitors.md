# MilestoneIntegrationPlatformVmsResTfulApi.Monitors

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**displayName** | **String** |  | [optional] 
**id** | **String** | ID | [optional] 
**name** | **String** | Name | [optional] 
**description** | **String** | Description | [optional] 
**lastModified** | **String** | Last modified | [optional] 
**createdDate** | **String** | Created date | [optional] 
**aspectRatio** | **String** | Aspect ratio. Value map to display names:  Aspect16x9&#x3D;Aspect16x9   Aspect4x3&#x3D;Aspect4x3    | [optional] 
**emptyViewItems** | **String** | Empty preset item. What to show in an empty preset layout item. Value map to display names:  Preserve&#x3D;Preserve   Clear&#x3D;Clear    | [optional] 
**insertionMethod** | **String** | Element insertion. Value map to display names:  Linked&#x3D;Linked   Independent&#x3D;Independent    | [optional] 
**locationX** | **Number** | Location X coordinate. X coordinate of monitor upper left corner | [optional] 
**locationY** | **Number** | Location Y coordinate. Y coordinate of monitor upper left corner | [optional] 
**monitorSize** | **Number** | Size. Size of monitor in inches | [optional] 
**noLayout** | **String** | Empty preset. What to show in an empty preset layout. Value map to display names:  Preserve&#x3D;Preserve   Clear&#x3D;Clear    | [optional] 
**monitorState** | **String** | Monitor state. Current monitor state | [optional] 
**relations** | [**MonitorsRelations**](MonitorsRelations.md) |  | [optional] 

<a name="AspectRatioEnum"></a>
## Enum: AspectRatioEnum

* `aspect16x9` (value: `"Aspect16x9"`)
* `aspect4x3` (value: `"Aspect4x3"`)


<a name="EmptyViewItemsEnum"></a>
## Enum: EmptyViewItemsEnum

* `preserve` (value: `"Preserve"`)
* `clear` (value: `"Clear"`)


<a name="InsertionMethodEnum"></a>
## Enum: InsertionMethodEnum

* `linked` (value: `"Linked"`)
* `independent` (value: `"Independent"`)


<a name="NoLayoutEnum"></a>
## Enum: NoLayoutEnum

* `preserve` (value: `"Preserve"`)
* `clear` (value: `"Clear"`)

