import { Socket } from 'net';
import SimplexNoise from 'simplex-noise';

const noise = new SimplexNoise();
const PORT = 1234;
const SERVER = 'pixelflut.imd.rocks';
const connection = new Socket();

// https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? '0' + hex : hex;
}
function rgbToHex(r, g, b) {
	return componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function earth(radius) {
	let noiseScale = 1 / radius;
	for (let i = -Math.round(radius); i < Math.round(radius); i++) {
		for (let j = -Math.round(radius); j < Math.round(radius); j++) {
			if (i * i + j * j < radius * radius) {
				let noiseValue = noise.noise2D(i * noiseScale + radius, j * noiseScale + radius);
				let color = '';
				if (noiseValue < 0.5) {
					color = '073d8c'; // blue
					connection.write(`PX ${i + 800} ${j + 200} ${color}\n`);
				}
				if (noiseValue >= 0.5) {
					color = '1f961b'; // green
					connection.write(`PX ${i + 800} ${j + 200} ${color}\n`);
				}
			}
		}
	}
}

function randomCircles() {
	// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
	let radius = Math.floor(Math.random() * (80 - 10 + 1) + 10);
	let randomX = Math.floor(Math.random() * (1250 - 0 + 1) + 0);
	let randomY = Math.floor(Math.random() * (720 - 0 + 1) + 0);

	let randomROne = Math.floor(Math.random() * (255 - 0 + 1) + 0);
	let randomGOne = Math.floor(Math.random() * (255 - 0 + 1) + 0);
	let randomBOne = Math.floor(Math.random() * (255 - 0 + 1) + 0);
	let hexColorOne = rgbToHex(randomROne, randomGOne, randomBOne);

	let randomRTwo = Math.floor(Math.random() * (255 - 0 + 1) + 0);
	let randomGTwo = Math.floor(Math.random() * (255 - 0 + 1) + 0);
	let randomBTwo = Math.floor(Math.random() * (255 - 0 + 1) + 0);
	let hexColorTwo = rgbToHex(randomRTwo, randomGTwo, randomBTwo);

	let randomNoise = Math.floor(Math.random() * (5 - 0 + 1) + 0);
	let noiseScale = randomNoise / radius;

	for (let i = -Math.round(radius); i < Math.round(radius); i++) {
		for (let j = -Math.round(radius); j < Math.round(radius); j++) {
			if (i * i + j * j < radius * radius) {
				let noiseValue = noise.noise2D(i * noiseScale + radius, j * noiseScale + radius);
				if (noiseValue < 0.5) {
					connection.write(`PX ${i + randomX} ${j + randomY} ${hexColorOne.toString()}\n`);
				}
				if (noiseValue >= 0.5) {
					connection.write(`PX ${i + randomX} ${j + randomY} ${hexColorTwo.toString()}\n`);
				}
			}
		}
	}
}

function spirale() {
	let startX = 500;
	let startY = 500;

	for (let i = 0; i <= 1000; i++) {

		let offsetRadius = i / 10;

		let offsetAngle =  6 * Math.PI/1000 * i;

		let offsetX = Math.floor(offsetRadius * Math.cos(offsetAngle));
		let offsetY = Math.floor(offsetRadius * Math.sin(offsetAngle));

		connection.write(`PX ${startX + offsetX} ${startY + offsetY} FA857A\n`);
	}
} 

connection.on('connect', () => {
	console.log('connection successful');

	// earth(100);

	// for(let i = 0; i < 100; i++) {
	// 	randomCircles();
	// }

	spirale();

	// clear canvas 
	// for (let i = 0; i <= 2000; i++) {
	// 	for (let j = 0; j <= 1000; j++) {
	// 		connection.write(`PX ${i} ${j} ffffff\n`);
	// 	}
	// }

	//// if this finishes your project, you can also close the connection:
	// connection.end();
});

connection.on('error', (err) => {
	console.log(`there was an error: ${err}`);
});

connection.on('close', () => {
	console.log('connection has been closed.');
});

connection.on('data', (receivedBytes) => {
	console.log(`incoming from server: ${receivedBytes.toString()}`);
});

connection.connect(PORT, SERVER);
