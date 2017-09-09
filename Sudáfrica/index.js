const challenge_hash = s => {
	let h = 7,
	letters = 'acdegilmnoprstuw'

	for (var i = 0; i < s.length; i++) {
		h = (h * 37 + letters.indexOf(s[i]))
	}

	//m = (7 * 37 + 7) = 266
	//e = (266 * 37 + 3) = 9845
	//r = (9845 * 37 + 11) = 364276
	//c = (364276 * 37 + 1) = 13478213
	//a = (13478213 * 37 + 0) = 498693881

	return h
}

const unchallenge_hash = n => {
	let h = 7,
	letters = 'acdegilmnoprstuw',
	s = ''

	do {
		s += letters[n % 37]
		n = (Math.floor(n / 37))
	} while (n != h)


	return s.split('').reverse().join('')
}

/* 
	console.log(challenge_hash('mercadoli')); // 934632622822695
	console.log(unchallenge_hash(934632622822695)); // mercadoli
*/

console.log(unchallenge_hash(24785204182557)) // degilwut