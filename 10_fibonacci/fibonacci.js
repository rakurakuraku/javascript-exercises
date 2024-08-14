const fibonacci = function(num) {
    let seed = [0, 1];
    let i = 0;
    if (num > 0) {
      while (i < num -1) {
        seed[seed.length] = seed[seed.length -1] + seed[seed.length -2];
        i++;
      };
      return seed[num];
    }
      else {
        return "OOPS";
      }
};

// Do not edit below this line
module.exports = fibonacci;
