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
 * The UpdateLicenseServerTask model module.
 * @module model/UpdateLicenseServerTask
 * @version 1.0.0
 */
export class UpdateLicenseServerTask {
  /**
   * Constructs a new <code>UpdateLicenseServerTask</code>.
   * Update license
   * @alias module:model/UpdateLicenseServerTask
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>UpdateLicenseServerTask</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateLicenseServerTask} obj Optional instance to populate.
   * @return {module:model/UpdateLicenseServerTask} The populated <code>UpdateLicenseServerTask</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UpdateLicenseServerTask();
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('license'))
        obj.license = ApiClient.convertToType(data['license'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} displayName
 */
UpdateLicenseServerTask.prototype.displayName = undefined;

/**
 * License content base64 encoded
 * @member {String} license
 */
UpdateLicenseServerTask.prototype.license = undefined;

// Implement OneOfinlineResponse20090Result interface: