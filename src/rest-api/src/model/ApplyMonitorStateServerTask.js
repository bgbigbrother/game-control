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
 * The ApplyMonitorStateServerTask model module.
 * @module model/ApplyMonitorStateServerTask
 * @version 1.0.0
 */
export class ApplyMonitorStateServerTask {
  /**
   * Constructs a new <code>ApplyMonitorStateServerTask</code>.
   * Apply monitor state
   * @alias module:model/ApplyMonitorStateServerTask
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ApplyMonitorStateServerTask</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApplyMonitorStateServerTask} obj Optional instance to populate.
   * @return {module:model/ApplyMonitorStateServerTask} The populated <code>ApplyMonitorStateServerTask</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ApplyMonitorStateServerTask();
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('monitorState'))
        obj.monitorState = ApiClient.convertToType(data['monitorState'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} displayName
 */
ApplyMonitorStateServerTask.prototype.displayName = undefined;

/**
 * Monitor state. Current monitor state
 * @member {String} monitorState
 */
ApplyMonitorStateServerTask.prototype.monitorState = undefined;

// Implement OneOfinlineResponse200115Result interface:
