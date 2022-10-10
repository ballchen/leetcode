/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    //two pointer
    let left = 0;
    let right = height.length - 1;
    let maxHeightL = height[left];
    let maxHeightR = height[right];
    let answer = 0;

    while (left < right) {
      if(maxHeightL < maxHeightR) {
        left ++;
        maxHeightL = Math.max(maxHeightL, height[left]);
        answer += maxHeightL - height[left];
      } else {
        right --;
        maxHeightR = Math.max(maxHeightR, height[right]);
        answer += maxHeightR - height[right];
      }
    }

    return answer;
};
// @lc code=end

/*
1. brute force  O(N**2)
trappedWater at i = min(Left hightest, Right highest) > height[i] ?  (min(Left hightest, Right highest) - height[i] ) : 0 
*/


/*
2. memory
跑一次 先把 所有 i 時 左右的 maxLeft, maxRight 記起來
然後可以找到 min (maxLeft, maxRight) of i

O(n) memory, O(n) 
*/

/*
3. two pointer

https://www.youtube.com/watch?v=ZI2z5pq0TqA
var trap = function(height) {
    //two pointer
    let left = 0;
    let right = height.length - 1;
    let maxHeightL = height[left];
    let maxHeightR = height[right];
    let answer = 0;

    while(left < right) {
      if(maxHeightR > maxHeightL) {
        
        let trappedWater = maxHeightL - height[left];
        answer += trappedWater;
        left ++;
        maxHeightL = Math.max(maxHeightL, height[left]);
      } else {
        let trappedWater = maxHeightR - height[right];
        answer += trappedWater;
        right --;
        maxHeightR = Math.max(maxHeightR, height[right]);
      }
    }

    return answer;
};

*/

/*
想說一層一層解決 結果還是太慢
應該要 O(n)

var trap = function(height) {
    let allZero = true;
    let trappedWater = 0;
    do {
        let hasLeft = false;
        let tempWater = 0;
        allZero = true;
        
        for(let i = 0; i < height.length; i++) {
            if(height[i] > 0) {
                allZero = false;
                
                if(hasLeft) {
                    //close the trap
                    trappedWater += tempWater
                    tempWater = 0;
                }
                hasLeft = true;
                height[i] -= 1;
            } else if(height[i] == 0) {
                if(hasLeft) {
                    tempWater += 1;
                }
            }
        }
    } while(!allZero)

    return trappedWater; 
};

*/