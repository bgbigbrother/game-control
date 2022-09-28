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
    describe('ClientProfileTimelines', function() {
      beforeEach(function() {
        instance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientProfileTimelines();
      });

      it('should create an instance of ClientProfileTimelines', function() {
        // TODO: update the code to test ClientProfileTimelines
        expect(instance).to.be.a(MilestoneIntegrationPlatformVmsResTfulApi.ClientProfileTimelines);
      });

      it('should have the property displayName (base name: "displayName")', function() {
        // TODO: update the code to test the property displayName
        expect(instance).to.have.property('displayName');
        // expect(instance.displayName).to.be(expectedValueLiteral);
      });

      it('should have the property timelineIncomingAudio (base name: "timelineIncomingAudio")', function() {
        // TODO: update the code to test the property timelineIncomingAudio
        expect(instance).to.have.property('timelineIncomingAudio');
        // expect(instance.timelineIncomingAudio).to.be(expectedValueLiteral);
      });

      it('should have the property timelineIncomingAudioLocked (base name: "timelineIncomingAudioLocked")', function() {
        // TODO: update the code to test the property timelineIncomingAudioLocked
        expect(instance).to.have.property('timelineIncomingAudioLocked');
        // expect(instance.timelineIncomingAudioLocked).to.be(expectedValueLiteral);
      });

      it('should have the property timelineOutgoingAudio (base name: "timelineOutgoingAudio")', function() {
        // TODO: update the code to test the property timelineOutgoingAudio
        expect(instance).to.have.property('timelineOutgoingAudio');
        // expect(instance.timelineOutgoingAudio).to.be(expectedValueLiteral);
      });

      it('should have the property timelineOutgoingAudioLocked (base name: "timelineOutgoingAudioLocked")', function() {
        // TODO: update the code to test the property timelineOutgoingAudioLocked
        expect(instance).to.have.property('timelineOutgoingAudioLocked');
        // expect(instance.timelineOutgoingAudioLocked).to.be(expectedValueLiteral);
      });

      it('should have the property timelineMipData (base name: "timelineMipData")', function() {
        // TODO: update the code to test the property timelineMipData
        expect(instance).to.have.property('timelineMipData');
        // expect(instance.timelineMipData).to.be(expectedValueLiteral);
      });

      it('should have the property timelineMipDataLocked (base name: "timelineMipDataLocked")', function() {
        // TODO: update the code to test the property timelineMipDataLocked
        expect(instance).to.have.property('timelineMipDataLocked');
        // expect(instance.timelineMipDataLocked).to.be(expectedValueLiteral);
      });

      it('should have the property timelineBookmarks (base name: "timelineBookmarks")', function() {
        // TODO: update the code to test the property timelineBookmarks
        expect(instance).to.have.property('timelineBookmarks');
        // expect(instance.timelineBookmarks).to.be(expectedValueLiteral);
      });

      it('should have the property timelineBookmarksLocked (base name: "timelineBookmarksLocked")', function() {
        // TODO: update the code to test the property timelineBookmarksLocked
        expect(instance).to.have.property('timelineBookmarksLocked');
        // expect(instance.timelineBookmarksLocked).to.be(expectedValueLiteral);
      });

      it('should have the property timelineMipMarker (base name: "timelineMipMarker")', function() {
        // TODO: update the code to test the property timelineMipMarker
        expect(instance).to.have.property('timelineMipMarker');
        // expect(instance.timelineMipMarker).to.be(expectedValueLiteral);
      });

      it('should have the property timelineMipMarkerLocked (base name: "timelineMipMarkerLocked")', function() {
        // TODO: update the code to test the property timelineMipMarkerLocked
        expect(instance).to.have.property('timelineMipMarkerLocked');
        // expect(instance.timelineMipMarkerLocked).to.be(expectedValueLiteral);
      });

      it('should have the property timelineMotion (base name: "timelineMotion")', function() {
        // TODO: update the code to test the property timelineMotion
        expect(instance).to.have.property('timelineMotion');
        // expect(instance.timelineMotion).to.be(expectedValueLiteral);
      });

      it('should have the property timelineMotionLocked (base name: "timelineMotionLocked")', function() {
        // TODO: update the code to test the property timelineMotionLocked
        expect(instance).to.have.property('timelineMotionLocked');
        // expect(instance.timelineMotionLocked).to.be(expectedValueLiteral);
      });

      it('should have the property timelineAllCamerasTimeline (base name: "timelineAllCamerasTimeline")', function() {
        // TODO: update the code to test the property timelineAllCamerasTimeline
        expect(instance).to.have.property('timelineAllCamerasTimeline');
        // expect(instance.timelineAllCamerasTimeline).to.be(expectedValueLiteral);
      });

      it('should have the property timelineAllCamerasTimelineLocked (base name: "timelineAllCamerasTimelineLocked")', function() {
        // TODO: update the code to test the property timelineAllCamerasTimelineLocked
        expect(instance).to.have.property('timelineAllCamerasTimelineLocked');
        // expect(instance.timelineAllCamerasTimelineLocked).to.be(expectedValueLiteral);
      });

      it('should have the property timelineSkipGaps (base name: "timelineSkipGaps")', function() {
        // TODO: update the code to test the property timelineSkipGaps
        expect(instance).to.have.property('timelineSkipGaps');
        // expect(instance.timelineSkipGaps).to.be(expectedValueLiteral);
      });

      it('should have the property timelineSkipGapsLocked (base name: "timelineSkipGapsLocked")', function() {
        // TODO: update the code to test the property timelineSkipGapsLocked
        expect(instance).to.have.property('timelineSkipGapsLocked');
        // expect(instance.timelineSkipGapsLocked).to.be(expectedValueLiteral);
      });

    });
  });

}));
