const add = function(x, y) {
	return(x + y);
};

const subtract = function(x, y) {
	return(x - y);
};

const sum = function(x) {
	let result = 0
  for (let n in x) {
    result += x[n];
  }
  return result;
};

const multiply = function(...nums) {
  let result = 1;
  for (let num of nums) {
    result *= num;
  }
  return(result);
}

const power = function(num, pow) {
	return(num ** pow);
};

const factorial = function(numb) {
	let result = 1;
  while (numb >= 2) {
    result *= numb;
    --numb;
  }
  return(result);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
