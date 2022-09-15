/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  const dummyHead = new ListNode();
  dummyHead.next = head;
  while(head && head.next) {
    if(head.val === head.next.val) {
      head.next = head.next.next
    } else {
      head = head.next
    }
  }

  return dummyHead.next;
};
// @lc code=end

