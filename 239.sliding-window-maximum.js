/*
 * @lc app=leetcode id=239 lang=javascript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  let l = 0;
  let r = 0;
  let queue = [];
  let output = [];

  while(r < nums.length) {
    while(queue.length && nums[queue[queue.length - 1]] < nums[r]) {
      queue.pop();
    }
    queue.push(r);

    if(l > queue[0]) {
      queue.shift();
    }
    if(r + 1 >= k) {
      output.push(nums[queue[0]])
      l += 1;
    }
    r ++;
  }

  return output;
}

// @lc code=end

/*
感覺可以用 heap
*/



console.log(
  maxSlidingWindow([1,-1], 1)
)