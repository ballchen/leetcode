/*
 * @lc app=leetcode id=328 lang=javascript
 *
 * [328] Odd Even Linked List
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
 var oddEvenList = function(head) {
  if(!head) return null;
  let dummy = new ListNode();
  let dummy1 = new ListNode();
  dummy.next = head;
  let evenList = dummy1;
  
  while(head && head.next) {
    //head.next = evennode
    evenList.next = head.next;
    head.next = head.next.next;
    
    evenList = evenList.next;
    evenList.next = null;

    if(head.next) {
      head = head.next;
    }
  }
  head.next = dummy1.next;
  return dummy.next;
};
// @lc code=end

