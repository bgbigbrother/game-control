# MilestoneIntegrationPlatformVmsResTfulApi.GenericEventDataSources

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **Boolean** |  | [optional] 
**displayName** | **String** |  | [optional] 
**id** | **String** | ID | [optional] 
**name** | **String** | Name | [optional] 
**dataSourcePort** | **Number** | Port | [optional] 
**dataSourceSeparator** | **String** | Separator bytes | [optional] 
**dataSourceEncoding** | **Number** | Encoding (code page) | [optional] 
**dataSourceLog** | **Boolean** | Write to log | [optional] 
**dataSourceEcho** | **String** | Echo type selector. Value map to display names:  Full&#x3D;Echo all bytes   Statistics&#x3D;Echo statistics   None&#x3D;No echo    | [optional] 
**dataSourceAllowed** | **String** | Allowed external IPv4 addresses | [optional] 
**dataSourceAllowed6** | **String** | Allowed external IPv6 addresses | [optional] 
**dataSourceProtocol** | **String** | Protocol type(s). Value map to display names:  Tcp&#x3D;TCP   Udp&#x3D;UDP   Both&#x3D;TCP and UDP    | [optional] 
**dataSourceAddressFamily** | **String** | IP address family. Value map to display names:  InterNetwork&#x3D;IPv4   InterNetworkV6&#x3D;IPv6   Both&#x3D;IPv4 and IPv6    | [optional] 
**relations** | [**GenericEventDataSourcesRelations**](GenericEventDataSourcesRelations.md) |  | [optional] 

<a name="DataSourceEchoEnum"></a>
## Enum: DataSourceEchoEnum

* `full` (value: `"Full"`)
* `statistics` (value: `"Statistics"`)
* `none` (value: `"None"`)


<a name="DataSourceProtocolEnum"></a>
## Enum: DataSourceProtocolEnum

* `tcp` (value: `"Tcp"`)
* `udp` (value: `"Udp"`)
* `both` (value: `"Both"`)


<a name="DataSourceAddressFamilyEnum"></a>
## Enum: DataSourceAddressFamilyEnum

* `interNetwork` (value: `"InterNetwork"`)
* `interNetworkV6` (value: `"InterNetworkV6"`)
* `both` (value: `"Both"`)

