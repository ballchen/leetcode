/*
 * @lc app=leetcode id=148 lang=javascript
 *
 * [148] Sort List
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
var sortList = function(head) {
  if(!head || !head.next) {
    return head;
  }
  // get mid
  let slow = head;
  let fast = head.next;
  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let left = head;
  let right = slow;
  let temp = right.next;
  right.next = null;
  right = temp;

  left = sortList(left);
  right = sortList(right);

  return merge(left, right);

};

function merge(left, right) {
  let dummy = new ListNode();
  let tail = dummy;
  while(left && right) {
    if(left.val < right.val) {
      tail.next = left;
      left = left.next;
    } else {
      tail.next = right;
      right = right.next;
    }
    tail = tail.next;
  }

  if(left) {
    tail.next = left;
  }
  if(right) {
    tail.next = right;
  }

  return dummy.next;

}

// @lc code=end

/*
heapsort version

var sortList = function(head) {
  let cur = head;
  let maxHeap = new Heap()
  while(cur) {
    maxHeap.insert(cur);
    cur = cur.next;
  }

  let pivot = null
  while(!maxHeap.isEmpty()) {
    let prev = pivot;
    pivot = maxHeap.popMax();
    pivot.next = prev;
  }
  console.log(pivot);

  return pivot;
};

class Heap {
  constructor() {
    this.values = [];
  }
  parent(i) {
    return Math.floor((i-1)/2);
  }
  leftChild(i) {
    return i*2 + 1;
  }
  rightChild(i) {
    return i*2 + 2;
  }
  isLeaf(i) {
    if(i >= Math.floor(this.values.length / 2) && i <= (this.values.length - 1)) {
      return true
    }
    return false;
  }
  insert(node) {
    this.values.push(node);
    this.heapifyUp(this.values.length - 1);
  }
  popMax() {
    if(this.values.length < 1) {
      return 'empty';
    }
    if(this.values.length == 1) {
      return this.values.pop();
    }
    let max = this.values[0];
    let cur = this.values.pop();
    this.values[0] = cur;
    this.heapifyDown(0);

    return max;
  }
  heapifyUp(i) {
    let currentIndex = i;
    let parentIndex = this.parent(i);
    while(currentIndex > 0 && this.values[currentIndex].val >= this.values[parentIndex].val) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.parent(currentIndex);
    }
  }
  heapifyDown(i) {
    if(!this.isLeaf(i)) {
      let leftChildIndex = this.leftChild(i);
      let rightChildIndex = this.rightChild(i);
      let largestIndex = i;
      if(this.values[leftChildIndex] && this.values[leftChildIndex].val > this.values[largestIndex].val) {
        largestIndex = leftChildIndex;
      }

      if(this.values[rightChildIndex] && this.values[rightChildIndex].val >= this.values[largestIndex].val) {
        largestIndex = rightChildIndex;
      }

      if(i !== largestIndex) {
        this.swap(i, largestIndex);
        this.heapifyDown(largestIndex);
      }
    }
  }
  peek() {
    if(this.values.length < 1) {
      return 'empty';
    }
    return this.values[0]
  }
  swap(i, j) {
    [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
  }
  isEmpty() {
    return this.values.length == 0;
  }
  raw() {
    return this.values;
  }
}

*/


