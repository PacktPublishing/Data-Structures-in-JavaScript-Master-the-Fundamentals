function randomSequence(n) {
	let sequence = []
	for (let i = 0; i < n; i++) {
		let num = Math.floor(Math.random() * 10)
		sequence.push(num)
	}
	return sequence
}

function condense(sequence) {
	return sequence
}

let sequence = "9831609678692353705124139319317792518258024095540006837450383817661055805810087526485221748830208137"
let condensed = condense(sequence)
console.log(sequence)
console.log(condensed)
