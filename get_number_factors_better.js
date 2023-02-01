/* Time complexity(O(sqrt(n))) */

function getFactors(num) {
  const factors = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      factors.push(i);
      if (i !== Math.sqrt(num)) {
        factors.push(num / i);
      }
    }
  }
  return factors.sort((a, b) => a - b);
}
let start = new Date();
console.log(getFactors(12)); // [1, 2, 3, 4, 6, 12]
console.log(":", new Date().getTime() - start.getTime());
