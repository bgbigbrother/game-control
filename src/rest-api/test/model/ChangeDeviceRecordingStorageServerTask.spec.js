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
    describe('ChangeDeviceRecordingStorageServerTask', function() {
      beforeEach(function() {
        instance = new MilestoneIntegrationPlatformVmsResTfulApi.ChangeDeviceRecordingStorageServerTask();
      });

      it('should create an instance of ChangeDeviceRecordingStorageServerTask', function() {
        // TODO: update the code to test ChangeDeviceRecordingStorageServerTask
        expect(instance).to.be.a(MilestoneIntegrationPlatformVmsResTfulApi.ChangeDeviceRecordingStorageServerTask);
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

      it('should have the property itemSelection (base name: "itemSelection")', function() {
        // TODO: update the code to test the property itemSelection
        expect(instance).to.have.property('itemSelection');
        // expect(instance.itemSelection).to.be(expectedValueLiteral);
      });

      it('should have the property moveData (base name: "moveData")', function() {
        // TODO: update the code to test the property moveData
        expect(instance).to.have.property('moveData');
        // expect(instance.moveData).to.be(expectedValueLiteral);
      });

    });
  });

}));
