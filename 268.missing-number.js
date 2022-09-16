/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const total = (1 + nums.length) * nums.length / 2;
  const sumOfNums = nums.reduce((prev, next) => {
    return prev + next;
  })
  return total - sumOfNums;
};
// @lc code=end



/*
其他解法 1
new 一個陣列填滿 -1 ，for 一遍看哪個還是 -1 ，這樣的話也可以用 map of visited 來作
var missingNumber = function(nums) {
    // construct array of size n+1, to leave a spot for the missing element.
	// Assign each val to -1 so we can see which position was not filled
    // O(n)
    const res = new Array(nums.length+1).fill(-1);
	
	// "sort" the elements by assigning to the array based on val
    // O(n)
    for(const num of nums) {
        res[num] = num;
    }
    
	// the remaining -1 index is the missing value
    // O(n-1)
    return res.indexOf(-1);
};
*/