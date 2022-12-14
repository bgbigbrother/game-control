/*
 * Milestone Integration Platform VMS RESTful API
 * VMS Configuration and control for XProtect
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.35
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The CameraPtzChildItem model module.
 * @module model/CameraPtzChildItem
 * @version 1.0.0
 */
export class CameraPtzChildItem {
  /**
   * Constructs a new <code>CameraPtzChildItem</code>.
   * @alias module:model/CameraPtzChildItem
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CameraPtzChildItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CameraPtzChildItem} obj Optional instance to populate.
   * @return {module:model/CameraPtzChildItem} The populated <code>CameraPtzChildItem</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CameraPtzChildItem();
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('ptzEnabled'))
        obj.ptzEnabled = ApiClient.convertToType(data['ptzEnabled'], 'Boolean');
      if (data.hasOwnProperty('ptzCenterOnPositionInView'))
        obj.ptzCenterOnPositionInView = ApiClient.convertToType(data['ptzCenterOnPositionInView'], 'Boolean');
      if (data.hasOwnProperty('ptzCenterAndZoomToRectangle'))
        obj.ptzCenterAndZoomToRectangle = ApiClient.convertToType(data['ptzCenterAndZoomToRectangle'], 'Boolean');
      if (data.hasOwnProperty('ptzHomeSupport'))
        obj.ptzHomeSupport = ApiClient.convertToType(data['ptzHomeSupport'], 'Boolean');
      if (data.hasOwnProperty('ptzDiagonalSupport'))
        obj.ptzDiagonalSupport = ApiClient.convertToType(data['ptzDiagonalSupport'], 'Boolean');
      if (data.hasOwnProperty('ptzIpix'))
        obj.ptzIpix = ApiClient.convertToType(data['ptzIpix'], 'Boolean');
      if (data.hasOwnProperty('pan'))
        obj.pan = ApiClient.convertToType(data['pan'], 'String');
      if (data.hasOwnProperty('tilt'))
        obj.tilt = ApiClient.convertToType(data['tilt'], 'String');
      if (data.hasOwnProperty('zoom'))
        obj.zoom = ApiClient.convertToType(data['zoom'], 'String');
      if (data.hasOwnProperty('ptzPresetConfiguration'))
        obj.ptzPresetConfiguration = ApiClient.convertToType(data['ptzPresetConfiguration'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} displayName
 */
CameraPtzChildItem.prototype.displayName = undefined;

/**
 * PTZ Enabled
 * @member {Boolean} ptzEnabled
 */
CameraPtzChildItem.prototype.ptzEnabled = undefined;

/**
 * PTZ Center on position in view
 * @member {Boolean} ptzCenterOnPositionInView
 */
CameraPtzChildItem.prototype.ptzCenterOnPositionInView = undefined;

/**
 * PTZ Center and zoom to rectangle
 * @member {Boolean} ptzCenterAndZoomToRectangle
 */
CameraPtzChildItem.prototype.ptzCenterAndZoomToRectangle = undefined;

/**
 * PTZ Home support
 * @member {Boolean} ptzHomeSupport
 */
CameraPtzChildItem.prototype.ptzHomeSupport = undefined;

/**
 * PTZ Diagonal support
 * @member {Boolean} ptzDiagonalSupport
 */
CameraPtzChildItem.prototype.ptzDiagonalSupport = undefined;

/**
 * PTZ Ipix
 * @member {Boolean} ptzIpix
 */
CameraPtzChildItem.prototype.ptzIpix = undefined;

/**
 * Pan
 * @member {String} pan
 */
CameraPtzChildItem.prototype.pan = undefined;

/**
 * Tilt
 * @member {String} tilt
 */
CameraPtzChildItem.prototype.tilt = undefined;

/**
 * Zoom
 * @member {String} zoom
 */
CameraPtzChildItem.prototype.zoom = undefined;

/**
 * Preset Configuration
 * @member {String} ptzPresetConfiguration
 */
CameraPtzChildItem.prototype.ptzPresetConfiguration = undefined;

