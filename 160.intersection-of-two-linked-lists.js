/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let curA = headA;
  let curB = headB;

  while(curA !== curB) {

    if(!curA.next && !curB.next) {
      curA = null;
      curB = null;
      break;
    }

    if(curA.next) {
      curA = curA.next;
    } else {
      curA = headB;
    }

    if(curB.next) {
      curB = curB.next;
    } else {
      curB = headA;
    }
  }

  return curA;
};
// @lc code=end

/*
垃圾解
var getIntersectionNode = function(headA, headB) {
  let stackA = [];
  let stackB = [];

  while(!!headA) {
    stackA.unshift(headA)
    headA = headA.next;
  }

  while(!!headB) {
    stackB.unshift(headB)
    headB = headB.next;
  }

  let pivot = 0;

  if(stackA[pivot] != stackB[pivot]) {
    return null;
  }

  while(stackA[pivot] == stackB[pivot]) {
    pivot += 1;
  }

  return stackA[pivot - 1];

};
*/

