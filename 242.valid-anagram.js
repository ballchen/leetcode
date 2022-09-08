/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  const hash_map = {};
  for (let char of s) {
    if(!hash_map[char]) {
      hash_map[char] = 1;
    } else {
      hash_map[char] += 1;
    }
  }

  for (let char of t) {
    if(!hash_map[char]) {
      return false;
    }

    hash_map[char] -= 1;
  }

  let noCharLeft = true;
  Object.keys(hash_map).forEach(function(key) {
    if(hash_map[key] !== 0) {
      noCharLeft = false;
    }
  })

  return noCharLeft;
  
};
// @lc code=end

/*
可以先檢查 length 一不一樣 最後就不用 Object.keys 了
*/

