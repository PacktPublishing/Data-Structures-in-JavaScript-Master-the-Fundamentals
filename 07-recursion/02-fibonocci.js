// return the nth fibonocci number
// fib(1) = 1
// fib(2) = 1
// fib(n) = fib(n - 1) + fib(n - 2)
// 1 1 2 3 5 8 13 21 34 55
function fib(n) {
    if (n === 1 || n === 2) {
        return 1
    } else {
        return fib(n-1) + fib(n-2)
    }
}

console.log(fib(6))