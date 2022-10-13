/*
 * @lc app=leetcode id=237 lang=javascript
 *
 * [237] Delete Node in a Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  if(node && node.next !== undefined) {
    node.val = node.next.val;
    node.next = node.next.next;
  }
};
// @lc code=end

/*

var deleteNode = function(node) {
  let prev = node;
  while(node.next) {
    prev = node;
    node = node.next;
    prev.val = node.val

    if(!node.next) {
      prev.next = null
    }
  }
};

*/

