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
  /*const days = Object.entries (data.hours);
  console.log (days[0]);
  const arrFinal = days.reduce (acc, cur, i) => {

  }
  /*const objFinal = {};
    for (let i = 0; i < days.length-1; i += 1) {
    objFinal = {};
    objFinal[days[i]] = `Open from ${data.hours[days[i]].open}am until ${(data.hours[days[i]].close) - 12}pm`;
  }
  objFinal[days[6]] = 'CLOSED';
  const arrFinal = createArrayFromObject (objFinal);
  if (dayName === null || dayName === undefined)
   
   console.log (arr);*/
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
  // seu código aqui
};

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

const createArrayFromObject = (array) => {
  arrFinal = [];
  arrFinal[0] = array;
  return arrFinal;
}

const createObjectFromArray = (array) => {
  const obj = array.reduce((obj, cur, i) =>({ ...obj, [i]: cur }), {})
  return obj;
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
