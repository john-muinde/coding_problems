function toRoman(num) {
  let result = "";

  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  // Loop through the object and add the appropriate numerals to the result string
  for (let key in romanNumerals) {
    
    while (num >= romanNumerals[key]) {
      result += key;
      num -= romanNumerals[key];
    }
  }

  // Return the result
  return result;
}

// Test the function with some sample input
console.log(toRoman(1453)); // prints "MCDLIII"
console.log(toRoman(9)); // prints "IX"
console.log(toRoman(2348)); // prints "MMCCCXLVIII"
