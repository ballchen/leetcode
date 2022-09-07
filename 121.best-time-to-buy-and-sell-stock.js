/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let buy = 0;
  let sell = 1;
  let profit = 0;

  while(sell < prices.length) {
    if(prices[buy] < prices[sell]) {
      const temp_profit = prices[sell] - prices[buy];
      if(temp_profit > profit) {
        profit = temp_profit;
      }
    } else {
      buy = sell;
    }
    sell += 1;
  }

  return profit;
    
};
// @lc code=end

