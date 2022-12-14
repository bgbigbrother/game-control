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
 * The ClientProfileAccessControls model module.
 * @module model/ClientProfileAccessControls
 * @version 1.0.0
 */
export class ClientProfileAccessControls {
  /**
   * Constructs a new <code>ClientProfileAccessControls</code>.
   * @alias module:model/ClientProfileAccessControls
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ClientProfileAccessControls</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientProfileAccessControls} obj Optional instance to populate.
   * @return {module:model/ClientProfileAccessControls} The populated <code>ClientProfileAccessControls</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ClientProfileAccessControls();
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('showAccessRequestNotifications'))
        obj.showAccessRequestNotifications = ApiClient.convertToType(data['showAccessRequestNotifications'], 'String');
      if (data.hasOwnProperty('showAccessRequestNotificationsLocked'))
        obj.showAccessRequestNotificationsLocked = ApiClient.convertToType(data['showAccessRequestNotificationsLocked'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {String} displayName
 */
ClientProfileAccessControls.prototype.displayName = undefined;

/**
 * Allowed values for the <code>showAccessRequestNotifications</code> property.
 * @enum {String}
 * @readonly
 */
ClientProfileAccessControls.ShowAccessRequestNotificationsEnum = {
  /**
   * value: "Yes"
   * @const
   */
  yes: "Yes",

  /**
   * value: "No"
   * @const
   */
  no: "No"
};
/**
 * Show access request notifications. Value map to display names:  Yes=Yes   No=No   
 * @member {module:model/ClientProfileAccessControls.ShowAccessRequestNotificationsEnum} showAccessRequestNotifications
 */
ClientProfileAccessControls.prototype.showAccessRequestNotifications = undefined;

/**
 * Show access request notifications (Locked)
 * @member {Boolean} showAccessRequestNotificationsLocked
 */
ClientProfileAccessControls.prototype.showAccessRequestNotificationsLocked = undefined;

