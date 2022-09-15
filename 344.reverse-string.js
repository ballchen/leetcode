/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let len = s.length;
  for(let i = 0; i < s.length; ++i) {
    s.splice(i, 0, s.pop());
  }

  return s;
};
// @lc code=end

/*
2. 另種解法
左右各設一個 pivot  交換元素 直到 pivot 相遇
var reverseString = function(s) {
  let i = 0, j = s.length - 1;
  while (i < j) {
    // ES6 destructuring assignment
    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }
};
*/

