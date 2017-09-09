const fs = require('fs');
const stringSize = 7;
const maxMatches = 7;

var decimals = '';

fs.readFile('pi.txt', 'utf8', function (err, data) {
	decimals = data.substring(2);
	start();
});

const start = () => {
	let offset = 0, matches = [];
	do {
		subs = decimals.substr(offset, stringSize);
		if (isPalindrome(subs) && isPrime(subs)) {
			matches.push(subs);
			offset++;
		} else {
			offset++;
		}
	} while (matches.length < maxMatches);
	console.log(matches[maxMatches-1]);
}

const isPalindrome = str => {
    return str == str.split('').reverse().join('');
}

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num !== 1;
}