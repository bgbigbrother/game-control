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
import {LprMatchListsRelations} from './LprMatchListsRelations';
import {PathOutputs} from './PathOutputs';

/**
 * The LprMatchLists model module.
 * @module model/LprMatchLists
 * @version 1.0.0
 */
export class LprMatchLists {
  /**
   * Constructs a new <code>LprMatchLists</code>.
   * @alias module:model/LprMatchLists
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>LprMatchLists</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LprMatchLists} obj Optional instance to populate.
   * @return {module:model/LprMatchLists} The populated <code>LprMatchLists</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new LprMatchLists();
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('triggerEventList'))
        obj.triggerEventList = ApiClient.convertToType(data['triggerEventList'], [PathOutputs]);
      if (data.hasOwnProperty('customFields'))
        obj.customFields = ApiClient.convertToType(data['customFields'], 'String');
      if (data.hasOwnProperty('registrationNumbers'))
        obj.registrationNumbers = ApiClient.convertToType(data['registrationNumbers'], 'String');
      if (data.hasOwnProperty('relations'))
        obj.relations = LprMatchListsRelations.constructFromObject(data['relations']);
    }
    return obj;
  }
}

/**
 * @member {String} displayName
 */
LprMatchLists.prototype.displayName = undefined;

/**
 * ID
 * @member {String} id
 */
LprMatchLists.prototype.id = undefined;

/**
 * Name
 * @member {String} name
 */
LprMatchLists.prototype.name = undefined;

/**
 * @member {Array.<module:model/PathOutputs>} triggerEventList
 */
LprMatchLists.prototype.triggerEventList = undefined;

/**
 * The semicolon separated list of names of custom fields
 * @member {String} customFields
 */
LprMatchLists.prototype.customFields = undefined;

/**
 * The semicolon separated list of registration numbers
 * @member {String} registrationNumbers
 */
LprMatchLists.prototype.registrationNumbers = undefined;

/**
 * @member {module:model/LprMatchListsRelations} relations
 */
LprMatchLists.prototype.relations = undefined;

