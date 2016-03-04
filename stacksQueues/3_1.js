//Implementation of an array made of stacks

function StackArray(arrLen) {
  this.stack1 = new Stack();
  this.stack2 = new Stack();
  this.stack3 = new Stack();
  this.array = [this.stack1, this.stack2, this.stack3];
  this.length = arrLen;
}

StackArray.prototype.push = function(val) {
  if(!val) return null;
  var len = Math.floor(this.length / 3);
  if(this.stack1.size < len) return this.stack1.push(val);
  else if(this.stack2.size < len) return this.stack2.push(val);
  else if(this.stack3.size < this.length - 2 * len) return this.stack3.push(val);
  else return 'Array is full.';
};

StackArray.prototype.pop = function() {
  if(this.stack1.isEmpty()) return null;
  else if(!this.stack3.isEmpty()) return this.stack3.pop();
  else if(!this.stack2.isEmpty()) return this.stack2.pop();
  else return this.stack1.pop();
};
