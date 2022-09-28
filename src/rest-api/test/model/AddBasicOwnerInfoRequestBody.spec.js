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
    describe('AddBasicOwnerInfoRequestBody', function() {
      beforeEach(function() {
        instance = new MilestoneIntegrationPlatformVmsResTfulApi.AddBasicOwnerInfoRequestBody();
      });

      it('should create an instance of AddBasicOwnerInfoRequestBody', function() {
        // TODO: update the code to test AddBasicOwnerInfoRequestBody
        expect(instance).to.be.a(MilestoneIntegrationPlatformVmsResTfulApi.AddBasicOwnerInfoRequestBody);
      });

      it('should have the property tagType (base name: "tagType")', function() {
        // TODO: update the code to test the property tagType
        expect(instance).to.have.property('tagType');
        // expect(instance.tagType).to.be(expectedValueLiteral);
      });

      it('should have the property tagValue (base name: "tagValue")', function() {
        // TODO: update the code to test the property tagValue
        expect(instance).to.have.property('tagValue');
        // expect(instance.tagValue).to.be(expectedValueLiteral);
      });

    });
  });

}));
