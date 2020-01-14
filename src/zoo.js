const data = require('./data')

function entryCalculator(entrants = 0) {
  // seu código aqui
  let price = 0
  const { Adult = 0, Child = 0, Senior = 0 } = entrants

  if (Object.keys(entrants).length !== 0) {
    price = Adult * data.prices.Adult
    price += Child * data.prices.Child
    price += Senior * data.prices.Senior
  }
  return price
};

function schedule(dayName) {
  // seu código aqui
  const days = dayName ? [dayName] : Object.keys(data.hours);
  return days.reduce((acc, day) => {
    const { open, close } = data.hours[day];
    const text = day === 'Monday'
      ? 'CLOSED'
      : `Open from ${open}am until ${close - 12}pm`
    acc[day] = text;
    return acc;
  }, {});
};

function animalCount(species) {
  // seu código aqui
};

function animalMap(options) {
  // seu código aqui
};

function animalPopularity(rating) {
  // seu código aqui - Não precisa
};

function animalsByIds(ids) {
  // seu código aqui
};

function animalByName(animalName) {
  // seu código aqui - Não precisa
};

function employeesByIds(ids) {
  // seu código aqui - Não precisa
};

function employeeByName(employeeName) {
  // seu código aqui
  let worker = {}
  if (employeeName) {
    worker = data.employees.find(x => x.firstName === employeeName || x.lastName === employeeName)
  }
  return worker
};

function managersForEmployee(idOrName) {
  // seu código aqui - Não precisa
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
  return data.animals.find(x => x.name === animal).residents.every(x => x.age >= age)
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
  Object.keys(data.prices).forEach((key) => {
    data.prices[key] = Math.round((data.prices[key] +
      (data.prices[key] * (percentage / 100))) * 100) / 100
  })
  return data.prices
}

class Animal {
  // seu código aqui
  constructor(name, age, sex, species) {
    this.name = name
    this.age = age
    this.sex = sex
    this.species = species.slice(0, -1)
  }
  info() {
    const { name, age, sex, species } = this
    return `${name} is a ${age} year old ${sex} ${species}`
  }
  static totalAnimals() {
    return data.animals.reduce((count, animal) => count + animal.residents.length, 0)
  }
}

function createAnimals() {
  // seu código aqui
  const animals = []
  data.animals.forEach(animal => (
    animal.residents.forEach(({ name, age, sex }) => (
      animals.push(new Animal(name, age, sex, animal.name))
    ))
  ))
  return animals
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith }
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
