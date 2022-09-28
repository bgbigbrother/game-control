# MilestoneIntegrationPlatformVmsResTfulApi.ClientProfileExports

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**displayName** | **String** |  | [optional] 
**panesPlaybackExport** | **String** | Export function. Value map to display names:  Available&#x3D;Available   Unavailable&#x3D;Unavailable    | [optional] 
**exportDestinationType** | **String** | Export to. Value map to display names:  ToDisk&#x3D;To disk   ToMediaBurner&#x3D;To media burner   Both&#x3D;To disk and media burner    | [optional] 
**exportDestinationTypeLocked** | **Boolean** | Export to (Locked) | [optional] 
**functionsPlaybackExportPath** | **String** | Export path. Value map to display names:  Default&#x3D;Default   Custom&#x3D;Custom    | [optional] 
**functionsPlaybackExportPathCustom** | **String** | Export path - Custom | [optional] 
**functionsPlaybackExportPathCustomLocked** | **Boolean** | Export path - Custom (Locked) | [optional] 
**exportPrivacyMask** | **String** | Privacy mask. Value map to display names:  Available&#x3D;Available   Unavailable&#x3D;Unavailable    | [optional] 
**exportPrivacyMaskLocked** | **Boolean** | Privacy mask (Locked) | [optional] 
**exportVideoClipFormat** | **String** | Availability. Value map to display names:  Available&#x3D;Available   Unavailable&#x3D;Unavailable    | [optional] 
**exportVideoClipFormatLocked** | **Boolean** | Availability (Locked) | [optional] 
**exportVideoClipType** | **String** | Select content. Value map to display names:  Audio&#x3D;Audio only   Video&#x3D;Video only   Both&#x3D;Audio and video    | [optional] 
**exportVideoClipTypeLocked** | **Boolean** | Select content (Locked) | [optional] 
**exportVideoClipOutputType** | **String** | Select format. Value map to display names:  AVI&#x3D;AVI   MKV&#x3D;MKV    | [optional] 
**exportVideoClipOutputTypeLocked** | **Boolean** | Select format (Locked) | [optional] 
**exportVideoClipTimestamp** | **String** | Include timestamps. Value map to display names:  Yes&#x3D;Yes   No&#x3D;No    | [optional] 
**exportVideoClipTimestampLocked** | **Boolean** | Include timestamps (Locked) | [optional] 
**exportVideoClipFrameRate** | **String** | Reduce frame rate. Value map to display names:  Yes&#x3D;Yes   No&#x3D;No    | [optional] 
**exportVideoClipFrameRateLocked** | **Boolean** | Reduce frame rate (Locked) | [optional] 
**exportVideoClipTextsMode** | **String** | Manage video texts. Value map to display names:  Required&#x3D;Required   Optional&#x3D;Optional   Unavailable&#x3D;Unavailable    | [optional] 
**exportVideoClipTextsContent** | **String** | Video texts | [optional] 
**exportVideoClipTextsContentLocked** | **Boolean** | Video texts (Locked) | [optional] 
**exportVideoClipCodecProperties** | **String** | Video codec properties. Value map to display names:  Available&#x3D;Available   Unavailable&#x3D;Unavailable    | [optional] 
**exportVideoClipCodecPropertiesLocked** | **Boolean** | Video codec properties (Locked) | [optional] 
**exportSmartClientPlayerFormat** | **String** | Availability. Value map to display names:  Available&#x3D;Available   Unavailable&#x3D;Unavailable    | [optional] 
**exportSmartClientPlayerFormatLocked** | **Boolean** | Availability (Locked) | [optional] 
**exportSmartClientPlayerIncludePlayer** | **String** | Include XProtect Smart Client – Player. Value map to display names:  Yes&#x3D;Yes   No&#x3D;No    | [optional] 
**exportSmartClientPlayerIncludePlayerLocked** | **Boolean** | Include XProtect Smart Client – Player (Locked) | [optional] 
**exportSmartClientPlayerLockForReExport** | **String** | Prevent re-export. Value map to display names:  Yes&#x3D;Yes   No&#x3D;No    | [optional] 
**exportSmartClientPlayerLockForReExportLocked** | **Boolean** | Prevent re-export (Locked) | [optional] 
**exportSmartClientPlayerEncryptDatabases** | **String** | Password protect data. Value map to display names:  Yes&#x3D;Yes   No&#x3D;No    | [optional] 
**exportSmartClientPlayerEncryptDatabasesLocked** | **Boolean** | Password protect data (Locked) | [optional] 
**exportSmartClientPlayerEncryptPassword** | **String** | Password | [optional] 
**exportSmartClientPlayerEncryptPasswordLocked** | **Boolean** | Password (Locked) | [optional] 
**exportSmartClientPlayerEncryptionStrength** | **String** | Encryption strength. Value map to display names:  DES56&#x3D;56-bit DES   AES128&#x3D;128-bit AES   AES192&#x3D;192-bit AES   AES256&#x3D;256-bit AES    | [optional] 
**exportSmartClientPlayerEncryptionStrengthLocked** | **Boolean** | Encryption strength (Locked) | [optional] 
**exportSmartClientPlayerGlobalCommentsMode** | **String** | Manage project comment. Value map to display names:  Required&#x3D;Required   Optional&#x3D;Optional   Unavailable&#x3D;Unavailable    | [optional] 
**exportSmartClientPlayerGlobalCommentsModeLocked** | **Boolean** | Manage project comment (Locked) | [optional] 
**exportSmartClientPlayerGlobalCommentsContent** | **String** | Project comment | [optional] 
**exportSmartClientPlayerGlobalCommentsContentLocked** | **Boolean** | Project comment (Locked) | [optional] 
**exportSmartClientPlayerIndividualCommentsMode** | **String** | Manage individual camera comments. Value map to display names:  Required&#x3D;Required   Optional&#x3D;Optional   Unavailable&#x3D;Unavailable    | [optional] 
**exportSmartClientPlayerIndividualCommentsModeLocked** | **Boolean** | Manage individual camera comments (Locked) | [optional] 
**exportSmartClientPlayerSignData** | **String** | Include digital signature. Value map to display names:  Yes&#x3D;Yes   No&#x3D;No    | [optional] 
**exportSmartClientPlayerSignDataLocked** | **Boolean** | Include digital signature (Locked) | [optional] 
**exportStillImageFormat** | **String** | Availability. Value map to display names:  Available&#x3D;Available   Unavailable&#x3D;Unavailable    | [optional] 
**exportStillImageFormatLocked** | **Boolean** | Availability (Locked) | [optional] 
**exportStillImageTimestamp** | **String** | Include timestamps. Value map to display names:  Yes&#x3D;Yes   No&#x3D;No    | [optional] 
**exportStillImageTimestampLocked** | **Boolean** | Include timestamps (Locked) | [optional] 

<a name="PanesPlaybackExportEnum"></a>
## Enum: PanesPlaybackExportEnum

* `available` (value: `"Available"`)
* `unavailable` (value: `"Unavailable"`)


<a name="ExportDestinationTypeEnum"></a>
## Enum: ExportDestinationTypeEnum

* `toDisk` (value: `"ToDisk"`)
* `toMediaBurner` (value: `"ToMediaBurner"`)
* `both` (value: `"Both"`)


<a name="FunctionsPlaybackExportPathEnum"></a>
## Enum: FunctionsPlaybackExportPathEnum

* `_default` (value: `"Default"`)
* `custom` (value: `"Custom"`)


<a name="ExportPrivacyMaskEnum"></a>
## Enum: ExportPrivacyMaskEnum

* `available` (value: `"Available"`)
* `unavailable` (value: `"Unavailable"`)


<a name="ExportVideoClipFormatEnum"></a>
## Enum: ExportVideoClipFormatEnum

* `available` (value: `"Available"`)
* `unavailable` (value: `"Unavailable"`)


<a name="ExportVideoClipTypeEnum"></a>
## Enum: ExportVideoClipTypeEnum

* `audio` (value: `"Audio"`)
* `video` (value: `"Video"`)
* `both` (value: `"Both"`)


<a name="ExportVideoClipOutputTypeEnum"></a>
## Enum: ExportVideoClipOutputTypeEnum

* `AVI` (value: `"AVI"`)
* `MKV` (value: `"MKV"`)


<a name="ExportVideoClipTimestampEnum"></a>
## Enum: ExportVideoClipTimestampEnum

* `yes` (value: `"Yes"`)
* `no` (value: `"No"`)


<a name="ExportVideoClipFrameRateEnum"></a>
## Enum: ExportVideoClipFrameRateEnum

* `yes` (value: `"Yes"`)
* `no` (value: `"No"`)


<a name="ExportVideoClipTextsModeEnum"></a>
## Enum: ExportVideoClipTextsModeEnum

* `required` (value: `"Required"`)
* `optional` (value: `"Optional"`)
* `unavailable` (value: `"Unavailable"`)


<a name="ExportVideoClipCodecPropertiesEnum"></a>
## Enum: ExportVideoClipCodecPropertiesEnum

* `available` (value: `"Available"`)
* `unavailable` (value: `"Unavailable"`)


<a name="ExportSmartClientPlayerFormatEnum"></a>
## Enum: ExportSmartClientPlayerFormatEnum

* `available` (value: `"Available"`)
* `unavailable` (value: `"Unavailable"`)


<a name="ExportSmartClientPlayerIncludePlayerEnum"></a>
## Enum: ExportSmartClientPlayerIncludePlayerEnum

* `yes` (value: `"Yes"`)
* `no` (value: `"No"`)


<a name="ExportSmartClientPlayerLockForReExportEnum"></a>
## Enum: ExportSmartClientPlayerLockForReExportEnum

* `yes` (value: `"Yes"`)
* `no` (value: `"No"`)


<a name="ExportSmartClientPlayerEncryptDatabasesEnum"></a>
## Enum: ExportSmartClientPlayerEncryptDatabasesEnum

* `yes` (value: `"Yes"`)
* `no` (value: `"No"`)


<a name="ExportSmartClientPlayerEncryptionStrengthEnum"></a>
## Enum: ExportSmartClientPlayerEncryptionStrengthEnum

* `dES56` (value: `"DES56"`)
* `aES128` (value: `"AES128"`)
* `aES192` (value: `"AES192"`)
* `aES256` (value: `"AES256"`)


<a name="ExportSmartClientPlayerGlobalCommentsModeEnum"></a>
## Enum: ExportSmartClientPlayerGlobalCommentsModeEnum

* `required` (value: `"Required"`)
* `optional` (value: `"Optional"`)
* `unavailable` (value: `"Unavailable"`)


<a name="ExportSmartClientPlayerIndividualCommentsModeEnum"></a>
## Enum: ExportSmartClientPlayerIndividualCommentsModeEnum

* `required` (value: `"Required"`)
* `optional` (value: `"Optional"`)
* `unavailable` (value: `"Unavailable"`)


<a name="ExportSmartClientPlayerSignDataEnum"></a>
## Enum: ExportSmartClientPlayerSignDataEnum

* `yes` (value: `"Yes"`)
* `no` (value: `"No"`)


<a name="ExportStillImageFormatEnum"></a>
## Enum: ExportStillImageFormatEnum

* `available` (value: `"Available"`)
* `unavailable` (value: `"Unavailable"`)


<a name="ExportStillImageTimestampEnum"></a>
## Enum: ExportStillImageTimestampEnum

* `yes` (value: `"Yes"`)
* `no` (value: `"No"`)

