/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if(n == 1) {
    return '1';
  }

  function say(s) {
    let cur = s[0]
    let count = 1;
    let res = ''
    for(let i = 1; i < s.length; i++) {
      if(s[i] !== cur) {
        res += `${count}${cur}`;
        cur = s[i];
        count = 1;
      } else {
        count ++;
      }
    }
    res += `${count}${cur}`;
  
    return res;
  }

  return say(countAndSay(n - 1));
};




// @lc code=end

