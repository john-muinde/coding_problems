function ArrayAddition(arr){
  arr.sort(function (a, b) {
    return a - b;
  }); // step 1
  var max = arr.pop(); // step 2
  var sum = 0; // step 3
  for (var i = 0; i < arr.length; i++) {
    // step 4
    sum += arr[i];
    for (var j = 0; j < arr.length; j++) {
      if (i !== j) {
        // make sure we don't add the same element twice
        sum += arr[j];
        if (sum === max) {
          // step 5
          return true;
        }
      }
    }
    for (var k = 0; k < arr.length; k++) {
      if (i !== k) {
        // make sure we don't subtract the same element twice
        sum -= arr[k];
        if (sum === max) {
          // step 5
          return true;
        }
      }
    }
    sum = 0; // reset the sum
  }
  return false; // step 6
}

arr.split(',')

console.log(ArrayAddition([5,7,16,1,2]))