/*
 * @lc app=leetcode id=746 lang=javascript
 *
 * [746] Min Cost Climbing Stairs
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    for(let i = 2; i < cost.length; i++) {
      cost[i] = Math.min(cost[i] + cost[i - 1], cost[i] + cost[i - 2]);
    }

    return Math.min(cost[cost.length - 1], cost[cost.length - 2])
};
// @lc code=end


/*
用 DP 方式解
*/

