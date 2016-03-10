var Queue = function() {
  this.stacks = [];
};

Queue.prototype.push = function(item) {
  if(!this.stacks.length) {
    this.stacks.push(new Stack());
    this.stacks.push(new Stack());
  }
  this.stacks[1].push(item);
  console.log(this.stacks[1].top.val);
};

Queue.prototype.pop = function() {
  if(!this.stacks[0].length && !this.stacks[1].length) return null;
  if(this.stacks[0].length) return this.stacks[0].pop();
  while(this.stacks[1].length) {
    var transfer = this.stacks[1].pop().val;
    this.stacks[0].push(transfer);
  }
  return this.stacks[0].pop();
};

var Node = function(val) {
  this.val = val;
  this.next = null;
};

var Stack = function() {
  this.top = null;
  this.length = 0;
};

Stack.prototype.push = function(item) {
  if(!item) return null;
  var node = new Node(item);
  if(this.top) node.next = this.top;
  this.top = node;
  this.length++;
};

Stack.prototype.pop = function() {
  this.length--;
  var currentTop = this.top;
  this.top = this.top.next;
  currentTop.next = null;
  return currentTop;
};
