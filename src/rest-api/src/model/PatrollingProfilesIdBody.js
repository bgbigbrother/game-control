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
 * The PatrollingProfilesIdBody model module.
 * @module model/PatrollingProfilesIdBody
 * @version 1.0.0
 */
export class PatrollingProfilesIdBody {
  /**
   * Constructs a new <code>PatrollingProfilesIdBody</code>.
   * @alias module:model/PatrollingProfilesIdBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PatrollingProfilesIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PatrollingProfilesIdBody} obj Optional instance to populate.
   * @return {module:model/PatrollingProfilesIdBody} The populated <code>PatrollingProfilesIdBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PatrollingProfilesIdBody();
    }
    return obj;
  }
}
