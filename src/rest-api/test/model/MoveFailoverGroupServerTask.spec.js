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
    describe('MoveFailoverGroupServerTask', function() {
      beforeEach(function() {
        instance = new MilestoneIntegrationPlatformVmsResTfulApi.MoveFailoverGroupServerTask();
      });

      it('should create an instance of MoveFailoverGroupServerTask', function() {
        // TODO: update the code to test MoveFailoverGroupServerTask
        expect(instance).to.be.a(MilestoneIntegrationPlatformVmsResTfulApi.MoveFailoverGroupServerTask);
      });

      it('should have the property displayName (base name: "displayName")', function() {
        // TODO: update the code to test the property displayName
        expect(instance).to.have.property('displayName');
        // expect(instance.displayName).to.be(expectedValueLiteral);
      });

      it('should have the property failoverServer (base name: "failoverServer")', function() {
        // TODO: update the code to test the property failoverServer
        expect(instance).to.have.property('failoverServer');
        // expect(instance.failoverServer).to.be(expectedValueLiteral);
      });

      it('should have the property failoverGroup (base name: "failoverGroup")', function() {
        // TODO: update the code to test the property failoverGroup
        expect(instance).to.have.property('failoverGroup');
        // expect(instance.failoverGroup).to.be(expectedValueLiteral);
      });

      it('should have the property position (base name: "position")', function() {
        // TODO: update the code to test the property position
        expect(instance).to.have.property('position');
        // expect(instance.position).to.be(expectedValueLiteral);
      });

    });
  });

}));
