/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
  let results = [];
  if(nums.length < 3) return results;

  nums = nums.sort((a, b) => a - b)

  let target = 0;
  for(let i = 0; i < nums.length - 2; ++i) {
    if((nums[i] - target) > 0) {
      return results;
    }

    if(i > 0 && nums[i] === nums[i-1]) continue;

    let j = i + 1;
    let k = nums.length - 1;
    
    while(j < k) {
      const sumOfThree = nums[i] + nums[j] + nums[k];
      if(sumOfThree === target) {
        results.push([nums[i], nums[j], nums[k]]);
        while(nums[j] === nums[j+1]) {
          j++;
        }
        while(nums[k] === nums[k-1]) {
          k--;
        }
        j++;
        k--;
      } else if(sumOfThree > target) {
        k--;
      } else {
        j++;
      }
      
    }

  }

  return results;
};
// @lc code=end

/*
TC: O(N^3)
太慢

var threeSum = function(nums) {
  let sumMap = {};
  let results = [];
  for(let i = 0; i < nums.length; ++i) {
    for(let j = i + 1; j < nums.length; ++ j) {
      const key = nums[i] + nums[j];
      if(!sumMap[key]) {
        sumMap[key] = [];
      }
      sumMap[key].push([nums[i], nums[j]]);

      for(let k = j+1; k < nums.length; ++k) {
        let target = 0 - nums[k];
        if(sumMap[target] && sumMap[target].length > 0) {
          results = sumMap[target].map((elem) => {
            return [...elem, nums[k]];
          })
        }
      }
    }
  }

  return results;
};
*/

