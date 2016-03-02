var Queue = function() {
  this.first = null;
  this.last = null;
};

var Animal = function(type, name) {
  this.type = type;
  this.name = name;
  this.next = null;
};

var Shelter = function() {
  this.count = 0;
  this.cats = new Queue();
  this.dogs = new Queue();
};

Shelter.prototype.adopt = function(type) {
  if(!this.cats.first && !this.dogs.first) return null;
  if(!type) {
    if(!this.cats.first) type = 'dog';
    else if(!this.dogs.first) type = 'cat';
    else type = this.cats.first.num > this.dogs.first.num ? 'dog' : 'cat';
  }
  if(type === 'cat') {
    return this.cats.remove();
  }
  return this.dogs.remove();
};

Shelter.prototype.add = function(type, name) {
  if(type === 'cat') {
    this.cats.add(type, name);
    this.count++;
    this.cats.last.num = this.count;
  }
  else if(type === 'dog') {
    this.dogs.add(type, name);
    this.count++;
    this.dogs.last.num = this.count;
  }
  else return false;
};


Queue.prototype.add = function(type, name) {
  if(type !== 'cat' && type !== 'dog') return false;
  var animal = new Animal(type, name);
  if(!this.first) {
    this.first = animal;
  } else {
    this.last.next = animal;
  }
  this.last = animal;
};

Queue.prototype.remove = function() {
  if(!this.first) return null;
  var result = this.first.name;
  this.first = this.first.next;
  if(!this.first) this.last = null;
  return result;
};

Queue.prototype.peek = function() {
  return this.first.name;
};

Queue.prototype.isEmpty = function() {
  if(!this.first) return true;
  else return false;
};

var shelter = new Shelter();
shelter.add('cat', 'num1');
shelter.add('cat', 'num2');
shelter.add('dog', 'num3');
shelter.add('cat', 'num4');
