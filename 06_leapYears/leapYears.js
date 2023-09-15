const leapYears = function(year) {
    let leapyear;
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
      leapyear = true;
    }
    else {
      leapyear = false;
    }
    return(leapyear);
}

// Do not edit below this line
module.exports = leapYears;
