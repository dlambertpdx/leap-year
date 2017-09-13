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
