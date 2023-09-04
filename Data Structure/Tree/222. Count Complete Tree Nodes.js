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
 * @return {number}
 */
// Utilizing the properties of a complete binary tree with recursive DFS
var countNodes = function (root) {
  // Base case: empty tree
  if (!root) return 0;

  // Calculate the depth of the left and right subtrees
  let leftDepth = 1,
    rightDepth = 1;
  let left = root.left,
    right = root.right;
  while (left) {
    leftDepth++;
    left = left.left;
  }
  while (right) {
    rightDepth++;
    right = right.right;
  }
  // If the subtree is a full binary tree, calculate the total nodes
  if (leftDepth === rightDepth) return Math.pow(2, leftDepth) - 1;
  // If not, count nodes in the left and right subtrees separately
  let leftTreeSum = countNodes(root.left);
  let rightTreeSum = countNodes(root.right);

  let result = leftTreeSum + rightTreeSum + 1;
  return result;
};

/** 
// BFS
var countNodes = function(root) {
    let count = 0;
    if(!root) return count;
    // Initialize a queue to mimic BFS
    const queue = [root];
    while(queue.length){
        // Dequeue one node and and increment the count
        const currentNode = queue.shift();
        count ++;

        // Enqueue child nodes
        if(currentNode.left) queue.push(currentNode.left);
        if(currentNode.right) queue.push(currentNode.right);
    }
    return count;
};
*/

/**
// Recursive approach for counting nodes
var countNodes = function(root) {
    // Recursive function to count nodes in a subtree
    function getNodeSum(node){
        // Base case: empty tree or leaf node
        if(node === null) return 0;

        // // Count the nodes in the left and right subtrees
        const leftNodeSum = getNodeSum(node.left);
        const rightNodeSum = getNodeSum(node.right);

        // Return the total count, including the current node
        return leftNodeSum + rightNodeSum + 1;
    }
    // Start counting from the root
    return getNodeSum(root);
};
 */
