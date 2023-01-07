var findMedianSortedArrays = function (nums1, nums2) {
  let list = [...nums1, ...nums2].sort((a, b) => a - b);
//   let i = 0;
//   let j = 0;
  //   while (i < nums1.length || j < nums2.length) {
  //       if (i >= nums1.length) {
  //           list.push(nums2[j]);
  //           j++;
  //       } else if (j >= nums2.length) {
  //           list.push(nums1[i]);
  //           i++;
  //       } else if (nums1[i] < nums2[j]) {
  //           list.push(nums1[i]);
  //           i++;
  //       } else {
  //           list.push(nums2[j]);
  //           j++;
  //       }
  //   }
  let result =
    list.length % 2 == 0
      ? (list[list.length / 2 - 1] + list[list.length / 2]) / 2
      : list[Math.ceil(list.length / 2 - 1)];
  return result;
};

console.log(findMedianSortedArrays([1, 2, 8, 9, 10], []));
