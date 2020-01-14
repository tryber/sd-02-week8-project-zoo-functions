const data = require('./data')

function entryCalculator(entrants) {
  if (entrants === undefined || JSON.stringify(entrants) === '{}') {
    return 0;
  }
  const { Adult, Child, Senior } = entrants;
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

class Animal {
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
