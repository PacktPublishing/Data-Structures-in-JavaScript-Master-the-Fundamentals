class ArrayList {
    constructor() {
        this.data = new Array(20);
        this.size = 0;
    }

    // O(1) constant time
    // this function always takes a constant amount of time to run
    // no matter how many things are in the array
    size() {
        return this.size
    }

    // O(1) constant time 
    // it always takes the same constant amount of time to append
    // just to the end of the arrray
    append(value) {
        this.data[this.size] = value
        this.size++
    }

    // O(N) linear time 
    // this function will take more time directly proportional to the amount
    // of items in the array.
    removeAtIndex(index) {
        for (let i = index; i < this.size - 1; i++) {
            // shift values left to replace the index that was removed
            this.data[i] = this.data[i + 1]
        }
        this.data[this.size - 1] = null
        this.size--
    }

    // O(N^2) quadratic time
    // this function will take longer with a ratio of
    // N^2 amount of time per N items in the array
    // return true or false depending on if there's any duplicate value in the array
    containsDuplicates() {
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                // two identical values appear at different positions in the array
                if (i !== j && this.data[i] === this.data[j]) {
                    return true
                }
            }
        }
        return false
    }
}