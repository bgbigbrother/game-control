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
import {ArchiveStorageInformationRelationsSelf} from './ArchiveStorageInformationRelationsSelf';
import {ArchiveStoragesRelationsSelf} from './ArchiveStoragesRelationsSelf';

/**
 * The ArchiveStorageInformationRelations model module.
 * @module model/ArchiveStorageInformationRelations
 * @version 1.0.0
 */
export class ArchiveStorageInformationRelations {
  /**
   * Constructs a new <code>ArchiveStorageInformationRelations</code>.
   * @alias module:model/ArchiveStorageInformationRelations
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ArchiveStorageInformationRelations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ArchiveStorageInformationRelations} obj Optional instance to populate.
   * @return {module:model/ArchiveStorageInformationRelations} The populated <code>ArchiveStorageInformationRelations</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ArchiveStorageInformationRelations();
      if (data.hasOwnProperty('self'))
        obj.self = ArchiveStorageInformationRelationsSelf.constructFromObject(data['self']);
      if (data.hasOwnProperty('parent'))
        obj.parent = ArchiveStoragesRelationsSelf.constructFromObject(data['parent']);
    }
    return obj;
  }
}

/**
 * @member {module:model/ArchiveStorageInformationRelationsSelf} self
 */
ArchiveStorageInformationRelations.prototype.self = undefined;

/**
 * @member {module:model/ArchiveStoragesRelationsSelf} parent
 */
ArchiveStorageInformationRelations.prototype.parent = undefined;

