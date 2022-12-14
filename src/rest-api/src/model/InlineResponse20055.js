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
import {FailoverRecorders} from './FailoverRecorders';

/**
 * The InlineResponse20055 model module.
 * @module model/InlineResponse20055
 * @version 1.0.0
 */
export class InlineResponse20055 {
  /**
   * Constructs a new <code>InlineResponse20055</code>.
   * @alias module:model/InlineResponse20055
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse20055</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20055} obj Optional instance to populate.
   * @return {module:model/InlineResponse20055} The populated <code>InlineResponse20055</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20055();
      if (data.hasOwnProperty('array'))
        obj._array = ApiClient.convertToType(data['array'], [FailoverRecorders]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/FailoverRecorders>} _array
 */
InlineResponse20055.prototype._array = undefined;

