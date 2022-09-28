# MilestoneIntegrationPlatformVmsResTfulApi.RecordingServers

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **Boolean** |  | [optional] 
**displayName** | **String** |  | [optional] 
**id** | **String** | ID | [optional] 
**name** | **String** | Name | [optional] 
**description** | **String** | Description | [optional] 
**lastModified** | **String** | Last modified | [optional] 
**synchronizationTime** | **Number** | Synchronization time. Defines when the configuration is synchronized with the hardware. Define when to start the synchronization by entering a number of minutes after midnight (local time of recording server). The default value is -1, which means no synchronization. | [optional] 
**timeZoneName** | **String** | Time zone | [optional] 
**hostName** | **String** | Host name. Host name  of the recording server (deprecated, use *Web Server Uri*) | [optional] 
**portNumber** | **Number** | Port number. Port number of the recording server (deprecated, use *Web Server Uri*) | [optional] 
**webServerUri** | **String** | Web Server Uri. Web Server Uri of the recording server | [optional] 
**activeWebServerUri** | **String** | Active Public Web server URI . Currently active public web server address  | [optional] 
**publicAccessEnabled** | **Boolean** | Public address enabled. Enable or disable the public address | [optional] 
**publicWebserverHostName** | **String** | Public recording server address. Public recording server address | [optional] 
**publicWebserverPort** | **Number** | Public recording server port. Public recording server port | [optional] 
**multicastServerAddress** | **String** | Multicast server address. Multicast server address | [optional] 
**shutdownOnStorageFailure** | **Boolean** | Shutdown on storage failure. Shutdown on storage failure | [optional] 
**relations** | [**RecordingServersRelations**](RecordingServersRelations.md) |  | [optional] 
