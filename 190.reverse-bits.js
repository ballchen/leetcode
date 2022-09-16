/*
 * @lc app=leetcode id=190 lang=javascript
 *
 * [190] Reverse Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let result = 0


  for(let i = 0; i < 32; i ++) {
    result = result * 2;
    result += n & 1
    n = n >> 1;
  }
  return result;
};
// @lc code=end



/*
last bit = n & 1
n = n * 2 equal n = n << 1
n = n / 2 equal n = n >> 1


function reverseBits(n: number): number {
  let result = 0;

  for (let i = 0; i < 32; i++) {
    // find the last bit of n
    const lastBit = n & 1;

    // shift the last bit of n to the left
    const reversedLastBit = lastBit << (31 - i);

    // insert the reversed last bit of n into the result
    result |= reversedLastBit;

    // the last bit of n is already taken care of, so we need to drop it
    n >>>= 1;
  }

  // convert the result to an unsigned 32-bit integer
  return result >>> 0;
}


*/