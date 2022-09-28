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
 * The OutputGroupsRelationsSelf model module.
 * @module model/OutputGroupsRelationsSelf
 * @version 1.0.0
 */
export class OutputGroupsRelationsSelf {
  /**
   * Constructs a new <code>OutputGroupsRelationsSelf</code>.
   * @alias module:model/OutputGroupsRelationsSelf
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OutputGroupsRelationsSelf</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OutputGroupsRelationsSelf} obj Optional instance to populate.
   * @return {module:model/OutputGroupsRelationsSelf} The populated <code>OutputGroupsRelationsSelf</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OutputGroupsRelationsSelf();
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
OutputGroupsRelationsSelf.prototype.type = undefined;

/**
 * @member {String} id
 */
OutputGroupsRelationsSelf.prototype.id = undefined;

