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
    describe('Roles', function() {
      beforeEach(function() {
        instance = new MilestoneIntegrationPlatformVmsResTfulApi.Roles();
      });

      it('should create an instance of Roles', function() {
        // TODO: update the code to test Roles
        expect(instance).to.be.a(MilestoneIntegrationPlatformVmsResTfulApi.Roles);
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

      it('should have the property roleType (base name: "roleType")', function() {
        // TODO: update the code to test the property roleType
        expect(instance).to.have.property('roleType');
        // expect(instance.roleType).to.be(expectedValueLiteral);
      });

      it('should have the property lastModified (base name: "lastModified")', function() {
        // TODO: update the code to test the property lastModified
        expect(instance).to.have.property('lastModified');
        // expect(instance.lastModified).to.be(expectedValueLiteral);
      });

      it('should have the property dualAuthorizationRequired (base name: "dualAuthorizationRequired")', function() {
        // TODO: update the code to test the property dualAuthorizationRequired
        expect(instance).to.have.property('dualAuthorizationRequired');
        // expect(instance.dualAuthorizationRequired).to.be(expectedValueLiteral);
      });

      it('should have the property makeUsersAnonymousDuringPTZSession (base name: "makeUsersAnonymousDuringPTZSession")', function() {
        // TODO: update the code to test the property makeUsersAnonymousDuringPTZSession
        expect(instance).to.have.property('makeUsersAnonymousDuringPTZSession');
        // expect(instance.makeUsersAnonymousDuringPTZSession).to.be(expectedValueLiteral);
      });

      it('should have the property allowMobileClientLogOn (base name: "allowMobileClientLogOn")', function() {
        // TODO: update the code to test the property allowMobileClientLogOn
        expect(instance).to.have.property('allowMobileClientLogOn');
        // expect(instance.allowMobileClientLogOn).to.be(expectedValueLiteral);
      });

      it('should have the property allowSmartClientLogOn (base name: "allowSmartClientLogOn")', function() {
        // TODO: update the code to test the property allowSmartClientLogOn
        expect(instance).to.have.property('allowSmartClientLogOn');
        // expect(instance.allowSmartClientLogOn).to.be(expectedValueLiteral);
      });

      it('should have the property allowWebClientLogOn (base name: "allowWebClientLogOn")', function() {
        // TODO: update the code to test the property allowWebClientLogOn
        expect(instance).to.have.property('allowWebClientLogOn');
        // expect(instance.allowWebClientLogOn).to.be(expectedValueLiteral);
      });

      it('should have the property relations (base name: "relations")', function() {
        // TODO: update the code to test the property relations
        expect(instance).to.have.property('relations');
        // expect(instance.relations).to.be(expectedValueLiteral);
      });

    });
  });

}));