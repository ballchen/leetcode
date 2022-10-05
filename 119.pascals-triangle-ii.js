/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if(rowIndex === 0) {
    return [1];
  }
  if(rowIndex === 1) {
    return [1, 1];
  }

  let result = [1, 1]
  for(let i = 2; i <= rowIndex; i++) {
    let newResult = [1];
    for(let j = 0; j < result.length - 1; j++) {
      newResult.push(result[j] + result[j+1]);
    }
    newResult.push(1);

    result = newResult;
  }

  return result;
};
// @lc code=end


