/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let heap = new Heap();

  for(let list of lists) {
    while(list) {
      heap.insert(list);
      list = list.next;
    }
  }

  if(heap.isEmpty()) {
    return null;
  }

  
  let cur;
  let prev;
  cur = heap.popMax();
  while(!heap.isEmpty()) {
    prev = cur;
    cur = heap.popMax();
    cur.next = prev
  }

  return cur;
};

class Heap {
  constructor() {
    this.values = [];
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  leftChild(i) {
    return i * 2 + 1;
  }

  rightChild(i) {
    return i * 2 + 2;
  }

  isLeaf(i) {
    if(i <= this.values.length - 1 && i >= Math.floor(this.values.length / 2)) {
      return true;
    }
    return false;
  }

  insert(node) {
    this.values.push(node);
    this.heapifyUp(this.values.length - 1);
  }

  popMax() {
    if(this.values.length < 1) {
      return 'Empty'
    }
    if(this.values.length === 1) {
      return this.values.pop();
    }
    let max = this.values[0];
    let end = this.values.pop();

    this.values[0] = end;
    
    this.heapifyDown(0);

    return max;

  }

  peek() {
    if(this.values.length < 1) {
      return 'Empty'
    }
    return this.values[0];
  }

  heapifyUp(i) {
    let currentIndex = i;
    let parentIndex = this.parent(i);
    while(currentIndex > 0 && this.values[parentIndex].val <= this.values[currentIndex].val) {
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

      if(largestIndex != i) {
        this.swap(largestIndex, i);
        this.heapifyDown(largestIndex);
      }
      
    }
  }

  isEmpty() {
    return this.values.length == 0;
  }

  raw() {
    return this.values;
  }

  swap(i, j) {
    [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
  }
}
// @lc code=end

// let maxHeap = new Heap();
// maxHeap.insert(1)
// maxHeap.insert(0)
// maxHeap.insert(3)
// maxHeap.insert(4)
// maxHeap.insert(2)
// maxHeap.insert(7)
// maxHeap.insert(5)
// console.log(maxHeap.raw());


