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
 * The ChangeSecurityPermissionsRequestBody model module.
 * @module model/ChangeSecurityPermissionsRequestBody
 * @version 1.0.0
 */
export class ChangeSecurityPermissionsRequestBody {
  /**
   * Constructs a new <code>ChangeSecurityPermissionsRequestBody</code>.
   * @alias module:model/ChangeSecurityPermissionsRequestBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ChangeSecurityPermissionsRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChangeSecurityPermissionsRequestBody} obj Optional instance to populate.
   * @return {module:model/ChangeSecurityPermissionsRequestBody} The populated <code>ChangeSecurityPermissionsRequestBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ChangeSecurityPermissionsRequestBody();
      if (data.hasOwnProperty('userPath'))
        obj.userPath = ApiClient.convertToType(data['userPath'], 'String');
    }
    return obj;
  }
}

/**
 * User path
 * @member {String} userPath
 */
ChangeSecurityPermissionsRequestBody.prototype.userPath = undefined;

// Implement CamerasIdBody interface:
// Implement MetadataIdBody interface:
// Implement MicrophonesIdBody interface:
// Implement SpeakersIdBody interface: