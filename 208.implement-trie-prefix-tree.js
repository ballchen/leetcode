/*
 * @lc app=leetcode id=208 lang=javascript
 *
 * [208] Implement Trie (Prefix Tree)
 */

// @lc code=start



var Trie = function() {
  this.root = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let currentNode = this.root;
  for(let c of word) {
    if(!currentNode[c]) {
      currentNode[c] = {};
    }
    currentNode = currentNode[c];
  }
  currentNode.wordEndHere = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let currentNode = this.root;
  for(let c of word) {
    
    currentNode = currentNode[c]; 
    if(!currentNode || currentNode === undefined) {
      return false;
    }
  }
  return !!currentNode.wordEndHere;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let currentNode = this.root;
    for(let c of prefix) {
      currentNode = currentNode[c];
      if(!currentNode || currentNode === undefined) {
        return false;
      } 
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end


/*
用 tree 的方式去解
*/