/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let reverse = 0;

  if(x < 0) return false;

  for(let i = x; i > 0; i = Math.floor(i / 10)) {
    // digi = i % 10
    reverse = reverse*10 + i%10
  }

  return reverse === x;
};
// @lc code=end

/*
1. 負數都不是
2. 0 是
3. 想辦法把整個數字倒過來如果還是一樣就是 palindrome

優化過程
一開始先用 while, 後來改成 for 然後減少變數

*/


