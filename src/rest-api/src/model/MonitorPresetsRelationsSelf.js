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
 * The MonitorPresetsRelationsSelf model module.
 * @module model/MonitorPresetsRelationsSelf
 * @version 1.0.0
 */
export class MonitorPresetsRelationsSelf {
  /**
   * Constructs a new <code>MonitorPresetsRelationsSelf</code>.
   * @alias module:model/MonitorPresetsRelationsSelf
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MonitorPresetsRelationsSelf</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MonitorPresetsRelationsSelf} obj Optional instance to populate.
   * @return {module:model/MonitorPresetsRelationsSelf} The populated <code>MonitorPresetsRelationsSelf</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MonitorPresetsRelationsSelf();
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
MonitorPresetsRelationsSelf.prototype.type = undefined;

/**
 * @member {String} id
 */
MonitorPresetsRelationsSelf.prototype.id = undefined;

