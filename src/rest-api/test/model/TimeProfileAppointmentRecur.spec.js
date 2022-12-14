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
    describe('TimeProfileAppointmentRecur', function() {
      beforeEach(function() {
        instance = new MilestoneIntegrationPlatformVmsResTfulApi.TimeProfileAppointmentRecur();
      });

      it('should create an instance of TimeProfileAppointmentRecur', function() {
        // TODO: update the code to test TimeProfileAppointmentRecur
        expect(instance).to.be.a(MilestoneIntegrationPlatformVmsResTfulApi.TimeProfileAppointmentRecur);
      });

      it('should have the property displayName (base name: "displayName")', function() {
        // TODO: update the code to test the property displayName
        expect(instance).to.have.property('displayName');
        // expect(instance.displayName).to.be(expectedValueLiteral);
      });

      it('should have the property appointmentRootId (base name: "appointmentRootId")', function() {
        // TODO: update the code to test the property appointmentRootId
        expect(instance).to.have.property('appointmentRootId');
        // expect(instance.appointmentRootId).to.be(expectedValueLiteral);
      });

      it('should have the property allDayEvent (base name: "allDayEvent")', function() {
        // TODO: update the code to test the property allDayEvent
        expect(instance).to.have.property('allDayEvent');
        // expect(instance.allDayEvent).to.be(expectedValueLiteral);
      });

      it('should have the property startDateTime (base name: "startDateTime")', function() {
        // TODO: update the code to test the property startDateTime
        expect(instance).to.have.property('startDateTime');
        // expect(instance.startDateTime).to.be(expectedValueLiteral);
      });

      it('should have the property endDateTime (base name: "endDateTime")', function() {
        // TODO: update the code to test the property endDateTime
        expect(instance).to.have.property('endDateTime');
        // expect(instance.endDateTime).to.be(expectedValueLiteral);
      });

      it('should have the property subject (base name: "subject")', function() {
        // TODO: update the code to test the property subject
        expect(instance).to.have.property('subject');
        // expect(instance.subject).to.be(expectedValueLiteral);
      });

      it('should have the property recurrenceDescription (base name: "recurrenceDescription")', function() {
        // TODO: update the code to test the property recurrenceDescription
        expect(instance).to.have.property('recurrenceDescription');
        // expect(instance.recurrenceDescription).to.be(expectedValueLiteral);
      });

      it('should have the property recurrenceOccurrenceStartTime (base name: "recurrenceOccurrenceStartTime")', function() {
        // TODO: update the code to test the property recurrenceOccurrenceStartTime
        expect(instance).to.have.property('recurrenceOccurrenceStartTime');
        // expect(instance.recurrenceOccurrenceStartTime).to.be(expectedValueLiteral);
      });

      it('should have the property recurrenceOccurrenceDuration (base name: "recurrenceOccurrenceDuration")', function() {
        // TODO: update the code to test the property recurrenceOccurrenceDuration
        expect(instance).to.have.property('recurrenceOccurrenceDuration');
        // expect(instance.recurrenceOccurrenceDuration).to.be(expectedValueLiteral);
      });

      it('should have the property recurrencePatternType (base name: "recurrencePatternType")', function() {
        // TODO: update the code to test the property recurrencePatternType
        expect(instance).to.have.property('recurrencePatternType');
        // expect(instance.recurrencePatternType).to.be(expectedValueLiteral);
      });

      it('should have the property recurrencePatternFrequency (base name: "recurrencePatternFrequency")', function() {
        // TODO: update the code to test the property recurrencePatternFrequency
        expect(instance).to.have.property('recurrencePatternFrequency');
        // expect(instance.recurrencePatternFrequency).to.be(expectedValueLiteral);
      });

      it('should have the property recurrencePatternInterval (base name: "recurrencePatternInterval")', function() {
        // TODO: update the code to test the property recurrencePatternInterval
        expect(instance).to.have.property('recurrencePatternInterval');
        // expect(instance.recurrencePatternInterval).to.be(expectedValueLiteral);
      });

      it('should have the property recurrencePatternDaysOfWeek (base name: "recurrencePatternDaysOfWeek")', function() {
        // TODO: update the code to test the property recurrencePatternDaysOfWeek
        expect(instance).to.have.property('recurrencePatternDaysOfWeek');
        // expect(instance.recurrencePatternDaysOfWeek).to.be(expectedValueLiteral);
      });

      it('should have the property recurrencePatternDayOfMonth (base name: "recurrencePatternDayOfMonth")', function() {
        // TODO: update the code to test the property recurrencePatternDayOfMonth
        expect(instance).to.have.property('recurrencePatternDayOfMonth');
        // expect(instance.recurrencePatternDayOfMonth).to.be(expectedValueLiteral);
      });

      it('should have the property recurrencePatternMonthOfYear (base name: "recurrencePatternMonthOfYear")', function() {
        // TODO: update the code to test the property recurrencePatternMonthOfYear
        expect(instance).to.have.property('recurrencePatternMonthOfYear');
        // expect(instance.recurrencePatternMonthOfYear).to.be(expectedValueLiteral);
      });

      it('should have the property recurrencePatternOccurrenceOfDayInMonth (base name: "recurrencePatternOccurrenceOfDayInMonth")', function() {
        // TODO: update the code to test the property recurrencePatternOccurrenceOfDayInMonth
        expect(instance).to.have.property('recurrencePatternOccurrenceOfDayInMonth');
        // expect(instance.recurrencePatternOccurrenceOfDayInMonth).to.be(expectedValueLiteral);
      });

      it('should have the property recurrenceRangeStartDate (base name: "recurrenceRangeStartDate")', function() {
        // TODO: update the code to test the property recurrenceRangeStartDate
        expect(instance).to.have.property('recurrenceRangeStartDate');
        // expect(instance.recurrenceRangeStartDate).to.be(expectedValueLiteral);
      });

      it('should have the property recurrenceRangeEndDate (base name: "recurrenceRangeEndDate")', function() {
        // TODO: update the code to test the property recurrenceRangeEndDate
        expect(instance).to.have.property('recurrenceRangeEndDate');
        // expect(instance.recurrenceRangeEndDate).to.be(expectedValueLiteral);
      });

      it('should have the property recurrenceRangeLimit (base name: "recurrenceRangeLimit")', function() {
        // TODO: update the code to test the property recurrenceRangeLimit
        expect(instance).to.have.property('recurrenceRangeLimit');
        // expect(instance.recurrenceRangeLimit).to.be(expectedValueLiteral);
      });

      it('should have the property recurrenceRangeMaxOccurrences (base name: "recurrenceRangeMaxOccurrences")', function() {
        // TODO: update the code to test the property recurrenceRangeMaxOccurrences
        expect(instance).to.have.property('recurrenceRangeMaxOccurrences');
        // expect(instance.recurrenceRangeMaxOccurrences).to.be(expectedValueLiteral);
      });

    });
  });

}));
