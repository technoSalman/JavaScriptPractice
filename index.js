// Arrays;
let myArray = ['5SOS', 'One Direction', 'BackStreet Boys'];
myArray[0] = 'Black Pink';
myArray[1] = 'ABCD';
myArray.unshift('HEHHE');
console.log(myArray);

let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';
let myStringArray = myString.split('+');
let myArrayLength = myStringArray.length;
let lastItem = myStringArray[myArrayLength - 1];
console.log(lastItem);

let myArray2 = [
	'Ryu',
	'Ken',
	'Chun-Li',
	'Cammy',
	'Guile',
	'Sakura',
	'Sagat',
	'Juri',
];

myArray2.pop();
myArray2.push('ABC', 'DEF');
let newArray1 = [];
myArray2.forEach((item, index, array) => {
	item = item + '(' + index + ')';
	newArray1.push(item);
	console.log(item);
});
console.log(newArray1);
console.log(newArray1.length);
let finalArray = newArray1.join('-');
console.log(finalArray);

const birds = ['Parrots', 'Falcons', 'Eagles', 'Emus', 'Caracaras', 'Egrets'];
birds.splice(birds.indexOf('Eagles'), 1);
let eBirds = [];
birds.map((item, index, array) => {
	if (item.startsWith('E')) {
		eBirds.push(item);
	}
});
console.log(eBirds);

// a method that fills an array with a value
const fillArray = (arraySize, values) => {
	new Array(arraySize).fill(values);
};

//a method to reverse array elements
const reverse = (array) => {
	let start = 0;
	let end = array.length - 1;

	while (start < end) {
		let temp = array[start];
		array[start] = array[end];
		array[end] = temp;
		start++;
		end--;
	}
	return array;
};

const sampledata = [1, 2, 3];
console.log(reverse(sampledata));

//a method that removes all unnecessary elements i.e. undefined, null , false, empty string, 0

let newArray = [];

const compact = (array) => {
	array.forEach((item, index, array) => {
		if (item) {
			newArray.push(item);
		}
	});
	return newArray;
};

const compact2 = (array) => array.filter((el) => el);

const data2 = [1, false, 2, 3, 9, 3, 2, null, undefined];

console.log(compact2(data2));

//a method that returns an object composed of key-value pairs.

const fromPairs = (array) =>
	array.reduce((acc, value) => {
		if (Array.isArray(value)) {
			acc[value[0]] = value[1];
		}
		return acc;
	}, {});

const data = [
	['a', 1],
	['b', 2],
];
console.log(fromPairs(data));

// Write a function to check whether an input is array or not
const isArray = (input) => {
	if (toString.call(input) === '[object Array]') {
		return true;
	} else {
		return false;
	}
	// const a = new Array('a', 'b', 'c');
	// if (typeof a === typeof input) {
	// 	return true;
	// } else {
	// 	return false;
	// }
};

const input = 'abcdef';
console.log(isArray(input));
