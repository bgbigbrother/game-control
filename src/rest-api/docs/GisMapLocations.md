# MilestoneIntegrationPlatformVmsResTfulApi.GisMapLocations

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**displayName** | **String** |  | [optional] 
**id** | **String** | ID | [optional] 
**name** | **String** | Name | [optional] 
**scale** | **Number** | Scale. Defines how to scale map when going to this location. A value of 2 million will show approximately an area of 300x300 kilometers / 200x200 miles.  A value of 2000 will show approximately a city block. | [optional] 
**color** | **String** | Color. Define the color of the marker. Value is a string formatted with a leading hash sign. Default value is a red marked with value #FFFF5611 | [optional] 
**positionX** | **Number** | Longitude. Contains the longitude value as a double, e.g. -74.0 for New York and is culture invariant always using decimal point. | [optional] 
**positionY** | **Number** | Latitude. Contains the latitude value as a double, e.g. 40.716 for New York, and is culture invariant always using decimal point. | [optional] 
**relations** | [**GisMapLocationsRelations**](GisMapLocationsRelations.md) |  | [optional] 
