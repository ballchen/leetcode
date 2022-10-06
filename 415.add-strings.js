/*
 * @lc app=leetcode id=415 lang=javascript
 *
 * [415] Add Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let p1 = num1.length - 1;
    let p2 = num2.length - 1;
    let sum = 0;
    let res = []
    let carry = 0;

    while(p1 >= 0 || p2 >= 0) {
      let d1 = 0;
      let d2 = 0;
      if(p1 >= 0) {
        d1 = num1[p1].charCodeAt(0) - 48;
      }

      if(p2 >= 0) {
        d2 = num2[p2].charCodeAt(0) - 48;
      }
    
      sum = d1 + d2 + carry;

      res.unshift((sum % 10).toString());

      if(sum >= 10) {
        carry = 1;
      } else {
        carry = 0
      }

      p1 --;
      p2 --;
    }

    if(carry) {
      res.unshift('1')
    }
    return res.join('');
};
// @lc code=end
// console.log(
//   addStrings('0', '0')
// )

/*
注意最後還有進位的狀況
*/


