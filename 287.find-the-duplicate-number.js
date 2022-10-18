/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slow = 0;
    let fast = 0;
    while(true) {
      slow = nums[slow];
      fast = nums[fast];
      fast = nums[fast];
      if(slow == fast) {
        break;
      }
    }

    let slow2 = 0; 
    while(true) {
      slow = nums[slow];
      slow2 = nums[slow2];
      if(slow == slow2) {
        return slow
      }
    }
};

/*
https://www.youtube.com/watch?v=wjYnzkAhcNk
這題等於 cycled linked list + floyd algo
*/
// @lc code=end

