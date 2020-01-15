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


const animalCount = (species) => {
  const [...args] = data.animals;
  const arrFinal = args.reduce((acc, cur) =>
  ({ ...acc, [cur.name]: Object.keys(cur.residents).length }), {})
  if (species === null || species === undefined) {
    return arrFinal;
  }
  return arrFinal[species];
};

function animalMap(options) { 
  const locations = {'NE':[], 'NW':[], 'SE':[], 'SW':[]}
  const arrFinal = data.animals.reduce ( (arr, cur) => ({
  ...arr, [cur.location]:species(cur.location)
  }),{})
  arraySpecies(locations);
  console.log (arrFinal);
};

const names = (string) => {

}
const locations = {'NE':[], 'NW':[], 'SE':[], 'SW':[]}



const arraySpecies = (location) => {
  /*const array = [];
  [data.animals.forEach(element => {
      if (element.location === string) {
        return array.push(element.name)
      }
    })]
  return array;*/
  console.log (location);
}

arraySpecies(locations);

const species = (string) => {
  const array = [];
  [data.animals.forEach(element => {
      if (element.location === string) {
        return array.push(element.name)
      }
    })]
  return array;
}

function animalPopularity(rating) {

};

function animalsByIds(...ids) {
  if (ids[0] === undefined)
    return [];
  const arrFinal = ids.reduce ( (arr, cur) => ([
  ...arr, data.animals.find ( el => el.id === cur )
  ]), [])
  return arrFinal;
};

function animalByName(animalName) {

};

function employeesByIds(ids) {

};

function employeeByName(names = {}) {
  if (names[0] !== undefined ) {
    names = data.employees.find ( el => el.lastName === names || el.firstName === names )
  }
  return names;
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
  constructor (name = '', sex = 'male', age = 0, species = '') {
    this.name = name;
    this.sex = sex;
    this.age = age;
    this.species = species.slice(0, -1);
  }
  info () {
    return `${this.name} is a ${this.age} year old ${this.sex} ${this.species}`
  }
  static get Total() {
    return this.total;
  }
  static set Total(v) {
    this.total = v;
  }
  static totalAnimals () {
    return this.total;
  }
}

function createAnimals() {
  let animals = [];
  data.animals.forEach (animais => {
    animais.residents.forEach ((el) => {
      animals.push(new Animal (el.name, el.sex, el.age, animais.name));
    })
  })
  Animal.Total = animals.length;
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
