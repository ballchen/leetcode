/*
 * @lc app=leetcode id=84 lang=javascript
 *
 * [84] Largest Rectangle in Histogram
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let max = 0;
  let stack = [];

  for(let i = 0; i < heights.length; i++) {
    const h = heights[i];
    let start = i;
    while(stack.length && stack[stack.length - 1][1] > h) {
      let [index, height] = stack.pop();
      max = Math.max(max, height * (i - index));
      start = index;
    }
    stack.push([start, h]);
  }

  for(let item of stack) {
    let [i, h] = item;
    max = Math.max(max, h * (heights.length - i))
  }
  return max;

};
// @lc code=end


console.log(
  largestRectangleArea([2,1,5,6,2,3])
)

/*
肯定炸開
var largestRectangleArea = function(heights) {

  let max = -Infinity;
  for(let i = 0; i < heights.length; i++) {
    let left = i;
    let right = i;
    while(left >= 0 && heights[left] >= heights[i]) {
      left--;
    }

    while(right < heights.length && heights[right] >= heights[i]) {
      right++;
    }

    let area = heights[i] * (right-left-1);

    // console.log('i', i,  heights[i],' area', area, left, right, right-left-1);
    max = Math.max(max, area);

  }
  return max;
};
*/

/*
沒炸開但是好慢
使用 stack
var largestRectangleArea = function(heights) {

  let max = -Infinity;
  let stack = [];
  stack.push(0);
  for(let i = 0; i < heights.length; i++) {

    let j = i - 1;
    let count = 0;
    let temp = [];
    while(j >= 0 && heights[i] < heights[j]) {
      let elem = stack.pop();
      count ++;
      j--;
      temp.push(elem * count);
    }
    
    for(let k = 0; k < count; k ++) {
      stack.push(heights[i])
    }
    stack.push(heights[i]);
    console.log(temp)
    max = Math.max(max, ...temp);
  }

  let temp = [];
  console.log(stack)
  for(let i = 1; i < stack.length; i ++) {
    temp.push(stack[i] * (stack.length - i))
    stack[i]
  }
  
  max = Math.max(max, ...temp);
  return max;
};
*/