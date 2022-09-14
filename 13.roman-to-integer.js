/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let hashMap = {
    I:  1,
    V:  5,
    X:  10,
    L:  50,
    C:  100,
    D:  500,
    M:  1000,
  };

  function isIXC(c) {
    return (c === 'I' || c === 'X' || c === 'C')
  }
  
  let total = 0;

  for(let i = 0; i < s.length; i++) {
    // I VX
    // X LC
    // C DM
    let char = s.charAt(i);
    let amount = hashMap[char];

    if(isIXC(char) && i < s.length - 1) {
      let nextChar = s.charAt(i+1);
      if(
        char === 'I' && (nextChar === 'V' || nextChar === 'X') ||
        char === 'X' && (nextChar === 'L' || nextChar === 'C') ||
        char === 'C' && (nextChar === 'D' || nextChar === 'M')
      ) {
        amount = -1 * amount;
      }
    }

    total += amount;
  }

  return total;
};
// @lc code=end

