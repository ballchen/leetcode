/*
 * @lc app=leetcode id=844 lang=javascript
 *
 * [844] Backspace String Compare
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  for(let i = 0; i <= s.length; ++i) {
    if(s[i] === '#') {
      const slicePoint = (i-1) >= 0 ? (i-1): 0;
      const sliceLength = (i-1) >= 0 ? 2 : 1;
      s = s.slice(0, slicePoint) + s.slice(slicePoint + sliceLength, s.length)
      i -= sliceLength;
    }
  }

  

  for(let i = 0; i <= t.length; ++i) {
    if(t[i] === '#') {
      const slicePoint = (i-1) >= 0 ? (i-1): 0;
      const sliceLength = (i-1) >= 0 ? 2 : 1;
      t = t.slice(0, slicePoint) + t.slice(slicePoint + sliceLength, t.length)
      i -= sliceLength;
    }
  }

  return s === t;

};
// @lc code=end


/*
Note: 要熟練 js string 的 slice 用法
*/


/*

從後面 iterate 數 backspace 會比較順 不用倒退嚕

const backspaceCompare = (S, T) => { 
    return edit(S) === edit(T);
    
    function edit(str) {
        let result = '';
        let backspaces = 0;
        
        for (let i = str.length - 1; i >= 0; i -= 1) {        
            if (str[i] === '#') {
                backspaces += 1;
            } else if (backspaces > 0) {
                backspaces -= 1;
            } else {
                result = str[i] + result;
            }
        }
        
        return result;
    }
};

var backspaceCompare = function(s, t) {
  let si = s.length - 1, ti = t.length - 1;

  while (si >= 0 || ti >= 0) {
    si = clearBackSpace(s, si);
    ti = clearBackSpace(t, ti);

    let sChar = s[si], tChar = t[ti];
    if (sChar !== tChar) { return false; }

    si--; ti--;
  }

  return true;
};

var clearBackSpace = function(string, index) {
  let skip = 0;

  while (index >= 0) {
    if (string[index] === '#') { skip++; index--; }
    else if (skip > 0) { skip--; index--; }
    else { break; }
  }

  return index;
}
*/