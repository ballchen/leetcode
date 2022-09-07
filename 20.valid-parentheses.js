/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const left_chars = ['(', '{', '['];
  const right_chars = [')', '}', ']'];
  
  for(let i = 0; i < s.length; ++i) {
    if(left_chars.indexOf(s[i]) >= 0 ) {
      stack.push(s[i]);
    }
    
    const find_right_index = right_chars.indexOf(s[i]);
    if(find_right_index >= 0) {
      const char = stack.pop();
      if(!char || left_chars.indexOf(char) !== find_right_index) {
        return false;
      }
      
    }
  }
  if(stack.length > 0) {
    return false;
  }
  return true;
};
// @lc code=end


/*
可以一開始就在把 close bracket 推到 stack 裡
這樣就可以不用 pop 完後還要找對應的 bracket
*/

