# MilestoneIntegrationPlatformVmsResTfulApi.ClientProfileGisMaps

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**displayName** | **String** |  | [optional] 
**gisMapOpenStreetMapGeographicLayer** | **String** | Milestone Map Service. Value map to display names:  Available&#x3D;Available   Unavailable&#x3D;Unavailable    | [optional] 
**gisMapOpenStreetMapGeographicLayerLocked** | **Boolean** | Milestone Map Service (Locked) | [optional] 
**gisMapOpenStreetMapAlternativeServer** | **String** | OpenStreetMap server | [optional] 
**gisMapOpenStreetMapAlternativeServerLocked** | **Boolean** | OpenStreetMap server (Locked) | [optional] 
**gisMapCreateLayerLocation** | **String** | Create location when custom overlay is added. Value map to display names:  Yes&#x3D;Yes   No&#x3D;No    | [optional] 
**gisMapCreateLayerLocationLocked** | **Boolean** | Create location when custom overlay is added (Locked) | [optional] 
**gisMapCacheCleanUp** | **String** | Remove cached smart map files. Value map to display names:  Never&#x3D;Never   OnScClose&#x3D;On exit   OnScClose_IfFileNotUsed&#x3D;When not used for 30 days    | [optional] 
**gisMapCacheCleanUpLocked** | **Boolean** | Remove cached smart map files (Locked) | [optional] 
**gisMapBingMapKey** | **String** | Bing Maps key | [optional] 
**gisMapBingMapKeyLocked** | **Boolean** | Bing Maps key (Locked) | [optional] 
**gisMapGoogleMapClientId** | **String** | Client ID for Google Maps | [optional] 
**gisMapGoogleMapClientIdLocked** | **Boolean** | Client ID for Google Maps (Locked) | [optional] 
**gisMapGoogleMapPrivateKey** | **String** | Private key for Google Maps | [optional] 
**gisMapGoogleMapPrivateKeyLocked** | **Boolean** | Private key for Google Maps (Locked) | [optional] 
**gisMapGoogleMapSigningSecret** | **String** | URL signing secret for Google Maps | [optional] 
**gisMapGoogleMapSigningSecretLocked** | **Boolean** | URL signing secret for Google Maps (Locked) | [optional] 

<a name="GisMapOpenStreetMapGeographicLayerEnum"></a>
## Enum: GisMapOpenStreetMapGeographicLayerEnum

* `available` (value: `"Available"`)
* `unavailable` (value: `"Unavailable"`)


<a name="GisMapCreateLayerLocationEnum"></a>
## Enum: GisMapCreateLayerLocationEnum

* `yes` (value: `"Yes"`)
* `no` (value: `"No"`)


<a name="GisMapCacheCleanUpEnum"></a>
## Enum: GisMapCacheCleanUpEnum

* `never` (value: `"Never"`)
* `onScClose` (value: `"OnScClose"`)
* `onScCloseIfFileNotUsed` (value: `"OnScClose_IfFileNotUsed"`)

