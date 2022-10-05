/*
 * @lc app=leetcode id=389 lang=javascript
 *
 * [389] Find the Difference
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {

  let sumS = 0;
  let sumT = 0;

  for(let i = 0; i < t.length; i++) {
    if(
      i < s.length
    ) {
      sumS += s[i].charCodeAt(0);
    }
    
    sumT += t[i].charCodeAt(0);
  }

  return String.fromCharCode(sumT - sumS)
};
// @lc code=end


/*
s 可能會被 shuffle 所以要先 sort 才能用 for 去一一比對 這樣複雜度就是 O(nLog n)
*/

/*
使用 charCode 加起來兩個相減 在轉成 char ，往後要記得可以使用這種解法
*/