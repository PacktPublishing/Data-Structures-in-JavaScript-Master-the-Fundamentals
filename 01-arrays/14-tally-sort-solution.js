function randomArray(max, size) {
    let result = new Array(size);
    for (let i = 0; i < size; i++) {
        let random = Math.floor(max * Math.random());
        result[i] = random;
    }
    return result;
}

function tallySort(aa) {
    // find the max number in the array
    let max = aa[0];
    for (let i = 0; i < aa.length; i++) {
        max = Math.max(max, aa[i]);
    }

    // tally all the numbers
    let tally = new Array(max);
    for (let i = 0; i < aa.length; i++) {
        // look at the number in the array
        let value = aa[i];

        // use the value of the number as an index into the tally array
        // see if anything is defined there to determine if we've started
        // tallying this number yet.
        if (tally[value] === undefined) {
            // set it to zero occurences if we've not seen the number yet
            tally[value] = 0
        }
        // increment how many times we've seen that number.
        tally[value]++
    }

    console.log('tally:', tally)
    let result = new Array(aa.length);
    let index = 0;
    for (let i = 0; i < tally.length; i++) {
        let occurences = tally[i]
        let n = 0;
        while (n < occurences) {
            result[index] = i;
            index++;
            n++;
        }
    }
    return result;
}

let aa = randomArray(3, 10)
console.log(aa)
let bb = tallySort(aa)
console.log(bb)
