(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// user interface logic
var LeapYear = require('./../js/leapyear.js').leapYearModule;

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var simpleLeapYear = new LeapYear("1999");
    var result = simpleLeapYear.leapYear(year);

    $(".year").text(year);

    if (!result) {
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#result").show();
  });
});

},{"./../js/leapyear.js":2}],2:[function(require,module,exports){
// business logic
function LeapYear(leapYear) {
  this.year = leapYear;
}
LeapYear.prototype.leapYear = function(year){
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};
// var leapYear = function(year) {

// };
exports.leapYearModule = LeapYear;

},{}]},{},[1]);
