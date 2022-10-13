/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let tCount = new Map();
  let window = new Map();
  for(let w of t) {
    if(!tCount.has(w)) {
      tCount.set(w, 1);
    } else {
      tCount.set(w, tCount.get(w) + 1);
    }
  }
  let have = 0;
  let need = tCount.size;
  let min = Infinity;
  let left = 0;
  let result = [-1, -1]
  for(let right = 0; right < s.length; right++) {
    let c = s[right];
    if(!window.has(c)) {
      window.set(c, 1);
    } else {
      window.set(c, window.get(c) + 1);
    }

    if(
      tCount.has(c) && window.get(c) === tCount.get(c)
    ) {
      have += 1;
    }

    while(have === need) {
      if(right - left + 1 < min) {
        min = right - left + 1
        result = [left, right]
      }
     
      window.set(s[left], window.get(s[left]) - 1);
      if(tCount.has(s[left]) && window.get(s[left]) < tCount.get(s[left])) {
        have --;
      }

      left ++;
    }
  }

  return s.substring(result[0], result[1] + 1)
};
// @lc code=end

// minWindow('cabwefgewcwaefgcf', "cae")



// ADOBECODEBANC

// A: 1
// B: 1
// C: 1

// l = 0
// r = 13 

/*

https://www.youtube.com/watch?v=jSto0O4AJbM
*/