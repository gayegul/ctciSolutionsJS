//A basic stack implementation
var Stack = function() {
  this.top = null;
  this.size = 0;
};

var Node = function(val) {
  this.val = val;
  this.next = null;
};

Stack.prototype.push = function(val) {
  if(!val) return null;
  var node = new Node(val);
  if(this.top !== null) node.next = this.top;
  this.top = node;
  return ++this.size;
};

Stack.prototype.pop = function() {
  if(!this.size) return null;
  var popped = this.top;
  if(this.top.next) this.top = this.top.next;
  else this.top = null;
  if(!popped) popped.next = null;
  this.size--;
  return popped.val;
};

Stack.prototype.peek = function() {
  return !this.isEmpty() ? this.top.val : null;
};

Stack.prototype.isEmpty = function() {
  return !this.top;
};

//A max stack implementation
function MaxStack() {
  this.stack = new Stack();
  this.maxStack = new Stack();
}

MaxStack.prototype.push = function(val) {
  if(!val) return null;
  this.stack.push(val);
  if(this.maxStack.isEmpty()) {
    this.maxStack.push(val);
  } else {
    if(val >= this.maxStack.peek()) this.maxStack.push(val);
  }
  return this.stack.size;
};

MaxStack.prototype.pop = function() {
  if(this.stack.isEmpty()) return null;
  var poppedFromStack = this.stack.pop();
  if(poppedFromStack === this.maxStack.peek()) this.maxStack.pop();
  return poppedFromStack;
};

MaxStack.prototype.peek = function() {
  return this.stack.isEmpty() ? null : this.stack.top.val;
};

MaxStack.prototype.isEmpty = function() {
  return !this.stack.top;
};

MaxStack.prototype.max = function() {
  return this.stack.isEmpty() ? null : this.maxStack.top.val;
};
