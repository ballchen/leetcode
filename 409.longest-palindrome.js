/*
 * @lc app=leetcode id=409 lang=javascript
 *
 * [409] Longest Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const workCount = {};
  for(let char of s) {
    if(!workCount[char]) {
      workCount[char] = 0;
    }
    workCount[char] += 1;
  }
  let size = 0;
  let hasOdd = false;


  for(let key of Object.keys(workCount)) {
    if(workCount[key] % 2 == 0) {
      size += workCount[key]
    } else {
      size += workCount[key] - 1;
      hasOdd = true;
    }
  }
  return size + (hasOdd ? 1 : 0);
};
// @lc code=end

