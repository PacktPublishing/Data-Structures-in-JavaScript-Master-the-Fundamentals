function randomArray(max, size) {
    let result = new Array(size);
    for (let i = 0; i < size; i++) {
        let random = Math.floor(max * Math.random());
        result[i] = random;
    }
    return result;
}

function tallySort(aa) {
    // find min number
    // find max number
    // create an array to tally occurences of each number
    // between min and max
    // return an array that fills out the array according to
    // the tally as if the original array were sorted.
}

let aa = randomArray(100, 10)
tallySort(aa)
