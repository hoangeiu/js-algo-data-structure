class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v != vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v != vertex1
    );
  }

  removeVertex(vertex) {
    for (const v of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, v);
    }
    delete this.adjacencyList[vertex];
  }

  DFS_Recursive(vertex) {
    let result = [];
    let visited = {};
    const adjacencyList = this.adjacencyList;

    (function DFS(v) {
      if (!v) return null;
      result.push(v);
      visited[v] = true;
      adjacencyList[v].forEach((neighbor) => {
        if (!visited[neighbor]) return DFS(neighbor);
      });
    })(vertex);

    return result;
  }

  DFS_Iterative(vertex) {
    const stack = [vertex];
    const result = [];
    const visited = {};

    while (stack.length) {
      const v = stack.pop();
      if (!visited[v]) {
        result.push(v);
        visited[v] = true;

        this.adjacencyList[v].forEach((neighbor) => stack.push(neighbor));
      }
    }

    return result;
  }

  BFS(vertex) {
    const queue = [vertex];
    const visited = {};
    const result = [];

    while (queue.length) {
      const v = queue.shift();
      if (!visited[v]) {
        result.push(v);
        visited[v] = true;

        this.adjacencyList[v].forEach((neighbor) => queue.push(neighbor));
      }
    }

    return result;
  }
}

var graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("B", "D");
graph.addEdge("A", "C");
graph.addEdge("E", "C");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("F", "E");

// graph.removeEdge("B", "D");
// graph.removeEdge("F", "D");

// graph.removeVertex("D");

console.log(graph.DFS_Recursive("A"));

console.log(graph.DFS_Iterative("A"));

console.log(graph.BFS("A"));

console.log(graph.adjacencyList);
