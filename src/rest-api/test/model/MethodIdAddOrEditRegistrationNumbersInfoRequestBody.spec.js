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
    describe('MethodIdAddOrEditRegistrationNumbersInfoRequestBody', function() {
      beforeEach(function() {
        instance = new MilestoneIntegrationPlatformVmsResTfulApi.MethodIdAddOrEditRegistrationNumbersInfoRequestBody();
      });

      it('should create an instance of MethodIdAddOrEditRegistrationNumbersInfoRequestBody', function() {
        // TODO: update the code to test MethodIdAddOrEditRegistrationNumbersInfoRequestBody
        expect(instance).to.be.a(MilestoneIntegrationPlatformVmsResTfulApi.MethodIdAddOrEditRegistrationNumbersInfoRequestBody);
      });

      it('should have the property registrationNumbers (base name: "registrationNumbers")', function() {
        // TODO: update the code to test the property registrationNumbers
        expect(instance).to.have.property('registrationNumbers');
        // expect(instance.registrationNumbers).to.be(expectedValueLiteral);
      });

    });
  });

}));
