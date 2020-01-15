const data = require('./data')

function entryCalculator(entrants) {
  // seu código aqui
};

function schedule(dayName) {
  // seu código aqui
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

function animalsByIds(...ids) {
  const expected = [];
  if (ids === undefined){   
    return expected;
  }
  let animalsId = [];
    ids.map(arrIds => animalsId.push(data.animals.find(info => info.id === arrIds)));
    return animalsId
};

function animalByName(animalName) {
  // seu código aqui
};

function employeesByIds(...ids) {
  const expected = [];
  if (ids === undefined){   
    return expected;
  }
  return data.employees.filter( employee => ids.includes(employee.id) );
};

function employeeByName(employeeName) {
  const expected = [];
  if (employeeName === undefined) {
    return expected;
  } else {
    const employName = data.employees.find(info => info.firstName === employeeName || info.lastName === employeeName);
    return employName;
  }
};


function managersForEmployee(idOrName) {
  // seu código aqui
};

function employeeCoverage(idOrName) {
  if (idOrName === undefined){
    let expected = {};
    expected.push(data.employees.filter(info => {
      info.firstName && info.lastName
      return ex
    }));
  }
};

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function isManager(id) {
  const result = data.employees.filter(info => info.managers.includes(id));
  if ( result.length !== 0 ) {
    return true
  } else {
    return false
  }
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
