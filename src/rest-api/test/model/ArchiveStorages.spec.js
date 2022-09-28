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
    describe('ArchiveStorages', function() {
      beforeEach(function() {
        instance = new MilestoneIntegrationPlatformVmsResTfulApi.ArchiveStorages();
      });

      it('should create an instance of ArchiveStorages', function() {
        // TODO: update the code to test ArchiveStorages
        expect(instance).to.be.a(MilestoneIntegrationPlatformVmsResTfulApi.ArchiveStorages);
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

      it('should have the property createdDate (base name: "createdDate")', function() {
        // TODO: update the code to test the property createdDate
        expect(instance).to.have.property('createdDate');
        // expect(instance.createdDate).to.be(expectedValueLiteral);
      });

      it('should have the property lastModified (base name: "lastModified")', function() {
        // TODO: update the code to test the property lastModified
        expect(instance).to.have.property('lastModified');
        // expect(instance.lastModified).to.be(expectedValueLiteral);
      });

      it('should have the property diskPath (base name: "diskPath")', function() {
        // TODO: update the code to test the property diskPath
        expect(instance).to.have.property('diskPath');
        // expect(instance.diskPath).to.be(expectedValueLiteral);
      });

      it('should have the property retainMinutes (base name: "retainMinutes")', function() {
        // TODO: update the code to test the property retainMinutes
        expect(instance).to.have.property('retainMinutes');
        // expect(instance.retainMinutes).to.be(expectedValueLiteral);
      });

      it('should have the property maxSize (base name: "maxSize")', function() {
        // TODO: update the code to test the property maxSize
        expect(instance).to.have.property('maxSize');
        // expect(instance.maxSize).to.be(expectedValueLiteral);
      });

      it('should have the property framerateReductionEnabled (base name: "framerateReductionEnabled")', function() {
        // TODO: update the code to test the property framerateReductionEnabled
        expect(instance).to.have.property('framerateReductionEnabled');
        // expect(instance.framerateReductionEnabled).to.be(expectedValueLiteral);
      });

      it('should have the property targetFramerate (base name: "targetFramerate")', function() {
        // TODO: update the code to test the property targetFramerate
        expect(instance).to.have.property('targetFramerate');
        // expect(instance.targetFramerate).to.be(expectedValueLiteral);
      });

      it('should have the property archiveSchedules (base name: "archiveSchedules")', function() {
        // TODO: update the code to test the property archiveSchedules
        expect(instance).to.have.property('archiveSchedules');
        // expect(instance.archiveSchedules).to.be(expectedValueLiteral);
      });

      it('should have the property relations (base name: "relations")', function() {
        // TODO: update the code to test the property relations
        expect(instance).to.have.property('relations');
        // expect(instance.relations).to.be(expectedValueLiteral);
      });

    });
  });

}));
