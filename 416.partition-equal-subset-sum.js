/*
 * @lc app=leetcode id=416 lang=javascript
 *
 * [416] Partition Equal Subset Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  let sum = 0
  for(let n of nums) {
    sum += n;
  }

  if(sum % 2 === 1) {
    return false;
  }

  let target  = sum / 2;
  
  let set = new Set();
  set.add(0);

  for (let i = 0; i < nums.length; i++) {
    // 確保這輪的不會直接被用到
    const newSet = new Set();
    set.forEach((existedSum) => {
      newSet.add(existedSum + nums[i]);
      newSet.add(existedSum);
    })
    set = newSet;
  }

  return set.has(target)

};
// @lc code=end

canPartition([1,5,10,5])

/*
感覺先 sort 會比較好 
1. 可以先拿到 target answer, 也就是 sum(nums) / 2
2. 只要我找到一個 subset sum === answer 就代表剩下的也是 sum === answer
*/

