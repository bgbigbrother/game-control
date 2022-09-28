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
 * The RolesIdBody model module.
 * @module model/RolesIdBody
 * @version 1.0.0
 */
export class RolesIdBody {
  /**
   * Constructs a new <code>RolesIdBody</code>.
   * @alias module:model/RolesIdBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RolesIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RolesIdBody} obj Optional instance to populate.
   * @return {module:model/RolesIdBody} The populated <code>RolesIdBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RolesIdBody();
    }
    return obj;
  }
}