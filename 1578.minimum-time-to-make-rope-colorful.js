/*
 * @lc app=leetcode id=1578 lang=javascript
 *
 * [1578] Minimum Time to Make Rope Colorful
 */

// @lc code=start
/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */

var minCost = function(colors, neededTime) {

  let time = 0;
  let sum = neededTime[0];
  let max = neededTime[0];

  for(let i = 1; i < colors.length; i ++) {
    if(colors[i] !== colors[i-1]) {
      time += (sum - max);
      sum = neededTime[i];
      max = neededTime[i];
    } else {
      sum += neededTime[i]
      max = Math.max(max, neededTime[i])
    }
  }

  time += (sum - max);
  return time;
};  

// @lc code=end



/*
直接用 sum 跟 max 可以節省 memory 空間
*/

/*

var minCost = function(colors, neededTime) {

  function sumOfArray(arr) {
    return arr.reduce((prev, next) => prev + next, 0);
  }

  let currColor = colors[0]
  let sameColorTime = [neededTime[0]];
  let time = 0
  for(let i = 1; i < colors.length; i ++) {
    if(currColor !== colors[i]) {
      
      
      if(sameColorTime.length > 1) {
        time += sumOfArray(sameColorTime) - Math.max(...sameColorTime);
      }
      
      currColor = colors[i];
      sameColorTime = [neededTime[i]];
    } else if(currColor === colors[i]) {
      sameColorTime.push(neededTime[i])
    }
  }
  if(sameColorTime.length > 1) {
    console.log(sameColorTime);
    time += sumOfArray(sameColorTime) - Math.max(...sameColorTime);
  }
  return time;
};  

*/