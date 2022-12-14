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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MilestoneIntegrationPlatformVmsResTfulApi);
  }
}(this, function(expect, MilestoneIntegrationPlatformVmsResTfulApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('RecordingServers', function() {
      beforeEach(function() {
        instance = new MilestoneIntegrationPlatformVmsResTfulApi.RecordingServers();
      });

      it('should create an instance of RecordingServers', function() {
        // TODO: update the code to test RecordingServers
        expect(instance).to.be.a(MilestoneIntegrationPlatformVmsResTfulApi.RecordingServers);
      });

      it('should have the property enabled (base name: "enabled")', function() {
        // TODO: update the code to test the property enabled
        expect(instance).to.have.property('enabled');
        // expect(instance.enabled).to.be(expectedValueLiteral);
      });

      it('should have the property displayName (base name: "displayName")', function() {
        // TODO: update the code to test the property displayName
        expect(instance).to.have.property('displayName');
        // expect(instance.displayName).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property lastModified (base name: "lastModified")', function() {
        // TODO: update the code to test the property lastModified
        expect(instance).to.have.property('lastModified');
        // expect(instance.lastModified).to.be(expectedValueLiteral);
      });

      it('should have the property synchronizationTime (base name: "synchronizationTime")', function() {
        // TODO: update the code to test the property synchronizationTime
        expect(instance).to.have.property('synchronizationTime');
        // expect(instance.synchronizationTime).to.be(expectedValueLiteral);
      });

      it('should have the property timeZoneName (base name: "timeZoneName")', function() {
        // TODO: update the code to test the property timeZoneName
        expect(instance).to.have.property('timeZoneName');
        // expect(instance.timeZoneName).to.be(expectedValueLiteral);
      });

      it('should have the property hostName (base name: "hostName")', function() {
        // TODO: update the code to test the property hostName
        expect(instance).to.have.property('hostName');
        // expect(instance.hostName).to.be(expectedValueLiteral);
      });

      it('should have the property portNumber (base name: "portNumber")', function() {
        // TODO: update the code to test the property portNumber
        expect(instance).to.have.property('portNumber');
        // expect(instance.portNumber).to.be(expectedValueLiteral);
      });

      it('should have the property webServerUri (base name: "webServerUri")', function() {
        // TODO: update the code to test the property webServerUri
        expect(instance).to.have.property('webServerUri');
        // expect(instance.webServerUri).to.be(expectedValueLiteral);
      });

      it('should have the property activeWebServerUri (base name: "activeWebServerUri")', function() {
        // TODO: update the code to test the property activeWebServerUri
        expect(instance).to.have.property('activeWebServerUri');
        // expect(instance.activeWebServerUri).to.be(expectedValueLiteral);
      });

      it('should have the property publicAccessEnabled (base name: "publicAccessEnabled")', function() {
        // TODO: update the code to test the property publicAccessEnabled
        expect(instance).to.have.property('publicAccessEnabled');
        // expect(instance.publicAccessEnabled).to.be(expectedValueLiteral);
      });

      it('should have the property publicWebserverHostName (base name: "publicWebserverHostName")', function() {
        // TODO: update the code to test the property publicWebserverHostName
        expect(instance).to.have.property('publicWebserverHostName');
        // expect(instance.publicWebserverHostName).to.be(expectedValueLiteral);
      });

      it('should have the property publicWebserverPort (base name: "publicWebserverPort")', function() {
        // TODO: update the code to test the property publicWebserverPort
        expect(instance).to.have.property('publicWebserverPort');
        // expect(instance.publicWebserverPort).to.be(expectedValueLiteral);
      });

      it('should have the property multicastServerAddress (base name: "multicastServerAddress")', function() {
        // TODO: update the code to test the property multicastServerAddress
        expect(instance).to.have.property('multicastServerAddress');
        // expect(instance.multicastServerAddress).to.be(expectedValueLiteral);
      });

      it('should have the property shutdownOnStorageFailure (base name: "shutdownOnStorageFailure")', function() {
        // TODO: update the code to test the property shutdownOnStorageFailure
        expect(instance).to.have.property('shutdownOnStorageFailure');
        // expect(instance.shutdownOnStorageFailure).to.be(expectedValueLiteral);
      });

      it('should have the property relations (base name: "relations")', function() {
        // TODO: update the code to test the property relations
        expect(instance).to.have.property('relations');
        // expect(instance.relations).to.be(expectedValueLiteral);
      });

    });
  });

}));
