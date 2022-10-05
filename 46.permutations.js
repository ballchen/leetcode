/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function(nums) {
  let result = [];

  function recursive(current, options) {
    if(current.length === nums.length) {
      result.push(current);
      return;
    }
    for(let i = 0; i < options.length; i++) {
      let target = options[i];
      let temp = options.slice(0);
      temp.splice(i, 1);
      recursive([...current, target], temp);
    }
  }

  recursive([], nums);
  return result;
};

// @lc code=end

/*

deepClone of array 可以用 array.slice(0) 來簡單的得到

i = 0
[1] [2,3]
  [1, 2] [3] => 1, 2, 3
  [1, 3] [2] => 1, 3, 2

i = 1
[2], [1, 3]
  [2, 1] [3] => 2, 1, 3
  [2, 3] [1] => 2, 3, 1

  ...

*/