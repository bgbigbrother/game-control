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
import {PathRoles} from './PathRoles';

/**
 * The ChangeSecurityPermissionsServerTask model module.
 * @module model/ChangeSecurityPermissionsServerTask
 * @version 1.0.0
 */
export class ChangeSecurityPermissionsServerTask {
  /**
   * Constructs a new <code>ChangeSecurityPermissionsServerTask</code>.
   * Edit permissions
   * @alias module:model/ChangeSecurityPermissionsServerTask
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ChangeSecurityPermissionsServerTask</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChangeSecurityPermissionsServerTask} obj Optional instance to populate.
   * @return {module:model/ChangeSecurityPermissionsServerTask} The populated <code>ChangeSecurityPermissionsServerTask</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ChangeSecurityPermissionsServerTask();
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('userPath'))
        obj.userPath = PathRoles.constructFromObject(data['userPath']);
    }
    return obj;
  }
}

/**
 * @member {Boolean} enabled
 */
ChangeSecurityPermissionsServerTask.prototype.enabled = undefined;

/**
 * @member {String} displayName
 */
ChangeSecurityPermissionsServerTask.prototype.displayName = undefined;

/**
 * @member {module:model/PathRoles} userPath
 */
ChangeSecurityPermissionsServerTask.prototype.userPath = undefined;

// Implement OneOfinlineResponse20029Result interface:
