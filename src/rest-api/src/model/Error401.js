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
import {Error401Details} from './Error401Details';

/**
 * The Error401 model module.
 * @module model/Error401
 * @version 1.0.0
 */
export class Error401 {
  /**
   * Constructs a new <code>Error401</code>.
   * @alias module:model/Error401
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Error401</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Error401} obj Optional instance to populate.
   * @return {module:model/Error401} The populated <code>Error401</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Error401();
      if (data.hasOwnProperty('httpCode'))
        obj.httpCode = ApiClient.convertToType(data['httpCode'], 'Number');
      if (data.hasOwnProperty('details'))
        obj.details = ApiClient.convertToType(data['details'], [Error401Details]);
    }
    return obj;
  }
}

/**
 * @member {Number} httpCode
 */
Error401.prototype.httpCode = undefined;

/**
 * @member {Array.<module:model/Error401Details>} details
 */
Error401.prototype.details = undefined;
