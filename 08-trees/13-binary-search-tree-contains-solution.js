class TreeNode {
    constructor(data, left=null, right=null) {
        this.data = data
        this.left = left
        this.right = right
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    // add a value to the tree while maintaining the sortedness of
    // the tree so lesser values are always hung left on a node
    // and greater values are always hung right on a node
    add(value) {
        if (this.root === null) {
            this.root = new TreeNode(value)
        } else {
            this._add(this.root, value)
        }
    }

    _add(node, value) {
        if (value < node.data && node.left === null) {
            node.left = new TreeNode(value)
        } else if (value > node.data && node.right === null) {
            node.right = new TreeNode(value)
        } else if (value < node.data) {
            this._add(node.left, value)
        } else {
            this._add(node.right, value)
        }
    }

    collect() {
        return this._collect(this.root, [])
    }

    _collect(node, result) {
        if (node === null) {
            return result
        }

        result.push(node.data)
        this._collect(node.left, result)
        this._collect(node.right, result)
        return result
    }

    // Write a function called contains that takes a value
    // and returns true or false if the value is in the tree.
    // Write the function so it takes advantage of the structure
    // of the Binary Search Tree. This function should execute
    // in O(log2 N) time. Do not simply write a function that
    // checks every node. Force the function to check in the
    // direction that nodes should be. Return false if you
    // ever move in a direction and there is no node there
    // where you would expect the value to be.
    contains(value) {
        return this._contains(this.root, value)
    }

    _contains(node, value) {
        if (node === null) {
            return false
        }
        if (node.data === value) {
            return true
        }
        if (value < node.data) {
            console.log("searching left")
            return this._contains(node.left, value)
        }
        if (value > node.data) {
            console.log("searching right")
            return this._contains(node.right, value)
        }
    }
}

let tree = new BinarySearchTree()
tree.add(52)
tree.add(45)
tree.add(42)
tree.add(49)
tree.add(65)
tree.add(54)
tree.add(55)
tree.add(70)
tree.add(90)
tree.add(89)

let t2 = new BinarySearchTree();
for (let i = 0; i < 2000000; i++) {
    t2.add(Math.random())
}

let last = Math.random()
t2.add(last)
console.log(t2.contains(last))