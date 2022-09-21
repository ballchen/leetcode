/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

var coinChange = function(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let coin of coins) {
    for (let i = coin; i <= amount; ++i) {
      dp[i] = Math.min(dp[i - coin] + 1,  dp[i])
    }
  }

  if(dp[amount] === Infinity) {
    return -1
  }
  return dp[amount];
};
// @lc code=end

/*
recursive 會暴開

var coinChange = function(coins, amount) {
  var answerHashMap = {};
  function getFewestCoin(coins, amount) {
    if(amount === 0) {
      answerHashMap[amount] = 0;
      return 0;
      
    }
  
    let childPossibleSolutions = []
    for(let coin of coins) {
      if(amount === coin) {
        answerHashMap[amount] = 1;
        return 1;
      }
      let amountMinusThisCoin = amount - coin;
      if(amountMinusThisCoin >= 0) {
        const fewestCoinOfChildAmount = (answerHashMap[amountMinusThisCoin] !== undefined) ? answerHashMap[amountMinusThisCoin] : coinChange(coins, amountMinusThisCoin);
          
          
        if(fewestCoinOfChildAmount > 0) {
          childPossibleSolutions.push(fewestCoinOfChildAmount);
        }
      }
    }
   
    if(!childPossibleSolutions.length) {
      answerHashMap[amount] = -1;
      return -1;
      
    }
      
    const fewestCoin = childPossibleSolutions.reduce((prev, next) => {
      return Math.min(prev, next);
    }) + 1;
    
    answerHashMap[amount] = fewestCoin;
  
  
    return fewestCoin;
  }

  return getFewestCoin(coins, amount);
};
*/
