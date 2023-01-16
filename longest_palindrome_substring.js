/**
 * @param {string} s
 * @return {string}
 */
/* function longestPalindrome(s) {
  const palindrome = (x) => x.split("").reverse().join("") === x;
  if (s.length == 1) {
    return s;
  }
  if (s.length == 2) {
    return s[0] == s[s.length - 1] ? s : s[0];
  }
  let finalList = [];
  for (let i = 0; i < s.length; i++) {
    let pointEnd = s.length;
    while (pointEnd > i) {
      let currentStr = s.substring(i, pointEnd);
      if (
        currentStr[0] == currentStr[currentStr.length - 1] &&
        palindrome(currentStr) &&
        currentStr.length > 1
      ) {
        finalList.push(currentStr);
      }
      pointEnd--;
    }
  }
  return finalList.sort((a, b) => b.length - a.length)[0];
} */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let longest = "";

  const palindrome = (i, j) => {
    while (i >= 0 && j < s.length && s[i] === s[j]) {
      console.log(i, " ", j);
      i--;
      j++;
    }
    console.log(i, ":", j);

    return s.substring(i + 1, j);
  };

  for (let i = 0; i < s.length; i++) {
    const odd = palindrome(i, i);
    const even = palindrome(i, i + 1);

    const currLongest = odd.length > even.length ? odd : even;
    longest = longest.length > currLongest.length ? longest : currLongest;
  }

  return longest;
};

/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(s, i, i);
    let len2 = expandAroundCenter(s, i, i + 1);
    let length = Math.max(len1, len2);
    if (length > end - start) {
      start = i - Math.floor((length - 1) / 2);
      end = i + Math.floor(length / 2);
    }
  }
  return s.slice(start, end + 1);
}

function expandAroundCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}

function longestPalindrome(s) {
  var T = "#".concat(s.split("").join("#"), "#");
  var P = new Array(T.length).fill(0);
  var C = 0;
  var R = 0;
  var maxLen = 0;
  var maxI = 0;
  for (var i = 0; i < T.length; i++) {
    if (i < R) {
      P[i] = Math.min(R - i, P[2 * C - i]);
    } else {
      P[i] = 0;
    }
    while (
      i - P[i] >= 0 &&
      i + P[i] < T.length &&
      T[i - P[i] - 1] == T[i + P[i] + 1]
    ) {
      P[i]++;
    }
    if (i + P[i] > R) {
      C = i;
      R = i + P[i];
    }
    if (P[i] > maxLen) {
      maxLen = P[i];
      maxI = i;
    }
  }
  var result = s.substring((maxI - maxLen) / 2, (maxI - maxLen) / 2 + maxLen);
  return result;
}

console.log(longestPalindrome("acacaada"));
