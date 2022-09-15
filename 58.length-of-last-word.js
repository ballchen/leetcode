/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let lastWordLength = 0
  for(let i = s.length - 1; i >= 0; i--) {
    if(lastWordLength != 0 &&  s.charAt(i) === ' ') {
      return lastWordLength;
    }
    if(s.charAt(i) !== ' ') {
      lastWordLength += 1;
    }    
  }

  return lastWordLength;

};
// @lc code=end

/*

*/
