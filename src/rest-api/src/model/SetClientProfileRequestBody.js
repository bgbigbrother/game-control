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
 * The SetClientProfileRequestBody model module.
 * @module model/SetClientProfileRequestBody
 * @version 1.0.0
 */
export class SetClientProfileRequestBody {
  /**
   * Constructs a new <code>SetClientProfileRequestBody</code>.
   * @alias module:model/SetClientProfileRequestBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SetClientProfileRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SetClientProfileRequestBody} obj Optional instance to populate.
   * @return {module:model/SetClientProfileRequestBody} The populated <code>SetClientProfileRequestBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SetClientProfileRequestBody();
      if (data.hasOwnProperty('itemSelection'))
        obj.itemSelection = ApiClient.convertToType(data['itemSelection'], 'String');
    }
    return obj;
  }
}

/**
 * Client profile
 * @member {String} itemSelection
 */
SetClientProfileRequestBody.prototype.itemSelection = undefined;

// Implement RolesIdBody interface:
