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
    describe('SetMIPOptionPropertyRequestBody', function() {
      beforeEach(function() {
        instance = new MilestoneIntegrationPlatformVmsResTfulApi.SetMIPOptionPropertyRequestBody();
      });

      it('should create an instance of SetMIPOptionPropertyRequestBody', function() {
        // TODO: update the code to test SetMIPOptionPropertyRequestBody
        expect(instance).to.be.a(MilestoneIntegrationPlatformVmsResTfulApi.SetMIPOptionPropertyRequestBody);
      });

      it('should have the property optionId (base name: "optionId")', function() {
        // TODO: update the code to test the property optionId
        expect(instance).to.have.property('optionId');
        // expect(instance.optionId).to.be(expectedValueLiteral);
      });

      it('should have the property dataVersion (base name: "dataVersion")', function() {
        // TODO: update the code to test the property dataVersion
        expect(instance).to.have.property('dataVersion');
        // expect(instance.dataVersion).to.be(expectedValueLiteral);
      });

      it('should have the property xML (base name: "xML")', function() {
        // TODO: update the code to test the property xML
        expect(instance).to.have.property('xML');
        // expect(instance.xML).to.be(expectedValueLiteral);
      });

    });
  });

}));
