class HashMap {
    constructor() {
        this.buckets = new Array(7)
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
        this.buckets[index] = value
    }

    get(key) {
        let index = this.hashcode(key)
        return this.buckets[index]
    }

    remove(key) {
        let index = this.hashcode(key)
        this.buckets[index] = null
    }
}

let map = new HashMap()
map.put("Washington", 7.4)
map.put("Hawaii", 1.4)
map.put("Arizona", 1)

console.log(map.get("Washington"))
console.log(map.get("Oregon"))
console.log(map.get("Idaho"))
console.log(map.get("New York"))
console.log(map.get("California"))
console.log(map.get("Alaska"))
console.log(map.get("Canada"))
console.log(map.get("Computer"))
console.log(map.get("Knife"))