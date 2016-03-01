var Stack = function() {
  this.top = null;
  this.min = [];
};

var Node = function(val) {
  this.val = val;
  this.next = null;
};

Stack.prototype.minStack = function() {
  return this.min[this.min.length - 1];
};

Stack.prototype.push = function(item) {
  if(!item) return null;
  var node = new Node(item);
  if(this.top) node.next = this.top;
  this.top = node;
  if(!this.min.length || item <= this.min[this.min.length - 1]) this.min.push(item);
};

Stack.prototype.pop = function() {
  var currentTop = this.top;
  this.top = this.top.next;
  currentTop.next = null;
  if(this.min[this.min.length - 1] === currentTop.val) this.min.pop();
  return currentTop;
};

var stack = new Stack();
stack.push(4);
stack.push(3);
stack.push(2);
stack.push(1);
