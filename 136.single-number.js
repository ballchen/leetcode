/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let n = 0

  for(let num of nums) {
    n ^= num;
  }

  return n
};
// @lc code=end

/*
1. 先 sort 把同樣的集中
Time complexity: O(N lg N)
Memory complexity: O(1)

var singleNumber = function(nums) {
  let cur = null;

  nums.sort();
  for(let i = 0; i < nums.length; ++i) {
    if(!cur) {
      cur = nums[i];
    } else if (cur === nums[i]) {
      cur = null;
    }
  }

  return cur;
};
*/

/*
2. 用map
var singleNumber = function(nums) {
  const map = {}

  for(let num of nums) {
    if(!map[num]) {
      map[num] = 0;
    }
    map[num] += 1;
  }

  for(let key in map) {
    if(map[key] === 1) return key;
  }
};
*/

/*
3. 用 binary operator XOR ^
有點特定 因為重複的每個都一定會出現兩次 如果只是重複不限次數就不能用
*/

