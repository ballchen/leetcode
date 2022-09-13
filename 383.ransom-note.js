/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let wordCount = {}
  for(let i = 0; i < magazine.length; ++i) {
    const char = magazine[i];
    if(!wordCount[char]) {
      wordCount[char] = 0;
    }
    wordCount[char] += 1;
  }

  for(let i = 0; i < ransomNote.length; ++i) {
    const char = ransomNote[i];
    if(!wordCount[char] || wordCount[char] <= 0) {
      return false;
    }
    wordCount[char] -= 1;
  }

  return true;
};
// @lc code=end


/*
1. iterate magazine, record all letters and counts, then iterate ransomNote
{
  a: 2,
  b: 1
}

可以加一個檢查長度加速
if(ransomNote.length > magazine.length) {
        return false;
    }

*/