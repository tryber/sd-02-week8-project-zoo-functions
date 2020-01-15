const data = require('./data')

function entryCalculator(entrants) {
  if (typeof entrants === 'undefined' || Object.values(entrants).length === 0) {
    return 0;
  }
  const { Adult, Child, Senior } = entrants;
  const entradasNumero = [Adult, Senior, Child];
  return entradasNumero
  .map((quantIngresso, indice) => quantIngresso * Object.values(data.prices)[indice])
  .reduce((a, b) => a + b);
};

function schedule(dayName) {
  // const days = dayName ? [dayName] : Object.keys(data.hours);
  //   return days.reduce((acc, day) => {
  //   const { open, close } = data.hours[day];
  //   const text = day === 'Monday'
  //     ? 'CLOSED'
  //     : `Open from ${open}am until ${close - 12}pm`
  //   acc[day] = text;
  //   return acc;
  // }, {})
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

function animalsByIds(ids, id2 = '') {
  let descreveAnimal = []
  if (ids === undefined) {
    return descreveAnimal
  }
  if (id2 !== '') {
    descreveAnimal = data.animals.filter(pesq => pesq.id === ids);
    const descreveAnimal2 = data.animals.filter(pesq => pesq.id === id2);
    return descreveAnimal.concat(descreveAnimal2)
  }
  descreveAnimal = data.animals.filter(pesq => pesq.id === ids);
  return descreveAnimal
};

function animalByName(animalName) {
  // seu código aqui
};

function employeesByIds(ids) {
};

function employeeByName(employeeName) {
  let empNome = {}
  if (employeeName === undefined) {
    return empNome
  }
  empNome = data.employees.find(pesq => pesq.firstName === employeeName ||
    pesq.lastName === employeeName);
  return empNome
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
  return data.employees.some(codigo => codigo.managers.some(code => code === id))
}

function animalsOlderThan(animal, age) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}
const data = require('./data')
function increasePrices(percentage) {
  const { Adult, Senior, Child } = data.prices;
  const entradasNumero = [Adult, Senior, Child];
  console.log(entradasNumero);
}
console.log(increasePrices())

class Animal {
  // seu código aqui
}

function createAnimals() {
//   class animal {
//     constructor (name, sex, age, species) {
//       this.name = name;
//       this.sex = sex;
//       this.age = age;
//       this.species = species;
//     }
//     set tipodeCampo (name, sex, age, species) {

//     }
//   }
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
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
