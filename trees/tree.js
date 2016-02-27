//Binary Search Tree
var Tree = function() {
  this.root = null;
};

//Node
var Node = function(val) {
  this.val = val;
  this.left = this.right = null;
};

//Add iteratively
Tree.prototype.addNode = function(val) {
  var node = new Node(val);
  var current = this.root;
  if(!current) {
    this.root = node;
  } else {
    while(true) {
      if(val <= current.val && !current.left) {
        current.left = node;
        return;
      }
      else if(val > current.val && !current.right) {
        current.right = node;
        return;
      }
      else if(val <= current.val && current.left) {
        current = current.left;
      }
      else {
        current = current.right;
      }
    }
  }
  return this;
};

//Add recursively
Tree.prototype.addNodeRecursively = function(val, current) {
  if(!this.root) {
    this.root = new Node(val);
    return this;
  }
  if(!current) current = this.root;
  if(val <= current.val) {
    if(current.left) {
      current = current.left;
      this.addNodeRecursively(val, current);
    } else {
      current.left = new Node(val);
    }
  } else {
    if(current.right) {
      current = current.right;
      this.addNodeRecursively(val, current);
    } else {
      current.right = new Node(val);
    }
  }
  return this;
};

//Tree lookup
Tree.prototype.lookup = function(val) {
  var current = this.root;
  while(current) {
    if(current.val === val) return true;
    else if(val <= current.val) current = current.left;
    else current = current.right;
  }
  return false;
};

// Find min
Tree.prototype.findMin = function() {
  return findMinUnder(this.root);
};

function findMinUnder(node) {
  if(!node) return null;
  var current = node;
  while(current.left) {
    current = current.left;
  }
  return current;
}

//Find max
Tree.prototype.findMax = function() {
  return findMaxUnder(this.root);
};

function findMaxUnder(node) {
  if(!node) return null;
  var parent = node;
  var current = node;
  while(current.right) {
    current = current.right;
  }
  return current;
}
