/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
var reverseList = function(head) {
  let pivot = head;
  let newListHead = null;
  let nextNode = null;
  while(pivot) {
    nextNode = pivot.next;


    pivot.next = newListHead
  
    newListHead = pivot;
    pivot = nextNode;
  }

  return newListHead
};
// @lc code=end


/*
1. 第一想法, 先把所有的 node 推到 stack 然後一個一個 pop 出來 接在一起

var reverseList = function(head) {
  const dummyHead = new ListNode()
  const stack = [];

  while(head) {
    stack.push(head);
    head = head.next;
  }

  let newHead = dummyHead;

  while(stack.length > 0) {
    newHead.next = stack.pop();
    newHead = newHead.next;
    newHead.next = null;
  }

  return dummyHead.next;
};


2. 要用 recursive 作

var reverseList = function(head) {
  function traverse(node) {
    if(!node || !node.next) return node;

    
    let newList = traverse(node.next);
    node.next.next = node;
    node.next = null;
    return newList;
  }

  return traverse(head);
};

3. 更簡單的 iteration

null -> 1 -> 2 -> 3 -> 4 -> 5 -> null

newListhead = null
pivot = 1
next = 2

newListhead = 1 -> null
pivot = 2 
next = 3

....
*/