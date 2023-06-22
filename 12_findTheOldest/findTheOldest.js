const findTheOldest = function (arr) {
	return arr.reduce((oldest, person) => {
		let personAge = (person.yearOfDeath ?? new Date().getFullYear()) - person.yearOfBirth;
		let oldestAge = (oldest.yearOfDeath ?? new Date().getFullYear()) - oldest.yearOfBirth;
		return personAge > oldestAge ? person : oldest;
	});
};

// Do not edit below this line
module.exports = findTheOldest;
