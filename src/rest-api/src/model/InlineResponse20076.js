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
import {HardwarePtzSettings} from './HardwarePtzSettings';
import {ResourceList} from './ResourceList';
import {TaskList} from './TaskList';

/**
 * The InlineResponse20076 model module.
 * @module model/InlineResponse20076
 * @version 1.0.0
 */
export class InlineResponse20076 {
  /**
   * Constructs a new <code>InlineResponse20076</code>.
   * @alias module:model/InlineResponse20076
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse20076</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20076} obj Optional instance to populate.
   * @return {module:model/InlineResponse20076} The populated <code>InlineResponse20076</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20076();
      if (data.hasOwnProperty('data'))
        obj.data = HardwarePtzSettings.constructFromObject(data['data']);
      if (data.hasOwnProperty('tasks'))
        obj.tasks = ApiClient.convertToType(data['tasks'], [TaskList]);
      if (data.hasOwnProperty('resources'))
        obj.resources = ApiClient.convertToType(data['resources'], [ResourceList]);
    }
    return obj;
  }
}

/**
 * @member {module:model/HardwarePtzSettings} data
 */
InlineResponse20076.prototype.data = undefined;

/**
 * @member {Array.<module:model/TaskList>} tasks
 */
InlineResponse20076.prototype.tasks = undefined;

/**
 * @member {Array.<module:model/ResourceList>} resources
 */
InlineResponse20076.prototype.resources = undefined;

