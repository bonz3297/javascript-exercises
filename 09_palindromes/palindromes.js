const palindromes = function (str) {
	const onlyLetters = str.toLowerCase().replace(/[^a-z]/g, '');
	return onlyLetters === onlyLetters.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
