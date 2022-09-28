# MilestoneIntegrationPlatformVmsResTfulApi.Storages

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**displayName** | **String** |  | [optional] 
**id** | **String** | ID | [optional] 
**name** | **String** | Name | [optional] 
**description** | **String** | Description | [optional] 
**diskPath** | **String** | Path. Contains the path to the storage disk | [optional] 
**createdDate** | **String** | Created date | [optional] 
**lastModified** | **String** | Last modified | [optional] 
**retainMinutes** | **Number** | Retention time. The number of minutes that must elapse before data are deleted or archived. The value that specifies the retention period in minutes. The value have to be between 1 and  525600000 (365000 days). By default, the value is 1440, which is 1 day. | [optional] 
**maxSize** | **Number** | Max size (in MB). The maximum size of the recording storage in MB.  The value have to be between 1 and 1099511627776 (1 exabyte). By default, the value is set to 1024, which is 1 GB. | [optional] 
**isDefault** | **Boolean** | Default storage. Is default | [optional] 
**signing** | **Boolean** | Signing. Specifies if database should be signed | [optional] 
**encryptionMethod** | **String** | Encryption. Specifies the strength of the encryption. Value map to display names:  None&#x3D;None   Light&#x3D;Light   Strong&#x3D;Strong    | [optional] 
**relations** | [**StoragesRelations**](StoragesRelations.md) |  | [optional] 

<a name="EncryptionMethodEnum"></a>
## Enum: EncryptionMethodEnum

* `none` (value: `"None"`)
* `light` (value: `"Light"`)
* `strong` (value: `"Strong"`)

