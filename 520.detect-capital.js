/*
 * @lc app=leetcode id=520 lang=javascript
 *
 * [520] Detect Capital
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  if(word.length === 1) return true;
  
  function isCapital(char) {
    return char.toUpperCase() === char;
  }

  function isLowerCase(char) {
    return char.toLowerCase() === char;
  }

  let allCap = true;
  let allLower = true;
  for(let i = 1; i < word.length; i++) {
    if(isCapital(word[i])) {
      allLower = false;
    }
    if(isLowerCase(word[i])) {
      allCap = false;
    }
  }


  if((allCap && isCapital(word[0])) || allLower) {
    return true;
  }

  return false;

};
// @lc code=end

