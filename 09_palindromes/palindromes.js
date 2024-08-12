const palindromes = function (str) {
    let newStr = '';
    let revStr = '';
    for (let i = 0; i < str.length; i++) {
        if (!/^[^a-zA-Z0-9]$/.test(str[i]))
          {newStr += str[i]};
    };
    for (let i = str.length -1; i >= 0; i --) {
      if (!/^[^a-zA-Z0-9]$/.test(str[i])) 
          {revStr += str[i]};
    };
    
    newStr = newStr.toLowerCase();
    revStr = revStr.toLowerCase();

    if (newStr === revStr) {
      return true;
    } else { 
      return false
    };
};



// Do not edit below this line
module.exports = palindromes;
