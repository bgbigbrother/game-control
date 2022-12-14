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
import {ClientProfilesRelationsSelf} from './ClientProfilesRelationsSelf';

/**
 * The ClientProfilesRelations model module.
 * @module model/ClientProfilesRelations
 * @version 1.0.0
 */
export class ClientProfilesRelations {
  /**
   * Constructs a new <code>ClientProfilesRelations</code>.
   * @alias module:model/ClientProfilesRelations
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ClientProfilesRelations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientProfilesRelations} obj Optional instance to populate.
   * @return {module:model/ClientProfilesRelations} The populated <code>ClientProfilesRelations</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ClientProfilesRelations();
      if (data.hasOwnProperty('self'))
        obj.self = ClientProfilesRelationsSelf.constructFromObject(data['self']);
    }
    return obj;
  }
}

/**
 * @member {module:model/ClientProfilesRelationsSelf} self
 */
ClientProfilesRelations.prototype.self = undefined;

