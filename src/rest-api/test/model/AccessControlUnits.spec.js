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
    describe('AccessControlUnits', function() {
      beforeEach(function() {
        instance = new MilestoneIntegrationPlatformVmsResTfulApi.AccessControlUnits();
      });

      it('should create an instance of AccessControlUnits', function() {
        // TODO: update the code to test AccessControlUnits
        expect(instance).to.be.a(MilestoneIntegrationPlatformVmsResTfulApi.AccessControlUnits);
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

      it('should have the property ruleGroup (base name: "ruleGroup")', function() {
        // TODO: update the code to test the property ruleGroup
        expect(instance).to.have.property('ruleGroup');
        // expect(instance.ruleGroup).to.be(expectedValueLiteral);
      });

      it('should have the property relations (base name: "relations")', function() {
        // TODO: update the code to test the property relations
        expect(instance).to.have.property('relations');
        // expect(instance.relations).to.be(expectedValueLiteral);
      });

    });
  });

}));
