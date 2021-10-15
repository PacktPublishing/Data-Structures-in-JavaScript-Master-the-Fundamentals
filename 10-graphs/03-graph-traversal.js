class Graph {
    constructor() {
        this.edges = {}
    }

    addNode(node) {
        if (!this.edges[node]) {
            this.edges[node] = []
        }
    }

    addBidirectionalEdge(n1, n2) {
        this.addEdge(n1, n2)
        this.addEdge(n2, n1)
    }

    addEdge(start, end) {
        this.edges[start].push(end)
    }

    getNeighbors(start) {
        return this.edges[start]
    }
}

const gg = new Graph()
gg.addNode("Washington")
gg.addNode("Oregon")
gg.addNode("Idaho")
gg.addNode("Nevada")
gg.addNode("California")

gg.addBidirectionalEdge("Washington", "Oregon")
gg.addBidirectionalEdge("Washington", "Idaho")
gg.addBidirectionalEdge("Oregon", "Idaho")
gg.addBidirectionalEdge("Oregon", "California")
gg.addBidirectionalEdge("Oregon", "Nevada")
gg.addBidirectionalEdge("Idaho", "Nevada")
gg.addBidirectionalEdge("California", "Nevada")

console.log("WA", gg.getNeighbors("Washington"))
console.log("OR", gg.getNeighbors("Oregon"))
console.log("ID", gg.getNeighbors("Idaho"))
console.log("CA", gg.getNeighbors("California"))
console.log("NV", gg.getNeighbors("Nevada"))

function breadthFirstTraversal() {
    // pick a node to start with and add it to a queue
    let qq = ["Washington"]
    // keep track of nodes we've visited
    let visited = {}

    while (qq.length > 0) {
        // dequeue one node at a time
        let node = qq.shift()
        console.log(node)

        // mark it as visited
        visited[node] = true

        // get it's neighbors and add them to the queue
        // only adding nodes that haven't been visited
        for (let neighbor of gg.getNeighbors(node)) {
            if (!visited[neighbor]) {
                qq.push(neighbor)
                // mark it as visited
                visited[neighbor] = true
            }
        }
    }
}

function depthFirstTraversal() {
    // pick a node to start with and add it to a queue
    let qq = ["Washington"]
    // keep track of nodes we've visited
    let visited = {}

    while (qq.length > 0) {
        // dequeue one node at a time
        let node = qq.pop()
        console.log(node)

        // mark it as visited
        visited[node] = true

        // get it's neighbors and add them to the queue
        // only adding nodes that haven't been visited
        for (let neighbor of gg.getNeighbors(node)) {
            if (!visited[neighbor]) {
                qq.push(neighbor)
                // mark it as visited
                visited[neighbor] = true
            }
        }
    }
}

console.log("Breadth-first:")
breadthFirstTraversal();
console.log()
console.log("Depth-first:")
depthFirstTraversal();