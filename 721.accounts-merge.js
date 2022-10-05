/*
 * @lc app=leetcode id=721 lang=javascript
 *
 * [721] Accounts Merge
 */

// @lc code=start
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
  let graph = {};
  let nameDict = {};

  for (let account of accounts) {
    const name = account[0];
    const emails = account.slice(1);
    const firstEmail = emails[0];
    nameDict[firstEmail] = name;
    for(let i = 0; i < emails.length; i++) {
      if(!graph[emails[i]]) {
        graph[emails[i]] = new Set();
      }
      nameDict[emails[i]] = name;
      if(i != 0) {
        graph[emails[0]].add(emails[i]);
        graph[emails[i]].add(emails[0]);
      }
    }
  }

  let result = [];
  let visited = new Set();

  function dfs(key) {
    visited.add(key);
    let subRes = [key];
    graph[key].forEach((edge) => {
      if(!visited.has(edge)) {
        subRes.push(...dfs(edge))
      }
    })

    return subRes;
  }

  for(let key in graph) {
    if(!visited.has(key)) {
      const emails = dfs(key);
      emails.sort();
      result.push([nameDict[emails[0]], ...emails])
    }
    
  }
  return result


};
// @lc code=end
/*
給他一個 id 

這個問題是 如果後面才發現關聯，已經給了新 id 就沒法合併

*/

/*
用 graph 去解
先 foreach 所有的 email 把 相關的 email 全部相互關聯

然後用 dfs ＋ visited 去找到所有相關的 email
*/

