const log = console.log,
capacity = 25185,
orange = 109,
banana = 17188;

let full = 0,
drinked = false,
tops = [];

const eat = () => {
	let proteins = canEat(); // returns either a banana, orange, or false
	if (proteins) { // if goat can eat something
		full += proteins;
		log('ate', proteins === 109 ? 'an orange' : 'a banana');
		eat(); // recursion nigga
	} else { // else can't eat anymore
		if (!drinked) {
			drink();
			eat();
		} else {
			// register & reset
			if (tops.indexOf(full) === -1) tops.push(full);
		}
	}
}

const canEat = () => {
	let space = capacity - full;
	if (space >= banana) { // comete la banana si podé'
		return banana;
	} else if (space >= orange) { // same for orange
		return orange;
	}
	return false; // culo lleno
}

const drink = () => {
	let at = full;
	if (tops.indexOf(at) === -1) tops.push(at);
	full = Math.floor(full/2); // reduce capacity to half
	drinked = true;
	log('Drinked to', full, 'when at', at);
}

eat();
log('total: ', tops.sort((a,b) => a<b)[0]);