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
import {TimeProfileAppointmentRecur} from './TimeProfileAppointmentRecur';
import {TimeProfileAppointmentRoot} from './TimeProfileAppointmentRoot';
import {TimeProfilesRelations} from './TimeProfilesRelations';

/**
 * The TimeProfiles model module.
 * @module model/TimeProfiles
 * @version 1.0.0
 */
export class TimeProfiles {
  /**
   * Constructs a new <code>TimeProfiles</code>.
   * Time profile
   * @alias module:model/TimeProfiles
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TimeProfiles</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TimeProfiles} obj Optional instance to populate.
   * @return {module:model/TimeProfiles} The populated <code>TimeProfiles</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TimeProfiles();
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('lastModified'))
        obj.lastModified = ApiClient.convertToType(data['lastModified'], 'String');
      if (data.hasOwnProperty('timeProfileType'))
        obj.timeProfileType = ApiClient.convertToType(data['timeProfileType'], 'String');
      if (data.hasOwnProperty('sunclockGPSCoordinate'))
        obj.sunclockGPSCoordinate = ApiClient.convertToType(data['sunclockGPSCoordinate'], 'String');
      if (data.hasOwnProperty('sunclockSunRise'))
        obj.sunclockSunRise = ApiClient.convertToType(data['sunclockSunRise'], 'Number');
      if (data.hasOwnProperty('sunclockSunSet'))
        obj.sunclockSunSet = ApiClient.convertToType(data['sunclockSunSet'], 'Number');
      if (data.hasOwnProperty('sunclockTimeZone'))
        obj.sunclockTimeZone = ApiClient.convertToType(data['sunclockTimeZone'], 'String');
      if (data.hasOwnProperty('timeProfileAppointmentRecur'))
        obj.timeProfileAppointmentRecur = TimeProfileAppointmentRecur.constructFromObject(data['timeProfileAppointmentRecur']);
      if (data.hasOwnProperty('timeProfileAppointmentRoot'))
        obj.timeProfileAppointmentRoot = TimeProfileAppointmentRoot.constructFromObject(data['timeProfileAppointmentRoot']);
      if (data.hasOwnProperty('relations'))
        obj.relations = TimeProfilesRelations.constructFromObject(data['relations']);
    }
    return obj;
  }
}

/**
 * @member {String} displayName
 */
TimeProfiles.prototype.displayName = undefined;

/**
 * ID
 * @member {String} id
 */
TimeProfiles.prototype.id = undefined;

/**
 * Name
 * @member {String} name
 */
TimeProfiles.prototype.name = undefined;

/**
 * Description
 * @member {String} description
 */
TimeProfiles.prototype.description = undefined;

/**
 * Last modified
 * @member {String} lastModified
 */
TimeProfiles.prototype.lastModified = undefined;

/**
 * Allowed values for the <code>timeProfileType</code> property.
 * @enum {String}
 * @readonly
 */
TimeProfiles.TimeProfileTypeEnum = {
  /**
   * value: "Sunclock"
   * @const
   */
  sunclock: "Sunclock",

  /**
   * value: "Calendar"
   * @const
   */
  calendar: "Calendar"
};
/**
 * Time profile type. Value map to display names:  Sunclock=Sunclock   Calendar=Calendar   
 * @member {module:model/TimeProfiles.TimeProfileTypeEnum} timeProfileType
 */
TimeProfiles.prototype.timeProfileType = undefined;

/**
 * GPS coordinates. The GIS location for the calculation, impacts day length when far north or far south, for example N40.7083 W74.0086, or 40.7083 -74.0086
 * @member {String} sunclockGPSCoordinate
 */
TimeProfiles.prototype.sunclockGPSCoordinate = undefined;

/**
 * Offset to sunrise in minutes. Offset to calculated sunrise in minutes, from -120 to 120
 * @member {Number} sunclockSunRise
 */
TimeProfiles.prototype.sunclockSunRise = undefined;

/**
 * Offset to sunset in minutes. Offset to calculated sunset in minutes, from -120 to 120
 * @member {Number} sunclockSunSet
 */
TimeProfiles.prototype.sunclockSunSet = undefined;

/**
 * Allowed values for the <code>sunclockTimeZone</code> property.
 * @enum {String}
 * @readonly
 */
TimeProfiles.SunclockTimeZoneEnum = {
  /**
   * value: "Dateline Standard Time"
   * @const
   */
  datelineStandardTime: "Dateline Standard Time",

  /**
   * value: "UTC-11"
   * @const
   */
  uTC11: "UTC-11",

  /**
   * value: "Aleutian Standard Time"
   * @const
   */
  aleutianStandardTime: "Aleutian Standard Time",

  /**
   * value: "Hawaiian Standard Time"
   * @const
   */
  hawaiianStandardTime: "Hawaiian Standard Time",

  /**
   * value: "Marquesas Standard Time"
   * @const
   */
  marquesasStandardTime: "Marquesas Standard Time",

  /**
   * value: "Alaskan Standard Time"
   * @const
   */
  alaskanStandardTime: "Alaskan Standard Time",

  /**
   * value: "UTC-09"
   * @const
   */
  uTC09: "UTC-09",

  /**
   * value: "Pacific Standard Time (Mexico)"
   * @const
   */
  pacificStandardTimeMexico: "Pacific Standard Time (Mexico)",

  /**
   * value: "UTC-08"
   * @const
   */
  uTC08: "UTC-08",

  /**
   * value: "Pacific Standard Time"
   * @const
   */
  pacificStandardTime: "Pacific Standard Time",

  /**
   * value: "US Mountain Standard Time"
   * @const
   */
  uSMountainStandardTime: "US Mountain Standard Time",

  /**
   * value: "Mountain Standard Time (Mexico)"
   * @const
   */
  mountainStandardTimeMexico: "Mountain Standard Time (Mexico)",

  /**
   * value: "Mountain Standard Time"
   * @const
   */
  mountainStandardTime: "Mountain Standard Time",

  /**
   * value: "Yukon Standard Time"
   * @const
   */
  yukonStandardTime: "Yukon Standard Time",

  /**
   * value: "Central America Standard Time"
   * @const
   */
  centralAmericaStandardTime: "Central America Standard Time",

  /**
   * value: "Central Standard Time"
   * @const
   */
  centralStandardTime: "Central Standard Time",

  /**
   * value: "Easter Island Standard Time"
   * @const
   */
  easterIslandStandardTime: "Easter Island Standard Time",

  /**
   * value: "Central Standard Time (Mexico)"
   * @const
   */
  centralStandardTimeMexico: "Central Standard Time (Mexico)",

  /**
   * value: "Canada Central Standard Time"
   * @const
   */
  canadaCentralStandardTime: "Canada Central Standard Time",

  /**
   * value: "SA Pacific Standard Time"
   * @const
   */
  sAPacificStandardTime: "SA Pacific Standard Time",

  /**
   * value: "Eastern Standard Time (Mexico)"
   * @const
   */
  easternStandardTimeMexico: "Eastern Standard Time (Mexico)",

  /**
   * value: "Eastern Standard Time"
   * @const
   */
  easternStandardTime: "Eastern Standard Time",

  /**
   * value: "Haiti Standard Time"
   * @const
   */
  haitiStandardTime: "Haiti Standard Time",

  /**
   * value: "Cuba Standard Time"
   * @const
   */
  cubaStandardTime: "Cuba Standard Time",

  /**
   * value: "US Eastern Standard Time"
   * @const
   */
  uSEasternStandardTime: "US Eastern Standard Time",

  /**
   * value: "Turks And Caicos Standard Time"
   * @const
   */
  turksAndCaicosStandardTime: "Turks And Caicos Standard Time",

  /**
   * value: "Paraguay Standard Time"
   * @const
   */
  paraguayStandardTime: "Paraguay Standard Time",

  /**
   * value: "Atlantic Standard Time"
   * @const
   */
  atlanticStandardTime: "Atlantic Standard Time",

  /**
   * value: "Venezuela Standard Time"
   * @const
   */
  venezuelaStandardTime: "Venezuela Standard Time",

  /**
   * value: "Central Brazilian Standard Time"
   * @const
   */
  centralBrazilianStandardTime: "Central Brazilian Standard Time",

  /**
   * value: "SA Western Standard Time"
   * @const
   */
  sAWesternStandardTime: "SA Western Standard Time",

  /**
   * value: "Pacific SA Standard Time"
   * @const
   */
  pacificSAStandardTime: "Pacific SA Standard Time",

  /**
   * value: "Newfoundland Standard Time"
   * @const
   */
  newfoundlandStandardTime: "Newfoundland Standard Time",

  /**
   * value: "Tocantins Standard Time"
   * @const
   */
  tocantinsStandardTime: "Tocantins Standard Time",

  /**
   * value: "E. South America Standard Time"
   * @const
   */
  eSouthAmericaStandardTime: "E. South America Standard Time",

  /**
   * value: "SA Eastern Standard Time"
   * @const
   */
  sAEasternStandardTime: "SA Eastern Standard Time",

  /**
   * value: "Argentina Standard Time"
   * @const
   */
  argentinaStandardTime: "Argentina Standard Time",

  /**
   * value: "Greenland Standard Time"
   * @const
   */
  greenlandStandardTime: "Greenland Standard Time",

  /**
   * value: "Montevideo Standard Time"
   * @const
   */
  montevideoStandardTime: "Montevideo Standard Time",

  /**
   * value: "Magallanes Standard Time"
   * @const
   */
  magallanesStandardTime: "Magallanes Standard Time",

  /**
   * value: "Saint Pierre Standard Time"
   * @const
   */
  saintPierreStandardTime: "Saint Pierre Standard Time",

  /**
   * value: "Bahia Standard Time"
   * @const
   */
  bahiaStandardTime: "Bahia Standard Time",

  /**
   * value: "UTC-02"
   * @const
   */
  uTC02: "UTC-02",

  /**
   * value: "Mid-Atlantic Standard Time"
   * @const
   */
  midAtlanticStandardTime: "Mid-Atlantic Standard Time",

  /**
   * value: "Azores Standard Time"
   * @const
   */
  azoresStandardTime: "Azores Standard Time",

  /**
   * value: "Cape Verde Standard Time"
   * @const
   */
  capeVerdeStandardTime: "Cape Verde Standard Time",

  /**
   * value: "UTC"
   * @const
   */
  UTC: "UTC",

  /**
   * value: "GMT Standard Time"
   * @const
   */
  gMTStandardTime: "GMT Standard Time",

  /**
   * value: "Greenwich Standard Time"
   * @const
   */
  greenwichStandardTime: "Greenwich Standard Time",

  /**
   * value: "Sao Tome Standard Time"
   * @const
   */
  saoTomeStandardTime: "Sao Tome Standard Time",

  /**
   * value: "Morocco Standard Time"
   * @const
   */
  moroccoStandardTime: "Morocco Standard Time",

  /**
   * value: "W. Europe Standard Time"
   * @const
   */
  wEuropeStandardTime: "W. Europe Standard Time",

  /**
   * value: "Central Europe Standard Time"
   * @const
   */
  centralEuropeStandardTime: "Central Europe Standard Time",

  /**
   * value: "Romance Standard Time"
   * @const
   */
  romanceStandardTime: "Romance Standard Time",

  /**
   * value: "Central European Standard Time"
   * @const
   */
  centralEuropeanStandardTime: "Central European Standard Time",

  /**
   * value: "W. Central Africa Standard Time"
   * @const
   */
  wCentralAfricaStandardTime: "W. Central Africa Standard Time",

  /**
   * value: "Jordan Standard Time"
   * @const
   */
  jordanStandardTime: "Jordan Standard Time",

  /**
   * value: "GTB Standard Time"
   * @const
   */
  gTBStandardTime: "GTB Standard Time",

  /**
   * value: "Middle East Standard Time"
   * @const
   */
  middleEastStandardTime: "Middle East Standard Time",

  /**
   * value: "Egypt Standard Time"
   * @const
   */
  egyptStandardTime: "Egypt Standard Time",

  /**
   * value: "E. Europe Standard Time"
   * @const
   */
  eEuropeStandardTime: "E. Europe Standard Time",

  /**
   * value: "Syria Standard Time"
   * @const
   */
  syriaStandardTime: "Syria Standard Time",

  /**
   * value: "West Bank Standard Time"
   * @const
   */
  westBankStandardTime: "West Bank Standard Time",

  /**
   * value: "South Africa Standard Time"
   * @const
   */
  southAfricaStandardTime: "South Africa Standard Time",

  /**
   * value: "FLE Standard Time"
   * @const
   */
  fLEStandardTime: "FLE Standard Time",

  /**
   * value: "Israel Standard Time"
   * @const
   */
  israelStandardTime: "Israel Standard Time",

  /**
   * value: "South Sudan Standard Time"
   * @const
   */
  southSudanStandardTime: "South Sudan Standard Time",

  /**
   * value: "Kaliningrad Standard Time"
   * @const
   */
  kaliningradStandardTime: "Kaliningrad Standard Time",

  /**
   * value: "Sudan Standard Time"
   * @const
   */
  sudanStandardTime: "Sudan Standard Time",

  /**
   * value: "Libya Standard Time"
   * @const
   */
  libyaStandardTime: "Libya Standard Time",

  /**
   * value: "Namibia Standard Time"
   * @const
   */
  namibiaStandardTime: "Namibia Standard Time",

  /**
   * value: "Arabic Standard Time"
   * @const
   */
  arabicStandardTime: "Arabic Standard Time",

  /**
   * value: "Turkey Standard Time"
   * @const
   */
  turkeyStandardTime: "Turkey Standard Time",

  /**
   * value: "Arab Standard Time"
   * @const
   */
  arabStandardTime: "Arab Standard Time",

  /**
   * value: "Belarus Standard Time"
   * @const
   */
  belarusStandardTime: "Belarus Standard Time",

  /**
   * value: "Russian Standard Time"
   * @const
   */
  russianStandardTime: "Russian Standard Time",

  /**
   * value: "E. Africa Standard Time"
   * @const
   */
  eAfricaStandardTime: "E. Africa Standard Time",

  /**
   * value: "Volgograd Standard Time"
   * @const
   */
  volgogradStandardTime: "Volgograd Standard Time",

  /**
   * value: "Iran Standard Time"
   * @const
   */
  iranStandardTime: "Iran Standard Time",

  /**
   * value: "Arabian Standard Time"
   * @const
   */
  arabianStandardTime: "Arabian Standard Time",

  /**
   * value: "Astrakhan Standard Time"
   * @const
   */
  astrakhanStandardTime: "Astrakhan Standard Time",

  /**
   * value: "Azerbaijan Standard Time"
   * @const
   */
  azerbaijanStandardTime: "Azerbaijan Standard Time",

  /**
   * value: "Russia Time Zone 3"
   * @const
   */
  russiaTimeZone3: "Russia Time Zone 3",

  /**
   * value: "Mauritius Standard Time"
   * @const
   */
  mauritiusStandardTime: "Mauritius Standard Time",

  /**
   * value: "Saratov Standard Time"
   * @const
   */
  saratovStandardTime: "Saratov Standard Time",

  /**
   * value: "Georgian Standard Time"
   * @const
   */
  georgianStandardTime: "Georgian Standard Time",

  /**
   * value: "Caucasus Standard Time"
   * @const
   */
  caucasusStandardTime: "Caucasus Standard Time",

  /**
   * value: "Afghanistan Standard Time"
   * @const
   */
  afghanistanStandardTime: "Afghanistan Standard Time",

  /**
   * value: "West Asia Standard Time"
   * @const
   */
  westAsiaStandardTime: "West Asia Standard Time",

  /**
   * value: "Ekaterinburg Standard Time"
   * @const
   */
  ekaterinburgStandardTime: "Ekaterinburg Standard Time",

  /**
   * value: "Pakistan Standard Time"
   * @const
   */
  pakistanStandardTime: "Pakistan Standard Time",

  /**
   * value: "Qyzylorda Standard Time"
   * @const
   */
  qyzylordaStandardTime: "Qyzylorda Standard Time",

  /**
   * value: "India Standard Time"
   * @const
   */
  indiaStandardTime: "India Standard Time",

  /**
   * value: "Sri Lanka Standard Time"
   * @const
   */
  sriLankaStandardTime: "Sri Lanka Standard Time",

  /**
   * value: "Nepal Standard Time"
   * @const
   */
  nepalStandardTime: "Nepal Standard Time",

  /**
   * value: "Central Asia Standard Time"
   * @const
   */
  centralAsiaStandardTime: "Central Asia Standard Time",

  /**
   * value: "Bangladesh Standard Time"
   * @const
   */
  bangladeshStandardTime: "Bangladesh Standard Time",

  /**
   * value: "Omsk Standard Time"
   * @const
   */
  omskStandardTime: "Omsk Standard Time",

  /**
   * value: "Myanmar Standard Time"
   * @const
   */
  myanmarStandardTime: "Myanmar Standard Time",

  /**
   * value: "SE Asia Standard Time"
   * @const
   */
  sEAsiaStandardTime: "SE Asia Standard Time",

  /**
   * value: "Altai Standard Time"
   * @const
   */
  altaiStandardTime: "Altai Standard Time",

  /**
   * value: "W. Mongolia Standard Time"
   * @const
   */
  wMongoliaStandardTime: "W. Mongolia Standard Time",

  /**
   * value: "North Asia Standard Time"
   * @const
   */
  northAsiaStandardTime: "North Asia Standard Time",

  /**
   * value: "N. Central Asia Standard Time"
   * @const
   */
  nCentralAsiaStandardTime: "N. Central Asia Standard Time",

  /**
   * value: "Tomsk Standard Time"
   * @const
   */
  tomskStandardTime: "Tomsk Standard Time",

  /**
   * value: "China Standard Time"
   * @const
   */
  chinaStandardTime: "China Standard Time",

  /**
   * value: "North Asia East Standard Time"
   * @const
   */
  northAsiaEastStandardTime: "North Asia East Standard Time",

  /**
   * value: "Singapore Standard Time"
   * @const
   */
  singaporeStandardTime: "Singapore Standard Time",

  /**
   * value: "W. Australia Standard Time"
   * @const
   */
  wAustraliaStandardTime: "W. Australia Standard Time",

  /**
   * value: "Taipei Standard Time"
   * @const
   */
  taipeiStandardTime: "Taipei Standard Time",

  /**
   * value: "Ulaanbaatar Standard Time"
   * @const
   */
  ulaanbaatarStandardTime: "Ulaanbaatar Standard Time",

  /**
   * value: "Aus Central W. Standard Time"
   * @const
   */
  ausCentralWStandardTime: "Aus Central W. Standard Time",

  /**
   * value: "Transbaikal Standard Time"
   * @const
   */
  transbaikalStandardTime: "Transbaikal Standard Time",

  /**
   * value: "Tokyo Standard Time"
   * @const
   */
  tokyoStandardTime: "Tokyo Standard Time",

  /**
   * value: "North Korea Standard Time"
   * @const
   */
  northKoreaStandardTime: "North Korea Standard Time",

  /**
   * value: "Korea Standard Time"
   * @const
   */
  koreaStandardTime: "Korea Standard Time",

  /**
   * value: "Yakutsk Standard Time"
   * @const
   */
  yakutskStandardTime: "Yakutsk Standard Time",

  /**
   * value: "Cen. Australia Standard Time"
   * @const
   */
  cenAustraliaStandardTime: "Cen. Australia Standard Time",

  /**
   * value: "AUS Central Standard Time"
   * @const
   */
  aUSCentralStandardTime: "AUS Central Standard Time",

  /**
   * value: "E. Australia Standard Time"
   * @const
   */
  eAustraliaStandardTime: "E. Australia Standard Time",

  /**
   * value: "AUS Eastern Standard Time"
   * @const
   */
  aUSEasternStandardTime: "AUS Eastern Standard Time",

  /**
   * value: "West Pacific Standard Time"
   * @const
   */
  westPacificStandardTime: "West Pacific Standard Time",

  /**
   * value: "Tasmania Standard Time"
   * @const
   */
  tasmaniaStandardTime: "Tasmania Standard Time",

  /**
   * value: "Vladivostok Standard Time"
   * @const
   */
  vladivostokStandardTime: "Vladivostok Standard Time",

  /**
   * value: "Lord Howe Standard Time"
   * @const
   */
  lordHoweStandardTime: "Lord Howe Standard Time",

  /**
   * value: "Bougainville Standard Time"
   * @const
   */
  bougainvilleStandardTime: "Bougainville Standard Time",

  /**
   * value: "Russia Time Zone 10"
   * @const
   */
  russiaTimeZone10: "Russia Time Zone 10",

  /**
   * value: "Magadan Standard Time"
   * @const
   */
  magadanStandardTime: "Magadan Standard Time",

  /**
   * value: "Norfolk Standard Time"
   * @const
   */
  norfolkStandardTime: "Norfolk Standard Time",

  /**
   * value: "Sakhalin Standard Time"
   * @const
   */
  sakhalinStandardTime: "Sakhalin Standard Time",

  /**
   * value: "Central Pacific Standard Time"
   * @const
   */
  centralPacificStandardTime: "Central Pacific Standard Time",

  /**
   * value: "Russia Time Zone 11"
   * @const
   */
  russiaTimeZone11: "Russia Time Zone 11",

  /**
   * value: "New Zealand Standard Time"
   * @const
   */
  newZealandStandardTime: "New Zealand Standard Time",

  /**
   * value: "UTC+12"
   * @const
   */
  uTC12: "UTC+12",

  /**
   * value: "Fiji Standard Time"
   * @const
   */
  fijiStandardTime: "Fiji Standard Time",

  /**
   * value: "Kamchatka Standard Time"
   * @const
   */
  kamchatkaStandardTime: "Kamchatka Standard Time",

  /**
   * value: "Chatham Islands Standard Time"
   * @const
   */
  chathamIslandsStandardTime: "Chatham Islands Standard Time",

  /**
   * value: "UTC+13"
   * @const
   */
  uTC13: "UTC+13",

  /**
   * value: "Tonga Standard Time"
   * @const
   */
  tongaStandardTime: "Tonga Standard Time",

  /**
   * value: "Samoa Standard Time"
   * @const
   */
  samoaStandardTime: "Samoa Standard Time",

  /**
   * value: "Line Islands Standard Time"
   * @const
   */
  lineIslandsStandardTime: "Line Islands Standard Time"
};
/**
 * Time zone ID. Contains the ID of the time zone, for example Eastern Standard Time. Value map to display names:  Dateline Standard Time=(UTC-12:00) International Date Line West   UTC-11=(UTC-11:00) Coordinated Universal Time-11   Aleutian Standard Time=(UTC-10:00) Aleutian Islands   Hawaiian Standard Time=(UTC-10:00) Hawaii   Marquesas Standard Time=(UTC-09:30) Marquesas Islands   Alaskan Standard Time=(UTC-09:00) Alaska   UTC-09=(UTC-09:00) Coordinated Universal Time-09   Pacific Standard Time (Mexico)=(UTC-08:00) Baja California   UTC-08=(UTC-08:00) Coordinated Universal Time-08   Pacific Standard Time=(UTC-08:00) Pacific Time (US & Canada)   US Mountain Standard Time=(UTC-07:00) Arizona   Mountain Standard Time (Mexico)=(UTC-07:00) Chihuahua, La Paz, Mazatlan   Mountain Standard Time=(UTC-07:00) Mountain Time (US & Canada)   Yukon Standard Time=(UTC-07:00) Yukon   Central America Standard Time=(UTC-06:00) Central America   Central Standard Time=(UTC-06:00) Central Time (US & Canada)   Easter Island Standard Time=(UTC-06:00) Easter Island   Central Standard Time (Mexico)=(UTC-06:00) Guadalajara, Mexico City, Monterrey   Canada Central Standard Time=(UTC-06:00) Saskatchewan   SA Pacific Standard Time=(UTC-05:00) Bogota, Lima, Quito, Rio Branco   Eastern Standard Time (Mexico)=(UTC-05:00) Chetumal   Eastern Standard Time=(UTC-05:00) Eastern Time (US & Canada)   Haiti Standard Time=(UTC-05:00) Haiti   Cuba Standard Time=(UTC-05:00) Havana   US Eastern Standard Time=(UTC-05:00) Indiana (East)   Turks And Caicos Standard Time=(UTC-05:00) Turks and Caicos   Paraguay Standard Time=(UTC-04:00) Asuncion   Atlantic Standard Time=(UTC-04:00) Atlantic Time (Canada)   Venezuela Standard Time=(UTC-04:00) Caracas   Central Brazilian Standard Time=(UTC-04:00) Cuiaba   SA Western Standard Time=(UTC-04:00) Georgetown, La Paz, Manaus, San Juan   Pacific SA Standard Time=(UTC-04:00) Santiago   Newfoundland Standard Time=(UTC-03:30) Newfoundland   Tocantins Standard Time=(UTC-03:00) Araguaina   E. South America Standard Time=(UTC-03:00) Brasilia   SA Eastern Standard Time=(UTC-03:00) Cayenne, Fortaleza   Argentina Standard Time=(UTC-03:00) City of Buenos Aires   Greenland Standard Time=(UTC-03:00) Greenland   Montevideo Standard Time=(UTC-03:00) Montevideo   Magallanes Standard Time=(UTC-03:00) Punta Arenas   Saint Pierre Standard Time=(UTC-03:00) Saint Pierre and Miquelon   Bahia Standard Time=(UTC-03:00) Salvador   UTC-02=(UTC-02:00) Coordinated Universal Time-02   Mid-Atlantic Standard Time=(UTC-02:00) Mid-Atlantic - Old   Azores Standard Time=(UTC-01:00) Azores   Cape Verde Standard Time=(UTC-01:00) Cabo Verde Is.   UTC=(UTC) Coordinated Universal Time   GMT Standard Time=(UTC+00:00) Dublin, Edinburgh, Lisbon, London   Greenwich Standard Time=(UTC+00:00) Monrovia, Reykjavik   Sao Tome Standard Time=(UTC+00:00) Sao Tome   Morocco Standard Time=(UTC+01:00) Casablanca   W. Europe Standard Time=(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna   Central Europe Standard Time=(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague   Romance Standard Time=(UTC+01:00) Brussels, Copenhagen, Madrid, Paris   Central European Standard Time=(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb   W. Central Africa Standard Time=(UTC+01:00) West Central Africa   Jordan Standard Time=(UTC+02:00) Amman   GTB Standard Time=(UTC+02:00) Athens, Bucharest   Middle East Standard Time=(UTC+02:00) Beirut   Egypt Standard Time=(UTC+02:00) Cairo   E. Europe Standard Time=(UTC+02:00) Chisinau   Syria Standard Time=(UTC+02:00) Damascus   West Bank Standard Time=(UTC+02:00) Gaza, Hebron   South Africa Standard Time=(UTC+02:00) Harare, Pretoria   FLE Standard Time=(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius   Israel Standard Time=(UTC+02:00) Jerusalem   South Sudan Standard Time=(UTC+02:00) Juba   Kaliningrad Standard Time=(UTC+02:00) Kaliningrad   Sudan Standard Time=(UTC+02:00) Khartoum   Libya Standard Time=(UTC+02:00) Tripoli   Namibia Standard Time=(UTC+02:00) Windhoek   Arabic Standard Time=(UTC+03:00) Baghdad   Turkey Standard Time=(UTC+03:00) Istanbul   Arab Standard Time=(UTC+03:00) Kuwait, Riyadh   Belarus Standard Time=(UTC+03:00) Minsk   Russian Standard Time=(UTC+03:00) Moscow, St. Petersburg   E. Africa Standard Time=(UTC+03:00) Nairobi   Volgograd Standard Time=(UTC+03:00) Volgograd   Iran Standard Time=(UTC+03:30) Tehran   Arabian Standard Time=(UTC+04:00) Abu Dhabi, Muscat   Astrakhan Standard Time=(UTC+04:00) Astrakhan, Ulyanovsk   Azerbaijan Standard Time=(UTC+04:00) Baku   Russia Time Zone 3=(UTC+04:00) Izhevsk, Samara   Mauritius Standard Time=(UTC+04:00) Port Louis   Saratov Standard Time=(UTC+04:00) Saratov   Georgian Standard Time=(UTC+04:00) Tbilisi   Caucasus Standard Time=(UTC+04:00) Yerevan   Afghanistan Standard Time=(UTC+04:30) Kabul   West Asia Standard Time=(UTC+05:00) Ashgabat, Tashkent   Ekaterinburg Standard Time=(UTC+05:00) Ekaterinburg   Pakistan Standard Time=(UTC+05:00) Islamabad, Karachi   Qyzylorda Standard Time=(UTC+05:00) Qyzylorda   India Standard Time=(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi   Sri Lanka Standard Time=(UTC+05:30) Sri Jayawardenepura   Nepal Standard Time=(UTC+05:45) Kathmandu   Central Asia Standard Time=(UTC+06:00) Astana   Bangladesh Standard Time=(UTC+06:00) Dhaka   Omsk Standard Time=(UTC+06:00) Omsk   Myanmar Standard Time=(UTC+06:30) Yangon (Rangoon)   SE Asia Standard Time=(UTC+07:00) Bangkok, Hanoi, Jakarta   Altai Standard Time=(UTC+07:00) Barnaul, Gorno-Altaysk   W. Mongolia Standard Time=(UTC+07:00) Hovd   North Asia Standard Time=(UTC+07:00) Krasnoyarsk   N. Central Asia Standard Time=(UTC+07:00) Novosibirsk   Tomsk Standard Time=(UTC+07:00) Tomsk   China Standard Time=(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi   North Asia East Standard Time=(UTC+08:00) Irkutsk   Singapore Standard Time=(UTC+08:00) Kuala Lumpur, Singapore   W. Australia Standard Time=(UTC+08:00) Perth   Taipei Standard Time=(UTC+08:00) Taipei   Ulaanbaatar Standard Time=(UTC+08:00) Ulaanbaatar   Aus Central W. Standard Time=(UTC+08:45) Eucla   Transbaikal Standard Time=(UTC+09:00) Chita   Tokyo Standard Time=(UTC+09:00) Osaka, Sapporo, Tokyo   North Korea Standard Time=(UTC+09:00) Pyongyang   Korea Standard Time=(UTC+09:00) Seoul   Yakutsk Standard Time=(UTC+09:00) Yakutsk   Cen. Australia Standard Time=(UTC+09:30) Adelaide   AUS Central Standard Time=(UTC+09:30) Darwin   E. Australia Standard Time=(UTC+10:00) Brisbane   AUS Eastern Standard Time=(UTC+10:00) Canberra, Melbourne, Sydney   West Pacific Standard Time=(UTC+10:00) Guam, Port Moresby   Tasmania Standard Time=(UTC+10:00) Hobart   Vladivostok Standard Time=(UTC+10:00) Vladivostok   Lord Howe Standard Time=(UTC+10:30) Lord Howe Island   Bougainville Standard Time=(UTC+11:00) Bougainville Island   Russia Time Zone 10=(UTC+11:00) Chokurdakh   Magadan Standard Time=(UTC+11:00) Magadan   Norfolk Standard Time=(UTC+11:00) Norfolk Island   Sakhalin Standard Time=(UTC+11:00) Sakhalin   Central Pacific Standard Time=(UTC+11:00) Solomon Is., New Caledonia   Russia Time Zone 11=(UTC+12:00) Anadyr, Petropavlovsk-Kamchatsky   New Zealand Standard Time=(UTC+12:00) Auckland, Wellington   UTC+12=(UTC+12:00) Coordinated Universal Time+12   Fiji Standard Time=(UTC+12:00) Fiji   Kamchatka Standard Time=(UTC+12:00) Petropavlovsk-Kamchatsky - Old   Chatham Islands Standard Time=(UTC+12:45) Chatham Islands   UTC+13=(UTC+13:00) Coordinated Universal Time+13   Tonga Standard Time=(UTC+13:00) Nuku*alofa   Samoa Standard Time=(UTC+13:00) Samoa   Line Islands Standard Time=(UTC+14:00) Kiritimati Island   
 * @member {module:model/TimeProfiles.SunclockTimeZoneEnum} sunclockTimeZone
 */
TimeProfiles.prototype.sunclockTimeZone = undefined;

/**
 * @member {module:model/TimeProfileAppointmentRecur} timeProfileAppointmentRecur
 */
TimeProfiles.prototype.timeProfileAppointmentRecur = undefined;

/**
 * @member {module:model/TimeProfileAppointmentRoot} timeProfileAppointmentRoot
 */
TimeProfiles.prototype.timeProfileAppointmentRoot = undefined;

/**
 * @member {module:model/TimeProfilesRelations} relations
 */
TimeProfiles.prototype.relations = undefined;

