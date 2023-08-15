/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const arr = Array.from(s);
  const resultStack = [];
  for (char of arr) {
    if (char === resultStack[resultStack.length - 1]) resultStack.pop();
    else resultStack.push(char);
  }
  return resultStack.join("");
};
