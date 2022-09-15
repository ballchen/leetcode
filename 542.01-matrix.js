/*
 * @lc app=leetcode id=542 lang=javascript
 *
 * [542] 01 Matrix
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
  const queue = [];
  let distMat = [];
  

  for(let i = 0; i < mat.length; ++i) {
    distMat.push([])
    for(let j = 0; j < mat[i].length; ++j) {
      
      if(mat[i][j] === 0) {
        queue.push({
          pos: [i, j],
          lastDistance: 0,
        })
        distMat[i].push(0)
      } else {
        distMat[i].push(null);
      }
    }
  }

  while(queue.length) {
    const job = queue.shift();
    const x = job.pos[0];
    const y = job.pos[1];

    if(x > 0 && distMat[x-1][y] === null) {
      distMat[x-1][y] = job.lastDistance + 1
      queue.push({
        pos: [x-1, y],
        lastDistance: job.lastDistance + 1
      })
    }

    if(x < mat.length - 1 && distMat[x+1][y] === null) {
      distMat[x+1][y] = job.lastDistance + 1
      queue.push({
        pos: [x+1, y],
        lastDistance: job.lastDistance + 1
      })
    }

    if(y > 0 && distMat[x][y-1] === null) {
      distMat[x][y-1] = job.lastDistance + 1
      queue.push({
        pos: [x, y-1],
        lastDistance: job.lastDistance + 1
      })
    }

    if(y < mat[0].length - 1 && distMat[x][y+1] === null) {
      distMat[x][y+1] = job.lastDistance + 1
      queue.push({
        pos: [x, y+1],
        lastDistance: job.lastDistance + 1
      })
    }

  }

  return distMat;
};
// @lc code=end

/*
1. 用 queue 去存
先定位出所有的 0 然後設定他的距離都 0
接著把所有 0 的座標推到 queue, 
一個一個拿出來 找上下左右 如果還沒有 dist 的話距離就是 parent 的加 + 1, 並 推入 queue

*/

