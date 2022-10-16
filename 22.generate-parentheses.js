/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let res = [];
  function generate(l, r, s) {
    if(s.length == 2 * n) {
      res.push(s);
    }

    
    if(l < n) {
      generate(l + 1, r, s + "(");
    }
    if(r < l) {
      generate(l, r + 1, s + ")");
    }
  }

  generate(0, 0, "");

  return res;
};
// @lc code=end

/*

close < open
(的數量一定要大於等於 ) 的數量時才能關門 )

如果 open > close 可以有兩種選擇 1. add open 2. add close
如果 open == close 只能有一種選擇 1. add open

left = 0
right = 0

(
left = 1
right = 0

left = 1
*/