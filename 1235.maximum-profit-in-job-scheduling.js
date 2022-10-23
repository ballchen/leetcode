/*
 * @lc app=leetcode id=1235 lang=javascript
 *
 * [1235] Maximum Profit in Job Scheduling
 */

// @lc code=start
/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
  let jobs = [];
  let len = startTime.length;
  let dp = new Array(len).fill(0);

  function binarySearch(key,l,r){
    let mid;
    let temp = -1;
    while(l <= r) {
      mid = Math.floor((l + r) / 2);
      if(jobs[mid].start >= key) {
        temp = mid;
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
   
    return temp;
  }

  for(let i = 0; i < startTime.length; i++) {
    jobs.push({
      start: startTime[i],
      end: endTime[i],
      profit: profit[i],
    })
  }

  jobs.sort((a, b) => {
    return (a.start - b.start === 0) ? (a.end - b.end) : (a.start - b.start);
  })

  dp[len - 1] = jobs[len - 1].profit;

  for(let i = len - 2; i >= 0; i--) {
    console.log(dp)
    
    let index = binarySearch(jobs[i].end, i, len - 1)
    console.log('i', i, 'index', index, 'jobs[i].end', jobs[i].end)
    let profitWithoutThisJob = (index === -1) ? 0 : dp[index];
    
    dp[i] = Math.max(jobs[i].profit + profitWithoutThisJob, dp[i + 1]);
    console.log('i', i, 'index', index, 'jobs[i].end', jobs[i].end, dp[index], jobs[i].profit + profitWithoutThisJob, dp[index + 1])
  }
  
  return dp[0];
  
};





console.log(
  jobScheduling([1,2,3,3], [3,4,5,6], [50,10,40,70])
)
// @lc code=end


/*

recursive 爆開
var jobScheduling = function(startTime, endTime, profit) {
  let jobs = [];
  let len = startTime.length;

  for(let i = 0; i < startTime.length; i++) {
    jobs.push({
      start: startTime[i],
      end: endTime[i],
      profit: profit[i],
    })
  }

  jobs.sort((a, b) => {
    return a.start - b.start
  })

  startTime.sort();

  function binarySearch(key,l,r){
    let mid;
    let temp = -1;
    while(l <= r) {
      mid = Math.floor((l + r) / 2);
      if(jobs[mid].start >= key) {
        temp = mid;
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
   
    return temp;
  }


  function recursive(i) {
    if (i == len) {
      return 0;
    }
  
    if(i == -1) {
      return 0;
    }

    pivot = binarySearch(jobs[i].end, i + 1, len - 1)

    let option1 = jobs[i].profit + recursive(pivot);
    let option2 = recursive(i + 1);

    return Math.max(option1, option2);
  }

  return recursive(0);

};

*/


