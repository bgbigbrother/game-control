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
import {PathHardwareDrivers} from './PathHardwareDrivers';

/**
 * The AddHardwareServerTask model module.
 * @module model/AddHardwareServerTask
 * @version 1.0.0
 */
export class AddHardwareServerTask {
  /**
   * Constructs a new <code>AddHardwareServerTask</code>.
   * Add new hardware
   * @alias module:model/AddHardwareServerTask
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AddHardwareServerTask</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddHardwareServerTask} obj Optional instance to populate.
   * @return {module:model/AddHardwareServerTask} The populated <code>AddHardwareServerTask</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AddHardwareServerTask();
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('hardwareAddress'))
        obj.hardwareAddress = ApiClient.convertToType(data['hardwareAddress'], 'String');
      if (data.hasOwnProperty('hardwareDriverPath'))
        obj.hardwareDriverPath = PathHardwareDrivers.constructFromObject(data['hardwareDriverPath']);
      if (data.hasOwnProperty('userName'))
        obj.userName = ApiClient.convertToType(data['userName'], 'String');
      if (data.hasOwnProperty('password'))
        obj.password = ApiClient.convertToType(data['password'], 'String');
      if (data.hasOwnProperty('customData'))
        obj.customData = ApiClient.convertToType(data['customData'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Boolean} enabled
 */
AddHardwareServerTask.prototype.enabled = undefined;

/**
 * @member {String} displayName
 */
AddHardwareServerTask.prototype.displayName = undefined;

/**
 * Address. Contains the IP address of a piece of hardware
 * @member {String} hardwareAddress
 */
AddHardwareServerTask.prototype.hardwareAddress = undefined;

/**
 * @member {module:model/PathHardwareDrivers} hardwareDriverPath
 */
AddHardwareServerTask.prototype.hardwareDriverPath = undefined;

/**
 * User name. User name for the hardware
 * @member {String} userName
 */
AddHardwareServerTask.prototype.userName = undefined;

/**
 * Password. Password for hardware
 * @member {String} password
 */
AddHardwareServerTask.prototype.password = undefined;

/**
 * Custom data. Data to be passed on to driver during add hardware process
 * @member {String} customData
 */
AddHardwareServerTask.prototype.customData = undefined;

// Implement OneOfinlineResponse200125Result interface: