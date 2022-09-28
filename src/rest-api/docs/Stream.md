# MilestoneIntegrationPlatformVmsResTfulApi.Stream

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**displayName** | **String** |  | [optional] 
**name** | **String** | Name | [optional] 
**streamReferenceId** | **String** | Stream reference ID. Value map to display names:  28DC44C3-079E-4C94-8EC9-60363451EB40&#x3D;Video stream 1   28DC44C3-079E-4C94-8EC9-60363451EB41&#x3D;Video stream 2   28DC44C3-079E-4C94-8EC9-60363451EB42&#x3D;Video stream 3    | [optional] 
**liveDefault** | **Boolean** | Default live stream | [optional] 
**liveMode** | **String** | Mode for live stream. Value map to display names:  Always&#x3D;Always   Never&#x3D;Never   WhenNeeded&#x3D;WhenNeeded    | [optional] 
**record** | **Boolean** | Default recording stream | [optional] 

<a name="StreamReferenceIdEnum"></a>
## Enum: StreamReferenceIdEnum

* `_60363451EB40` (value: `"28DC44C3-079E-4C94-8EC9-60363451EB40"`)
* `_60363451EB41` (value: `"28DC44C3-079E-4C94-8EC9-60363451EB41"`)
* `_60363451EB42` (value: `"28DC44C3-079E-4C94-8EC9-60363451EB42"`)


<a name="LiveModeEnum"></a>
## Enum: LiveModeEnum

* `always` (value: `"Always"`)
* `never` (value: `"Never"`)
* `whenNeeded` (value: `"WhenNeeded"`)

