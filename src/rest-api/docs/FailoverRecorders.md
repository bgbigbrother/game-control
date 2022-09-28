# MilestoneIntegrationPlatformVmsResTfulApi.FailoverRecorders

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **Boolean** |  | [optional] 
**displayName** | **String** |  | [optional] 
**id** | **String** | ID | [optional] 
**name** | **String** | Name | [optional] 
**description** | **String** | Description | [optional] 
**hostName** | **String** | Host name. Host name  of the recording server (deprecated, use *Web Server Uri*) | [optional] 
**portNumber** | **Number** | Port number. Port number of the recording server (deprecated, use *Web Server Uri*) | [optional] 
**webServerUri** | **String** | Web Server Uri. Web Server Uri of the recording server | [optional] 
**activeWebServerUri** | **String** | Active Public Web server URI . Currently active public web server address  | [optional] 
**publicAccessEnabled** | **Boolean** | Public address enabled. Enable or disable the public address | [optional] 
**publicWebserverHostName** | **String** | Public recording server address. Public recording server address | [optional] 
**publicWebserverPort** | **Number** | Public recording server port. Public recording server port | [optional] 
**multicastServerAddress** | **String** | Multicast server address. Multicast server address | [optional] 
**udpPort** | **Number** | Udp port. The port number used for communication between failover recording servers. Default port is 8844 | [optional] 
**position** | **Number** | Group position. Defines the order this failover server has in the group | [optional] 
**databasePath** | **String** | Database location. Specify the path to the database used by the failover recording server for storing recordings. You cannot change the database path while the failover recording server is taking over from a recording server. The system applies the changes when the failover recording server is no longer taking over from a recording server.  | [optional] 
**createdDate** | **String** | Created date | [optional] 
**lastModified** | **String** | Last modified | [optional] 
**relations** | [**FailoverRecordersRelations**](FailoverRecordersRelations.md) |  | [optional] 
