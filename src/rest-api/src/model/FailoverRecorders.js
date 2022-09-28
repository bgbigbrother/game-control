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
import {FailoverRecordersRelations} from './FailoverRecordersRelations';

/**
 * The FailoverRecorders model module.
 * @module model/FailoverRecorders
 * @version 1.0.0
 */
export class FailoverRecorders {
  /**
   * Constructs a new <code>FailoverRecorders</code>.
   * Failover recorders
   * @alias module:model/FailoverRecorders
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>FailoverRecorders</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FailoverRecorders} obj Optional instance to populate.
   * @return {module:model/FailoverRecorders} The populated <code>FailoverRecorders</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FailoverRecorders();
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('hostName'))
        obj.hostName = ApiClient.convertToType(data['hostName'], 'String');
      if (data.hasOwnProperty('portNumber'))
        obj.portNumber = ApiClient.convertToType(data['portNumber'], 'Number');
      if (data.hasOwnProperty('webServerUri'))
        obj.webServerUri = ApiClient.convertToType(data['webServerUri'], 'String');
      if (data.hasOwnProperty('activeWebServerUri'))
        obj.activeWebServerUri = ApiClient.convertToType(data['activeWebServerUri'], 'String');
      if (data.hasOwnProperty('publicAccessEnabled'))
        obj.publicAccessEnabled = ApiClient.convertToType(data['publicAccessEnabled'], 'Boolean');
      if (data.hasOwnProperty('publicWebserverHostName'))
        obj.publicWebserverHostName = ApiClient.convertToType(data['publicWebserverHostName'], 'String');
      if (data.hasOwnProperty('publicWebserverPort'))
        obj.publicWebserverPort = ApiClient.convertToType(data['publicWebserverPort'], 'Number');
      if (data.hasOwnProperty('multicastServerAddress'))
        obj.multicastServerAddress = ApiClient.convertToType(data['multicastServerAddress'], 'String');
      if (data.hasOwnProperty('udpPort'))
        obj.udpPort = ApiClient.convertToType(data['udpPort'], 'Number');
      if (data.hasOwnProperty('position'))
        obj.position = ApiClient.convertToType(data['position'], 'Number');
      if (data.hasOwnProperty('databasePath'))
        obj.databasePath = ApiClient.convertToType(data['databasePath'], 'String');
      if (data.hasOwnProperty('createdDate'))
        obj.createdDate = ApiClient.convertToType(data['createdDate'], 'String');
      if (data.hasOwnProperty('lastModified'))
        obj.lastModified = ApiClient.convertToType(data['lastModified'], 'String');
      if (data.hasOwnProperty('relations'))
        obj.relations = FailoverRecordersRelations.constructFromObject(data['relations']);
    }
    return obj;
  }
}

/**
 * @member {Boolean} enabled
 */
FailoverRecorders.prototype.enabled = undefined;

/**
 * @member {String} displayName
 */
FailoverRecorders.prototype.displayName = undefined;

/**
 * ID
 * @member {String} id
 */
FailoverRecorders.prototype.id = undefined;

/**
 * Name
 * @member {String} name
 */
FailoverRecorders.prototype.name = undefined;

/**
 * Description
 * @member {String} description
 */
FailoverRecorders.prototype.description = undefined;

/**
 * Host name. Host name  of the recording server (deprecated, use *Web Server Uri*)
 * @member {String} hostName
 */
FailoverRecorders.prototype.hostName = undefined;

/**
 * Port number. Port number of the recording server (deprecated, use *Web Server Uri*)
 * @member {Number} portNumber
 */
FailoverRecorders.prototype.portNumber = undefined;

/**
 * Web Server Uri. Web Server Uri of the recording server
 * @member {String} webServerUri
 */
FailoverRecorders.prototype.webServerUri = undefined;

/**
 * Active Public Web server URI . Currently active public web server address 
 * @member {String} activeWebServerUri
 */
FailoverRecorders.prototype.activeWebServerUri = undefined;

/**
 * Public address enabled. Enable or disable the public address
 * @member {Boolean} publicAccessEnabled
 */
FailoverRecorders.prototype.publicAccessEnabled = undefined;

/**
 * Public recording server address. Public recording server address
 * @member {String} publicWebserverHostName
 */
FailoverRecorders.prototype.publicWebserverHostName = undefined;

/**
 * Public recording server port. Public recording server port
 * @member {Number} publicWebserverPort
 */
FailoverRecorders.prototype.publicWebserverPort = undefined;

/**
 * Multicast server address. Multicast server address
 * @member {String} multicastServerAddress
 */
FailoverRecorders.prototype.multicastServerAddress = undefined;

/**
 * Udp port. The port number used for communication between failover recording servers. Default port is 8844
 * @member {Number} udpPort
 */
FailoverRecorders.prototype.udpPort = undefined;

/**
 * Group position. Defines the order this failover server has in the group
 * @member {Number} position
 */
FailoverRecorders.prototype.position = undefined;

/**
 * Database location. Specify the path to the database used by the failover recording server for storing recordings. You cannot change the database path while the failover recording server is taking over from a recording server. The system applies the changes when the failover recording server is no longer taking over from a recording server. 
 * @member {String} databasePath
 */
FailoverRecorders.prototype.databasePath = undefined;

/**
 * Created date
 * @member {String} createdDate
 */
FailoverRecorders.prototype.createdDate = undefined;

/**
 * Last modified
 * @member {String} lastModified
 */
FailoverRecorders.prototype.lastModified = undefined;

/**
 * @member {module:model/FailoverRecordersRelations} relations
 */
FailoverRecorders.prototype.relations = undefined;

