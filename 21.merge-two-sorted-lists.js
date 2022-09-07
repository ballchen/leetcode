/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  let pivot1 = list1;
  let pivot2 = list2;

  const new_head = new ListNode(-1, null);
  let new_pivot = new_head;
  
  while (pivot1 && pivot2) {
    if (pivot1.val <= pivot2.val) {
      new_pivot.next = pivot1;
      pivot1 = pivot1.next;
      new_pivot = new_pivot.next;
    } else {
      new_pivot.next = pivot2;
      pivot2 = pivot2.next;
      new_pivot = new_pivot.next;
    }
  }


  if(pivot1) {
    new_pivot.next = pivot1
  } else if(pivot2) {
    new_pivot.next = pivot2
  }

  return new_head.next;
};
// @lc code=end

/*
  用一個 dummy head next 指向 真的 head ，最後再回傳 dummy.next 就不用寫一堆 if else 來操作 head
*/

