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
import {LoginProvidersRelations} from './LoginProvidersRelations';

/**
 * The LoginProviders model module.
 * @module model/LoginProviders
 * @version 1.0.0
 */
export class LoginProviders {
  /**
   * Constructs a new <code>LoginProviders</code>.
   * External IDP
   * @alias module:model/LoginProviders
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>LoginProviders</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LoginProviders} obj Optional instance to populate.
   * @return {module:model/LoginProviders} The populated <code>LoginProviders</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new LoginProviders();
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('clientId'))
        obj.clientId = ApiClient.convertToType(data['clientId'], 'String');
      if (data.hasOwnProperty('clientSecret'))
        obj.clientSecret = ApiClient.convertToType(data['clientSecret'], 'String');
      if (data.hasOwnProperty('clientSecretHasValue'))
        obj.clientSecretHasValue = ApiClient.convertToType(data['clientSecretHasValue'], 'Boolean');
      if (data.hasOwnProperty('authority'))
        obj.authority = ApiClient.convertToType(data['authority'], 'String');
      if (data.hasOwnProperty('callbackPath'))
        obj.callbackPath = ApiClient.convertToType(data['callbackPath'], 'String');
      if (data.hasOwnProperty('scopes'))
        obj.scopes = ApiClient.convertToType(data['scopes'], ['String']);
      if (data.hasOwnProperty('userNameClaimType'))
        obj.userNameClaimType = ApiClient.convertToType(data['userNameClaimType'], 'String');
      if (data.hasOwnProperty('promptForLogin'))
        obj.promptForLogin = ApiClient.convertToType(data['promptForLogin'], 'Boolean');
      if (data.hasOwnProperty('relations'))
        obj.relations = LoginProvidersRelations.constructFromObject(data['relations']);
    }
    return obj;
  }
}

/**
 * @member {Boolean} enabled
 */
LoginProviders.prototype.enabled = undefined;

/**
 * @member {String} displayName
 */
LoginProviders.prototype.displayName = undefined;

/**
 * ID
 * @member {String} id
 */
LoginProviders.prototype.id = undefined;

/**
 * Name
 * @member {String} name
 */
LoginProviders.prototype.name = undefined;

/**
 * Client ID. Client ID is retrieved as part of registering with the external IDP
 * @member {String} clientId
 */
LoginProviders.prototype.clientId = undefined;

/**
 * Client secret. Client secret is retrieved as part of registering with the external IDP
 * @member {String} clientSecret
 */
LoginProviders.prototype.clientSecret = undefined;

/**
 * Client secret has value. Tells if the client secret stored on the server has a value or not.
 * @member {Boolean} clientSecretHasValue
 */
LoginProviders.prototype.clientSecretHasValue = undefined;

/**
 * Authentication authority. Authentication authority for the external IDP
 * @member {String} authority
 */
LoginProviders.prototype.authority = undefined;

/**
 * Callback path. Callback path for the identity provider
 * @member {String} callbackPath
 */
LoginProviders.prototype.callbackPath = undefined;

/**
 * Scopes. Scopes to include in queries to external IDP
 * @member {Array.<String>} scopes
 */
LoginProviders.prototype.scopes = undefined;

/**
 * Preferred user name claim. The name of the claim used for generating unique user names for the local users
 * @member {String} userNameClaimType
 */
LoginProviders.prototype.userNameClaimType = undefined;

/**
 * Prompt for login. Determines whether users will be prompted for credentials every time they log on
 * @member {Boolean} promptForLogin
 */
LoginProviders.prototype.promptForLogin = undefined;

/**
 * @member {module:model/LoginProvidersRelations} relations
 */
LoginProviders.prototype.relations = undefined;
