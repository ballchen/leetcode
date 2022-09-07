/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let str = ''
  let str_rev = ''

  for(let i = 0; i < s.length; ++i) {
    if(isAlphanumeric(s[i])) {
      str += s[i].toLowerCase();
      str_rev = s[i].toLowerCase() + str_rev;
    }
  }

  return str === str_rev
};

function isAlphanumeric(char) {
  if (char.length !== 1) return false;

  const regex = /^[a-z0-9]+$/i;
  return regex.test(char);
}

/*
function isAlphanumeric(character){
    return ((character>=65 && character<91)||
            (character>=97 && character<123) ||
            (character>=48 && character<58) )
}
*/
// @lc code=end


/*
如果不能使用 string 比對呢？
使用 array 把 valid 的 char 推進去

然後再跑一次迴圈 比對 array[i] 跟 array[array.length - i - 1] 是否一樣

*/
