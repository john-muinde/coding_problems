/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if ((x < 10 && x > 0) || x == 0) return true;
  if (x % 10 == 0) return false;
  if (x / 10 >= 1 && Math.floor(x / 10) == x % 10) return true;
  if (x / 10 >= 10 && Math.floor(x / 10) == x % 10) return true;
  return x.toString() == x.toString().split("").reverse().join("");
};
let start = performance.now();
console.log(isPalindrome(0));
let end = performance.now();
console.log(end - start);
