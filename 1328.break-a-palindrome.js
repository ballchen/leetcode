/*
 * @lc app=leetcode id=1328 lang=javascript
 *
 * [1328] Break a Palindrome
 */

// @lc code=start
/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
  if(palindrome.length === 1) {
    return '';
  }

  let isOdd = (palindrome.length % 2 === 1);
  
  for(let i = 0; i < palindrome.length; i++) {
    if(palindrome[i] === 'a') {
      continue;
    }
    if(isOdd && i === Math.floor(palindrome.length / 2)) {
      continue;
    }
    return palindrome.substring(0, i) + 'a' + palindrome.substring(i + 1, palindrome.length);
  }
  return palindrome.substring(0, palindrome.length - 1) + 'b';
};
// @lc code=end

// console.log(
// breakPalindrome('aba')
// )

/*

brute force 解法
run through the string with pivot i, replace s[i] with a to z, check isValid

因為是回文，只要跑一半就好 => 不對 aaaaa abaaa(X) aaaab(O)
=> 那是不是這種 case 就是把最後一個 word 換成 b 就好？

其他不是 a 的 word 只要換個 a 就可以？ 

還有如果是單數長度的字串，換中間沒用
*/
