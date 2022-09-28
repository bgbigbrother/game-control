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
 * The RemoveCamerasRequestBody model module.
 * @module model/RemoveCamerasRequestBody
 * @version 1.0.0
 */
export class RemoveCamerasRequestBody {
  /**
   * Constructs a new <code>RemoveCamerasRequestBody</code>.
   * @alias module:model/RemoveCamerasRequestBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RemoveCamerasRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RemoveCamerasRequestBody} obj Optional instance to populate.
   * @return {module:model/RemoveCamerasRequestBody} The populated <code>RemoveCamerasRequestBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RemoveCamerasRequestBody();
      if (data.hasOwnProperty('cameraPaths'))
        obj.cameraPaths = ApiClient.convertToType(data['cameraPaths'], 'String');
      if (data.hasOwnProperty('cameraGroupPaths'))
        obj.cameraGroupPaths = ApiClient.convertToType(data['cameraGroupPaths'], 'String');
    }
    return obj;
  }
}

/**
 * Camera paths
 * @member {String} cameraPaths
 */
RemoveCamerasRequestBody.prototype.cameraPaths = undefined;

/**
 * Camera group paths
 * @member {String} cameraGroupPaths
 */
RemoveCamerasRequestBody.prototype.cameraGroupPaths = undefined;

// Implement MonitorsIdBody interface:
