/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */



 var longestPalindrome = function(s) {
  let answer = '';
  let ansStart = 0;
  let ansEnd = 0;

  for(let i = 0; i < s.length - 1; i++) {
    // check if p is odd
    let p = 0;
    let start = i;
    let end = i;
    while(s[i + p] === s[i - p] && i >= 0 && i + p < s.length) {
      start = i - p;
      end = i + p;
      p++
    }

    if((ansEnd - ansStart) <= (end - start)) {
      ansEnd = end;
      ansStart = start;
    }


    // check if p is even
    p = 0;
    start = i;
    end = i;
    
    while(s[i + 1 + p] === s[i - p] && i >= 0 && i + p + 1 < s.length) {
      start = i - p;
      end = i + 1 + p;
      p++
    }

    if((ansEnd - ansStart) <= (end - start)) {
      ansEnd = end;
      ansStart = start;
    }
  

  }

  answer = s.substring(ansStart, ansEnd + 1);
  return answer;
};
// @lc code=end

/*
palindrome 有兩種
偶數跟奇數的
abcba
adccba
*/
