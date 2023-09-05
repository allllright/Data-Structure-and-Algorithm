/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  //后序遍历 左右中 当前左子树右子树高度相差大于1就返回-1

  // 1. 确定递归函数参数以及返回值
  if (!root) return true;
  function checkBalance(node) {
    // 2. 确定递归函数终止条件
    if (!node) return 0;

    // 3. 确定单层递归逻辑
    let leftDepth = checkBalance(node.left);
    let rightDepth = checkBalance(node.right);

    // If either subtree is unbalanced, propagate -1 upwards
    if (
      leftDepth === -1 ||
      rightDepth === -1 ||
      Math.abs(leftDepth - rightDepth) > 1
    ) {
      return -1;
    }
    // Return the depth of the current subtree
    return Math.max(leftDepth, rightDepth) + 1;
  }
  // return checkBalance(root) === -1? false: true;
  return checkBalance(root) !== -1;
};
