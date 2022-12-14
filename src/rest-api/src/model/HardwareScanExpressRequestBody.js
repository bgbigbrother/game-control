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
 * The HardwareScanExpressRequestBody model module.
 * @module model/HardwareScanExpressRequestBody
 * @version 1.0.0
 */
export class HardwareScanExpressRequestBody {
  /**
   * Constructs a new <code>HardwareScanExpressRequestBody</code>.
   * @alias module:model/HardwareScanExpressRequestBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>HardwareScanExpressRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HardwareScanExpressRequestBody} obj Optional instance to populate.
   * @return {module:model/HardwareScanExpressRequestBody} The populated <code>HardwareScanExpressRequestBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new HardwareScanExpressRequestBody();
      if (data.hasOwnProperty('primaryUserName'))
        obj.primaryUserName = ApiClient.convertToType(data['primaryUserName'], 'String');
      if (data.hasOwnProperty('primaryPassword'))
        obj.primaryPassword = ApiClient.convertToType(data['primaryPassword'], 'String');
      if (data.hasOwnProperty('secondaryUserName'))
        obj.secondaryUserName = ApiClient.convertToType(data['secondaryUserName'], 'String');
      if (data.hasOwnProperty('secondaryPassword'))
        obj.secondaryPassword = ApiClient.convertToType(data['secondaryPassword'], 'String');
      if (data.hasOwnProperty('tertiaryUserName'))
        obj.tertiaryUserName = ApiClient.convertToType(data['tertiaryUserName'], 'String');
      if (data.hasOwnProperty('tertiaryPassword'))
        obj.tertiaryPassword = ApiClient.convertToType(data['tertiaryPassword'], 'String');
      if (data.hasOwnProperty('useDefaultCredentials'))
        obj.useDefaultCredentials = ApiClient.convertToType(data['useDefaultCredentials'], 'Boolean');
      if (data.hasOwnProperty('useSecurePort'))
        obj.useSecurePort = ApiClient.convertToType(data['useSecurePort'], 'Boolean');
    }
    return obj;
  }
}

/**
 * User name
 * @member {String} primaryUserName
 */
HardwareScanExpressRequestBody.prototype.primaryUserName = undefined;

/**
 * Password
 * @member {String} primaryPassword
 */
HardwareScanExpressRequestBody.prototype.primaryPassword = undefined;

/**
 * User name
 * @member {String} secondaryUserName
 */
HardwareScanExpressRequestBody.prototype.secondaryUserName = undefined;

/**
 * Password
 * @member {String} secondaryPassword
 */
HardwareScanExpressRequestBody.prototype.secondaryPassword = undefined;

/**
 * User name
 * @member {String} tertiaryUserName
 */
HardwareScanExpressRequestBody.prototype.tertiaryUserName = undefined;

/**
 * Password
 * @member {String} tertiaryPassword
 */
HardwareScanExpressRequestBody.prototype.tertiaryPassword = undefined;

/**
 * Use default credentials
 * @member {Boolean} useDefaultCredentials
 */
HardwareScanExpressRequestBody.prototype.useDefaultCredentials = undefined;

/**
 * Use HTTPS
 * @member {Boolean} useSecurePort
 */
HardwareScanExpressRequestBody.prototype.useSecurePort = undefined;

// Implement RecordingServersIdBody interface:
