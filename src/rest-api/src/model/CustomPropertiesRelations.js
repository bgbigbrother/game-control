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
import {CamerasRelationsSelf} from './CamerasRelationsSelf';
import {CustomPropertiesRelationsSelf} from './CustomPropertiesRelationsSelf';

/**
 * The CustomPropertiesRelations model module.
 * @module model/CustomPropertiesRelations
 * @version 1.0.0
 */
export class CustomPropertiesRelations {
  /**
   * Constructs a new <code>CustomPropertiesRelations</code>.
   * @alias module:model/CustomPropertiesRelations
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CustomPropertiesRelations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomPropertiesRelations} obj Optional instance to populate.
   * @return {module:model/CustomPropertiesRelations} The populated <code>CustomPropertiesRelations</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CustomPropertiesRelations();
      if (data.hasOwnProperty('self'))
        obj.self = CustomPropertiesRelationsSelf.constructFromObject(data['self']);
      if (data.hasOwnProperty('parent'))
        obj.parent = CamerasRelationsSelf.constructFromObject(data['parent']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CustomPropertiesRelationsSelf} self
 */
CustomPropertiesRelations.prototype.self = undefined;

/**
 * @member {module:model/CamerasRelationsSelf} parent
 */
CustomPropertiesRelations.prototype.parent = undefined;

