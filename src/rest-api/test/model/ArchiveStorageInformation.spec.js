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
    describe('ArchiveStorageInformation', function() {
      beforeEach(function() {
        instance = new MilestoneIntegrationPlatformVmsResTfulApi.ArchiveStorageInformation();
      });

      it('should create an instance of ArchiveStorageInformation', function() {
        // TODO: update the code to test ArchiveStorageInformation
        expect(instance).to.be.a(MilestoneIntegrationPlatformVmsResTfulApi.ArchiveStorageInformation);
      });

      it('should have the property displayName (base name: "displayName")', function() {
        // TODO: update the code to test the property displayName
        expect(instance).to.have.property('displayName');
        // expect(instance.displayName).to.be(expectedValueLiteral);
      });

      it('should have the property anyTablesWithData (base name: "anyTablesWithData")', function() {
        // TODO: update the code to test the property anyTablesWithData
        expect(instance).to.have.property('anyTablesWithData');
        // expect(instance.anyTablesWithData).to.be(expectedValueLiteral);
      });

      it('should have the property lastUpdated (base name: "lastUpdated")', function() {
        // TODO: update the code to test the property lastUpdated
        expect(instance).to.have.property('lastUpdated');
        // expect(instance.lastUpdated).to.be(expectedValueLiteral);
      });

      it('should have the property lockedUsedSpace (base name: "lockedUsedSpace")', function() {
        // TODO: update the code to test the property lockedUsedSpace
        expect(instance).to.have.property('lockedUsedSpace');
        // expect(instance.lockedUsedSpace).to.be(expectedValueLiteral);
      });

      it('should have the property usedSpace (base name: "usedSpace")', function() {
        // TODO: update the code to test the property usedSpace
        expect(instance).to.have.property('usedSpace');
        // expect(instance.usedSpace).to.be(expectedValueLiteral);
      });

      it('should have the property relations (base name: "relations")', function() {
        // TODO: update the code to test the property relations
        expect(instance).to.have.property('relations');
        // expect(instance.relations).to.be(expectedValueLiteral);
      });

    });
  });

}));