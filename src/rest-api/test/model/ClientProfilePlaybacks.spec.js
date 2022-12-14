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
    describe('ClientProfilePlaybacks', function() {
      beforeEach(function() {
        instance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientProfilePlaybacks();
      });

      it('should create an instance of ClientProfilePlaybacks', function() {
        // TODO: update the code to test ClientProfilePlaybacks
        expect(instance).to.be.a(MilestoneIntegrationPlatformVmsResTfulApi.ClientProfilePlaybacks);
      });

      it('should have the property displayName (base name: "displayName")', function() {
        // TODO: update the code to test the property displayName
        expect(instance).to.have.property('displayName');
        // expect(instance.displayName).to.be(expectedValueLiteral);
      });

      it('should have the property panesPlaybackTab (base name: "panesPlaybackTab")', function() {
        // TODO: update the code to test the property panesPlaybackTab
        expect(instance).to.have.property('panesPlaybackTab');
        // expect(instance.panesPlaybackTab).to.be(expectedValueLiteral);
      });

      it('should have the property panesPlaybackViews (base name: "panesPlaybackViews")', function() {
        // TODO: update the code to test the property panesPlaybackViews
        expect(instance).to.have.property('panesPlaybackViews');
        // expect(instance.panesPlaybackViews).to.be(expectedValueLiteral);
      });

      it('should have the property panesPlaybackViewsLocked (base name: "panesPlaybackViewsLocked")', function() {
        // TODO: update the code to test the property panesPlaybackViewsLocked
        expect(instance).to.have.property('panesPlaybackViewsLocked');
        // expect(instance.panesPlaybackViewsLocked).to.be(expectedValueLiteral);
      });

      it('should have the property panesPlaybackSystemOverview (base name: "panesPlaybackSystemOverview")', function() {
        // TODO: update the code to test the property panesPlaybackSystemOverview
        expect(instance).to.have.property('panesPlaybackSystemOverview');
        // expect(instance.panesPlaybackSystemOverview).to.be(expectedValueLiteral);
      });

      it('should have the property panesPlaybackSystemOverviewLocked (base name: "panesPlaybackSystemOverviewLocked")', function() {
        // TODO: update the code to test the property panesPlaybackSystemOverviewLocked
        expect(instance).to.have.property('panesPlaybackSystemOverviewLocked');
        // expect(instance.panesPlaybackSystemOverviewLocked).to.be(expectedValueLiteral);
      });

      it('should have the property panesPlaybackAudio (base name: "panesPlaybackAudio")', function() {
        // TODO: update the code to test the property panesPlaybackAudio
        expect(instance).to.have.property('panesPlaybackAudio');
        // expect(instance.panesPlaybackAudio).to.be(expectedValueLiteral);
      });

      it('should have the property panesPlaybackAudioLocked (base name: "panesPlaybackAudioLocked")', function() {
        // TODO: update the code to test the property panesPlaybackAudioLocked
        expect(instance).to.have.property('panesPlaybackAudioLocked');
        // expect(instance.panesPlaybackAudioLocked).to.be(expectedValueLiteral);
      });

      it('should have the property panesPlaybackPrint (base name: "panesPlaybackPrint")', function() {
        // TODO: update the code to test the property panesPlaybackPrint
        expect(instance).to.have.property('panesPlaybackPrint');
        // expect(instance.panesPlaybackPrint).to.be(expectedValueLiteral);
      });

      it('should have the property panesPlaybackPrintLocked (base name: "panesPlaybackPrintLocked")', function() {
        // TODO: update the code to test the property panesPlaybackPrintLocked
        expect(instance).to.have.property('panesPlaybackPrintLocked');
        // expect(instance.panesPlaybackPrintLocked).to.be(expectedValueLiteral);
      });

      it('should have the property functionsPlaybackPrintReportHeadline (base name: "functionsPlaybackPrintReportHeadline")', function() {
        // TODO: update the code to test the property functionsPlaybackPrintReportHeadline
        expect(instance).to.have.property('functionsPlaybackPrintReportHeadline');
        // expect(instance.functionsPlaybackPrintReportHeadline).to.be(expectedValueLiteral);
      });

      it('should have the property functionsPlaybackPrintReportHeadlineLocked (base name: "functionsPlaybackPrintReportHeadlineLocked")', function() {
        // TODO: update the code to test the property functionsPlaybackPrintReportHeadlineLocked
        expect(instance).to.have.property('functionsPlaybackPrintReportHeadlineLocked');
        // expect(instance.functionsPlaybackPrintReportHeadlineLocked).to.be(expectedValueLiteral);
      });

      it('should have the property functionsPlaybackPrintReportHeadlineText (base name: "functionsPlaybackPrintReportHeadlineText")', function() {
        // TODO: update the code to test the property functionsPlaybackPrintReportHeadlineText
        expect(instance).to.have.property('functionsPlaybackPrintReportHeadlineText');
        // expect(instance.functionsPlaybackPrintReportHeadlineText).to.be(expectedValueLiteral);
      });

      it('should have the property functionsPlaybackPrintReportUserInformation (base name: "functionsPlaybackPrintReportUserInformation")', function() {
        // TODO: update the code to test the property functionsPlaybackPrintReportUserInformation
        expect(instance).to.have.property('functionsPlaybackPrintReportUserInformation');
        // expect(instance.functionsPlaybackPrintReportUserInformation).to.be(expectedValueLiteral);
      });

      it('should have the property functionsPlaybackPrintReportCopyRights (base name: "functionsPlaybackPrintReportCopyRights")', function() {
        // TODO: update the code to test the property functionsPlaybackPrintReportCopyRights
        expect(instance).to.have.property('functionsPlaybackPrintReportCopyRights');
        // expect(instance.functionsPlaybackPrintReportCopyRights).to.be(expectedValueLiteral);
      });

      it('should have the property functionsPlaybackIndependentPlayback (base name: "functionsPlaybackIndependentPlayback")', function() {
        // TODO: update the code to test the property functionsPlaybackIndependentPlayback
        expect(instance).to.have.property('functionsPlaybackIndependentPlayback');
        // expect(instance.functionsPlaybackIndependentPlayback).to.be(expectedValueLiteral);
      });

      it('should have the property functionsPlaybackBookmarkMode (base name: "functionsPlaybackBookmarkMode")', function() {
        // TODO: update the code to test the property functionsPlaybackBookmarkMode
        expect(instance).to.have.property('functionsPlaybackBookmarkMode');
        // expect(instance.functionsPlaybackBookmarkMode).to.be(expectedValueLiteral);
      });

      it('should have the property functionsPlaybackBookmarkModeLocked (base name: "functionsPlaybackBookmarkModeLocked")', function() {
        // TODO: update the code to test the property functionsPlaybackBookmarkModeLocked
        expect(instance).to.have.property('functionsPlaybackBookmarkModeLocked');
        // expect(instance.functionsPlaybackBookmarkModeLocked).to.be(expectedValueLiteral);
      });

      it('should have the property functionsPlaybackBoundingBoxes (base name: "functionsPlaybackBoundingBoxes")', function() {
        // TODO: update the code to test the property functionsPlaybackBoundingBoxes
        expect(instance).to.have.property('functionsPlaybackBoundingBoxes');
        // expect(instance.functionsPlaybackBoundingBoxes).to.be(expectedValueLiteral);
      });

      it('should have the property functionsPlaybackBoundingBoxesLocked (base name: "functionsPlaybackBoundingBoxesLocked")', function() {
        // TODO: update the code to test the property functionsPlaybackBoundingBoxesLocked
        expect(instance).to.have.property('functionsPlaybackBoundingBoxesLocked');
        // expect(instance.functionsPlaybackBoundingBoxesLocked).to.be(expectedValueLiteral);
      });

      it('should have the property panesPlaybackMIPPlugin (base name: "panesPlaybackMIPPlugin")', function() {
        // TODO: update the code to test the property panesPlaybackMIPPlugin
        expect(instance).to.have.property('panesPlaybackMIPPlugin');
        // expect(instance.panesPlaybackMIPPlugin).to.be(expectedValueLiteral);
      });

      it('should have the property panesPlaybackMIPPluginLocked (base name: "panesPlaybackMIPPluginLocked")', function() {
        // TODO: update the code to test the property panesPlaybackMIPPluginLocked
        expect(instance).to.have.property('panesPlaybackMIPPluginLocked');
        // expect(instance.panesPlaybackMIPPluginLocked).to.be(expectedValueLiteral);
      });

    });
  });

}));
