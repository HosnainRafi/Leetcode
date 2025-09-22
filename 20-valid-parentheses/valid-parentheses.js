/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
     let stack = [];

  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      // Push opening bracket
      stack.push(char);
    } else {
      // Pop the last opening bracket
      let last = stack.pop();

      if (char === ')' && last !== '(') return false;
      if (char === '}' && last !== '{') return false;
      if (char === ']' && last !== '[') return false;
    }
  }

  // If stack is empty → all brackets matched
  return stack.length === 0;
};