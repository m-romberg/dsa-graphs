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
  // depthFirstSearch(start) {
  //   // add node to stack array
  //   // add all of that nodes adjacents to the stack
  //   // track nodes we've seen
  //   //

  //   let toVisitStack = [start];
  //   let seen = new Set();

  //   while (toVisitStack.length > 0) {
  //     // console.log('this is the stack', toVisitStack)
  //     let currentNode = toVisitStack.pop();
  //     seen.add(currentNode.value);
  //     for (let adj of currentNode.adjacent) {
  //       if (!seen.has(adj.value)) {
  //         toVisitStack.push(adj);
  //       }
  //     }
  //   }

  //   return Array.from(seen);
  // }

  /** traverse graph recursively with DFS and returns array of Node values */
  depthFirstSearch(start, seen=new Set(), values=new Set()) {
    values.add(start.value)

    for (let child of start.adjacent) {
      if (!seen.has(start)) {
        seen.add(start);
        // console.log('seen', seen)
        values.add(this.depthFirstSearch(child, seen=seen, values=values))
      }
    }
    // console.log('values', values)
    return Array.from(values);
  }

  breadthFirstSearch(start, seen=new Set(), values=new Set(start.value)) {
    console.log("values=", values);

    for (let child of start.adjacent) {
      if (!seen.has(child)){
        values.add(child.value);
      }
    }
    for (let child of start.adjacent) {
      if (!seen.has(start)) {
        seen.add(start);
        console.log('seen', seen)
        values.add(...Array.from(this.breadthFirstSearch(child, seen=seen, values=values)))
      }
    }
    console.log('values', values)
    return Array.from(values);
  }

  /** traverse graph with BDS and returns array of Node values */
  // breadthFirstSearch(start) {
  //   let toVisitQueue = [start];
  //   let seen = new Set();

  //   while(toVisitQueue.length > 0){
  //     let currentNode = toVisitQueue.shift();
  //     seen.add(currentNode.value);
  //     for (let adj of currentNode.adjacent){
  //       if(!seen.has(adj.value)){
  //         toVisitQueue.push(adj);
  //       }
  //     }
  //   }
  //   return Array.from(seen);
  // }

  /** find the distance of the shortest path from the start vertex to the end vertex */
//   distanceOfShortestPath(start, end, distance=0) {
//     //              A
//     //            /   \
//     //          B       C
//     //            \   /
//     //              D
//     //


//     //
//     //            R
//     //         /  |  \
//     //        I - T - H
//     //                |
//     //                M



//   /** traverse graph recusively with BDS and returns array of Node values */
}

module.exports = { Graph, Node }

// for(let child of start.adjacent){
  //   // console.log('start', start, 'child', child)
  //   if (child === end){
    //     seen.add(child);
    //     paths.push(1);
    //   } else if (!seen.has(child)) {
      //     seen.add(child);
      //     console.log('seen', seen)
      //     let distance = this.distanceOfShortestPath(child,end);
      //     if (distance !== undefined) {
        //       paths.push(1 + distance);
        //     }
        //   } else if (child === start) {
          //     return undefined
          //   }
          // }

          // for (let child of start.adjacent){
            //   if (!seen.has(child)){
              //     seen.add(child);
              //     paths.push(1 + this.distanceOfShortestPath(child, end));
              //   }
              // }
    //     if (!this.nodes.has(start) || !this.nodes.has(end)){
    //       return undefined;
    //     }

    //     if (start === end) {
    //       return 0;
    //     }

    //     let paths = [];
    //     let seen = new Set ();
    //     seen.add(start);


    //     for (let child of start.adjacent) {
    //       if (distance !== undefined) {
    //         seen.add(child);
    //         paths.push(1 + this.distanceOfShortestPath(child, end));
    //       }
    //     }
    //     return Math.min(...paths);
    //   }