function convertToRoman(num) {

    const romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const arabicNumerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let correspondingNumeral = [];
  
      for (let i = 0; i < 13; i++) { 
          while (num >= arabicNumerals[i]) {
              correspondingNumeral.push(romanNumerals[i])
              num -= arabicNumerals[i];
          }
  
      }
  return correspondingNumeral.join("");
  
  }
  
  
  
  
  convertToRoman(1);
  convertToRoman(4);
  convertToRoman(52);
  convertToRoman(107);
  convertToRoman(3245);