const fibonacci = function (num) {
	if (num < 1) return 'OOPS';
	let n1 = 1;
	let n2 = 1;
	let n3;
	for (let i = 3; i <= num; i++) {
		n3 = n1 + n2;
		n1 = n2;
		n2 = n3;
	}
	return num < 3 ? 1 : n3;
};

// Do not edit below this line
module.exports = fibonacci;
