/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if(!digits.length) {
    return [];
  }
  let letters = {
    '2': 'abc'.split(''),
    '3': 'def'.split(''),
    '4': 'ghi'.split(''),
    '5': 'jkl'.split(''),
    '6': 'mno'.split(''),
    '7': 'pqrs'.split(''),
    '8': 'tuv'.split(''),
    '9': 'wxyz'.split(''),
  };

  let result = letters[digits[0]]
  for(let i = 1; i < digits.length; i++) {
    const digit = digits.charAt(i);
    let tempRes = [];
    letters[digit].forEach((letter) => {
      tempRes = tempRes.concat(result.map((s) =>  {return s + letter}));
    })
    result = tempRes;
  }
  return result;
};
letterCombinations('23')

// @lc code=end

