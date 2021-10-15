let timesTable = [
    [1, 2, 3, 4, 5],
    [2, 4, 6, 8, 10],
    [3, 6, 9, 12, 15],
    [4, 8, 12, 16, 20],
    [5, 10, 15, 20, 25],
]

console.log(timesTable)
for (let row = 0; row < timesTable.length; row++) {
    let line = "";
    for (let col = 0; col < timesTable[row].length; col++) {
        let value = timesTable[row][col];
        line += value + " ";
    }
    console.log(line);
}