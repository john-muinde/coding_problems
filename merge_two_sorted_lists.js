function sortTwoLists(nums1, nums2) {
  let i = 0;
  let j = 0;
  result = [];
  while (i < nums1.length || j < nums2.length) {
    if (i >= nums1.length) {
      result.push(nums2[j]);
      j++;
    } else if (j >= nums2.length) {
      result.push(nums1[i]);
      i++;
    } else if (nums1[i] < nums2[j]) {
      result.push(nums1[i]);
      console.log("i: " + i + " j: " + j);
      i++;
    } else {
      result.push(nums2[j]);
      j++;
      console.log("j: " + j + " i: " + i);
    }
  }
  return result;
}

function sortTwoListsDestructuring(nums1, nums2) {
  return [...nums1, ...nums2].sort((a, b) => a - b);
}
console.log(sortTwoListsDestructuring([2, 0, 5], [1, 3, 4]));
