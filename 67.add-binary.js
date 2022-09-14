/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let stackA = [];
  let stackB = [];
  let output = ''

  for(let i = 0; i < a.length; i++) {
    stackA.push(a.charAt(i))
  }

  for(let i = 0; i < b.length; i++) {
    stackB.push(b.charAt(i))
  }
  
  let isLastCarry = false;
  while(stackA.length || stackB.length) {
    let willCarry = false;
    const charA = stackA.pop() || '0';
    const charB = stackB.pop() || '0';

    let answer = '0';

    if(charA === '1' && charB === '1') {
      answer = isLastCarry ? '1' : '0';
      willCarry = true;
    } else if((charA === '1' || charB === '1') && isLastCarry) {
      answer = '0';
      willCarry = true;
    } else if((charA === '1' || charB === '1') && !isLastCarry) {
      answer = '1';
    } else {
      answer = isLastCarry ? '1' : '0';
    }

    output = answer + output;
    isLastCarry = willCarry;

  }

  if(isLastCarry) {
    output = '1' + output;
  }

  return output;
};
// @lc code=end


/*
1. 先把兩個 string 的長度補成一樣，然後從最後一個字開始計算，必須注意當迴圈出來之後如果還有進位還要再補一個 1

var addBinary = function(a, b) {
  let output = '';
  function padZero(s, l) {
    const zeroCount = l - s.length;
    for(let i = 0; i < zeroCount; i++) {
      s = "0" + s;
    }
    return s;
  }

  if(a.length > b.length) {
    b = padZero(b, a.length);
  } else if(a.length < b.length) {
    a = padZero(a, b.length);
  }

  let isLastCarry = false
  for(let i = (a.length - 1); i >=0; i--) {
    let isCarry = false;
    let answerWithoutCarry = ''

    if(a.charAt(i) === '1' && b.charAt(i) === '1') {
      answerWithoutCarry = '0';
      isCarry = true;
    } else if(a.charAt(i) === '1') {
      answerWithoutCarry = '1';
    } else if(b.charAt(i) === '1') {
      answerWithoutCarry = '1';
    } else {
      answerWithoutCarry = '0';
    }

    let answer = answerWithoutCarry;
    if(answerWithoutCarry === '1' && isLastCarry) {
      answer = "0";
      isCarry = true;
    } else if(answerWithoutCarry === '0' && isLastCarry) {
      answer = "1";
    }

    output = `${answer}${output}`;
    isLastCarry = isCarry;
  }

  if(isLastCarry) {
    output = `1${output}`
  }

  return output;
};


*/

/*
2. 先用兩個 stack 去存

var addBinary = function(a, b) {
  let stackA = [];
  let stackB = [];
  let output = ''

  for(let i = 0; i < a.length; i++) {
    stackA.push(a.charAt(i))
  }

  for(let i = 0; i < b.length; i++) {
    stackB.push(b.charAt(i))
  }
  
  let isLastCarry = false;
  while(stackA.length || stackB.length) {
    let willCarry = false;
    const charA = stackA.pop() || '0';
    const charB = stackB.pop() || '0';

    let answer = '0';

    if(charA === '1' && charB === '1') {
      answer = isLastCarry ? '1' : '0';
      willCarry = true;
    } else if((charA === '1' || charB === '1') && isLastCarry) {
      answer = '0';
      willCarry = true;
    } else if((charA === '1' || charB === '1') && !isLastCarry) {
      answer = '1';
    } else {
      answer = isLastCarry ? '1' : '0';
    }

    output = answer + output;
    isLastCarry = willCarry;

  }

  if(isLastCarry) {
    output = '1' + output;
  }

  return output;
};
*/


/*
奇妙的解法
加上 "0b" 讓 bigInt 知道他是二進位（0x 是十進位） 然後直接相加轉成 String
var addBinary = function(a, b) {
    return (BigInt("0b"+a) + BigInt("0b"+b)).toString(2);
}

*/