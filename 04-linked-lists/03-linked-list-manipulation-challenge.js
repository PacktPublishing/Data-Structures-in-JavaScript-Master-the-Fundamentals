function printList(node) {
    let current = node
    let result = "root -> "
    while (current != null) {
        result += current.data + " -> "
        current = current.next
    }
    result += "null"
    console.log(result)
}

class ListNode {
    constructor(data, next) {
        this.data = data
        this.next = next
    }
}

// start: null
// end: 1 -> 2 -> 3
function problem1() {
    console.log("#1")
    let root = null;
    printList(root)

    // your solution here

    printList(root)
    console.log()
}

// start: 1 -> 2 -> 3
// end: 0 -> 1 -> 2 -> 3
function problem2() {
    console.log("#2")

    let root = new ListNode(1, new ListNode(2, new ListNode(3)))
    printList(root)

    // your solution here

    printList(root)
    console.log()
}

// start: 1 -> 3 -> 4
// end: 1 -> 2 -> 3 -> 4
function problem3() {
    console.log("#3")
    // there's only the root variable
    // nodes with data 3 and 4 do not have their own variables
    let root = new ListNode(1)
    root.next = new ListNode(3)
    root.next.next = new ListNode(4)

    printList(root)

    // your solution here

    printList(root)
    console.log()
}

// start: 1 -> 2 -> 3
// end: 1 -> 2 -> 3 -> 4
function problem4() {
    console.log("#4")

    let root = new ListNode(1, new ListNode(2, new ListNode(3)))
    printList(root)

    // your solution here

    printList(root)
    console.log()
}

// start: 1 -> 99 -> 2 -> 3
// end: 1 -> 2 -> 3
function problem5() {
    console.log("#5")

    let root = new ListNode(1, new ListNode(99, new ListNode(2, new ListNode(3))))
    printList(root)

    // your solution here

    printList(root)
    console.log()
}

problem1()
problem2()
problem3()
problem4()
problem5()
