class BinaryTreeNode {
  constructor(value, left, right){
    this.left = left ?? null;
    this.right = right ?? null;
    this.value = value;
  }
}

class BinarySearchTree {
  contructor(){
    this.root = null;
  }

  _firstInsert(value){
    this.root = new BinaryTreeNode(value);
    return value;
  }

  _rightInsert(value, parentNode){
    parentNode.right = new BinaryTreeNode(value);
    return value;
  }

  _leftInsert(value, parentNode){
    parentNode.left = new BinaryTreeNode(value);
    return value;
  }

  insert(value){
    if (!this.root) return this._firstInsert(value);
    
    let currentNode = this.root;
    while(currentNode) {
      if (value > currentNode.value){
        if (currentNode.right === null) return this._rightInsert(value, currentNode);
        
        currentNode = currentNode.right;
        continue

      } else if (value < currentNode.value){
        if (currentNode.left === null) return this._leftInsert(value, currentNode);

        currentNode = currentNode.left;
        continue
      
      } else {
        throw "Value already exists" 
      }
    }
  }

  lookup(value){
    let currentNode = this.root;
    while(currentNode) {
      if (value > currentNode.value){        
        currentNode = currentNode.right;
        continue

      } else if (value < currentNode.value){
        currentNode = currentNode.left;
        continue
      
      } else {
        return currentNode;
      }
    }
    return null;
  }

  remove(value){}
}

myBST = new BinarySearchTree()
myBST.insert(10)
myBST.insert(20)
myBST.insert(15)
myBST.insert(30)
myBST.insert("04")
myBST.insert("08")
myBST.insert("02")


let val = myBST.lookup(4);
console.log(val)
// BinaryTreeNode {
//   left: BinaryTreeNode { left: null, right: null, value: '02' },
//   right: BinaryTreeNode { left: null, right: null, value: '08' },
//   value: '04'
// }

printPrettyTree(myBST.root);
//       10              
//   04      20      
// 02  08  15  30  


function printPrettyTree(node) {

  function genHash(node, depth){
    if (!node) throw "Tree empty"
    if (depth === undefined) depth = 0;
    if (hash["maxDepth"] < depth) hash["maxDepth"] = depth;
  
    if (hash[depth] === undefined) hash[depth] = [];
    hash[depth].push(node.value);
  
    if (node.left !== null) genHash(node.left, depth + 1)
    if (node.right !== null) genHash(node.right, depth + 1)
  }

  function genLineStringFromArray(line, depth) {
    relativeDepth = hash["maxDepth"] - depth;

    precedingSpace = block.repeat(2**(relativeDepth) - 1);
    spaceBetweenElements = block.repeat(2**(relativeDepth + 1) - 1);

    lineString = precedingSpace;
    for ( let i = 0; i < line.length; i++) {
      lineString += (line[i] + spaceBetweenElements);
    }
    return lineString;
  }

  function genTreeStringFromHash(hash) {
    tree = "";
    for ( let depth = 0; depth <= hash["maxDepth"]; depth++){
      line = genLineStringFromArray(hash[depth], depth);
      tree += (line + "\n");
    }
    return tree;
  }
  
  let hash = {
    "maxDepth": 0
  }

  // block must have the same number of characters as the largest number.
  block = "  "
  
  genHash(node);
  prettyTreeString = genTreeStringFromHash(hash);

  console.log(prettyTreeString);
}
