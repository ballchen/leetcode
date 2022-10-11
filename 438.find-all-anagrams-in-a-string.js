/*
 * @lc app=leetcode id=438 lang=javascript
 *
 * [438] Find All Anagrams in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  if(s.length < p.length) {
    return [];
  }
  let map = {};
  let uniqChar = 0;

  for (let c of p) {
    if(map[c] == null) {
      uniqChar ++;
      map[c] = 1;
    } else {
      map[c] += 1;
    }
    
  }

  let results = [];
  let left = 0;
  let right = 0;
  for(right; right < s.length; right++) {
    const rightW = s[right];
    if(map[rightW] != null) {
      map[rightW]--;
    }

    if(map[rightW] == 0) {
      uniqChar --;
    }
    if(uniqChar == 0) {
      results.push(left);
    }
    if (right - left + 1 == p.length) {
      if (map[s[left]] != null) {
        map[s[left]] ++;
      }

      if(map[s[left]] == 1) {
        
        uniqChar+=1;
      }
      left ++;
    }
  }

  return results;
};
// @lc code=end

console.log(
findAnagrams('cbaebabacd', 'abc')
)

/*
超過時間
O(N*N)
var findAnagrams = function(s, p) {
    const pLen = p.length;
    let map = new Map();
    for(let w of p) {
        if(!map.has(w)) {
            map.set(w, 0);
        }
        map.set(w, map.get(w) + 1);
    }
    function isAnagram(a, b) {
        const copyMap = new Map(JSON.parse(
            JSON.stringify(Array.from(map))
        ));
        if(a.length !== b.length) {
            return false;
        }

        for(let ch of b) {
            if(!copyMap.has(ch)) {
                return false;
            }
            const newCount = copyMap.get(ch) - 1;
            if(newCount < 0) {
                return false;
            }
            copyMap.set(ch, newCount);
        }
        return true;
    }

    let results = [];
    for(let i = 0; i < s.length; i++) {
        if(!map.has(s[i])) {
            continue;
        }
        if(isAnagram(p, s.substring(i, i + p.length))) {
            results.push(i)
        }
    }

    return results;
};

*/