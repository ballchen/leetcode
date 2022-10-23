/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  let dp = new Array(s.length).fill(0);
  dp[s.length - 1] = s[s.length - 1] === '0' ? 0 : 1;

  for(let i = s.length - 2; i >= 0; i --) {
    let char = s[i];
    let select1 = 0;
    let select2 = 0;
    if(char === '0') {
      select1 = 0
      select2 = 0
    } else {
      select1 = 1 * dp[i + 1];

      // select 2
      if(parseInt(s[i] + s[i+1]) <= 26 && parseInt(s[i] + s[i+1]) >= 10) {
        select2 = 1 * ((dp[i + 2] !== undefined) ? dp[i + 2]: 1)
      }
      
    }

    dp[i] = select1 + select2;
  }

  return dp[0];
}
// @lc code=end


numDecodings('11106')


/*
0 開頭的不能用

f(1106) = f(1) * f(106) + f(11) * f(06)
*/