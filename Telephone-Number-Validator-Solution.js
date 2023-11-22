function telephoneCheck(str) {

    // Acceptables types
    // 1) n{3}-n{3}-n{4}
    let regex1 = /\d{3}\-\d{3}-\d{4}/
    // 2) (n{3})n{3}-n{4}
    let regex2 = /\(\d{3}\)\d{3}-\d{4}/
    // 3) (n{3})' 'n{3}-n{4}
    let regex3 = /\(\d{3}\)\s\d{3}-\d{4}/
    // 4) n{3}' 'n{3}' 'n{4}
    let regex4 = /\d{3}\s\d{3}\s\d{4}/
    // 5) n{10}
    let regex5 = /\d{10}/
    // 6) n{11}
    let regex6 = /[1]\d{10}/
    // 7) [1]' 'n{3}' 'n{3}' 'n{4}
    let regex7 = /[1]\s\d{3}\s\d{3}\s\d{4}/
    // 8) [1]-n{3}-n{3}-n{4}
    let regex8 = /[1]\-\d{3}\-\d{3}\-\d{4}/
    // 9) [1]' '(n{3})' 'n{3}-n{4}
    let regex9 = /[1]\s\(\d{3}\)\s\d{3}\-\d{4}/
    // 10) (n{3})n{3}-n{4}
    let regex10 = /\(\d{3}\)\d{3}\-\d{4}/
    // 11) [1](n{3})n{3}-n{4}
    let regex11 = /[1]\(\d{3}\)\d{3}\-\d{4}/
    // 12) [1]' 'n{3}-n{3}-n{4}
    let regex12 = /[1]\s\d{3}\-\d{3}\-\d{4}/
    
    // Some acceptable numbers forms that do not contain
    // the country code will be contained within
    // a longer input that an incorrect country code
    
    // Therefore, the number of digits passed can let us
    // deal with this situation
    
    let regex13 = /\d/gi;
    let digitsPassed = str.match(regex13)
    let numbersOnly = digitsPassed.join("");
    
    
    // Testing
    
    // 1) n{3}-n{3}-n{4}
    if (regex1.test(str) && numbersOnly.length == 10 && str.length == 12) {
      return true;
    // 2) (n{3})n{3}-n{4}
    } else if (regex2.test(str) && numbersOnly.length == 10) {
      return true;
    // 3) (n{3})' 'n{3}-n{4}
    } else if (regex3.test(str) && numbersOnly.length == 10) {
      return true;
    // 4) n{3}' 'n{3}' 'n{4}
    } else if (regex4.test(str) && numbersOnly.length == 10) {
      return true;
    // 5) n{10}
    } else if (regex5.test(str) && str.length == 10) {
      return true;
    // 6) n{11}
    } else if (regex6.test(str) && str[0] == 1 && str.length == 11) {
      return true;
    // 7) [1]' 'n{3}' 'n{3}' 'n{4}
    } else if (regex7.test(str) && str[0] == 1 && numbersOnly.length == 11) {
      return true;
    // 8) [1]-n{3}-n{3}-n{4}
    } else if (regex8.test(str) && str[0] == 1 && numbersOnly.length == 11) {
      return true;
    // 9) [1]' '(n{3})' 'n{3}-n{4}
    } else if (regex9.test(str) && str[0] == 1 && numbersOnly.length == 11) {
      return true;
    // 10) (n{3})n{3}-n{4}
    } else if (regex10.test(str) && numbersOnly.length == 10) {
      return true;
    // 11) [1](n{3})n{3}-n{4}
    } else if (regex11.test(str) && str[0] == 1 && numbersOnly.length == 11) {
      return true;
    // 12) [1]' 'n{3}-n{3}-n{4}
    } else if (regex12.test(str) && str[0] == 1 && numbersOnly.length == 11) {
      return true;  
    } else {
      return false;
    }
    
    }
    
    telephoneCheck("555-555-5555");