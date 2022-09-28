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
    describe('ClientProfileGenerals', function() {
      beforeEach(function() {
        instance = new MilestoneIntegrationPlatformVmsResTfulApi.ClientProfileGenerals();
      });

      it('should create an instance of ClientProfileGenerals', function() {
        // TODO: update the code to test ClientProfileGenerals
        expect(instance).to.be.a(MilestoneIntegrationPlatformVmsResTfulApi.ClientProfileGenerals);
      });

      it('should have the property displayName (base name: "displayName")', function() {
        // TODO: update the code to test the property displayName
        expect(instance).to.have.property('displayName');
        // expect(instance.displayName).to.be(expectedValueLiteral);
      });

      it('should have the property generalTimeInTitlebar (base name: "generalTimeInTitlebar")', function() {
        // TODO: update the code to test the property generalTimeInTitlebar
        expect(instance).to.have.property('generalTimeInTitlebar');
        // expect(instance.generalTimeInTitlebar).to.be(expectedValueLiteral);
      });

      it('should have the property generalTimeInTitlebarLocked (base name: "generalTimeInTitlebarLocked")', function() {
        // TODO: update the code to test the property generalTimeInTitlebarLocked
        expect(instance).to.have.property('generalTimeInTitlebarLocked');
        // expect(instance.generalTimeInTitlebarLocked).to.be(expectedValueLiteral);
      });

      it('should have the property generalTitleBar (base name: "generalTitleBar")', function() {
        // TODO: update the code to test the property generalTitleBar
        expect(instance).to.have.property('generalTitleBar');
        // expect(instance.generalTitleBar).to.be(expectedValueLiteral);
      });

      it('should have the property generalTitleBarLocked (base name: "generalTitleBarLocked")', function() {
        // TODO: update the code to test the property generalTitleBarLocked
        expect(instance).to.have.property('generalTitleBarLocked');
        // expect(instance.generalTitleBarLocked).to.be(expectedValueLiteral);
      });

      it('should have the property generalHtmlViewItemScripting (base name: "generalHtmlViewItemScripting")', function() {
        // TODO: update the code to test the property generalHtmlViewItemScripting
        expect(instance).to.have.property('generalHtmlViewItemScripting');
        // expect(instance.generalHtmlViewItemScripting).to.be(expectedValueLiteral);
      });

      it('should have the property generalEmptySpaces (base name: "generalEmptySpaces")', function() {
        // TODO: update the code to test the property generalEmptySpaces
        expect(instance).to.have.property('generalEmptySpaces');
        // expect(instance.generalEmptySpaces).to.be(expectedValueLiteral);
      });

      it('should have the property generalEmptySpacesLocked (base name: "generalEmptySpacesLocked")', function() {
        // TODO: update the code to test the property generalEmptySpacesLocked
        expect(instance).to.have.property('generalEmptySpacesLocked');
        // expect(instance.generalEmptySpacesLocked).to.be(expectedValueLiteral);
      });

      it('should have the property viewsCustomLogoInEmptySpaces (base name: "viewsCustomLogoInEmptySpaces")', function() {
        // TODO: update the code to test the property viewsCustomLogoInEmptySpaces
        expect(instance).to.have.property('viewsCustomLogoInEmptySpaces');
        // expect(instance.viewsCustomLogoInEmptySpaces).to.be(expectedValueLiteral);
      });

      it('should have the property generalCameraErrors (base name: "generalCameraErrors")', function() {
        // TODO: update the code to test the property generalCameraErrors
        expect(instance).to.have.property('generalCameraErrors');
        // expect(instance.generalCameraErrors).to.be(expectedValueLiteral);
      });

      it('should have the property generalCameraErrorsLocked (base name: "generalCameraErrorsLocked")', function() {
        // TODO: update the code to test the property generalCameraErrorsLocked
        expect(instance).to.have.property('generalCameraErrorsLocked');
        // expect(instance.generalCameraErrorsLocked).to.be(expectedValueLiteral);
      });

      it('should have the property generalServerErrors (base name: "generalServerErrors")', function() {
        // TODO: update the code to test the property generalServerErrors
        expect(instance).to.have.property('generalServerErrors');
        // expect(instance.generalServerErrors).to.be(expectedValueLiteral);
      });

      it('should have the property generalServerErrorsLocked (base name: "generalServerErrorsLocked")', function() {
        // TODO: update the code to test the property generalServerErrorsLocked
        expect(instance).to.have.property('generalServerErrorsLocked');
        // expect(instance.generalServerErrorsLocked).to.be(expectedValueLiteral);
      });

      it('should have the property generalCameraStoppedMessage (base name: "generalCameraStoppedMessage")', function() {
        // TODO: update the code to test the property generalCameraStoppedMessage
        expect(instance).to.have.property('generalCameraStoppedMessage');
        // expect(instance.generalCameraStoppedMessage).to.be(expectedValueLiteral);
      });

      it('should have the property generalCameraStoppedMessageLocked (base name: "generalCameraStoppedMessageLocked")', function() {
        // TODO: update the code to test the property generalCameraStoppedMessageLocked
        expect(instance).to.have.property('generalCameraStoppedMessageLocked');
        // expect(instance.generalCameraStoppedMessageLocked).to.be(expectedValueLiteral);
      });

      it('should have the property generalViewGridSpacer (base name: "generalViewGridSpacer")', function() {
        // TODO: update the code to test the property generalViewGridSpacer
        expect(instance).to.have.property('generalViewGridSpacer');
        // expect(instance.generalViewGridSpacer).to.be(expectedValueLiteral);
      });

      it('should have the property generalViewGridSpacerLocked (base name: "generalViewGridSpacerLocked")', function() {
        // TODO: update the code to test the property generalViewGridSpacerLocked
        expect(instance).to.have.property('generalViewGridSpacerLocked');
        // expect(instance.generalViewGridSpacerLocked).to.be(expectedValueLiteral);
      });

      it('should have the property generalApplicationMaximization (base name: "generalApplicationMaximization")', function() {
        // TODO: update the code to test the property generalApplicationMaximization
        expect(instance).to.have.property('generalApplicationMaximization');
        // expect(instance.generalApplicationMaximization).to.be(expectedValueLiteral);
      });

      it('should have the property generalApplicationMaximizationLocked (base name: "generalApplicationMaximizationLocked")', function() {
        // TODO: update the code to test the property generalApplicationMaximizationLocked
        expect(instance).to.have.property('generalApplicationMaximizationLocked');
        // expect(instance.generalApplicationMaximizationLocked).to.be(expectedValueLiteral);
      });

      it('should have the property applicationInactivityTimeout (base name: "applicationInactivityTimeout")', function() {
        // TODO: update the code to test the property applicationInactivityTimeout
        expect(instance).to.have.property('applicationInactivityTimeout');
        // expect(instance.applicationInactivityTimeout).to.be(expectedValueLiteral);
      });

      it('should have the property generalDefaultImageQuality (base name: "generalDefaultImageQuality")', function() {
        // TODO: update the code to test the property generalDefaultImageQuality
        expect(instance).to.have.property('generalDefaultImageQuality');
        // expect(instance.generalDefaultImageQuality).to.be(expectedValueLiteral);
      });

      it('should have the property generalDefaultImageQualityLocked (base name: "generalDefaultImageQualityLocked")', function() {
        // TODO: update the code to test the property generalDefaultImageQualityLocked
        expect(instance).to.have.property('generalDefaultImageQualityLocked');
        // expect(instance.generalDefaultImageQualityLocked).to.be(expectedValueLiteral);
      });

      it('should have the property generalDefaultFrameRate (base name: "generalDefaultFrameRate")', function() {
        // TODO: update the code to test the property generalDefaultFrameRate
        expect(instance).to.have.property('generalDefaultFrameRate');
        // expect(instance.generalDefaultFrameRate).to.be(expectedValueLiteral);
      });

      it('should have the property generalDefaultFrameRateLocked (base name: "generalDefaultFrameRateLocked")', function() {
        // TODO: update the code to test the property generalDefaultFrameRateLocked
        expect(instance).to.have.property('generalDefaultFrameRateLocked');
        // expect(instance.generalDefaultFrameRateLocked).to.be(expectedValueLiteral);
      });

      it('should have the property generalDefaultVideoBuffer (base name: "generalDefaultVideoBuffer")', function() {
        // TODO: update the code to test the property generalDefaultVideoBuffer
        expect(instance).to.have.property('generalDefaultVideoBuffer');
        // expect(instance.generalDefaultVideoBuffer).to.be(expectedValueLiteral);
      });

      it('should have the property generalDefaultVideoBufferLocked (base name: "generalDefaultVideoBufferLocked")', function() {
        // TODO: update the code to test the property generalDefaultVideoBufferLocked
        expect(instance).to.have.property('generalDefaultVideoBufferLocked');
        // expect(instance.generalDefaultVideoBufferLocked).to.be(expectedValueLiteral);
      });

      it('should have the property applicationMinimizeButton (base name: "applicationMinimizeButton")', function() {
        // TODO: update the code to test the property applicationMinimizeButton
        expect(instance).to.have.property('applicationMinimizeButton');
        // expect(instance.applicationMinimizeButton).to.be(expectedValueLiteral);
      });

      it('should have the property applicationMaximizeButton (base name: "applicationMaximizeButton")', function() {
        // TODO: update the code to test the property applicationMaximizeButton
        expect(instance).to.have.property('applicationMaximizeButton');
        // expect(instance.applicationMaximizeButton).to.be(expectedValueLiteral);
      });

      it('should have the property applicationLogoutButton (base name: "applicationLogoutButton")', function() {
        // TODO: update the code to test the property applicationLogoutButton
        expect(instance).to.have.property('applicationLogoutButton');
        // expect(instance.applicationLogoutButton).to.be(expectedValueLiteral);
      });

      it('should have the property applicationExitButton (base name: "applicationExitButton")', function() {
        // TODO: update the code to test the property applicationExitButton
        expect(instance).to.have.property('applicationExitButton');
        // expect(instance.applicationExitButton).to.be(expectedValueLiteral);
      });

      it('should have the property applicationOptionsDialogButton (base name: "applicationOptionsDialogButton")', function() {
        // TODO: update the code to test the property applicationOptionsDialogButton
        expect(instance).to.have.property('applicationOptionsDialogButton');
        // expect(instance.applicationOptionsDialogButton).to.be(expectedValueLiteral);
      });

      it('should have the property applicationKeyboardSetup (base name: "applicationKeyboardSetup")', function() {
        // TODO: update the code to test the property applicationKeyboardSetup
        expect(instance).to.have.property('applicationKeyboardSetup');
        // expect(instance.applicationKeyboardSetup).to.be(expectedValueLiteral);
      });

      it('should have the property applicationJoystickSetup (base name: "applicationJoystickSetup")', function() {
        // TODO: update the code to test the property applicationJoystickSetup
        expect(instance).to.have.property('applicationJoystickSetup');
        // expect(instance.applicationJoystickSetup).to.be(expectedValueLiteral);
      });

      it('should have the property applicationRememberPassword (base name: "applicationRememberPassword")', function() {
        // TODO: update the code to test the property applicationRememberPassword
        expect(instance).to.have.property('applicationRememberPassword');
        // expect(instance.applicationRememberPassword).to.be(expectedValueLiteral);
      });

      it('should have the property applicationAutoLogin (base name: "applicationAutoLogin")', function() {
        // TODO: update the code to test the property applicationAutoLogin
        expect(instance).to.have.property('applicationAutoLogin');
        // expect(instance.applicationAutoLogin).to.be(expectedValueLiteral);
      });

      it('should have the property applicationStartMode (base name: "applicationStartMode")', function() {
        // TODO: update the code to test the property applicationStartMode
        expect(instance).to.have.property('applicationStartMode');
        // expect(instance.applicationStartMode).to.be(expectedValueLiteral);
      });

      it('should have the property applicationStartModeLocked (base name: "applicationStartModeLocked")', function() {
        // TODO: update the code to test the property applicationStartModeLocked
        expect(instance).to.have.property('applicationStartModeLocked');
        // expect(instance.applicationStartModeLocked).to.be(expectedValueLiteral);
      });

      it('should have the property applicationStartView (base name: "applicationStartView")', function() {
        // TODO: update the code to test the property applicationStartView
        expect(instance).to.have.property('applicationStartView');
        // expect(instance.applicationStartView).to.be(expectedValueLiteral);
      });

      it('should have the property applicationStartViewLocked (base name: "applicationStartViewLocked")', function() {
        // TODO: update the code to test the property applicationStartViewLocked
        expect(instance).to.have.property('applicationStartViewLocked');
        // expect(instance.applicationStartViewLocked).to.be(expectedValueLiteral);
      });

      it('should have the property applicationNewSCVersionWindow (base name: "applicationNewSCVersionWindow")', function() {
        // TODO: update the code to test the property applicationNewSCVersionWindow
        expect(instance).to.have.property('applicationNewSCVersionWindow');
        // expect(instance.applicationNewSCVersionWindow).to.be(expectedValueLiteral);
      });

      it('should have the property applicationNewSCVersionText (base name: "applicationNewSCVersionText")', function() {
        // TODO: update the code to test the property applicationNewSCVersionText
        expect(instance).to.have.property('applicationNewSCVersionText');
        // expect(instance.applicationNewSCVersionText).to.be(expectedValueLiteral);
      });

      it('should have the property generalDefaultPtzPointAndClickMode (base name: "generalDefaultPtzPointAndClickMode")', function() {
        // TODO: update the code to test the property generalDefaultPtzPointAndClickMode
        expect(instance).to.have.property('generalDefaultPtzPointAndClickMode');
        // expect(instance.generalDefaultPtzPointAndClickMode).to.be(expectedValueLiteral);
      });

      it('should have the property generalDefaultPtzPointAndClickModeLocked (base name: "generalDefaultPtzPointAndClickModeLocked")', function() {
        // TODO: update the code to test the property generalDefaultPtzPointAndClickModeLocked
        expect(instance).to.have.property('generalDefaultPtzPointAndClickModeLocked');
        // expect(instance.generalDefaultPtzPointAndClickModeLocked).to.be(expectedValueLiteral);
      });

      it('should have the property systemMonitorTab (base name: "systemMonitorTab")', function() {
        // TODO: update the code to test the property systemMonitorTab
        expect(instance).to.have.property('systemMonitorTab');
        // expect(instance.systemMonitorTab).to.be(expectedValueLiteral);
      });

      it('should have the property centralizedSearchTab (base name: "centralizedSearchTab")', function() {
        // TODO: update the code to test the property centralizedSearchTab
        expect(instance).to.have.property('centralizedSearchTab');
        // expect(instance.centralizedSearchTab).to.be(expectedValueLiteral);
      });

      it('should have the property centralizedSearchMaxDeviceCount (base name: "centralizedSearchMaxDeviceCount")', function() {
        // TODO: update the code to test the property centralizedSearchMaxDeviceCount
        expect(instance).to.have.property('centralizedSearchMaxDeviceCount');
        // expect(instance.centralizedSearchMaxDeviceCount).to.be(expectedValueLiteral);
      });

      it('should have the property applicationHideMousePointerTimeout (base name: "applicationHideMousePointerTimeout")', function() {
        // TODO: update the code to test the property applicationHideMousePointerTimeout
        expect(instance).to.have.property('applicationHideMousePointerTimeout');
        // expect(instance.applicationHideMousePointerTimeout).to.be(expectedValueLiteral);
      });

      it('should have the property applicationHideMousePointerTimeoutLocked (base name: "applicationHideMousePointerTimeoutLocked")', function() {
        // TODO: update the code to test the property applicationHideMousePointerTimeoutLocked
        expect(instance).to.have.property('applicationHideMousePointerTimeoutLocked');
        // expect(instance.applicationHideMousePointerTimeoutLocked).to.be(expectedValueLiteral);
      });

      it('should have the property alarmManagerTab (base name: "alarmManagerTab")', function() {
        // TODO: update the code to test the property alarmManagerTab
        expect(instance).to.have.property('alarmManagerTab');
        // expect(instance.alarmManagerTab).to.be(expectedValueLiteral);
      });

      it('should have the property applicationSnapshotAvailability (base name: "applicationSnapshotAvailability")', function() {
        // TODO: update the code to test the property applicationSnapshotAvailability
        expect(instance).to.have.property('applicationSnapshotAvailability');
        // expect(instance.applicationSnapshotAvailability).to.be(expectedValueLiteral);
      });

      it('should have the property applicationSnapshotAvailabilityLocked (base name: "applicationSnapshotAvailabilityLocked")', function() {
        // TODO: update the code to test the property applicationSnapshotAvailabilityLocked
        expect(instance).to.have.property('applicationSnapshotAvailabilityLocked');
        // expect(instance.applicationSnapshotAvailabilityLocked).to.be(expectedValueLiteral);
      });

      it('should have the property applicationSnapshotPath (base name: "applicationSnapshotPath")', function() {
        // TODO: update the code to test the property applicationSnapshotPath
        expect(instance).to.have.property('applicationSnapshotPath');
        // expect(instance.applicationSnapshotPath).to.be(expectedValueLiteral);
      });

      it('should have the property applicationSnapshotPathLocked (base name: "applicationSnapshotPathLocked")', function() {
        // TODO: update the code to test the property applicationSnapshotPathLocked
        expect(instance).to.have.property('applicationSnapshotPathLocked');
        // expect(instance.applicationSnapshotPathLocked).to.be(expectedValueLiteral);
      });

      it('should have the property applicationEvidenceLock (base name: "applicationEvidenceLock")', function() {
        // TODO: update the code to test the property applicationEvidenceLock
        expect(instance).to.have.property('applicationEvidenceLock');
        // expect(instance.applicationEvidenceLock).to.be(expectedValueLiteral);
      });

      it('should have the property applicationLiftPrivacyMaskTimeout (base name: "applicationLiftPrivacyMaskTimeout")', function() {
        // TODO: update the code to test the property applicationLiftPrivacyMaskTimeout
        expect(instance).to.have.property('applicationLiftPrivacyMaskTimeout');
        // expect(instance.applicationLiftPrivacyMaskTimeout).to.be(expectedValueLiteral);
      });

      it('should have the property applicationOnlineHelp (base name: "applicationOnlineHelp")', function() {
        // TODO: update the code to test the property applicationOnlineHelp
        expect(instance).to.have.property('applicationOnlineHelp');
        // expect(instance.applicationOnlineHelp).to.be(expectedValueLiteral);
      });

      it('should have the property applicationOnlineHelpLocked (base name: "applicationOnlineHelpLocked")', function() {
        // TODO: update the code to test the property applicationOnlineHelpLocked
        expect(instance).to.have.property('applicationOnlineHelpLocked');
        // expect(instance.applicationOnlineHelpLocked).to.be(expectedValueLiteral);
      });

      it('should have the property applicationVideoTutorials (base name: "applicationVideoTutorials")', function() {
        // TODO: update the code to test the property applicationVideoTutorials
        expect(instance).to.have.property('applicationVideoTutorials');
        // expect(instance.applicationVideoTutorials).to.be(expectedValueLiteral);
      });

      it('should have the property applicationVideoTutorialsLocked (base name: "applicationVideoTutorialsLocked")', function() {
        // TODO: update the code to test the property applicationVideoTutorialsLocked
        expect(instance).to.have.property('applicationVideoTutorialsLocked');
        // expect(instance.applicationVideoTutorialsLocked).to.be(expectedValueLiteral);
      });

      it('should have the property applicationTransactTab (base name: "applicationTransactTab")', function() {
        // TODO: update the code to test the property applicationTransactTab
        expect(instance).to.have.property('applicationTransactTab');
        // expect(instance.applicationTransactTab).to.be(expectedValueLiteral);
      });

    });
  });

}));
