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
    describe('BasicUsers', function() {
      beforeEach(function() {
        instance = new MilestoneIntegrationPlatformVmsResTfulApi.BasicUsers();
      });

      it('should create an instance of BasicUsers', function() {
        // TODO: update the code to test BasicUsers
        expect(instance).to.be.a(MilestoneIntegrationPlatformVmsResTfulApi.BasicUsers);
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

      it('should have the property sid (base name: "sid")', function() {
        // TODO: update the code to test the property sid
        expect(instance).to.have.property('sid');
        // expect(instance.sid).to.be(expectedValueLiteral);
      });

      it('should have the property canChangePassword (base name: "canChangePassword")', function() {
        // TODO: update the code to test the property canChangePassword
        expect(instance).to.have.property('canChangePassword');
        // expect(instance.canChangePassword).to.be(expectedValueLiteral);
      });

      it('should have the property forcePasswordChange (base name: "forcePasswordChange")', function() {
        // TODO: update the code to test the property forcePasswordChange
        expect(instance).to.have.property('forcePasswordChange');
        // expect(instance.forcePasswordChange).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property lockoutEnd (base name: "lockoutEnd")', function() {
        // TODO: update the code to test the property lockoutEnd
        expect(instance).to.have.property('lockoutEnd');
        // expect(instance.lockoutEnd).to.be(expectedValueLiteral);
      });

      it('should have the property isExternal (base name: "isExternal")', function() {
        // TODO: update the code to test the property isExternal
        expect(instance).to.have.property('isExternal');
        // expect(instance.isExternal).to.be(expectedValueLiteral);
      });

      it('should have the property relations (base name: "relations")', function() {
        // TODO: update the code to test the property relations
        expect(instance).to.have.property('relations');
        // expect(instance.relations).to.be(expectedValueLiteral);
      });

    });
  });

}));
