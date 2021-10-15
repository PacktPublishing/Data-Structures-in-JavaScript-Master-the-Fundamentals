function peek(stack) {
    return stack[stack.length - 1]
}

// str = ")"
function isBalanced(str) {
    let stack = []

    // iterate through every letter of the string
    for (let i = 0; i < str.length; i++) {
        let letter = str.charAt(i)
        // if the letter is an opening paren push it on the stack
        if (letter === '(') {
            stack.push(letter)
        } else if (letter === ')') {
            // if the letter is a closing paren make sure it has a matching opening paren
            if (stack.length === 0) {
                return false // the closing paren had no matching opening paren
            } else if (peek(stack) === '(') {
                stack.pop()
            } else {
                return false;
            }
        }
    }
    return stack.length === 0
}

console.log('true cases:')
console.log(isBalanced("()"))
console.log(isBalanced("(())"))
console.log(isBalanced("((()))"))
console.log()

console.log('false cases:')
console.log(isBalanced("("))
console.log(isBalanced(")"))
console.log(isBalanced(")("))
console.log(isBalanced("(()"))
console.log(isBalanced("())"))
