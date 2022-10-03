/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  
    const words = s.split(' ');

    if(words.length !== pattern.length) {
      return false;
    }

    if(new Set(words).size !== new Set(pattern).size) return false;

    const patternIDWord = {};
    
    for (let i = 0; i < pattern.length; i++) {

      if(!!patternIDWord[pattern[i]] && patternIDWord[pattern[i]] !== words[i]) {
        return false;
      }
      patternIDWord[pattern[i]] = words[i];
    }
    return true;
};
// @lc code=end


/*
本來用兩個 map 去存 但只要以 pattern 為 key 作 map 去檢查就好了
但要加上
if(new Set(words).size !== new Set(pattern).size) return false;
*/