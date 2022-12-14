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
import {LicenseInformations} from './LicenseInformations';
import {ResourceList} from './ResourceList';
import {TaskList} from './TaskList';

/**
 * The InlineResponse20088 model module.
 * @module model/InlineResponse20088
 * @version 1.0.0
 */
export class InlineResponse20088 {
  /**
   * Constructs a new <code>InlineResponse20088</code>.
   * @alias module:model/InlineResponse20088
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse20088</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20088} obj Optional instance to populate.
   * @return {module:model/InlineResponse20088} The populated <code>InlineResponse20088</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20088();
      if (data.hasOwnProperty('data'))
        obj.data = LicenseInformations.constructFromObject(data['data']);
      if (data.hasOwnProperty('tasks'))
        obj.tasks = ApiClient.convertToType(data['tasks'], [TaskList]);
      if (data.hasOwnProperty('resources'))
        obj.resources = ApiClient.convertToType(data['resources'], [ResourceList]);
    }
    return obj;
  }
}

/**
 * @member {module:model/LicenseInformations} data
 */
InlineResponse20088.prototype.data = undefined;

/**
 * @member {Array.<module:model/TaskList>} tasks
 */
InlineResponse20088.prototype.tasks = undefined;

/**
 * @member {Array.<module:model/ResourceList>} resources
 */
InlineResponse20088.prototype.resources = undefined;

