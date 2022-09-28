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
    describe('Error404Details', function() {
      beforeEach(function() {
        instance = new MilestoneIntegrationPlatformVmsResTfulApi.Error404Details();
      });

      it('should create an instance of Error404Details', function() {
        // TODO: update the code to test Error404Details
        expect(instance).to.be.a(MilestoneIntegrationPlatformVmsResTfulApi.Error404Details);
      });

      it('should have the property errorText (base name: "errorText")', function() {
        // TODO: update the code to test the property errorText
        expect(instance).to.have.property('errorText');
        // expect(instance.errorText).to.be(expectedValueLiteral);
      });

    });
  });

}));