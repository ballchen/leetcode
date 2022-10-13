/*
 * @lc app=leetcode id=146 lang=javascript
 *
 * [146] LRU Cache
 */

// @lc code=start

class ListNode {
  constructor(key, value) {
      this.key = key;
      this.val = value;
      this.next = null;
      this.prev = null;
  }
}

/**
* @param {number} capacity
*/
var LRUCache = function(capacity) {
  this.capacity = capacity;
  
  // use to save nodes;
  this.map = new Map();

  this.dummy = new ListNode();
  this.tail = this.dummy;

};

LRUCache.prototype.remove = function(key) {
    if(!this.map.has(key)) {
        return;
    }
  //do remove

  let node = this.map.get(key);
  node.prev.next = node.next;
  if(node.next) {
      node.next.prev = node.prev;
  } else {
      this.tail = node.prev
  }

  this.map.delete(key);
  
}

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  if(!this.map.has(key)) {
      return -1;
  }


  this.put(key, this.map.get(key).val);
  return this.tail.val;
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  this.remove(key);

  // if full, remove head (dummy.next)
  if (this.capacity === this.map.size) {
      this.remove(this.dummy.next.key)
  }


  // if normal insert
  let newNode = new ListNode(key, value);
  this.tail.next = newNode;
  newNode.prev = this.tail;
  this.tail = this.tail.next;

  this.map.set(key, this.tail);
};

/** 
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/