var Stack = function() {
  this.top = null;
};

var Node = function(val) {
  this.val = val;
  this.next = null;
};

Stack.prototype.push = function(item) {
  if(!item) return null;
  var node = new Node(item);
  if(this.top) node.next = this.top;
  this.top = node;
};

Stack.prototype.pop = function() {
  var currentTop = this.top;
  this.top = this.top.next;
  currentTop.next = null;
  return currentTop;
};

Stack.prototype.peek = function() {
  return this.top;
};

Stack.prototype.isEmpty = function() {
  if(!this.top) return true;
  return false;
};
