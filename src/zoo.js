const data = require('./data')

const entryCalculator = (...args) => {
  const { Adult: PriceAdults, Senior: PriceSenior, Child: PriceChild } = data.prices;
  if (args[0] === null || args[0] === undefined) {
    return args;
  } else if (Object.keys(args[0]).length === 0) {
    return 0;
  }
  const [{ Adult, Child, Senior }] = args;
  return (Adult * PriceAdults) + (Senior * PriceSenior) + (Child * PriceChild);
};

const schedule = (dayName) => {
  
};

const animalCount = (species) => {
  const [...args] = data.animals;
  const arrFinal = args.reduce((acc, cur) => 
  ({ ...acc, [cur.name]: Object.keys(cur.residents).length }), {})  
  if (species === null || species === undefined) {
    return arrFinal;
  } else {
    for (let count in arrFinal) {
      if ( count === species ) {
        return arrFinal [count];
      }
    }
  }
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
  // seu código aqui
}

function createAnimals() {
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
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
