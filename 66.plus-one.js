/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {

  let pivot = digits.length - 1
  let shouldPlusOne = true;


  while(pivot >= 0) {
    if(!shouldPlusOne) {
      break;
    }

    digits[pivot] += 1;

    if(digits[pivot] > 9) {
      digits[pivot] -= 10;
      shouldPlusOne = true;
    } else {
      shouldPlusOne = false;
    }

    pivot -= 1;
  }

  if(shouldPlusOne) {
    digits.unshift(1);
  }
 

  return digits;
};
// @lc code=end

/*
1. 從後面開始數到第一個 類似 stack 的作法 
Time Complexity: O(N)
Memoru Complexity: O(1)

var plusOne = function(digits) {

  let pivot = digits.length - 1
  let shouldPlusOne = true;


  while(pivot >= 0) {
    if(!shouldPlusOne) {
      break;
    }

    digits[pivot] += 1;

    if(digits[pivot] > 9) {
      digits[pivot] -= 10;
      shouldPlusOne = true;
    } else {
      shouldPlusOne = false;
    }

    pivot -= 1;
  }

  if(shouldPlusOne) {
    digits.unshift(1);
  }
 

  return digits;
};
*/

/*
2. 轉成數字然後相加 再拆成陣列
要處理 Big Int
Time Complexity: O(N)
Memory Complexity: O(N)

var plusOne = function(digits) {
  let realInput = 0;
  let output = [];
  
  for(let i = 0; i < digits.length; i++) {
    realInput = realInput*10 + digits[i];
  }

  realInput += 1;

  while(realInput > 0) {
    output.unshift(realInput % 10)
    realInput = Math.floor((realInput - (realInput % 10)) / 10)
  }

  return output;
};
*/

