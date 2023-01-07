/* Longest Substring Without Repeating Characters
Medium

Given a string s, find the length of the longest substring without repeating characters. */

var NO_OF_CHARS = 256;

function longestSubstringLength(s) {
  var n = s.length;
  var res = 0;
  var lastIndex = {};
  for (let index = 0; index < NO_OF_CHARS; index++) {
    lastIndex[index] = -1;
  }
  var i = 0;

  for (let j = 0; j < n; j++) {
    i = Math.max(i, lastIndex[s.charCodeAt(j)] + 1);
    res = Math.max(res, j - i + 1);
    lastIndex[s.charCodeAt(j)] = j;
  }

  return res;
}

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringFaster = function (s) {
  const uniqueChars = new Set();
  let left = 0;
  let right = left;
  let maxLength = 0;

  while (right < s.length) {
    //Because we care about -contiguity-. once a duplicate is found
    //at position "right", we can no longer use the substring from position
    //"left" to the position of the first occurence of the duplicate character.
    //So, we need incrementing left (and deleting from uniqueChars to keep track
    //of a substring's uniqueness) until that occurence is found. Everything from
    //the position of the first occurence to position "right" is fine since they
    //will contain unique characters.
    while (uniqueChars.has(s.charAt(right))) {
      uniqueChars.delete(s.charAt(left));
      left++;
    }

    uniqueChars.add(s.charAt(right));
    maxLength = Math.max(maxLength, uniqueChars.size);
    right++;
  }

  return maxLength;
};

let longestSubstring = function (s) {
  let result = 0,
    maxStr = "",
    index,
    longestSubstring = "";
  for (let i = 0; i < s.length; i++) {
    index = maxStr.indexOf(s[i]);
    if (index > -1) {
      maxStr = maxStr.substring(index + 1);
    }
    maxStr += s[i];
    longestSubstring =
      longestSubstring.length > maxStr.length ? longestSubstring : maxStr;
    result = Math.max(result, maxStr.length);
  }
  return { result, longestSubstring };
};

let string = "ejlfafleljahiryekgr874r";
const res = longestSubstring(string);

console.log(res.longestSubstring);
