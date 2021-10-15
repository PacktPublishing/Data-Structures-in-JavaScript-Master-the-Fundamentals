
function largestProduct(aa) {
    let largest = aa[0][0] * aa[0][1];
    let row1 = 0;
    let col1 = 0;
    let row2 = 0;
    let col2 = 1;

    // returns the value of the element in a 2d array
    // for the given row and column. Or, returns a default
    // value if the row or column is out of bounds (returns zero).
    function getCell(aa, row, col) {
        if (row < 0 || col < 0) {
            return 0
        }
        if (row >= aa.length) {
            return 0
        }
        if (col >= aa[row].length) {
            return 0
        }
        return aa[row][col]
    }

    function updateLargest(r1, c1, r2, c2) {
        let value = getCell(aa, r1, c1);
        let other = getCell(aa, r2, c2);
        if (value * other > largest) {
            largest = value * other;
            row1 = r1;
            col1 = c1;
            row2 = r2;
            col2 = c2;
        }
    }

    for (let row = 0; row < aa.length; row++) {
        for (let col = 0; col < aa[row].length; col++) {
            updateLargest(row, col, row, col - 1) // left
            updateLargest(row, col, row, col + 1) // right
            updateLargest(row, col, row - 1, col) // top
            updateLargest(row, col, row + 1, col) // bottom
        }
    }
    console.log(aa[row1][col1], '*', aa[row2][col2], '=', largest)
    return largest
}


let aa = [
    [32, 45, 67, 99],
    [93, 34, 88, 12],
    [32, 76, 22, 74],
    [77, 33, 88, 99],
]
console.log(largestProduct(aa))