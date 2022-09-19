/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

  let dummyHead = new ListNode();
  let curr = dummyHead;
  let carry = false;

  while(!!l1 || !!l2) {
    let sum = 0;

    if(!!l1) {
      sum = sum + l1.val
      l1 = l1.next;
    }
    if(!!l2) {
      sum = sum + l2.val;
      l2 = l2.next;
    }
    
    if(carry) {
      sum += 1;
      carry = false;
    }

    if(sum >= 10) {
      sum %= 10;
      carry = true;
    }

    curr.next = new ListNode(sum);
    curr = curr.next;

  }

  if(carry) {
    curr.next = new ListNode(1);
  }
  

  return dummyHead.next;
};
// @lc code=end


/*

var addTwoNumbers = function(l1, l2) {
    let res = new ListNode(-1),
        dummy = res,
        sum = 0, carry = 0;
    
    while(l1 || l2 || sum > 0) {
        if(l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        
        if(l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        
        if(sum >= 10) {
            sum -= 10;
            carry = 1;
        }
        
        dummy.next = new ListNode(sum);
        dummy = dummy.next;
        sum = carry;
        carry = 0;
    }
    return res.next;
};
*/