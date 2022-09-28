# MilestoneIntegrationPlatformVmsResTfulApi.Views

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**displayName** | **String** |  | [optional] 
**id** | **String** | ID | [optional] 
**name** | **String** | Name | [optional] 
**lastModified** | **String** | Last modified | [optional] 
**shortcut** | **String** | View shortcut | [optional] 
**viewLayoutType** | **String** | View layout type. Must refer to a class in the Smart Client, like: *VideoOS.RemoteClient.Application.Data.ViewLayouts.ViewLayoutCustom, VideoOS.RemoteClient.Application*. Can be taken from the Layout xml definition: *viewLayoutType* node. | [optional] 
**layoutCustomId** | **String** | Custom ID. The specific instance ID of this view and layout | [optional] 
**layoutIcon** | **String** | Layout icon. Base 64 encoded image representing the layout format, size should be 16x16 pixels | [optional] 
**layoutViewItems** | **String** | Layout xml. The xml defining the layout, can be taken from the Layout xml definition, node *viewitems* | [optional] 
**viewItems** | [**ViewItems**](ViewItems.md) |  | [optional] 
**relations** | [**ViewsRelations**](ViewsRelations.md) |  | [optional] 
