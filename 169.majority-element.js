/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var majorityElement = function(nums) {
  let count = 0;
  let candidate = null;
  for(let num of nums) {
    if(count === 0) {
      candidate = num
    }

    count = (candidate === num) ? count + 1 : count - 1
  }

  return candidate;
};
// @lc code=end


/* 
比較笨的方法，用一個 hashmap 存 element count
var majorityElement = function(nums) {
    
  const count = {};
  for (let elem of nums) {
    count[elem] = count[elem] ? (count[elem] + 1) : 1;
    if(count[elem] > nums.length / 2) {
      return elem
    }
  }

  return false;
};

*/

