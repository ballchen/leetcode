/*
 * @lc app=leetcode id=127 lang=javascript
 *
 * [127] Word Ladder
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  wordList.push(beginWord);
  let wordListSet = new Set(wordList);
  let graph = {};
  for(let j = 0; j < wordList.length; j ++) {
    let word = wordList[j];
    for(let k = 0; k < word.length; k ++) {
      let ch = word[k];
      let key = `${word.substring(0, k)}*${word.substring(k+1)}`
      if(!graph[key]) {
        graph[key] = new Set();
      }
      graph[key].add(word);
    }
  }
  let visited = new Set([beginWord]);
  let queue = [beginWord];
  let res = 1;
  //bfs
  while(queue.length > 0) {
    
    let len = queue.length;
    for(let i = 0; i < len; i++) {
      let word = queue.shift();
      if(word == endWord) {
        return res;
      }

      for(let k = 0; k < word.length; k++) {
        let key = `${word.substring(0, k)}*${word.substring(k+1)}`;
        if(!graph[key]) {
          continue;
        }
        graph[key].forEach((edge) => {
          if(!visited.has(edge)) {
            queue.push(edge);
            visited.add(edge)
          }
        })
      }
      
    }
    res += 1;

  }
  

  return 0;
};

console.log(
ladderLength('hit', 'cog', ["hot","dot","dog","lot","log","cog"])
)
// @lc code=end



/*
forEach a to z

var ladderLength = function(beginWord, endWord, wordList) {
  wordList.push(beginWord);
  let wordListSet = new Set(wordList);
  let graph = {};
  for(let j = 0; j < wordList.length; j ++) {
    let word = wordList[j];
    for(let k = 0; k < word.length; k ++) {
      let ch = word[k];
      for(let i = 0; i < 26; i ++) {
        const replacedCh = String.fromCharCode(97 + i);
        let key = `${word.substring(0, k)}*${word.substring(k+1)}`
        let temp = `${word.substring(0, k)}${replacedCh}${word.substring(k+1)}`;
        if(replacedCh !== ch && wordListSet.has(temp)) {
          if(!graph[key]) {
            graph[key] = new Set();
          }
          graph[key].add(temp); 
        }
      }
    }
  }
  let visited = new Set([beginWord]);
  let queue = [beginWord];
  let res = 1;
  //bfs
  while(queue.length > 0) {
    
    let len = queue.length;
    for(let i = 0; i < len; i++) {
      let word = queue.shift();
      if(word == endWord) {
        return res;
      }

      for(let k = 0; k < word.length; k++) {
        let key = `${word.substring(0, k)}*${word.substring(k+1)}`;
        if(!graph[key]) {
          continue;
        }
        graph[key].forEach((edge) => {
          if(!visited.has(edge)) {
            queue.push(edge);
            visited.add(edge)
          }
        })
      }
      
    }
    res += 1;

  }
  

  return 0;
};
*/