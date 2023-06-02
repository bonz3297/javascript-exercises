const repeatString = function (str, repeatCount) {
	if (repeatCount < 0) return 'ERROR';
	let newStr = '';
	for (let i = 0; i < repeatCount; i++) {
		newStr += str;
	}
	return newStr;
};

// Do not edit below this line
module.exports = repeatString;
