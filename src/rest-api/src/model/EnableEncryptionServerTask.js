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
 * The EnableEncryptionServerTask model module.
 * @module model/EnableEncryptionServerTask
 * @version 1.0.0
 */
export class EnableEncryptionServerTask {
  /**
   * Constructs a new <code>EnableEncryptionServerTask</code>.
   * Enable encryption on recording storage
   * @alias module:model/EnableEncryptionServerTask
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>EnableEncryptionServerTask</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnableEncryptionServerTask} obj Optional instance to populate.
   * @return {module:model/EnableEncryptionServerTask} The populated <code>EnableEncryptionServerTask</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EnableEncryptionServerTask();
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('password'))
        obj.password = ApiClient.convertToType(data['password'], 'String');
      if (data.hasOwnProperty('encryptionMethod'))
        obj.encryptionMethod = ApiClient.convertToType(data['encryptionMethod'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} displayName
 */
EnableEncryptionServerTask.prototype.displayName = undefined;

/**
 * Encryption password. Encryption password for recording storage
 * @member {String} password
 */
EnableEncryptionServerTask.prototype.password = undefined;

/**
 * Allowed values for the <code>encryptionMethod</code> property.
 * @enum {String}
 * @readonly
 */
EnableEncryptionServerTask.EncryptionMethodEnum = {
  /**
   * value: "None"
   * @const
   */
  none: "None",

  /**
   * value: "Light"
   * @const
   */
  light: "Light",

  /**
   * value: "Strong"
   * @const
   */
  strong: "Strong"
};
/**
 * Encryption. Specifies the strength of the encryption. Value map to display names:  None=None   Light=Light   Strong=Strong   
 * @member {module:model/EnableEncryptionServerTask.EncryptionMethodEnum} encryptionMethod
 */
EnableEncryptionServerTask.prototype.encryptionMethod = undefined;

// Implement OneOfinlineResponse200155Result interface:
