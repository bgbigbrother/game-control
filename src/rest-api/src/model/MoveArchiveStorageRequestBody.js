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
 * The MoveArchiveStorageRequestBody model module.
 * @module model/MoveArchiveStorageRequestBody
 * @version 1.0.0
 */
export class MoveArchiveStorageRequestBody {
  /**
   * Constructs a new <code>MoveArchiveStorageRequestBody</code>.
   * @alias module:model/MoveArchiveStorageRequestBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MoveArchiveStorageRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MoveArchiveStorageRequestBody} obj Optional instance to populate.
   * @return {module:model/MoveArchiveStorageRequestBody} The populated <code>MoveArchiveStorageRequestBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MoveArchiveStorageRequestBody();
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
MoveArchiveStorageRequestBody.prototype.diskPath = undefined;

// Implement ArchiveStoragesIdBody interface:
