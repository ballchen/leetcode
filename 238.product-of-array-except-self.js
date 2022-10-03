/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let productOfOthers = new Array(nums.length).fill(1);

  let tempProduct = 1;
  for(let i = 0; i < nums.length; i++) {
    productOfOthers[i] *= tempProduct;
    tempProduct *= nums[i];
  }

  tempProduct = 1;
  for(let i = nums.length - 1; i >=0; i--) {
    productOfOthers[i] *= tempProduct;
    tempProduct *= nums[i];
  }

  return productOfOthers;

};
// @lc code=end

/*
時間限制在 O(n) -> sort 就不管用了因為這樣至少 nLogN

順向 iterate , 得到 productOfOthersBeforePivot 
逆向 iterate 得到 productOfOthersAfterPivot
兩個陣列相乘
也可以把操作統一在一個陣列
*/
