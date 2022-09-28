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
    describe('AddHardwareRequestBody', function() {
      beforeEach(function() {
        instance = new MilestoneIntegrationPlatformVmsResTfulApi.AddHardwareRequestBody();
      });

      it('should create an instance of AddHardwareRequestBody', function() {
        // TODO: update the code to test AddHardwareRequestBody
        expect(instance).to.be.a(MilestoneIntegrationPlatformVmsResTfulApi.AddHardwareRequestBody);
      });

      it('should have the property hardwareAddress (base name: "hardwareAddress")', function() {
        // TODO: update the code to test the property hardwareAddress
        expect(instance).to.have.property('hardwareAddress');
        // expect(instance.hardwareAddress).to.be(expectedValueLiteral);
      });

      it('should have the property hardwareDriverPath (base name: "hardwareDriverPath")', function() {
        // TODO: update the code to test the property hardwareDriverPath
        expect(instance).to.have.property('hardwareDriverPath');
        // expect(instance.hardwareDriverPath).to.be(expectedValueLiteral);
      });

      it('should have the property userName (base name: "userName")', function() {
        // TODO: update the code to test the property userName
        expect(instance).to.have.property('userName');
        // expect(instance.userName).to.be(expectedValueLiteral);
      });

      it('should have the property password (base name: "password")', function() {
        // TODO: update the code to test the property password
        expect(instance).to.have.property('password');
        // expect(instance.password).to.be(expectedValueLiteral);
      });

      it('should have the property customData (base name: "customData")', function() {
        // TODO: update the code to test the property customData
        expect(instance).to.have.property('customData');
        // expect(instance.customData).to.be(expectedValueLiteral);
      });

    });
  });

}));
