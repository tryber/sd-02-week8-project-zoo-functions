const data = require('./data')

function entryCalculator(entrants) {
  // seu código aqui
};

function schedule(dayName) {
  // seu código aqui
  const days = dayName ? [dayName] : Object.keys(data.hours);

  return days.reduce((acc, day) => {
    const {
      open,
      close
    } = data.hours[day];
    const text = day === 'Monday' ?
      'CLOSED' :
      `Open from ${open}am until ${close - 12}pm`
    acc[day] = text;
    return acc;
  }, {});
};


function animalCount(species) {
  // seu código aqui
  if (species === undefined) {
    const animaisTodos = {};
    data.animals.forEach(element => animaisTodos[element.name] = element.residents.length);
    return animaisTodos
  }
  const animalCountFinder = data.animals.find(element => element.name === species);
  return animalCountFinder.residents.length;
};

function animalMap(options) {
  // seu código aqui
};

function animalPopularity(rating) {
  // seu código aqui
};

function animalsByIds(...ids) {
  const animaisPorId = [];
  if (ids === undefined) {
    return animaisPorId;
  }
  ids.map(idsArr => animaisPorId.push(data.animals.find(dataItem => dataItem.id === idsArr)));
  return animaisPorId;
};

function animalByName(animalName) {
  // seu código aqui
};

function employeesByIds(ids) {
  // seu código aqui
};

function employeeByName(empName) {
  // seu código aqui
  let empNome = {}
  if (empName === undefined) {
    return empNome
  }
  empNome = data.employees.find(pesq => pesq.firstName === empName || pesq.lastName === empName);
  return empNome
};

function managersForEmployee(idOrName) {
  // seu código aqui
};

function employeeCoverage(idOrName) {
  // seu código aqui
};

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const ultimoEmp = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor
  };
  data.employees.push(ultimoEmp);
}

function isManager(id) {
  // seu código aqui
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const speciesItem = data.animals.find(dataItem => dataItem.name === animal);
  return speciesItem.residents.every(element => element.age >= age);
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
