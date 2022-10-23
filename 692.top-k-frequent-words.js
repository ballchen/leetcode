/*
 * @lc app=leetcode id=692 lang=javascript
 *
 * [692] Top K Frequent Words
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  let map = {};
  let freq = [];

  for(let i = 0; i < words.length + 1; i++){
    freq.push([]);
  }

  for(let word of words) {
    if(!map[word]) {
      map[word] = 0;
    }
    map[word] += 1;
  }

  Object.keys(map).forEach((key) => {
    freq[map[key]].push(key);
  })

  let res = [];
  for(let i = freq.length - 1; i >=  0; i--) {
    freq[i].sort((a, b) => {
      return a.localeCompare(b);
    })
    for(let n of freq[i]) {
      
      res.push(n);
      if(res.length == k) {
        return res;
      }
    }
  }
};



// console.log(topKFrequent(["i","love","leetcode","i","love","coding"], 1))
// @lc code=end

/*
使用 heap

var topKFrequent = function(words, k) {
  let map = {};
  let maxHeap = new Heap();

  for(let word of words) {
    if(!map[word]) {
      map[word] = 0;
    }
    map[word] += 1;
  }

  Object.keys(map).forEach((key) => {
    maxHeap.insert({
      word: key,
      val: map[key]
    })
  })

  let res = [];
  let lastVal = 0
  for(let i = 0; i < words.length; i ++) {
    let curMax = maxHeap.popMax();
    if(res.length < k) {
      lastVal = curMax.val;
      res.push(curMax);
    } else if(res.length >= k && lastVal <= curMax.val) {
      res.push(curMax);
    } else {
      break;
    }
    
  }

  res.sort((a, b) => {
    let temp = b.val - a.val;
    if(temp == 0) {
      return a.word.localeCompare(b.word);
    }
    return temp;
  })

  return res.slice(0, k).map((i) => {
    return i.word;
  });


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
    if(i >= Math.floor(this.values.length / 2) && i <= this.values.length - 1) {
      return true;
    }
    return false;
  }
  swap(i, j) {
    [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
  }
  insert(elem) {
    this.values.push(elem);
    if(this.values.length > 1) {
      this.heapifyUp(this.values.length - 1);
    }
  }
  popMax() {
    if(this.values.length === 0) {
      return 'empty'
    }
    if(this.values.length === 1) {
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
    let parentIndex = this.parent(currentIndex);
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

      if(largestIndex !== i) {
        this.swap(largestIndex, i);
        this.heapifyDown(largestIndex);
      }
    }
  }
  peek() {
    if(this.values.length < 1) {
      return 'empty';
    }
    return this.values[0];
  }
  isEmpty() {
    return this.values.length === 0;
  }
}

*/

