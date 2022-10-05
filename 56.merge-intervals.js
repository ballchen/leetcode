/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => {
    return a[0] - b[0];
  })

  let pivot = 0;
  while(pivot < intervals.length-1) {

    if(intervals[pivot][1] >= intervals[pivot + 1][0]) {
      intervals[pivot][0] = Math.min(intervals[pivot][0], intervals[pivot + 1][0]);
      intervals[pivot][1] = Math.max(intervals[pivot][1], intervals[pivot + 1][1]);
      intervals.splice(pivot + 1, 1);
    } else {
      pivot ++
    }
  }
  return intervals;
};

// @lc code=end

/*
先 sort start 確保interval start 是由小到大

interval[i] 跟 interval[i+1] 比較
若是 interval[i+1] 有跟 interval[i] 重疊到 （start(i) >= start(i+1)）
interval[i]就把 interval[i+1] 吃掉
start(i) = min(start(i), start(i+1)) => 其實可以 start(i) 就好 因為有 sort 過
end(i) = max(end(i), end(i+1))

若是沒有交疊 則向右 move pivot 1 格
*/

