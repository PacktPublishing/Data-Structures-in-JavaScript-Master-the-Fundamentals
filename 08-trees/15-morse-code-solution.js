class MorseNode {
    constructor(letter, dash=null, dot=null) {
        this.letter = letter
        this.dash = dash
        this.dot = dot
    }
}

class MorseCodeTree {
    // manually build up the morse code tree
    constructor() {
        this.root = new MorseNode(null)
        this.root.dash = new MorseNode('T')
        this.root.dash.dash = new MorseNode('M')
        this.root.dash.dot = new MorseNode('N')

        this.root.dot = new MorseNode('E')
        this.root.dot.dash = new MorseNode('A')
        this.root.dot.dot = new MorseNode('I')
    }

    // Accept an array of strings of dots and dashes.
    // Return the letters in the morse code tree associated
    // with the dots and dashes
    // decode(["...", "---", "..."]) => "SOS"
    // decode(["-.-.", ".-", "-"]) => "CAT"
    // decode(["--", ".-", "-."]) => "MAN"
    decode(message) {
        let result = ""
        for (let i = 0; i < message.length; i++) {
            result += this.decodeLetter(this.root, message[i], 0)
        }
        return result
    }

    decodeLetter(node, str, index) {
        if (node === null) {
            return ""
        } else if (index === str.length) {
            return node.letter
        } else if (str.charAt(index) === "-") {
            return this.decodeLetter(node.dash, str, index + 1)
        } else if (str.charAt(index) === ".") {
            return this.decodeLetter(node.dot, str, index + 1)
        }
    }
}

let morse = new MorseCodeTree()
console.log(morse.decode(["--", ".-", "-."]))