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
import {LayoutsRelationsParent} from './LayoutsRelationsParent';
import {LayoutsRelationsSelf} from './LayoutsRelationsSelf';

/**
 * The LayoutsRelations model module.
 * @module model/LayoutsRelations
 * @version 1.0.0
 */
export class LayoutsRelations {
  /**
   * Constructs a new <code>LayoutsRelations</code>.
   * @alias module:model/LayoutsRelations
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>LayoutsRelations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LayoutsRelations} obj Optional instance to populate.
   * @return {module:model/LayoutsRelations} The populated <code>LayoutsRelations</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new LayoutsRelations();
      if (data.hasOwnProperty('self'))
        obj.self = LayoutsRelationsSelf.constructFromObject(data['self']);
      if (data.hasOwnProperty('parent'))
        obj.parent = LayoutsRelationsParent.constructFromObject(data['parent']);
    }
    return obj;
  }
}

/**
 * @member {module:model/LayoutsRelationsSelf} self
 */
LayoutsRelations.prototype.self = undefined;

/**
 * @member {module:model/LayoutsRelationsParent} parent
 */
LayoutsRelations.prototype.parent = undefined;

