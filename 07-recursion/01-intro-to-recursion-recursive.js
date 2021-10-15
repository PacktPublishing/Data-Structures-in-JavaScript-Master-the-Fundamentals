function countDown(count) {
    console.log('time left:', count)
    if (count > 0) {
        countDown(count - 1)
    }
}

// this function will recursively print out
// all of the elements in the array starting
// at zero up to the end of the array.
// It won't use for loops or while loops.
// It will only use recursion.
function iterate(arr, index) {
    // base case
    if (index >= arr.length) {
        return
    } else {
        // recursive case
        console.log(arr[index])
        iterate(arr, index + 1)
    }
}

let aa = [23, 45, 78, 24, 8, 2, 45]
iterate(aa, 0)