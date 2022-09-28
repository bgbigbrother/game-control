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
 * The LicenseInformationsIdBody model module.
 * @module model/LicenseInformationsIdBody
 * @version 1.0.0
 */
export class LicenseInformationsIdBody {
  /**
   * Constructs a new <code>LicenseInformationsIdBody</code>.
   * @alias module:model/LicenseInformationsIdBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>LicenseInformationsIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LicenseInformationsIdBody} obj Optional instance to populate.
   * @return {module:model/LicenseInformationsIdBody} The populated <code>LicenseInformationsIdBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new LicenseInformationsIdBody();
    }
    return obj;
  }
}
