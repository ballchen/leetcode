/*
 * @lc app=leetcode id=133 lang=javascript
 *
 * [133] Clone Graph
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  let nodesMap = {}; 
  function traverse(node) {
    if(!node) return null;
    if(nodesMap[node.val]) return nodesMap[node.val];
    let clonedNode = new Node(node.val);
    nodesMap[node.val] = clonedNode;

    for(let neighbor of node.neighbors) {
      const clonedNeighbor = traverse(neighbor);

      if(clonedNeighbor) {
        clonedNode.neighbors.push(clonedNeighbor);
      } 
    }

    return clonedNode;
  }

  return traverse(node);
};
// @lc code=end

/*
recursive 可以 精簡成這樣
var cloneGraph = function (graph) {
  var map = {};
  return traverse(graph);

  function traverse(node) {
    if (!node) return node;
    if (!map[node.val]) {
      map[node.val] = new Node(node.val);
      map[node.val].neighbors = node.neighbors.map(traverse);
    }
    return map[node.val];
  }
}

*/


/*
BFS

need a map
一樣 用 queue 推 node  進去 
然後每輪把 neighbors 推入並 紀錄在 map 中

*/
