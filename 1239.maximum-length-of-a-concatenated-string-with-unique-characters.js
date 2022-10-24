/*
 * @lc app=leetcode id=1239 lang=javascript
 *
 * [1239] Maximum Length of a Concatenated String with Unique Characters
 */

// @lc code=start
/**
 * @param {string[]} arr
 * @return {number}
 */
 var maxLength = function(arr) {
  let charSet = new Set();
  function overlap(s, set) {
    if(s.length != (new Set(s.split(''))).size) {
      return true;
    }
    for(let ch of s){
      if(set.has(ch)) {
        return true;
      }
    }

    return false;
  }
  function backtrack(i) {
    
    if(i == arr.length) {
      return charSet.size;
    }
    let res = 0

    if(!overlap(arr[i], charSet)) {
      for(let ch of arr[i]) {
        charSet.add(ch);
      }
      res = backtrack(i + 1);
      for(let ch of arr[i]) {
        charSet.delete(ch);
      }
    }

    // res => 選 i 
    // backtrack(i+1) => 不選 i
    return Math.max(res, backtrack(i+1))
  }

  return backtrack(0);
};
// @lc code=end

console.log(
  maxLength(["un","iq","ue"])
)


