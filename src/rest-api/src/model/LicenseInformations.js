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
import {LicenseInformationsRelations} from './LicenseInformationsRelations';

/**
 * The LicenseInformations model module.
 * @module model/LicenseInformations
 * @version 1.0.0
 */
export class LicenseInformations {
  /**
   * Constructs a new <code>LicenseInformations</code>.
   * License information
   * @alias module:model/LicenseInformations
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>LicenseInformations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LicenseInformations} obj Optional instance to populate.
   * @return {module:model/LicenseInformations} The populated <code>LicenseInformations</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new LicenseInformations();
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('slc'))
        obj.slc = ApiClient.convertToType(data['slc'], 'String');
      if (data.hasOwnProperty('sku'))
        obj.sku = ApiClient.convertToType(data['sku'], 'String');
      if (data.hasOwnProperty('careLevel'))
        obj.careLevel = ApiClient.convertToType(data['careLevel'], 'String');
      if (data.hasOwnProperty('careId'))
        obj.careId = ApiClient.convertToType(data['careId'], 'String');
      if (data.hasOwnProperty('activationAutomatic'))
        obj.activationAutomatic = ApiClient.convertToType(data['activationAutomatic'], 'Boolean');
      if (data.hasOwnProperty('relations'))
        obj.relations = LicenseInformationsRelations.constructFromObject(data['relations']);
    }
    return obj;
  }
}

/**
 * @member {String} displayName
 */
LicenseInformations.prototype.displayName = undefined;

/**
 * Software License Code
 * @member {String} slc
 */
LicenseInformations.prototype.slc = undefined;

/**
 * Product SKU
 * @member {String} sku
 */
LicenseInformations.prototype.sku = undefined;

/**
 * Care level
 * @member {String} careLevel
 */
LicenseInformations.prototype.careLevel = undefined;

/**
 * Care ID
 * @member {String} careId
 */
LicenseInformations.prototype.careId = undefined;

/**
 * Enable automatic license activation
 * @member {Boolean} activationAutomatic
 */
LicenseInformations.prototype.activationAutomatic = undefined;

/**
 * @member {module:model/LicenseInformationsRelations} relations
 */
LicenseInformations.prototype.relations = undefined;

