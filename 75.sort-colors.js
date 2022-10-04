/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let pivot = 0;
  let end = nums.length - 1;
  let start = 0;
  while(pivot <= end) {
    if(nums[pivot] == 2) {
      let temp = nums[pivot];
      nums[pivot] = nums[end];
      nums[end] = temp;
      end --;
    } else if(nums[pivot] == 1) {
      pivot ++;
    } else {
      // 0 
      let temp = nums[pivot];
      nums[pivot] = nums[start];
      nums[start] = temp;
      start ++;
      pivot ++;
    }
  }

  return nums;
};
// @lc code=end

console.log(sortColors([2,0,1]))

/*
最簡單就是分三個陣列 0s 1s 2s 然後for 一遍之後合併起來 但是要 in place

兩個 while 先把 1 放後面 再把 2 放後面

var sortColors = function(nums) {

  if(!nums.length || nums.length == 1) {
    return nums;
  }

  let pivot = 0;
  let end = nums.length - 1;
  while(pivot < end) {
    if(nums[pivot] === 1) {
      nums.push(nums[pivot]);
      nums.splice(pivot, 1);
      end --;
    } else {
      pivot ++;
    }
  }
  console.log(nums);

  pivot = 0;
  end = nums.length - 1;
  while(pivot < end) {
    if(nums[pivot] === 2) {
      nums.push(nums[pivot]);
      nums.splice(pivot, 1);
      end --;
    } else {
      pivot ++;
    }
  }
  console.log(nums);
  return nums;
};
*/

