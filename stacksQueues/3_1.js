//Implementation of an array acting as 3 stacks
var ArrayStack = function() {
  this.values = [];
  this.first = [];
  this.second = [];
  this.third = [];
};

ArrayStack.prototype.pop = function(stackNum) {
  if(!this.values.length) return null;
  else if(stackNum > 3 || stackNum < 1) return null;
  var chosenStack;
  var popped;
  if(!stackNum) {
    chosenStack = mostFullStack(this);
    popped = chosenStack.pop();
  }
  else {
    if(stackNum === 1 && this.first.length) popped = this.first.pop();
    else if(stackNum === 1 && !this.first.length) return null;
    if(stackNum === 2 && this.second.length) popped = this.second.pop();
    else if(stackNum === 2 && !this.second.length) return null;
    if(stackNum === 3 && this.third.length) popped = this.third.pop();
    else if(stackNum === 3 && !this.third.length) return null;
  }
  var index = this.values.indexOf(popped);
  this.values.splice(index, 1);
  return popped;
};

function mostFullStack(obj) {
  var first = obj.first.length;
  var second = obj.second.length;
  var third = obj.third.length;

  if(first > second && first > third) return obj.first;
  else if(second > first && second > third) return obj.second;
  else if(third > second && third > first) return obj.third;
  else {
    if(third) return obj.third;
    else if(second) return obj.second;
    else return obj.first;
  }
}


ArrayStack.prototype.push = function(val, stackNum) {
  if(!val || stackNum > 3 || stackNum < 1) return null;
  var chosenStack;
  if(stackNum === undefined || !this.values.length) chosenStack = leastFullStack(this);
  else chosenStack = convertInputToStackNum(this, stackNum);
  chosenStack.push(val);
  this.values.push(val);
};

function leastFullStack(obj) {
  var first = obj.first.length;
  var second = obj.second.length;
  var third = obj.third.length;

  if(!obj.values.length) return obj.first;
  else if(first && !second) return obj.second;
  else if(second && !third) return obj.third;

  if(first < second && first < third) return obj.first;
  else if(second < first && second < third) return obj.second;
  else if(third < second && third < first) return obj.third;
  else return obj.first;
}

function convertInputToStackNum(obj, num) {
  if(num === 1) return obj.first;
  else if(num === 2) return obj.second;
  else return obj.third;
}
