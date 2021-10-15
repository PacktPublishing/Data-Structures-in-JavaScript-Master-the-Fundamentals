function peek(stack) {
    return stack[stack.length - 1]
}

// str = ")"
function isBalanced(str) {
    let OPENING = "({["
    let CLOSING = ")}]"

    let stack = []

    // iterate through every letter of the string
    for (let i = 0; i < str.length; i++) {
        let letter = str.charAt(i)
        if (OPENING.includes(letter)) {
            stack.push(letter)
        } else if (CLOSING.includes(letter)) {
            // each closing character must have a matching opening character
            if (stack.length === 0) {
                return false
            } else {
                let top = peek(stack)
                if (OPENING.indexOf(top) === CLOSING.indexOf(letter)) {
                    stack.pop()
                } else {
                    return false
                }
            }
        }
    }
    return stack.length === 0
}

console.log('true cases:')
console.log(isBalanced("()"))
console.log(isBalanced("foo(aa[i], {bar: [0,12]})"))
console.log()

console.log('false cases:')
console.log(isBalanced("("))
console.log(isBalanced(")"))
console.log(isBalanced(")("))
console.log(isBalanced("(()"))
console.log(isBalanced("())"))
console.log(isBalanced("foo(3 * ((1 + 4) / 2)"))
