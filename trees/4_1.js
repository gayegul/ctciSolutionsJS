//Depth first search
Graph.prototype.isReachable = function(vertex, toVertex, seen) {
  seen = seen || {};
  var result = false;
  for(var i = 0; i < vertex.from.length; i++) {
    if(vertex.from[i] === toVertex) return true;
    else if(!seen[vertex.from[i]]) {
      seen[vertex.from[i]] = true;
      result = this.isReachable(vertex.from[i], toVertex, seen);
      if(result) return true;
    }
  }
  return result;
};

//Breadth first search
Graph.prototype.isReachable = function(vertex, toVertex) {
  var seen = {};
  var queue = [];
  var item;
  if(vertex.from.length === 0 || vertex === toVertex) return false;
  while(true) {
    for(var i = 0; i < vertex.from.length; i++) {
      queue.push(vertex.from[i]);
    }
    item = queue.shift();
    if(item.name === toVertex.name) return true;
    else if(seen[item.name]) return false;
    else if(!seen[item.name]) seen[item.name] = true;
    vertex = item;
  }
  return false;
};

//TODO
//Breadth first without a hashtable, using colors or such
