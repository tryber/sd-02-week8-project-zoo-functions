const data = require('./data')

function entryCalculator(entrants) {
  if (entrants === undefined || JSON.stringify(entrants) === '{}') {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const { Adult: AdultP, Senior: SeniorP, Child: ChildP } = data.prices;
  return (Adult * AdultP) + (Child * ChildP) + (Senior * SeniorP);
};

function schedule(dayName = 0) {
  const days = dayName ? [dayName] : Object.keys(data.hours);
  return days.reduce((acc, day) => {
    const { open, close } = data.hours[day];
    const text = day === 'Monday'
      ? 'CLOSED'
      : `Open from ${open}am until ${close - 12}pm`
    acc[day] = text;
    return acc;
  }, {});
}

function animalCount(species) {
  const [...args] = data.animals;
  const arrFinal = args.reduce((acc, cur) =>
  ({ ...acc, [cur.name]: cur.residents.length }), {})
  if (species === null || species === undefined) return arrFinal;
  return arrFinal[species];
}
function animalMap(options) {
  // seu código aqui
};

function animalPopularity(rating) {
  // seu código aqui
};

function animalsByIds(...ids) {
  if (ids[0] === undefined) {
    return {};
  }
  const arrFinal = ids.reduce((arr, cur) =>
  ([...arr, data.animals.find(el => el.id === cur)]), [])
  return arrFinal;
}

function animalByName(animalName) {
  // seu código aqui
};

function employeesByIds(ids) {
  // seu código aqui
};

function employeeByName(Name) {
  const empregadoNome = Name === undefined ? {}
  : data.employees.find(pesq => Name === pesq.firstName || pesq.lastName === Name);
  return empregadoNome;
};

function managersForEmployee(idOrName) {
  // seu código aqui
};

function employeeCoverage(idOrName) {

}
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor })
}
function isManager(id) {
  return data.employees.some(({ managers }) =>
  managers.some(ids => ids === id))
}

function animalsOlderThan(animal, age) {
  return data.animals.find(ele => ele.name === animal)
  .residents.every(ele => ele.age > age);
}

function oldestFromFirstSpecies(ids) {
}

function increasePrices(percentage) {
  const { Adult: AdultP, Senior: SeniorP, Child: ChildP } = data.prices;
  const novo = {
    Adult: Math.round(((AdultP + ((AdultP * percentage) / 100)) * 100)) / 100,
    Senior: Math.round(((SeniorP + ((SeniorP * percentage) / 100)) * 100)) / 100,
    Child: Math.round(((ChildP + ((ChildP * percentage) / 100)) * 100)) / 100
  }
  data.prices = novo;
}

let numero = 0;

class Animal {
  constructor(name, age, sex, species) {
    this.name = name
    this.age = age
    this.sex = sex
    this.species = species.slice(0, -1)
  }
  info() {
    return `${this.name} is a ${this.age} year old ${this.sex} ${this.species}`
  }
  static totalAnimals() {
    return numero;
  }
}

function createAnimals() {
  const animals = [];
  data.animals.forEach(animal => (
    animal.residents.forEach(ele => (
      animals.push(new Animal(ele.name, ele.age, ele.sex, animal.name))
    ))
  ))
  numero = animals.length;
  return animals;
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
