# MilestoneIntegrationPlatformVmsResTfulApi.MotionDetections

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **Boolean** |  | [optional] 
**displayName** | **String** |  | [optional] 
**id** | **String** | ID | [optional] 
**manualSensitivityEnabled** | **Boolean** | Enable manual motion sensitivity. Disable to let the system dynamically calculate the optimal level | [optional] 
**manualSensitivity** | **Number** | Motion detection sensitivity. Specify the minimum change required before counting as motion. Value in range 0 - 765 | [optional] 
**threshold** | **Number** | Motion detection threshold. Specify the level of motion required for an event. Value in range 0 - 10000 | [optional] 
**keyframesOnly** | **Boolean** | Enable motion detection on keyframes only. Optimize the performance on MPEG-4/H.264/H.265 by detecting motion on keyframes only | [optional] 
**processTime** | **String** | Motion detection check interval. Interval for how often to check for motion. Value map to display names:  Ms100&#x3D;Ms100   Ms250&#x3D;Ms250   Ms500&#x3D;Ms500   Ms750&#x3D;Ms750   Ms1000&#x3D;Ms1000    | [optional] 
**detectionMethod** | **String** | Motion detection method. Optimize motion detection by analyzing only a percentage of the image. Value map to display names:  Normal&#x3D;Normal   Optimized&#x3D;Optimized   Fast&#x3D;Fast    | [optional] 
**generateMotionMetadata** | **Boolean** | Generate motion metadata. Generate motion metadata for smart search function | [optional] 
**useExcludeRegions** | **Boolean** | Use exclude regions. Enable exclude regions in the motion detection | [optional] 
**gridSize** | **String** | Grid size. The grid divides the image into selectable regions. If None is selected, exclude regions are disabled. Value map to display names:  Grid8X8&#x3D;Grid8X8   Grid16X16&#x3D;Grid16X16   Grid32X32&#x3D;Grid32X32   Grid64X64&#x3D;Grid64X64    | [optional] 
**excludeRegions** | **String** | Exclude regions. Disable motion detection in specific regions. If you use an 8x8 grid, the string should have a length of 64. If you specify 0 or 1, regions are included or excluded respectively from top left region and going left to right. | [optional] 
**hardwareAccelerationMode** | **String** | Hardware acceleration mode. Defines if the motion detection resolution uses automatic or no hardware acceleration. Value map to display names:  Off&#x3D;Off   Automatic&#x3D;Automatic    | [optional] 
**relations** | [**MotionDetectionsRelations**](MotionDetectionsRelations.md) |  | [optional] 

<a name="ProcessTimeEnum"></a>
## Enum: ProcessTimeEnum

* `ms100` (value: `"Ms100"`)
* `ms250` (value: `"Ms250"`)
* `ms500` (value: `"Ms500"`)
* `ms750` (value: `"Ms750"`)
* `ms1000` (value: `"Ms1000"`)


<a name="DetectionMethodEnum"></a>
## Enum: DetectionMethodEnum

* `normal` (value: `"Normal"`)
* `optimized` (value: `"Optimized"`)
* `fast` (value: `"Fast"`)


<a name="GridSizeEnum"></a>
## Enum: GridSizeEnum

* `grid8X8` (value: `"Grid8X8"`)
* `grid16X16` (value: `"Grid16X16"`)
* `grid32X32` (value: `"Grid32X32"`)
* `grid64X64` (value: `"Grid64X64"`)


<a name="HardwareAccelerationModeEnum"></a>
## Enum: HardwareAccelerationModeEnum

* `off` (value: `"Off"`)
* `automatic` (value: `"Automatic"`)

