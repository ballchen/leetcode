/*
 * @lc app=leetcode id=621 lang=javascript
 *
 * [621] Task Scheduler
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

class MaxHeap {
  constructor() {
    this.values = [];
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChild(index) {
    return index * 2 + 1;
  }

  rightChild(index) {
    return index * 2 + 2;
  }

  isLeaf(index) {
    if(this.values.length - 1 >= index && index >= Math.floor(this.values.length / 2)) {
      return true;
    }
    return false;
  }

  swap(index1, index2) {
    [this.values[index1], this.values[index2]] = [this.values[index2], this.values[index1]];
  }

  add(element) {
    this.values.push(element);
    this.heapifyUp(this.values.length - 1);
  }

  heapifyUp(index) {
    let currentIndex = index;
    let parentIndex = this.parent(index);

    while(currentIndex > 0 && this.values[currentIndex] > this.values[parentIndex]) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.parent(currentIndex);
    }
  }

  extractMax() {
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

  heapifyDown(index) {
    if(!this.isLeaf(index)) {
      let leftChildIndex = this.leftChild(index);
      let rightChildIndex = this.rightChild(index);
      let largestIndex = index;

      //leftChild > largest
      if(this.values[leftChildIndex] > this.values[largestIndex]) {
        largestIndex = leftChildIndex;
      }


      // rightChild >= largest
      if(this.values[rightChildIndex] >= this.values[largestIndex]) {
        largestIndex = rightChildIndex;
      }

      if(largestIndex != index) {
        this.swap(index, largestIndex);
        this.heapifyDown(largestIndex);
      }
    }
  }

  buildHeap(array){
    this.values = array;

    for(let i = Math.floor(this.values.length / 2); i >= 0; i--){
      this.heapifyDown(i);
    }
  }

  peek() {
    return this.values[0];
  }

  print() {
    let i = 0;
    while (!this.isLeaf(i)) {
        console.log("PARENT:", this.values[i]);
        console.log("LEFT CHILD:", this.values[this.leftChild(i)]);
        console.log("RIGHT CHILD:", this.values[this.rightChild(i)]);
        i++;
    }      
  }

  isEmpty() {
    return !this.values.length; 
  }

}

var leastInterval = function(tasks, n) {
  const count = new Array(26).fill(0);
  for(let task of tasks) {
    let charCode = task.charCodeAt(0) - 65;
    count[charCode] ++;
  }

  count.sort((a, b) => a - b);

  let maxFreq = count[25];
  let i = 25;
  //看有幾個跟最大長度一樣可以先填一填
  while(i >= 0 && count[i] == count[25]) {
    i--;
  }
  //填不完有 IDLE 所以最後結束是 AB
  const case1 = (count[25] - 1) * (n + 1) + (25 - i)
  //全部填完還多出來 ABCABDABEF
  const case2= tasks.length;
  return Math.max(case1, case2);
};
// @lc code=end

console.log(
  'result',
  leastInterval(["B","F","J","J","H","A","D","C","C","D","J","E","B","E","C","H","E","E","G","E","H","I","I","E","H","F","C","G","H","F","E","E","I","D","D","A","E","A","C","E","F","J","E","F","G","J","A","A","A","B","E","J","H","C","A","E","D","A","E","I","H","B","A","C","E","F","J","D","F","I","I","H","J","E","B","H","H","A","J","C","C","D","C","B","C","H","H","I","H","D","C","B","D","C","H","A","F","A","J","D","F","E","H","I","D","A","E","B","H","J","F","D","C","J","J","I","A","I","J","H","A","I","I","G","C","C","H","D","B","B","B","H","I","D","B","C","H","I","I","G","E","D","D","A","E","D","H","C","J","H","C","E","I","F","A","I","E","G","A","E","F","I","B","J","B","J","B","G","A","D","C","B","I","A","C","J","J","J","B","E","E","E","B","E","B","H","B","J","H","F","G","B","B","I","C","D","I","D","D","A","I","D","H","A","J","D","J","D","I","G","F","F","B","G","A","F","I","I","H","C","B","H","H","E","F","A","H","G","F","D","G","F","A","C","F","D","F","C","J","A","D","H","G","D","D","G","C","G","C","I","B","G","E","J","C","G","J","G","E","F","F","I","D","D","E","G","F","A","F","H","D","C","B","E","H","G","H","B","A","D","A","J","A","C","B","G","C","A","J","E","I","G","H","J","A","J","I","D","I","G","B","G","I","A","B","J","B","H","E","G","G","I","G","G","C","J","J","J","H","G","A","G","B","G","I","G","A","D","B","A","E","I","H","E","G","H","J","F","H","I","A","E","A","I","A","D","D","B","D","G","E","C","J","C","C","B","F","F","B","E","A","G","D","I","G","D","J","D","G","I","B","J","J","B","F","D","I","C","I","B","J","B","D","D","A","D","C","G","A","G","C","G","C","E","C","G","A","J","C","E","F","C","C","E","J","D","H","H","F","E","D","G","E","E","I","B","G","A","C","C","E","J","F","H","C","A","G","H","G","A","G","A","D","B","E","F","H","C","C","B","I","F","H","I","C","H","G","G","C","E","A","J","F","F","F","B","D","I","E","I","F","E","F","G","G","A","D","I","A","J","A","H","J","I","H","H","A","B","B","B","I","C","J","C","G","J","G","E","I","H","D","E","H","J","A","G","A","G","A","C","F","C","G","E","G","J","D","H","H","B","J","F","J","J","B","J","D","D","G","B","I","I","H","G","B","I","E","D","H","H","I","B","A","A","A","D","H","J","H","D","J","E","D","G","J","B","B","F","G","J","G","E","G","E","E","F","H","F","J","A","G","I","D","C","H","A","C","F","B","J","E","I","A","G","J","D","I","F","I","J","H","E","D","J","A","E","G","B","B","J","I","J","H","F","D","F","F","A","G","F","F","I","C","H","E","E","G","A","D","F","I","D","D","C","B","G","C","D","G","H","F","D","J","D","B","A","J","J","I","H","F","G","D","J","H","I","H","I","A","A","I","C","B","H","G","I","C","F","E","J","J","F","F","D","F","A","J","H","B","G","A","F","D","G","D","C","F","J","F","G","D","H","J","C","A","E","C","G","J","G","I","C","G","H","G","J","D","D","G","D","F","F","J","B","D","C","E","F","G","D","A","J","H","D","F","C","B","H","C","I","D","C","F","E","C","D","J","D","E","G","C","D","H","J","E","H","I","I","A","C","E","C","I","B","A","B","E","E","H","E","B","H","C","G","B","C","C","D","G","G","A","F","A","B","D","G","F","A","H","G","C","E","D","B","H","D","F","F","G","A","J","H","E","B","C","B","B","B","H","D","F","B","B","C","G","A","C","E","J","H","F","F","D","G","J","D","F","J","G","H","B","D","B","D","D","G","J","H","B","D","F","E","E","G","D","H","B","A","I","E","B","E","B","D","I","C","A","A","E","J","A","B","A","F","C","J","F","F","F","A","I","J","F","H","G","C","F","E","D","C","B","C","G","G","G","A","B","J","J","F","J","G","C","D","B","C","F","H","I","F","D","C","I","J","D","I","G","B","G","I","J","E","H","G","G","J","J","A","E","E","I","G","E","H","F","F","C","A","J","I","I","D","C","E","G","A","A","H","F","A","I","B","H","J","H","B","H","A","A","A","G","I","I","D","F","F","C","H","D","B","J","F","G","E","F","J","A","I","G","J","J","F","F","G","B","B","D","F","E","G","D","D","A","D","D","G","C","C","I","C","H","I","C","E","G","C","E","J","F","G","J","B","I","B","B","C","B","G","A","J","H","C","G","D","E","H","E","H","A","H","I","A","J","C","G","B","G","H","G","H"]

  , 36)
)

/*
最多的數字先處理會比較好
所以要不斷的找到 count 目前最多的數字
可以使用 max Heap 去處理， search time O(logN) 總ㄌ

class MaxHeap {
  constructor() {
    this.values = [];
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChild(index) {
    return index * 2 + 1;
  }

  rightChild(index) {
    return index * 2 + 2;
  }

  isLeaf(index) {
    if(this.values.length - 1 >= index && index >= Math.floor(this.values.length / 2)) {
      return true;
    }
    return false;
  }

  swap(index1, index2) {
    [this.values[index1], this.values[index2]] = [this.values[index2], this.values[index1]];
  }

  add(element) {
    this.values.push(element);
    this.heapifyUp(this.values.length - 1);
  }

  heapifyUp(index) {
    let currentIndex = index;
    let parentIndex = this.parent(index);

    while(currentIndex > 0 && this.values[currentIndex] > this.values[parentIndex]) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.parent(currentIndex);
    }
  }

  extractMax() {
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

  heapifyDown(index) {
    if(!this.isLeaf(index)) {
      let leftChildIndex = this.leftChild(index);
      let rightChildIndex = this.rightChild(index);
      let largestIndex = index;

      //leftChild > largest
      if(this.values[leftChildIndex] > this.values[largestIndex]) {
        largestIndex = leftChildIndex;
      }


      // rightChild >= largest
      if(this.values[rightChildIndex] >= this.values[largestIndex]) {
        largestIndex = rightChildIndex;
      }

      if(largestIndex != index) {
        this.swap(index, largestIndex);
        this.heapifyDown(largestIndex);
      }
    }
  }

  buildHeap(array){
    this.values = array;

    for(let i = Math.floor(this.values.length / 2); i >= 0; i--){
      this.heapifyDown(i);
    }
  }

  peek() {
    return this.values[0];
  }

  print() {
    let i = 0;
    while (!this.isLeaf(i)) {
        console.log("PARENT:", this.values[i]);
        console.log("LEFT CHILD:", this.values[this.leftChild(i)]);
        console.log("RIGHT CHILD:", this.values[this.rightChild(i)]);
        i++;
    }      
  }

  isEmpty() {
    return !this.values.length; 
  }

}

var leastInterval = function(tasks, n) {
  const map = {}
  for(let task of tasks) {
    if(!map[task]) {
      map[task] = 1;

    } else {
      map[task] += 1;
    }
  }

  let counts = [];
  for(let key in map) {
    counts.push(map[key]);
  }

  const maxHeap = new MaxHeap();
  maxHeap.buildHeap(counts);
  let time = 0;
  let queue = [];
  while(!maxHeap.isEmpty() || queue.length > 0 ) {
    time += 1;
    if(!maxHeap.isEmpty()) {
      let curMax = maxHeap.extractMax();
      curMax -= 1;
      if(curMax > 0) {
        queue.push([curMax, time + n])
      }
      
    }

    if(queue.length && queue[0][1] == time) {
      let item = queue.shift();
      maxHeap.add(item[0]);
    }
  }
  return time;
  
};

*/

