/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  // 使用 two pointer 
  let left = 0;
  let right = height.length - 1;
  let maxVolume = 0;

  function volume(l, r) {
    return Math.min(height[l], height[r]) * (r - l);
  }

  while(left < right) {
    currentVolume = volume(left, right);
    maxVolume = Math.max(maxVolume, currentVolume);

    if(height[left] < height[right]) {
      left ++;
    } else {
      right --
    }
  }
  return maxVolume;
};
// @lc code=end
// console.log(
// maxArea([1,8,6,2,5,4,8,3,7])
// )
/*

min(leftHeight, rightHeight) * (right - left)

*/


/*

brute force 一定不行
for(let i = 0; i < height.length; ++i) {
    for(let j = i + 1; j < height.length; ++j) {
      maxVolume = Math.max(maxVolume, volume(i, j));
    }
  }
*/
