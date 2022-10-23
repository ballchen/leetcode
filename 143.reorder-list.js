/*
 * @lc app=leetcode id=143 lang=javascript
 *
 * [143] Reorder List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function(head) {
  let nodes = [];
  let slow = head;
  let fast = head;

  while(fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let lastHalfPivot = slow.next;
  slow.next = null;

  while(lastHalfPivot) {
    nodes.push(lastHalfPivot);
    lastHalfPivot = lastHalfPivot.next;
  }

  while(head && nodes.length) {
    let node =  nodes.pop();
    node.next = head.next;
    head.next = node;
    head = node.next;
  }

  return head;
};
// @lc code=end

