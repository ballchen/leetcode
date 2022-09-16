/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let fast = head;
  let slow = head;
  while(fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let prev = slow;
  slow = slow.next;
  prev.next = null;

  //reverse the right list
  while(slow) {
    let next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  fast = head;
  slow = prev;
  while(slow) {
    if(fast.val !== slow.val) {
      return false;
    }
    slow = slow.next;
    fast = fast.next;
  }

  return true;

};
// @lc code=end

/*
TC: O(N)
MC: O(N)
用陣列存 val， 檢查 reverse 

*/

