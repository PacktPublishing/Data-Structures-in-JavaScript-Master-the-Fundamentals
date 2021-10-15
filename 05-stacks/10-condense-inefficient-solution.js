function randomSequence(n) {
	let sequence = []
	for (let i = 0; i < n; i++) {
		let num = Math.floor(Math.random() * 10)
		sequence.push(num)
	}
	return sequence.join("")
}

function condense(sequence) {
	// assume the sequence is dirty to begin with and requires at least one
	// iteration to check for numbers next to each other that should be condensed
	let isDirty = true

	while (isDirty) {
		// assume this will be a clean unchanged iteration with no condenses
		// until we see two numbers next to each other that are a match
		isDirty = false

		let nextSequence = ""
		for (let i = 0; i < sequence.length - 1; i++) {
			let c1 = sequence.charAt(i)
			let c2 = sequence.charAt(i + 1)
			if (c1 !== c2) {
				nextSequence += c1
			} else {
				isDirty = true
				i++
			}
		}

		// account for the last character
		if (sequence.charAt(sequence.length - 2) !== sequence.charAt(sequence.length - 1)) {
			nextSequence += sequence.charAt(sequence.length - 1)
		}

		sequence = nextSequence
	}

	return sequence
}

// 1 million -> .75s
// 10 million -> 12.36s
let sequence = randomSequence(10000000)
let condensed = condense(sequence)
console.log(sequence)
console.log(condensed)
