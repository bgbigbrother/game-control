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
 * The RemoveRoleMemberRequestBody model module.
 * @module model/RemoveRoleMemberRequestBody
 * @version 1.0.0
 */
export class RemoveRoleMemberRequestBody {
  /**
   * Constructs a new <code>RemoveRoleMemberRequestBody</code>.
   * @alias module:model/RemoveRoleMemberRequestBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RemoveRoleMemberRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RemoveRoleMemberRequestBody} obj Optional instance to populate.
   * @return {module:model/RemoveRoleMemberRequestBody} The populated <code>RemoveRoleMemberRequestBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RemoveRoleMemberRequestBody();
      if (data.hasOwnProperty('itemSelection'))
        obj.itemSelection = ApiClient.convertToType(data['itemSelection'], 'String');
    }
    return obj;
  }
}

/**
 * Remove role member
 * @member {String} itemSelection
 */
RemoveRoleMemberRequestBody.prototype.itemSelection = undefined;

// Implement IdUsersBody interface:
