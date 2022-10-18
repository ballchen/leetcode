/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
  let map = {}
  let res = [];
  for(let s of strs) {
    let key = s.split('').sort().join('');
    if(!map[key]) {
      map[key] = []
    }
    map[key].push(s)
  }

  for(let key in map) {
    res.push(map[key])
  }
  return res;
};
// @lc code=end

/*
不想用 sort 的方法 想更加速的話 可以用 array a~z 來產生 key
ex: abc = 11100000...00,  abb = 1200000.00
這樣就是每個都 26 次 所以是 O（m * n * 1） = O(mn)
*/

