/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
  let result = [];
  function backtrack(remain, arr, cur) {
    if(remain === 0) {
      result.push([...arr]);
      return;
    } else {
      for(let i = cur; i < n+1; i ++) {
        arr.push(i);
        backtrack(remain - 1, arr, i + 1)
        arr.pop()
      }
    }
  }
  backtrack(k, [], 1);
  return result
};
// @lc code=end


/*

var combine = function(n, k) {
  let result = []
  function traverse(arr, cur) {
    
    if(arr.length === k) {
      result.push(arr);
      return;
    }
    if(cur > n) {
      return
    }

    // 選 cur
    traverse(arr, cur + 1)
    
    // 不選 cur

    traverse([...arr, cur], cur + 1)

    return 

  }

  traverse([], 1);

  return result;
};

*/