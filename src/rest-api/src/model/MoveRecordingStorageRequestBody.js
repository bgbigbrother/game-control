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
 * The MoveRecordingStorageRequestBody model module.
 * @module model/MoveRecordingStorageRequestBody
 * @version 1.0.0
 */
export class MoveRecordingStorageRequestBody {
  /**
   * Constructs a new <code>MoveRecordingStorageRequestBody</code>.
   * @alias module:model/MoveRecordingStorageRequestBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MoveRecordingStorageRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MoveRecordingStorageRequestBody} obj Optional instance to populate.
   * @return {module:model/MoveRecordingStorageRequestBody} The populated <code>MoveRecordingStorageRequestBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MoveRecordingStorageRequestBody();
      if (data.hasOwnProperty('diskPath'))
        obj.diskPath = ApiClient.convertToType(data['diskPath'], 'String');
    }
    return obj;
  }
}

/**
 * Path
 * @member {String} diskPath
 */
MoveRecordingStorageRequestBody.prototype.diskPath = undefined;

// Implement StoragesIdBody interface:
