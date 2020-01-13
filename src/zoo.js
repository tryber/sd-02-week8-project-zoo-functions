const data = require('./data')

function entryCalculator(entrants) {
  if (entrants === undefined || Object.getOwnPropertyNames(entrants).length === 0) {
    return 0;
  }
  const adultsPriceCalculator = entrants.Adult * data.prices.Adult;
  const seniorsPriceCalculator = entrants.Senior * data.prices.Senior;
  const childrenPriceCalculator = entrants.Child * data.prices.Child;
  return adultsPriceCalculator + seniorsPriceCalculator + childrenPriceCalculator;
};

function schedule(dayName) {

};

function animalCount(species) {
  // seu código aqui
};

function animalMap(options) {
  // seu código aqui
};

function animalPopularity(rating) {
  // seu código aqui
};

function animalsByIds(ids) {
  // seu código aqui
};

function animalByName(animalName) {
  // seu código aqui
};

function employeesByIds(ids) {
  // seu código aqui
};

function employeeByName(employeeName) {
  // seu código aqui
};

function managersForEmployee(idOrName) {
  // seu código aqui
};

function employeeCoverage(idOrName) {
  // seu código aqui
};

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

function animalsOlderThan(animal, age) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

class Animal {
  constructor() {
    this.name
    this.sex
    this.age
    this.species
  }

  // createAnimals() {
  //   const animals = Object.entries(data.animals);
  //   console.log(animals)
  // }
}

function createAnimals() {
  
}

function createEmployee(personalInfo, associatedWith) {
  const personalInfoObj = personalInfo;
  const associatedWithObj = associatedWith;
  const employee = {...personalInfoObj, ...associatedWithObj}
  return employee;
}

module.exports = {
  entryCalculator: entryCalculator,
  schedule: schedule,
  animalCount: animalCount,
  animalMap: animalMap,
  animalPopularity: animalPopularity,
  animalsByIds: animalsByIds,
  animalByName: animalByName,
  employeesByIds: employeesByIds,
  employeeByName: employeeByName,
  managersForEmployee: managersForEmployee,
  employeeCoverage: employeeCoverage,
  addEmployee: addEmployee,
  isManager: isManager,
  animalsOlderThan: animalsOlderThan,
  oldestFromFirstSpecies: oldestFromFirstSpecies,
  increasePrices: increasePrices,
  createAnimals: createAnimals,
  Animal: Animal,
  createEmployee: createEmployee
}
