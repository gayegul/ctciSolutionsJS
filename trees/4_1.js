//Breadth First Search
Graph.prototype.isReachable = function(vertex, toVertex) {
  var queue = [vertex];
  var currentVertex;

  //clear vertex.seen property from the previous invocation for all
  for(var i = 0; i < this.vertexList.length; i++) {
    this.vertexList[i].seen = false;
  }

  while(queue.length) {
    currentVertex = queue.shift();
    if(currentVertex === toVertex) return true;
    else if(currentVertex.seen === true) continue;
    else if(!currentVertex.seen) vertex.seen = true;
    for(var j = 0; j < currentVertex.from.length; j++) {
      queue.push(currentVertex.from[j]);
    }
  }
  return false;
};
