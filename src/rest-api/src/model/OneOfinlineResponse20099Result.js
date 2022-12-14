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
 * The OneOfinlineResponse20099Result model module.
 * @module model/OneOfinlineResponse20099Result
 * @version 1.0.0
 */
export class OneOfinlineResponse20099Result {
  /**
   * Constructs a new <code>OneOfinlineResponse20099Result</code>.
   * @alias module:model/OneOfinlineResponse20099Result
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OneOfinlineResponse20099Result</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OneOfinlineResponse20099Result} obj Optional instance to populate.
   * @return {module:model/OneOfinlineResponse20099Result} The populated <code>OneOfinlineResponse20099Result</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OneOfinlineResponse20099Result();
    }
    return obj;
  }
}
