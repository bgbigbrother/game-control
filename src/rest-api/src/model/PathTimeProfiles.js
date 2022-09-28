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
 * The PathTimeProfiles model module.
 * @module model/PathTimeProfiles
 * @version 1.0.0
 */
export class PathTimeProfiles {
  /**
   * Constructs a new <code>PathTimeProfiles</code>.
   * Time profile. Defines what TimeProfile to be used when checking when the alarm is enabled.  Property is only valid when EnableRule is set to TimeProfile.
   * @alias module:model/PathTimeProfiles
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PathTimeProfiles</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PathTimeProfiles} obj Optional instance to populate.
   * @return {module:model/PathTimeProfiles} The populated <code>PathTimeProfiles</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PathTimeProfiles();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} type
 */
PathTimeProfiles.prototype.type = undefined;

/**
 * @member {String} id
 */
PathTimeProfiles.prototype.id = undefined;

