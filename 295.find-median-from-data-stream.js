/*
 * @lc app=leetcode id=295 lang=javascript
 *
 * [295] Find Median from Data Stream
 */

// @lc code=start

var MedianFinder = function() {
  this.leftMaxHeap = new Heap();
  this.rightMinHeap = new Heap();
  this.size = 0;
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  this.leftMaxHeap.insert(num);

  if(
    !this.leftMaxHeap.isEmpty() && !this.rightMinHeap.isEmpty() && 
    (this.leftMaxHeap.peek() > -1 * this.rightMinHeap.peek())
  ) {
    let leftMax = this.leftMaxHeap.popMax();
    this.rightMinHeap.insert(-leftMax);
  }

  if(this.leftMaxHeap.length() > this.rightMinHeap.length() + 1) {
    let leftMax = this.leftMaxHeap.popMax();
    this.rightMinHeap.insert(-leftMax);
  }

  if(this.rightMinHeap.length() > this.leftMaxHeap.length() + 1) {
    let rightMin = this.rightMinHeap.popMax();
    this.leftMaxHeap.insert(-rightMin);
  }
  
  this.size ++;
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  if(!this.size) {
    return 'empty';
  }

  
  if(this.leftMaxHeap.length() > this.rightMinHeap.length()) {
    return this.leftMaxHeap.peek();
  }

  if(this.rightMinHeap.length() > this.leftMaxHeap.length()) {
    return -this.rightMinHeap.peek();
  }
  
  return (this.leftMaxHeap.peek() - this.rightMinHeap.peek()) / 2;
  
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
    if(this.values.length - 1 >= i && i >= Math.floor(this.values.length / 2)) {
      return true;
    }
    return false;
  }

  peek() {
    if(this.values.length == 0) {
      return 'empty';
    }
    return this.values[0];
  }

  insert(val) {
    this.values.push(val);
    this.heapifyUp(this.values.length - 1);
  }

  popMax() {
    if(this.values.length < 1) {
      return 'empty'
    }
    if(this.values.length == 1) {
      return this.values.pop();
    }
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;
    this.heapifyDown(0);

    return max;
  }

  heapifyUp(i) {
    let currentIndex = i;
    let parentIndex = this.parent(i);
    while(currentIndex > 0 && this.values[currentIndex] > this.values[parentIndex]) {
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

      if(this.values[leftChildIndex] > this.values[largestIndex]) {
        largestIndex = leftChildIndex;
      }

      if(this.values[rightChildIndex] >= this.values[largestIndex]) {
        largestIndex = rightChildIndex;
      }

      if(largestIndex != i) {
        this.swap(largestIndex, i);
        this.heapifyDown(largestIndex);
      }
    }
  }

  swap(i, j) {
    [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
  }

  length() {
    return this.values.length;
  }

  isEmpty() {
    return !this.values.length;
  }
}
/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end



/*

Time: O(logN) 使用 binary search 找到 index to insert

MedianFinder.prototype.addNum = function(num) {
  if(!this.array.length) {
    this.array.push(num);
  } else if(this.array[0] >= num) {
    this.array.unshift(num);
  } else if(this.array[this.array.length - 1] <= num) {
    this.array.push(num);
  } else {
    let l = 0;
    let r = this.array.length - 1;
    let n = -1;
    while(l <= r) {
      n = Math.floor((l+r) / 2);
      if(this.array[n] <= num && this.array[n + 1] >= num) {
        break;
      } else if(this.array[n] > num) {
        r = n - 1;
      } else {
        l = n + 1;
      }
    }
    this.array.splice(n + 1, 0, num)
  }
};


 MedianFinder.prototype.findMedian = function() {
  if(!this.array.length) {
    return 0;
  }
  let half = Math.floor(this.array.length / 2)
  if(this.array.length % 2 == 1) {
    return this.array[half];
  } else {
    return (this.array[half] + this.array[half - 1]) / 2;
  }
};

*/
