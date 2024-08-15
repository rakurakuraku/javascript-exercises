const findTheOldest = function(arr) {
    let thisYear = (new Date()).getFullYear();

    for (let person = 0; person < arr.length; person ++) {
      if (!('yearOfDeath' in arr[person])) {
        arr[person].yearOfDeath = thisYear;
      };
    };

    let sortedByAge = arr.sort(function(a, b) {return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth)});

    return sortedByAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
