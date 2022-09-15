/*
 * @lc app=leetcode id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  function checkDivisible(n, d) {
    return parseInt(n / d) === (n / d)
  }
  function detect(n) {
    let fizzbuzzResult = ''
    if(
      checkDivisible(n, 3)
    ) {
      fizzbuzzResult = 'Fizz'
    }

    if(checkDivisible(n, 5)) {
      fizzbuzzResult += 'Buzz'
    }

    return (fizzbuzzResult === '') ? `${n}` : fizzbuzzResult;
  }

  let result = []
  for(let i = 1;  i <= n; i ++) {
    result.push(detect(i))
  }

  return result;
};
// @lc code=end

