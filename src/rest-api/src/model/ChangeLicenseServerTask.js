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
 * The ChangeLicenseServerTask model module.
 * @module model/ChangeLicenseServerTask
 * @version 1.0.0
 */
export class ChangeLicenseServerTask {
  /**
   * Constructs a new <code>ChangeLicenseServerTask</code>.
   * Change to a new license 
   * @alias module:model/ChangeLicenseServerTask
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ChangeLicenseServerTask</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChangeLicenseServerTask} obj Optional instance to populate.
   * @return {module:model/ChangeLicenseServerTask} The populated <code>ChangeLicenseServerTask</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ChangeLicenseServerTask();
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
ChangeLicenseServerTask.prototype.displayName = undefined;

/**
 * License content base64 encoded
 * @member {String} license
 */
ChangeLicenseServerTask.prototype.license = undefined;

// Implement OneOfinlineResponse20090Result interface:
