/* Median of Two Sorted Arrays
Hard

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)). */

var findMedianSortedArrays = function (nums1, nums2) {
  let mergedSortedList = [...nums1, ...nums2].sort((a, b) => a - b);
  let medianOfSortedArrays =
    mergedSortedList.length % 2 == 0
      ? (mergedSortedList[mergedSortedList.length / 2 - 1] +
          mergedSortedList[mergedSortedList.length / 2]) /
        2
      : mergedSortedList[Math.ceil(mergedSortedList.length / 2 - 1)];
  return medianOfSortedArrays;
};

console.log(findMedianSortedArrays([1, 2, 8, 9, 10], []));
