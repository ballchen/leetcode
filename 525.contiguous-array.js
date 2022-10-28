/*
 * @lc app=leetcode id=525 lang=javascript
 *
 * [525] Contiguous Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxLength = function(nums) {
  if(nums.length == 1) {
    return true;
  }
  let sums = [];
  let sum = 0;
  let indexMap = new Map();
  indexMap.set(0, 0);
  let max = -Infinity;
  
  for(let num of nums) {
    sum += (num === 0 ? -1 : 1);
    sums.push(sum);
  }

  for(let i = 0; i < sums; i++) {
    console.log(indexMap);
    if(indexMap.has(sums[i])) {
      max = Math.max(i - indexMap.get(sums[i]));
    } else {
      indexMap.set(sums[i], i);
    }

  }
  console.log(sums);
  console.log(max)
  return max;
};

findMaxLength([1,0])
// @lc code=end

