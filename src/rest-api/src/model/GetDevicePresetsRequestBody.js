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
 * The GetDevicePresetsRequestBody model module.
 * @module model/GetDevicePresetsRequestBody
 * @version 1.0.0
 */
export class GetDevicePresetsRequestBody {
  /**
   * Constructs a new <code>GetDevicePresetsRequestBody</code>.
   * @alias module:model/GetDevicePresetsRequestBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetDevicePresetsRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetDevicePresetsRequestBody} obj Optional instance to populate.
   * @return {module:model/GetDevicePresetsRequestBody} The populated <code>GetDevicePresetsRequestBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetDevicePresetsRequestBody();
      if (data.hasOwnProperty('sessionDataId'))
        obj.sessionDataId = ApiClient.convertToType(data['sessionDataId'], 'Number');
    }
    return obj;
  }
}

/**
 * Session data ID to be used in next step
 * @member {Number} sessionDataId
 */
GetDevicePresetsRequestBody.prototype.sessionDataId = undefined;

// Implement IdPtzPresetsBody interface: