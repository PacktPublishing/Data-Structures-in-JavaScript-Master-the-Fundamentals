class TreeNode {
    constructor(data, left=null, right=null) {
        this.data = data
        this.left = left
        this.right = right
    }
}

class Tree {
    constructor() {
        this.root = null
    }

    // visit every node in the tree and add each data
    // value to an array and return it
    collect() {
      return this._collect(this.root, [])
    }

    // the underscore here indicates people should not use this
    // function themselves. This "simulates" a private function
    // that should only be called from the Tree class itself.
    // People should use the "collect" function which calls this
    // one.
    _collect(current, nodes) {
        // base case: if there's no node just return the array
        if (current === null) {
            return nodes
        }
        // add the current node to the array
        nodes.push(current.data)

        // recurse left and right
        this._collect(current.left, nodes) 
        this._collect(current.right, nodes) 

        // return the array
        return nodes
    }

    // use a public/private function pair to iterate through
    // the entire tree visiting every node and totaling the
    // value of all the data properties. So: sum all the
    // .data values of every node. Hint: you won't need an
    // array like in the collect function.
    // Requirement: you MAY NOT use the .collect() function
    // to convert the tree into an array that you then iterate
    // through with a for loop. You must do the addition inside
    // your recursive function.
    // If the tree is empty you should return 0.
    // If there are no nodes you should return 0.
    sum() {
      return this._sum(this.root)
    }

    _sum(node) {
        if (node === null) {
            return 0
        }
        return node.data + 
            this._sum(node.left) +
            this._sum(node.right)
    }

    // returns true or false depending on if the tree contains
    // the given value.
    contains(value) {

    }
}

let n1 = new TreeNode(32);
let n2 = new TreeNode(92);
let n3 = new TreeNode(13);
let n4 = new TreeNode(44);
let n5 = new TreeNode(87);

let tree = new Tree();
tree.root = n1
n1.left = n2
n1.right = n3
n3.right = n4
n4.left = n5

console.log(tree.sum())