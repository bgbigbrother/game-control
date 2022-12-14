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
 * The CopyRoleServerTask model module.
 * @module model/CopyRoleServerTask
 * @version 1.0.0
 */
export class CopyRoleServerTask {
  /**
   * Constructs a new <code>CopyRoleServerTask</code>.
   * Copy role
   * @alias module:model/CopyRoleServerTask
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CopyRoleServerTask</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CopyRoleServerTask} obj Optional instance to populate.
   * @return {module:model/CopyRoleServerTask} The populated <code>CopyRoleServerTask</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CopyRoleServerTask();
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('itemSelection'))
        obj.itemSelection = ApiClient.convertToType(data['itemSelection'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} displayName
 */
CopyRoleServerTask.prototype.displayName = undefined;

/**
 * Allowed values for the <code>itemSelection</code> property.
 * @enum {String}
 * @readonly
 */
CopyRoleServerTask.ItemSelectionEnum = {
  /**
   * value: "Role[1194EF37-40A2-4482-B52C-F54965C060FA]"
   * @const
   */
  _1194EF3740A24482B52CF54965C060FA: "Role[1194EF37-40A2-4482-B52C-F54965C060FA]",

  /**
   * value: "Role[1f30d14b-ba91-4e8a-8838-eda17931f8fc]"
   * @const
   */
  _1f30d14bBa914e8a8838Eda17931f8fc: "Role[1f30d14b-ba91-4e8a-8838-eda17931f8fc]",

  /**
   * value: "Role[5D9D9C02-5C39-4A9B-98D1-31C56ABDBBE3]"
   * @const
   */
  _5D9D9C025C394A9B98D131C56ABDBBE3: "Role[5D9D9C02-5C39-4A9B-98D1-31C56ABDBBE3]",

  /**
   * value: "Role[9C46D2ED-FAAE-4C84-886C-D99D045AE3CB]"
   * @const
   */
  _9C46D2EDFAAE4C84886CD99D045AE3CB: "Role[9C46D2ED-FAAE-4C84-886C-D99D045AE3CB]",

  /**
   * value: "Role[AFE8A119-C4F7-46CE-9609-F66453D9325A]"
   * @const
   */
  aFE8A119C4F746CE9609F66453D9325A: "Role[AFE8A119-C4F7-46CE-9609-F66453D9325A]"
};
/**
 * Copy role. .
 * @member {module:model/CopyRoleServerTask.ItemSelectionEnum} itemSelection
 */
CopyRoleServerTask.prototype.itemSelection = undefined;

/**
 * Name
 * @member {String} name
 */
CopyRoleServerTask.prototype.name = undefined;

/**
 * Description
 * @member {String} description
 */
CopyRoleServerTask.prototype.description = undefined;

