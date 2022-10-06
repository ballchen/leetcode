/*
 * @lc app=leetcode id=981 lang=javascript
 *
 * [981] Time Based Key-Value Store
 */

// @lc code=start

var TimeMap = function() {
  this.map = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
  if(!this.map.has(key)) {
    this.map.set(key, [[timestamp, value]]);
  } else {
    let oldVal = this.map.get(key);
    oldVal.push([timestamp, value]);
    this.map.set(key, oldVal);
  }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
  if(!this.map.has(key)) {
    return '';
  }

  let arr = this.map.get(key);

  // 第一個如果就比 timestamp 大 就回傳 ""
  if (arr[0][0] > timestamp) {
    return '';
  }

  let index = binarySearch(arr, timestamp)

  if(arr[index][0] > timestamp) {
    return arr[index - 1][1];
  }
  
  return arr[index][1];

};

function binarySearch(arr, timestamp) {
  let high = arr.length - 1;
  let low = 0;
  let mid;
  while(high >= low) {
    mid = Math.floor((high + low) / 2)
    if(timestamp === arr[mid][0]) {
      return mid;
    } else if(timestamp > arr[mid][0]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  // 如果沒找到 回傳的話真正該選的 timestamp 會在 mid - 1 這個位置
  return mid;
}

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
// @lc code=end

/*
get time exceed

map of map 好像太耗費 空間時間 還要 sort 很慢 
*/

