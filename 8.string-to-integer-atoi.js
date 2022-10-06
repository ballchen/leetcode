/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(str) {
  let MAX_INT = 2**31 - 1;
  let MIN_INT = -1 * 2**31
  str = str.trim();
  let dir = 1;
  let startPoint = 0;
  let ans = 0;
  if(str[0] === '+') {
    dir = 1;
    startPoint = 1;
  } else if(str[0] === '-') {
    dir = -1;
    startPoint = 1
  }

  for(let i = startPoint; i < str.length; i++) {
    let digit = str[i].charCodeAt(0) - 48;
    if(digit >= 0 && digit <= 9) {
      ans = (10 * ans) + digit;
    } else {
      break;
    }

  }

  
  if((ans > MAX_INT) && (dir > 0)) {
    return MAX_INT
  } else if((ans > MAX_INT) && (dir < 0)) {
    return MIN_INT
  }
  return ans * dir;
};

// @lc code=end

