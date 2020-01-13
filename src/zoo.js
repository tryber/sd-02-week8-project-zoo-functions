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
  // não há arquivo de teste
};

function employeeByName(employeeName = {}) {
  const allEmployees = data.employees;
  for (let i = 0; i < allEmployees.length; i += 1) {
    if (allEmployees[i].firstName === employeeName) return allEmployees[i];
    else if (allEmployees[i].lastName === employeeName) return allEmployees[i];
  }
  return employeeName;
};

function managersForEmployee(idOrName) {
  // não há arquivo de teste
};

function employeeCoverage(idOrName) {
  // seu código aqui
};

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor
  }
  const allEmployees = data.employees;
  allEmployees.push(newEmployee);
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
  const percentageCalc = percentage / 100;
  const adultsPriceIncrease = data.prices.Adult + (percentageCalc * data.prices.Adult);
  const seniorsPriceIncrease = data.prices.Senior + (percentageCalc * data.prices.Senior);
  const childrenPriceIncrease = data.prices.Child + (percentageCalc * data.prices.Child);
  data.prices.Adult = Math.ceil(adultsPriceIncrease * 100) / 100;
  data.prices.Senior = Math.ceil(seniorsPriceIncrease * 100) / 100;
  data.prices.Child = Math.ceil(childrenPriceIncrease * 100) / 100;
  return data.prices;
}

class Animal {
  constructor() {
    // this.name
    // this.sex
    // this.age
    // this.species
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
  const employee = { ...personalInfoObj, ...associatedWithObj };
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
