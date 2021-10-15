class HashMap {
    constructor() {
        this.delta = 3
        this.maxProbes = 3
        this.buckets = new Array(7)

        // explicitly set the buckets to null 
        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = null
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

        // nothing was there. it's safe to place a value.
        if (this.buckets[index] === null) {
            this.buckets[index] = {key, value}
            return
        }

        // try to place it at a different bucket "delta"
        // indexes away. only do three attempts.
        let attempt = 0
        while (attempt < this.maxProbes) {
            console.log("put attempt", attempt)
            index = (index + this.delta) % this.buckets.length
            if (this.buckets[index] === null) {
                this.buckets[index] = {key, value}
                return
            }
            attempt++
        }
    }

    get(key) {
        let index = this.hashcode(key)

        let attempts = 0
        while (attempts < this.maxProbes) {
            console.log("get attempt", attempts)
            if (this.buckets[index] && this.buckets[index].key === key) {
                return this.buckets[index].value
            }
            index = (index + this.delta) % this.buckets.length
            attempts++
        }
    }

    remove(key) {
        let index = this.hashcode(key)

        let attempts = 0
        while (attempts < this.maxProbes) {
            if (this.buckets[index] && this.buckets[index].key === key) {
                return this.buckets[index] = null
            }
            index = (index + this.delta) % this.buckets.length
            attempts++
        }
    }
}

let map = new HashMap()
map.put("Washington", 7.4)
map.put("Hawaii", 1.4)
map.put("Arizona", 1)

console.log(map.buckets)

console.log(map.get("Washington"))
console.log(map.get("Oregon"))
console.log(map.get("Idaho"))
console.log(map.get("New York"))
console.log(map.get("California"))
console.log(map.get("Alaska"))
console.log(map.get("Canada"))
console.log(map.get("Computer"))
console.log(map.get("Knife"))
console.log()

console.log(map.put("Alaska", .739))
console.log(map.put("Computer", 12.8))
console.log(map.buckets)

console.log(map.get("Alaska"))
console.log(map.get("Computer"))