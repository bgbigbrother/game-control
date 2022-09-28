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
 * The ChangePasswordBasicUserServerTask model module.
 * @module model/ChangePasswordBasicUserServerTask
 * @version 1.0.0
 */
export class ChangePasswordBasicUserServerTask {
  /**
   * Constructs a new <code>ChangePasswordBasicUserServerTask</code>.
   * Change basic user password
   * @alias module:model/ChangePasswordBasicUserServerTask
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ChangePasswordBasicUserServerTask</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChangePasswordBasicUserServerTask} obj Optional instance to populate.
   * @return {module:model/ChangePasswordBasicUserServerTask} The populated <code>ChangePasswordBasicUserServerTask</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ChangePasswordBasicUserServerTask();
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('password'))
        obj.password = ApiClient.convertToType(data['password'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} displayName
 */
ChangePasswordBasicUserServerTask.prototype.displayName = undefined;

/**
 * Password
 * @member {String} password
 */
ChangePasswordBasicUserServerTask.prototype.password = undefined;

