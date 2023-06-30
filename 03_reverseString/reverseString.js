const reverseString = function(string) {
    let revs;
    let arr = string.split("");
    arr.reverse();
    //for (char of arr) {
    //    revs += `${char}`;
    //}
    revs = arr.join("");
    return revs;



};

// Do not edit below this line
module.exports = reverseString;
