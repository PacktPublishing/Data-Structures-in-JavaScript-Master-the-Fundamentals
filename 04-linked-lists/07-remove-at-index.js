// this class represents each single node
// this class is extremely simple and just models the node
// this class DOES NOT have methods in it
class ListNode {
    constructor(data, next) {
        this.data = data
        this.next = next
    }
}

// this class represents an entire list of nodes
// this class has a property "root" that represents
// only the first node in the list
// this class has methods that operate over the entire list from just the root
class LinkedList {
    constructor() {
        this.root = null
        this.size = 0
    }

    // O(1) constant time
    // returns true or false if there are any nodes in the list
    isEmpty() {
        return this.root === null
    }

    // O(1) constant time
    // add a value to the front of the list
    prepend(data) {
        let node = new ListNode(data)
        node.next = this.root
        this.root = node

        this.size++
    }

    // O(N) linear time
    // returns a string representing the list
    toString() {
        let result = "root -> "
        let current = this.root
        while (current !== null) {
            result += current.data + " -> "
            current = current.next
        }
        return result + "null"
    }

    // O(N) linear time
    // return the size of the list
    length() {
        let current = this.root
        let count = 0
        while (current !== null) {
            count++
            current = current.next
        }
        return count
    }

    // O(N) linear time 
    get(index) {
        let current = this.root
        let count = 0
        while (current !== null) {
            if (count === index) {
                return current.data
            }
            count++
            current = current.next
        }
        return null
    }

    // O(N) linear time
    // we must move through the list to get to the element we want to remove
    removeAtIndex(index) {
        // prevent people from trying to remove nodes at non-existant indexes
        if (index < 0 || index >= this.size) {
            return;
        }

        if (index == 0) {
            this.removeFront();
        } else {
            this.removeRest(index)
        }
        this.size--
    }

    removeFront() {
        if (this.root !== null) {
            this.root = this.root.next
        }
    }

    removeRest(index) {
        let current = this.root
        let i = 0
        while (current !== null && i < index - 1) {
            i++
            current = current.next
        }
        current.next = current.next.next
    }
}

let list = new LinkedList()
console.log(list.toString())
console.log(list.length())
list.prepend(5)
list.prepend(4)
list.prepend(3)
list.prepend(2)
list.prepend(1)
console.log(list.toString())
console.log(list.length())

console.log("list @ 3 is:", list.get(3))
console.log()

let l2 = new LinkedList()
for (let i = 10; i >= 0; i--) {
    l2.prepend(i)
}

console.log("remove @ 7")
console.log(l2.toString())
l2.removeAtIndex(7)
console.log(l2.toString())
l2.removeAtIndex(0)
console.log(l2.toString())
l2.removeAtIndex(l2.size - 1)
console.log(l2.toString())
console.log()
