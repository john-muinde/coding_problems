/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. */
function uniqueArr(arr) {
  var uniques = [];
  var itemsFound = {};
  for (var i = 0, l = arr.length; i < l; i++) {
    var stringified = JSON.stringify(arr[i]);
    if (itemsFound[stringified]) continue;
    uniques.push(arr[i]);
    itemsFound[stringified] = true;
  }
  return uniques.flat();
}
function twoSum(nums, target) {
  let finalList = [];

  function shorterUniqueArr(arr) {
    return arr
      .map(JSON.stringify)
      .filter((e, i, a) => i === a.indexOf(e))
      .map(JSON.parse)
      .filter((a) => a[0] !== a[1]);
  }

  for (let firstElement = 0; firstElement < nums.length; firstElement++) {
    for (let secondElement = 0; secondElement < nums.length; secondElement++) {
      if (nums[secondElement] + nums[firstElement] === target) {
        finalList.push([firstElement, secondElement].sort((a, b) => a - b));
      }
    }
  }
  return shorterUniqueArr(finalList);
}
let nums = [3, 2, 4];
let target = 6;
console.log(twoSum(nums, target));
// console.log(end - start);
