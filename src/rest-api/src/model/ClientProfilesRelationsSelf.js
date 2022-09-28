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
 * The ClientProfilesRelationsSelf model module.
 * @module model/ClientProfilesRelationsSelf
 * @version 1.0.0
 */
export class ClientProfilesRelationsSelf {
  /**
   * Constructs a new <code>ClientProfilesRelationsSelf</code>.
   * @alias module:model/ClientProfilesRelationsSelf
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ClientProfilesRelationsSelf</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientProfilesRelationsSelf} obj Optional instance to populate.
   * @return {module:model/ClientProfilesRelationsSelf} The populated <code>ClientProfilesRelationsSelf</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ClientProfilesRelationsSelf();
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
ClientProfilesRelationsSelf.prototype.type = undefined;

/**
 * @member {String} id
 */
ClientProfilesRelationsSelf.prototype.id = undefined;

