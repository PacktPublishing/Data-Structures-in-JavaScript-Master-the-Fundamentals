class List {
    constructor() {
        this.data = new Array(10)
        this.size = 0
    }

    // a simple method that returns the value at the specified index
    // if the index is within the valid range of elements in the list.
    // returns null if someone tries to access an index out of range
    // of the list.
    get(index) {
        if (index < this.size) {
            return this.data[index]
        }
        return null
    }

    // overwrites the value at the specified index,
    // and the index must be within a valid range of the current size of the list.
    set(index, value) {
        if (index >= 0 && index < this.size) {
            this.data[index] = value
        }
    }

    // add the value to the first-most free position
    // in the data array
    push(value) {
        if (this.size === this.data.length) {
            this.grow()
        }

        this.data[this.size] = value
        this.size++
    }

    // remove(index=1)
    // aa = [5, 8, 12, 13, 19]
    // removed = 8
    remove(removeIndex) {
        if (this.size === 0) {
            return null;
        }

        // save the value that was at the index
        let removed = this.data[removeIndex]
        // scoot all values after over left by one
        for (let i = removeIndex; i < this.size - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        // manually overwrite the now-stale data
        this.data[this.size - 1] = null

        // decrement the size to show one item was removed
        this.size--
        // return the value of the removed item
        return removed
    }

    grow() {
        // create a new array that's twice as big
        let aa = new Array(this.data.length * 2)
        // copy over every value from the old data array to the larger array
        for (let i = 0; i < this.data.length; i++) {
            aa[i] = this.data[i]
        }
        // set the larger area as the data for the list
        this.data = aa
    }

    add(index, value) {
        if (this.size === this.data.length) {
            this.grow()
        }

        for (let i = this.size; i > index; i--) {
            this.data[i] = this.data[i - 1]
        }
        this.data[index] = value
        this.size++
    }

    contains(value) {
        for (let i = 0; i < this.size; i++) {
            if (this.data[i] === value) {
                return true;
            }
        }
        return false;
    }

    toString() {
        if (this.size === 0) {
            return "[]"
        } else {
            let result = ""
            for (let i = 0; i < this.size; i++) {
                result += this.data[i] + " "
            }
            return "[" + result + "]"
        }
    }
}

const ll = new List()
ll.push(5)
ll.push(8)
ll.push(12)
ll.push(13)
ll.push(19)

const l2 = new List()
ll.push(23)
ll.push(24)
ll.push(25)

const l3 = ll.concat(l2)
console.log(l3.get(0) === 5)
console.log(l3.get(1) === 8)
console.log(l3.get(2) === 12)
console.log(l3.get(3) === 13)
console.log(l3.get(4) === 19)
console.log(l3.get(5) === 23)
console.log(l3.get(6) === 24)
console.log(l3.get(7) === 25)