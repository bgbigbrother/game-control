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
 * The SystemAddresses model module.
 * @module model/SystemAddresses
 * @version 1.0.0
 */
export class SystemAddresses {
  /**
   * Constructs a new <code>SystemAddresses</code>.
   * Address
   * @alias module:model/SystemAddresses
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SystemAddresses</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SystemAddresses} obj Optional instance to populate.
   * @return {module:model/SystemAddresses} The populated <code>SystemAddresses</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SystemAddresses();
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('addressType'))
        obj.addressType = ApiClient.convertToType(data['addressType'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} displayName
 */
SystemAddresses.prototype.displayName = undefined;

/**
 * URL
 * @member {String} url
 */
SystemAddresses.prototype.url = undefined;

/**
 * Allowed values for the <code>addressType</code> property.
 * @enum {String}
 * @readonly
 */
SystemAddresses.AddressTypeEnum = {
  /**
   * value: "Internal"
   * @const
   */
  internal: "Internal",

  /**
   * value: "External"
   * @const
   */
  external: "External",

  /**
   * value: "Server"
   * @const
   */
  server: "Server"
};
/**
 * Type. Value map to display names:  Internal=Internal   External=External   Server=Server   
 * @member {module:model/SystemAddresses.AddressTypeEnum} addressType
 */
SystemAddresses.prototype.addressType = undefined;
