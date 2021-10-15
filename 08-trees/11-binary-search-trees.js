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

console.log(tree.collect())