const sumAll = function (num1, num2) {
	if (+num1 !== num1 || +num2 !== num2 || num1 < 0 || num2 < 0) return 'ERROR';
	let smallNum = num1;
	let bigNum = num2;
	if (num1 > num2) [smallNum, bigNum] = [bigNum, smallNum];
	let sum = 0;
	for (let i = smallNum; i <= bigNum; i++) {
		sum += i;
	}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
