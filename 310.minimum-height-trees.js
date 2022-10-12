/*
 * @lc app=leetcode id=310 lang=javascript
 *
 * [310] Minimum Height Trees
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
 var findMinHeightTrees = function(n, edges) {
  if(n == 1) {
    return [0]
  }
  let graph = {};
  for ([x, y] of edges) {
      if(!graph[x]) {
          graph[x] = [];
      }
      if(!graph[y]) {
          graph[y] = [];
      }
      graph[x].push(y);
      graph[y].push(x);
  }

  let leaves = [];
  for(let node in graph) {
      if(graph[node].length == 1) {
          leaves.push(node);
      }
  }

  while(n > 2) {
    n = n - leaves.length;
    let tempLeaves = [];
    for(let leaf of leaves) {
      let leafEdge = graph[leaf].pop();
      let index = graph[leafEdge].indexOf(leaf);
      graph[leafEdge].splice(index, 1);

      if(graph[leafEdge].length == 1) {
        tempLeaves.push(leafEdge);
      }
    }
    leaves = tempLeaves;
  }
  return leaves;
};
// @lc code=end

console.log(
findMinHeightTrees(4, [[1,0],[1,2],[1,3]])
)
// console.log(
// findMinHeightTrees(2, [[0,1],[1,0]])
// )



/*
BFS 看誰可以最快把 visited 填滿
*/

/*
從 leaf 開始一層一層削掉 直到沒有 所有的 node 都沒有 leaf
leaf 定義 （只有一個）
*/