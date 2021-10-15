class QueueNode {
    constructor(data, next) {
        this.data = data
        this.next = next
    }
}

class Queue {
    constructor() {
        this.front = null
        this.tail = null
    }

    isEmpty() {
        return this.front === null
    }

    enqueue(value) {
        let node = new QueueNode(value)
        if (this.isEmpty()) {
            this.front = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return null
        }

        // get a reference to the node that was at the front of the list
        let result = this.front.data

        if (this.front === this.tail)  {
            // if there was just one node left then there's no more front or tail
            this.front = null
            this.tail = null
        } else {
            // otherwise, make the front equal to the second thing in the list
            this.front = this.front.next
        }

        return result
    }
}

let qq = new Queue()
qq.enqueue("A")
qq.enqueue("B")
qq.enqueue("C")
qq.enqueue("D")
qq.enqueue("E")

while (!qq.isEmpty()) {
    console.log(qq.dequeue())
}