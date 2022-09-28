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
import {ChangeSecurityPermissionsServerTask} from './ChangeSecurityPermissionsServerTask';

/**
 * The InlineResponse20080 model module.
 * @module model/InlineResponse20080
 * @version 1.0.0
 */
export class InlineResponse20080 {
  /**
   * Constructs a new <code>InlineResponse20080</code>.
   * @alias module:model/InlineResponse20080
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse20080</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20080} obj Optional instance to populate.
   * @return {module:model/InlineResponse20080} The populated <code>InlineResponse20080</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20080();
      if (data.hasOwnProperty('result'))
        obj.result = ChangeSecurityPermissionsServerTask.constructFromObject(data['result']);
    }
    return obj;
  }
}

/**
 * @member {module:model/ChangeSecurityPermissionsServerTask} result
 */
InlineResponse20080.prototype.result = undefined;

