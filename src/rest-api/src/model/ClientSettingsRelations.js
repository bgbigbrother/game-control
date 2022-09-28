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
import {ClientSettingsRelationsSelf} from './ClientSettingsRelationsSelf';

/**
 * The ClientSettingsRelations model module.
 * @module model/ClientSettingsRelations
 * @version 1.0.0
 */
export class ClientSettingsRelations {
  /**
   * Constructs a new <code>ClientSettingsRelations</code>.
   * @alias module:model/ClientSettingsRelations
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ClientSettingsRelations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientSettingsRelations} obj Optional instance to populate.
   * @return {module:model/ClientSettingsRelations} The populated <code>ClientSettingsRelations</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ClientSettingsRelations();
      if (data.hasOwnProperty('self'))
        obj.self = ClientSettingsRelationsSelf.constructFromObject(data['self']);
      if (data.hasOwnProperty('parent'))
        obj.parent = CamerasRelationsSelf.constructFromObject(data['parent']);
    }
    return obj;
  }
}

/**
 * @member {module:model/ClientSettingsRelationsSelf} self
 */
ClientSettingsRelations.prototype.self = undefined;

/**
 * @member {module:model/CamerasRelationsSelf} parent
 */
ClientSettingsRelations.prototype.parent = undefined;
