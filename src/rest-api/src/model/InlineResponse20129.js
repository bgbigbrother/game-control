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
import {VideoWalls} from './VideoWalls';

/**
 * The InlineResponse20129 model module.
 * @module model/InlineResponse20129
 * @version 1.0.0
 */
export class InlineResponse20129 {
  /**
   * Constructs a new <code>InlineResponse20129</code>.
   * @alias module:model/InlineResponse20129
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse20129</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20129} obj Optional instance to populate.
   * @return {module:model/InlineResponse20129} The populated <code>InlineResponse20129</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20129();
      if (data.hasOwnProperty('data'))
        obj.data = VideoWalls.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/VideoWalls} data
 */
InlineResponse20129.prototype.data = undefined;

