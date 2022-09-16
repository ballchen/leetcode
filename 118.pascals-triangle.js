/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if(!numRows) return [];
  
  let results = [[1]]
  for (let i = 1; i < numRows; i++) {
    let row = [];
    let lastRow = results[i-1]
    for(let j = 0; j < lastRow.length -1; j++) {
      row.push(lastRow[j] + lastRow[j+1]);
    }
    row.unshift(1);
    row.push(1);
    results.push(row);
  }

  return results;
};
// @lc code=end

