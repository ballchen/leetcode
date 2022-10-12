/*
 * @lc app=leetcode id=976 lang=javascript
 *
 * [976] Largest Perimeter Triangle
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
  if(nums.length < 3) {
    return 0;
  }
  nums.sort((a, b) => (a - b));
  let c = nums.length - 1;
  for(c; c >=2; c--) {
    if((nums[c-1] + nums[c-2]) > nums[c]) {
      return nums[c] + nums[c-1] + nums[c-2];
    }
  }
  return 0;
};
// @lc code=end

largestPerimeter([1,2,1])


/*
sort 過
有解的話一定是
i ,i+1, i+2 三個座標一定連在一起

因為如果 [1, 2, 3, 4 ,5]
1 + 2 > 5 那 1 + 4 一定 > 5 而且 1 + 4 > 1 + 2 所以三者最後一定相連
*/
