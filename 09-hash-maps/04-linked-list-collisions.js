class ListNode {
    constructor(data, next=null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    prepend(value) {
        let node = new ListNode(value, this.root)
        this.root = node
    }
}

class HashMap {
    constructor() {
        this.buckets = new Array(7)

        // explicitly set the buckets to null 
        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = new LinkedList()
        }
    }

    // takes a string and returns the sum of all letters
    // in the string where each letter has some number value
    // q=0, w=1... (it could be anything really)
    hash(str) {
        str = str.toLowerCase();

        const ALPHABET = "qwertyuiopasdfghjklzxcvbnm"
        let sum = 0
        for (let i = 0; i < str.length; i++) {
            sum += ALPHABET.indexOf(str.charAt(i))
        }
        return sum
    }

    hashcode(key) {
        let index = this.hash(key) % this.buckets.length
        console.log("key:", key, "index:", index)
        return index
    }

    put(key, value) {
        let index = this.hashcode(key)
        this.buckets[index].prepend({key, value})
    }

    get(key) {
        let index = this.hashcode(key)
        let list = this.buckets[index]

        let current = list.root
        while (current !== null) {
            if (current.data.key === key) {
                return current.data.value
            }
            current = current.next
        }
    }
}

let map = new HashMap()
map.put("Washington", 7.4)
map.put("Hawaii", 1.4)
map.put("Arizona", 1)

console.log(map.buckets)

console.log(map.put("Alaska", .739))
console.log(map.put("Computer", 12.8))
console.log(map.buckets)

console.log(map.get("Alaska"))
console.log(map.get("Computer"))