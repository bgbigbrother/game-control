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
import {ArchiveStorageInformation} from './ArchiveStorageInformation';
import {ResourceList} from './ResourceList';
import {TaskList} from './TaskList';

/**
 * The InlineResponse20013 model module.
 * @module model/InlineResponse20013
 * @version 1.0.0
 */
export class InlineResponse20013 {
  /**
   * Constructs a new <code>InlineResponse20013</code>.
   * @alias module:model/InlineResponse20013
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse20013</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20013} obj Optional instance to populate.
   * @return {module:model/InlineResponse20013} The populated <code>InlineResponse20013</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20013();
      if (data.hasOwnProperty('data'))
        obj.data = ArchiveStorageInformation.constructFromObject(data['data']);
      if (data.hasOwnProperty('tasks'))
        obj.tasks = ApiClient.convertToType(data['tasks'], [TaskList]);
      if (data.hasOwnProperty('resources'))
        obj.resources = ApiClient.convertToType(data['resources'], [ResourceList]);
    }
    return obj;
  }
}

/**
 * @member {module:model/ArchiveStorageInformation} data
 */
InlineResponse20013.prototype.data = undefined;

/**
 * @member {Array.<module:model/TaskList>} tasks
 */
InlineResponse20013.prototype.tasks = undefined;

/**
 * @member {Array.<module:model/ResourceList>} resources
 */
InlineResponse20013.prototype.resources = undefined;
