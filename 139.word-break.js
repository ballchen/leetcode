/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  let dp = new Array(s.length + 1).fill(false);
  dp[s.length] = true;
  for(let i = s.length-1; i > -1; i --) {
    for(let word of wordDict) {
      if((word.length + i <= s.length) && s.substring(i, i + word.length) === word) {
        dp[i] = dp[i + word.length]
      }
      if(dp[i]) {
        break;
      }
    }
  }
  return dp[0];
};



// @lc code=end

// console.log(
// wordBreak("catsandog", ["cats","dog","sand","and","cat"])
// )
// console.log(
//   wordBreak("leetcode", ["leet","code"])
//   )


/*
  DP solution
  https://www.youtube.com/watch?v=Sx9NNgInc3A
*/

/*
recursive 
感覺時間會暴
果然爆炸
var wordBreak = function(s, wordDict) {
  if(!s.length) return true;
  
  for(let word of wordDict) {
    if(s.length >= word.length && s.substring(0, word.length) === word) {
      let remain = s.slice(word.length);
      if(wordBreak(remain, wordDict)) {
        return true;
      }
    }
  }

  return false;
};
*/

/* 
存起來也不行
var wordBreak = function(s, wordDict) {
  const dict = wordDict.reduce((prev, next) => {
    prev[next] = next;
    return prev 
  }, {})
  let answers = {};

  function recur(s) {
    if (answers[s]) return answers[s];
    if (dict[s]) {
      answers[s] = true;
      return true;
    }
    for(let i = 1; i <= s.length; i ++) {
      const left = s.substring(0, i);
      const right = s.substring(i);

      if(!!dict[right] && recur(left)) {
        console.log('here')
        answers[s] = true; 
        console.log(answers);
        return true;
      }
      
    }
    answers[s] = false;
    return false;
  }

  return recur(s);
};
*/

