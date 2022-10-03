/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const courses = [...Array(numCourses).keys()];
  let prerequisiteMap = {};
  let visiting = {}; // 正在檢查中的
  let visited = {}; // 代表檢查過 確認過這點底下沒有 cycle 碰到就可以跳過檢查
  for (let prerequisite of prerequisites) {
    if(!prerequisiteMap[prerequisite[0]]) {
      prerequisiteMap[prerequisite[0]] = [];
    }
    prerequisiteMap[prerequisite[0]].push(prerequisite[1])
  }

  function hasCycle(course) {
    
    if(!prerequisiteMap[course] || !prerequisiteMap[course].length) return false;
    visiting[course] = true;
    const dependencies = prerequisiteMap[course];
    for(let dependency of dependencies) {
      if(visited[dependency]) {
        continue;
      }
      if(visiting[dependency]) {
        return true;
      }
      if(hasCycle(dependency)) {
        return true;
      }
    }

    visiting[course] = false;
    visited[course] = true;
    return false;
  }

  for(let course in prerequisiteMap) {
    if(hasCycle(course)) {
      return false;
    }; 
  }
  return true;
};

console.log(canFinish(5, [[1,4],[2,4],[3,1],[3,2]]));
// @lc code=end

/*
就是一個 tree 的感覺
用 dfs 去找有沒有 cycle

*/

