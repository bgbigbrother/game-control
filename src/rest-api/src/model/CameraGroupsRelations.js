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
import {CameraGroupsRelationsSelf} from './CameraGroupsRelationsSelf';

/**
 * The CameraGroupsRelations model module.
 * @module model/CameraGroupsRelations
 * @version 1.0.0
 */
export class CameraGroupsRelations {
  /**
   * Constructs a new <code>CameraGroupsRelations</code>.
   * @alias module:model/CameraGroupsRelations
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CameraGroupsRelations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CameraGroupsRelations} obj Optional instance to populate.
   * @return {module:model/CameraGroupsRelations} The populated <code>CameraGroupsRelations</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CameraGroupsRelations();
      if (data.hasOwnProperty('self'))
        obj.self = CameraGroupsRelationsSelf.constructFromObject(data['self']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CameraGroupsRelationsSelf} self
 */
CameraGroupsRelations.prototype.self = undefined;
