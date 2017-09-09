const fs = require('fs')
const chineseShit = require('./chineseShit.json')
const Jimp = require("jimp")
const lineReader = require('readline').createInterface({
  input: fs.createReadStream('Level3.txt')
})

let frames = [], lines = [];

lineReader.on('line', function (line) {
	if (line.length === 1080) {
		lines[lines.length] = lineToRGB(line);
	}
});

lineReader.on('close', () => {
	setupFrames();
	frames.forEach((frame, i) => {
		saveFrame(frame, 'frame-'+i+'.png');
	});
});

const setupFrames = () => {
	for (let i = 0; i < lines.length; i+=240) {
		frames[frames.length] = lines.slice(i, i+240);
	}
}

const removeNoice = (value) => { // return int
	return value > 250 ? 250 : value;
}

const lineToRGB = (line) => { // return array of pixels [...[r,g,b],[r,g,b]] (length 360)
	let translatedLine = [];
	for (let i = 0; i < line.length; i += 3) {
		let pixel, r, g, b;
		r = removeNoice( getCharValue(line[i]) );
		g = removeNoice( getCharValue(line[i+1]));
		b = removeNoice( getCharValue(line[i+2]));
		
		pixel = intToHex(r) + intToHex(g) + intToHex(b);

		translatedLine[translatedLine.length] = pixel;
	}
	return translatedLine;
}

const intToHex = (intValue) => { // hex byte (string)
	intValue = intValue.toString(16);
	return intValue.length > 1 ? intValue : 0+intValue;
}

const getCharValue = (char) => { // return int
	let intValue = chineseShit[char];
	if (!intValue) {
		throw 'shit';
	}
	return intValue;
}

const saveFrame = (frame, name) => {
	let image = new Jimp(240, 360, function (err, image) {
	  if (err) throw err;

	  frame.forEach((col, x) => {
	    col.forEach((color, y) => {
	      image.setPixelColor(parseInt(color, 16), x, y);
	    });
	  });

	  image.write(name, (err) => {
	    if (err) throw err;
	    console.log('FUCK YEAH!');
	  });
	});
}