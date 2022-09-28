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
import {RecordingServerMulticastsRelations} from './RecordingServerMulticastsRelations';

/**
 * The RecordingServerMulticasts model module.
 * @module model/RecordingServerMulticasts
 * @version 1.0.0
 */
export class RecordingServerMulticasts {
  /**
   * Constructs a new <code>RecordingServerMulticasts</code>.
   * Multicast
   * @alias module:model/RecordingServerMulticasts
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RecordingServerMulticasts</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecordingServerMulticasts} obj Optional instance to populate.
   * @return {module:model/RecordingServerMulticasts} The populated <code>RecordingServerMulticasts</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RecordingServerMulticasts();
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('iPAddressStart'))
        obj.iPAddressStart = ApiClient.convertToType(data['iPAddressStart'], 'String');
      if (data.hasOwnProperty('iPAddressEnd'))
        obj.iPAddressEnd = ApiClient.convertToType(data['iPAddressEnd'], 'String');
      if (data.hasOwnProperty('portRangeStart'))
        obj.portRangeStart = ApiClient.convertToType(data['portRangeStart'], 'Number');
      if (data.hasOwnProperty('portRangeEnd'))
        obj.portRangeEnd = ApiClient.convertToType(data['portRangeEnd'], 'Number');
      if (data.hasOwnProperty('MTU'))
        obj.MTU = ApiClient.convertToType(data['MTU'], 'String');
      if (data.hasOwnProperty('TTL'))
        obj.TTL = ApiClient.convertToType(data['TTL'], 'String');
      if (data.hasOwnProperty('relations'))
        obj.relations = RecordingServerMulticastsRelations.constructFromObject(data['relations']);
    }
    return obj;
  }
}

/**
 * @member {Boolean} enabled
 */
RecordingServerMulticasts.prototype.enabled = undefined;

/**
 * @member {String} displayName
 */
RecordingServerMulticasts.prototype.displayName = undefined;

/**
 * ID
 * @member {String} id
 */
RecordingServerMulticasts.prototype.id = undefined;

/**
 * IP address start
 * @member {String} iPAddressStart
 */
RecordingServerMulticasts.prototype.iPAddressStart = undefined;

/**
 * IP address end
 * @member {String} iPAddressEnd
 */
RecordingServerMulticasts.prototype.iPAddressEnd = undefined;

/**
 * Port range start
 * @member {Number} portRangeStart
 */
RecordingServerMulticasts.prototype.portRangeStart = undefined;

/**
 * Port range end
 * @member {Number} portRangeEnd
 */
RecordingServerMulticasts.prototype.portRangeEnd = undefined;

/**
 * MTU. Maximum Transmission Unit
 * @member {String} MTU
 */
RecordingServerMulticasts.prototype.MTU = undefined;

/**
 * TTL. Time to live
 * @member {String} TTL
 */
RecordingServerMulticasts.prototype.TTL = undefined;

/**
 * @member {module:model/RecordingServerMulticastsRelations} relations
 */
RecordingServerMulticasts.prototype.relations = undefined;
