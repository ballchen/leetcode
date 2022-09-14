/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(!strs.length) return '';
  return strs.reduce((prev, next) => {
    let i = 0;
    while(
      prev.charAt(i) && next.charAt(i) && prev.charAt(i) === next.charAt(i)
    ) {
      i ++
    }

    return prev.substring(0, i);
  })

};
// @lc code=end


/*
var longestCommonPrefix = function(strs) {
  let pivot = 0;
  let output = ''
  while(1) {
    let isAllCharTheSame = true;
    let target = strs[0].charAt(pivot)

    if(!target) {
      break;
    }

    for(let str of strs) {
      if(target !== str.charAt(pivot)) {
        isAllCharTheSame = false;
        break;
      }
    }
    if(!isAllCharTheSame) {
      break;
    }
    output += target;
    pivot += 1;
  }

  return output;
};
*/

/*
2. 可以用 reduce 把所有的 strs 變成一個 string

var longestCommonPrefix = function(strs) {
    'use strict';
    if (strs === undefined || strs.length === 0) { return ''; }
    
    return strs.reduce((prev, next) => {
        let i = 0;
        while (prev[i] && next[i] && prev[i] === next[i]) i++;
        return prev.slice(0, i);
    });
};
*/

