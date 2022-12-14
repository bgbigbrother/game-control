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
 * The RemovePatrollingEntryRequestBody model module.
 * @module model/RemovePatrollingEntryRequestBody
 * @version 1.0.0
 */
export class RemovePatrollingEntryRequestBody {
  /**
   * Constructs a new <code>RemovePatrollingEntryRequestBody</code>.
   * @alias module:model/RemovePatrollingEntryRequestBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RemovePatrollingEntryRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RemovePatrollingEntryRequestBody} obj Optional instance to populate.
   * @return {module:model/RemovePatrollingEntryRequestBody} The populated <code>RemovePatrollingEntryRequestBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RemovePatrollingEntryRequestBody();
      if (data.hasOwnProperty('itemSelection'))
        obj.itemSelection = ApiClient.convertToType(data['itemSelection'], 'String');
    }
    return obj;
  }
}

/**
 * Remove patrolling entry
 * @member {String} itemSelection
 */
RemovePatrollingEntryRequestBody.prototype.itemSelection = undefined;

// Implement PatrollingProfilesIdBody interface:
