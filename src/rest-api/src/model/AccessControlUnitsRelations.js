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
import {AccessControlSystemsRelationsSelf} from './AccessControlSystemsRelationsSelf';
import {AccessControlUnitsRelationsSelf} from './AccessControlUnitsRelationsSelf';

/**
 * The AccessControlUnitsRelations model module.
 * @module model/AccessControlUnitsRelations
 * @version 1.0.0
 */
export class AccessControlUnitsRelations {
  /**
   * Constructs a new <code>AccessControlUnitsRelations</code>.
   * @alias module:model/AccessControlUnitsRelations
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AccessControlUnitsRelations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccessControlUnitsRelations} obj Optional instance to populate.
   * @return {module:model/AccessControlUnitsRelations} The populated <code>AccessControlUnitsRelations</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AccessControlUnitsRelations();
      if (data.hasOwnProperty('self'))
        obj.self = AccessControlUnitsRelationsSelf.constructFromObject(data['self']);
      if (data.hasOwnProperty('parent'))
        obj.parent = AccessControlSystemsRelationsSelf.constructFromObject(data['parent']);
    }
    return obj;
  }
}

/**
 * @member {module:model/AccessControlUnitsRelationsSelf} self
 */
AccessControlUnitsRelations.prototype.self = undefined;

/**
 * @member {module:model/AccessControlSystemsRelationsSelf} parent
 */
AccessControlUnitsRelations.prototype.parent = undefined;
