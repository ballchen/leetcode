/*
 * @lc app=leetcode id=733 lang=javascript
 *
 * [733] Flood Fill
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

var floodFill = function(image, sr, sc, color) {
  const currentColor = image[sr][sc];
  if(currentColor === color) {
    return image
  }

  function traverse(r, c) {
    if(image[r] === undefined || image[r][c] === undefined) {
      return;
    }

    if(image[r][c] !== currentColor) {
      return;
    }

    image[r][c] = color;

    traverse(r + 1, c);
    traverse(r - 1, c);
    traverse(r, c + 1);
    traverse(r, c - 1);
  }
  traverse(sr, sc)

  return image;

};
// @lc code=end

