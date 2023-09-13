const sumAll = function(x, y) {
    let total = 0;
    let big = 0;
    let small = 0;
    if (Number.isInteger(x) && Number.isInteger(y) && x > 0 && y > 0) {
      if (x > y) {
        big = x;
        small = y;
      }
      else {
        big = y;
        small = x;
      }
      while (big >= small) {
        total += big;
        big--;
        //console.log(big);
        //console.log(total);
      }
      return(total);
    }
    else {
      return('ERROR')
    }
};

// Do not edit below this line
module.exports = sumAll;
