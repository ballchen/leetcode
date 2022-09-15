/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  let output = [];

  if(!intervals.length) {
    return [newInterval];
  }

  for(let i = 0; i < intervals.length; ++i) {
    let currInterval = intervals[i];

    if(
      (newInterval[0] >= currInterval[0] && newInterval[0] <= currInterval[1]) ||
      (newInterval[1] >= currInterval[0] && newInterval[1] <= currInterval[1]) ||
      (currInterval[0] >= newInterval[0] && currInterval[0] <= newInterval[1]) ||
      (currInterval[1] >= newInterval[0] && currInterval[1] <= newInterval[1])
    ) {
      // if somehow overlapped, merge currInterval into newInterval, and skip the iteration
      newInterval = [Math.min(currInterval[0], newInterval[0]), Math.max(currInterval[1], newInterval[1])]
      continue;
    }

    if(currInterval[0] > newInterval[1]) {
      //if newInterval is before currInterval, insert newInterval then push
      output.push(newInterval);
      output.push(...intervals.slice(i))

      return output;

    }
    
    output.push(currInterval);
  }

  output.push(newInterval);

  return output;
};
// @lc code=end

/*
要 check overlap 可以使用這個判斷
if (Math.max(interval[0], newInterval[0]) <= Math.min(interval[1], newInterval[1])) {
  newInterval = [Math.min(interval[0], newInterval[0]), Math.max(interval[1], newInterval[1])];
  continue;
}
*/

