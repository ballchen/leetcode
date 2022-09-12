/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
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
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let fasterPointer = head;
  while(fasterPointer && fasterPointer.next) {
    head = head.next;
    fasterPointer = fasterPointer.next.next;

    if(head === fasterPointer) {
      return true;
    }
  }

  return false;
};
// @lc code=end


/* 

1. 使用 map 或是在 node 上面作標記 （visited），但這樣 memory 就不會是 constant
var hasCycle = function(head) {
  while(head) {
    if(head.visited) {
      return true;
    }
    head.visited = true;
    head = head.next;
  }

  return false;
};
這樣只能用於 js, 需要的是其他語言都可以使用的演算法，而且這樣會影響到 list 原本的內容


2. 看了答案，用一個跑更快的 pointer 去追一次一格的 pointer 追到的話就代表有cycle，


*/