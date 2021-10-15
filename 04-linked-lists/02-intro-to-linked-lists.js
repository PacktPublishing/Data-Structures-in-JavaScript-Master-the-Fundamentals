class ListNode {
    constructor(data, next=null) {
        this.data = data
        this.next = next
    }
}

// the "for-loop" for linked lists
function printList(node) {
    let current = node
    while (current != null) {
        console.log(current.data)
        current = current.next
    }
}

// accepts a node at the front of a list
// and returns the total sum of all values
function sumList(node) {
    let current = node
    let total = 0
    while (current != null) {
        total += current.data
        current = current.next
    }
    return total
}

let n1 = new ListNode(4)
let n2 = new ListNode(7)
let n3 = new ListNode(8)

n1.next = n2
n2.next = n3

printList(n1)
console.log(sumList(n1))