/*const removeFromArray = function(arr, ...rem) {
    let array = arr;
    let i = arr.indexOf(rem);
    if (array.includes(rem)) {
        array.splice(i, 1);
        return array;

}
};
*/
const removeFromArray = function(arr, ...rem) {
    let array = arr;
      for (let r of rem) {
        if (array.includes(r)) {
          let i = array.indexOf(r);
          array.splice(i, 1);
        }
      }
      return array;

};


// Do not edit below this line
module.exports = removeFromArray;