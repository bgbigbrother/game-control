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
    describe('Views', function() {
      beforeEach(function() {
        instance = new MilestoneIntegrationPlatformVmsResTfulApi.Views();
      });

      it('should create an instance of Views', function() {
        // TODO: update the code to test Views
        expect(instance).to.be.a(MilestoneIntegrationPlatformVmsResTfulApi.Views);
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

      it('should have the property lastModified (base name: "lastModified")', function() {
        // TODO: update the code to test the property lastModified
        expect(instance).to.have.property('lastModified');
        // expect(instance.lastModified).to.be(expectedValueLiteral);
      });

      it('should have the property shortcut (base name: "shortcut")', function() {
        // TODO: update the code to test the property shortcut
        expect(instance).to.have.property('shortcut');
        // expect(instance.shortcut).to.be(expectedValueLiteral);
      });

      it('should have the property viewLayoutType (base name: "viewLayoutType")', function() {
        // TODO: update the code to test the property viewLayoutType
        expect(instance).to.have.property('viewLayoutType');
        // expect(instance.viewLayoutType).to.be(expectedValueLiteral);
      });

      it('should have the property layoutCustomId (base name: "layoutCustomId")', function() {
        // TODO: update the code to test the property layoutCustomId
        expect(instance).to.have.property('layoutCustomId');
        // expect(instance.layoutCustomId).to.be(expectedValueLiteral);
      });

      it('should have the property layoutIcon (base name: "layoutIcon")', function() {
        // TODO: update the code to test the property layoutIcon
        expect(instance).to.have.property('layoutIcon');
        // expect(instance.layoutIcon).to.be(expectedValueLiteral);
      });

      it('should have the property layoutViewItems (base name: "layoutViewItems")', function() {
        // TODO: update the code to test the property layoutViewItems
        expect(instance).to.have.property('layoutViewItems');
        // expect(instance.layoutViewItems).to.be(expectedValueLiteral);
      });

      it('should have the property viewItems (base name: "viewItems")', function() {
        // TODO: update the code to test the property viewItems
        expect(instance).to.have.property('viewItems');
        // expect(instance.viewItems).to.be(expectedValueLiteral);
      });

      it('should have the property relations (base name: "relations")', function() {
        // TODO: update the code to test the property relations
        expect(instance).to.have.property('relations');
        // expect(instance.relations).to.be(expectedValueLiteral);
      });

    });
  });

}));
