/** Node class for graph. */

class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}


/** Graph class. */

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  /** add Node instance and add it to nodes property on graph. */
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  /** add array of new Node instances and adds to them to nodes property. */
  addVertices(vertexArray) {
    for (const vertex of vertexArray){
      this.addVertex(vertex);
    }
   }

  /** add edge between vertices v1,v2 */
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  /** remove edge between vertices v1,v2 */
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  /** remove vertex from graph:
   *
   * - remove it from nodes property of graph
   * - update any adjacency lists using that vertex
   */
  removeVertex(vertex) {

    for (let v of vertex.adjacent) {
      v.adjacent.delete(vertex);
    }

    this.nodes.delete(vertex);
  }

  /** traverse graph with DFS and returns array of Node values */
  depthFirstSearch(start) {
    // add node to stack array
    // add all of that nodes adjacents to the stack
    // track nodes we've seen
    //

    let toVisitStack = [start];
    let seen = new Set();

    while (toVisitStack.length > 0) {
      console.log('this is the stack', toVisitStack)
      let currentNode = toVisitStack.pop();
      seen.add(currentNode.value);
      for (let adj of currentNode.adjacent) {
        if (!seen.has(adj.value)) {
          toVisitStack.push(adj);
        }
      }
    }

    return Array.from(seen);
  }

  /** traverse graph with BDS and returns array of Node values */
  breadthFirstSearch(start) {
    let toVisitQueue = [start];
    let seen = new Set();

    while(toVisitQueue.length > 0){
      let currentNode = toVisitQueue.shift();
      seen.add(currentNode.value);
      for (let adj of currentNode.adjacent){
        if(!seen.has(adj.value)){
          toVisitQueue.push(adj);
        }
      }
    }
    return Array.from(seen);
  }

  /** find the distance of the shortest path from the start vertex to the end vertex */
  distanceOfShortestPath(start, end) {
  //base case => currentNode = end
    //              A
    //            /   \
    //          B       C
    //            \   /
    //              D
    //
    if (!this.nodes.has(start) || !this.nodes.has(end)){
      return undefined;
    }
    let paths = [];
    let seen = new Set ();

    for( let child of start.adjacent){
      if (child === end){
        seen.add(child);
        return 1;
      }
    }
    for (let child of start.adjacent){
      if (!seen.has(child)){
        seen.add(child);
        paths.push(1 + this.distanceOfShortestPath(child, end));
      }
    }



    return Math.min(...paths);
  }

  /** traverse graph recursively with DFS and returns array of Node values */
  depthFirstSearchRecursive(start) { }

  /** traverse graph recusively with BDS and returns array of Node values */
  breadthFirstSearchRecursive(start) { }
}

module.exports = { Graph, Node }
