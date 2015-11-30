var LinkedList = function() {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

var Node = function(data) {
  this.data = data;
  this.next = null;
};

LinkedList.prototype.append = function(data) {
  this.length++;
  var node = new Node(data);
  if(!this.head) {
    this.head = node;
  }
  else {
    this.tail.next = node;
  }
  this.tail = node;
};

LinkedList.prototype.prepend = function(data) {
  this.length++;
  var node = new Node(data);
  if(!this.head) {
    this.tail = node;
  } else {
    node.next = this.head;
  }
  this.head = node;
};

LinkedList.prototype.insert = function(data, position) {
  this.length++;
  var node = new Node(data);
  if(!this.head) {
    this.head = node;
    this.tail = node;
  }
  else if(position <= 0) {
    node.next = this.head;
    this.head = node;
  }
  else {
    if(position === this.length) {
      this.tail.next = node;
      this.tail = node;
    }
    else {
      var current = this.head;
      var counter = 0;
      while(counter < position && current.next) {
        current = current.next;
        counter++;
      }
      node.next = current.next;
      current.next = node;
    }
  }
  return this.toArray();
};

LinkedList.prototype.delete = function(position) {
  if(position < 0 || position > this.length - 1 || this.length === 0) return false;
  this.length--;
  var current = this.head;
  var counter = 0;
  if(current.next) {
    if(position === 0) {
      this.head = current.next;
    } else {
      while(counter < position) {
        counter++;
        if(counter === position && current.next.next) {
          current.next = current.next.next;
        } else {
          current.next = null;
        }
      }
    }
  }
  else {
    this.head = null;
    this.tail = null;
  }
  return this.toArray();
};

LinkedList.prototype.toArray = function() {
  var resultArray = [];
  var current = this.head;
  if(!this.head) return [];
  while(current.next) {
    resultArray.push(current.data);
    current = current.next;
  }
  resultArray.push(current.data);
  return resultArray;
};

LinkedList.prototype.toString = function() {
  var resultString = '';
  var current = this.head;
  while(current.next) {
    resultString += current.data + ', ';
    current = current.next;
  }
  resultString += current.data;
  return resultString;
};

LinkedList.prototype.getLength = function() {
  return this.length;
};

//toArray, delete, toString, insert, getLength, get,
//pop (remove and return the tail), shift (remove and return the head)
