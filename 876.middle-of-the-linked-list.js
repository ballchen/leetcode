/*
 * @lc app=leetcode id=876 lang=javascript
 *
 * [876] Middle of the Linked List
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
var middleNode = function(head) {
  let normal = head;
  let fast = head;
  let length = 0;

  while(fast.next) {
    
    if(!!fast.next.next) {
      fast = fast.next.next;
    } else {
      fast = fast.next;
    }
    normal = normal.next;
    length += 1;
  }
  

  return normal;

};
// @lc code=end

/*
1. 直覺想法：跑一遍得到總長度，然後在跑一遍 跑到一半
2. 派兩個人 A的速度是 B的兩倍 這樣 A 到終點時，B就會到一半 （注意起點 跟要回傳的位置）
*/

