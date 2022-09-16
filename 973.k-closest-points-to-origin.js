/*
 * @lc app=leetcode id=973 lang=javascript
 *
 * [973] K Closest Points to Origin
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
  function distance(point) {
    return point[0] * point[0] + point[1] * point[1];
  }

  points.sort((a, b) => {
    return distance(a) - distance(b);
  })


  return points.splice(0, k);
};
// @lc code=end


/*

sort 之後取 K 個
function distance(point) {
    return point[0] * point[0] + point[1] * point[1];
  }

  points.sort((a, b) => {
    return distance(a) - distance(b);
  })


  return points.splice(0, k);
*/


/*
把distance+point 記起來 一樣sort 取 K 個

*/


