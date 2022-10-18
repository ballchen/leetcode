/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let firstIndexMap = new Map();
  let dupSet = new Set();

  for(let i = 0; i < s.length; i++) {
    let w = s[i];
    if(dupSet.has(w)) {
      continue;
    }
    if(firstIndexMap.has(w)) {
      dupSet.add(w);
      firstIndexMap.delete(w);
    } else {
      firstIndexMap.set(w, i);
    }
  }
  let min = Infinity;
  firstIndexMap.forEach((val, key) => {
    min = Math.min(min, val);
  })

  return min == Infinity ? -1: min;
  
};
console.log(
  firstUniqChar('leetcode')
)


// @lc code=end

