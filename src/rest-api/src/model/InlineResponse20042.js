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
import {ClientProfiles} from './ClientProfiles';

/**
 * The InlineResponse20042 model module.
 * @module model/InlineResponse20042
 * @version 1.0.0
 */
export class InlineResponse20042 {
  /**
   * Constructs a new <code>InlineResponse20042</code>.
   * @alias module:model/InlineResponse20042
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse20042</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20042} obj Optional instance to populate.
   * @return {module:model/InlineResponse20042} The populated <code>InlineResponse20042</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20042();
      if (data.hasOwnProperty('array'))
        obj._array = ApiClient.convertToType(data['array'], [ClientProfiles]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/ClientProfiles>} _array
 */
InlineResponse20042.prototype._array = undefined;

