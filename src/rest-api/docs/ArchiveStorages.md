# MilestoneIntegrationPlatformVmsResTfulApi.ArchiveStorages

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**displayName** | **String** |  | [optional] 
**id** | **String** | ID | [optional] 
**name** | **String** | Name | [optional] 
**description** | **String** | Description | [optional] 
**createdDate** | **String** | Created date | [optional] 
**lastModified** | **String** | Last modified | [optional] 
**diskPath** | **String** | Path. The path to the archive | [optional] 
**retainMinutes** | **Number** | Retention time. The number of minutes that must elapse before data are deleted or archived. The default value is 1 day | [optional] 
**maxSize** | **Number** | Maximum size. The maximum size of the archive storage in MB. The default value is 1 GB | [optional] 
**framerateReductionEnabled** | **Boolean** | Frame reduction enabled. Specifies if frame rate reduction is enabled or not on the archive | [optional] 
**targetFramerate** | **Number** | Frame rate. The frame rate reduction of media data in frames per second | [optional] 
**archiveSchedules** | [**ArchiveSchedules**](ArchiveSchedules.md) |  | [optional] 
**relations** | [**ArchiveStoragesRelations**](ArchiveStoragesRelations.md) |  | [optional] 
