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
