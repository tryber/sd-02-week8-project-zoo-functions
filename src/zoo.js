const data = require('./data')

function entryCalculator(entrants) {
  if (entrants === undefined || JSON.stringify(entrants) === '{}') {
    return 0;
  }
  const { Adult, Child, Senior } = entrants;
  const { Adult: AdultP, Senior: SeniorP, Child: ChildP } = data.prices;
  return (Adult * AdultP) + (Child * ChildP) + (Senior * SeniorP);
};

function schedule(dayName) {
  const {
    Tuesday: { open: TuesdayO, close: TuesdayCl },
    Wednesday: { open: WednesdayO, close: WednesdayCl },
    Thursday: { open: ThursdayO, close: ThursdayCl },
    Friday: { open: FridayO, close: FridayCl },
    Saturday: { open: SaturdayO, close: SaturdayCl },
    Sunday: { open: SundayO, close: SundayCl }
  } = data.hours
  const padrao = {
    Tuesday: `Open from ${TuesdayO}am until ${TuesdayCl - 12}pm`,
    Wednesday: `Open from ${WednesdayO}am until ${WednesdayCl - 12}pm`,
    Thursday: `Open from ${ThursdayO}am until ${ThursdayCl - 12}pm`,
    Friday: `Open from ${FridayO}am until ${FridayCl - 12}pm`,
    Saturday: `Open from ${SaturdayO}am until ${SaturdayCl - 12}pm`,
    Sunday: `Open from ${SundayO}am until ${SundayCl - 12}pm`,
    Monday: 'CLOSED'
  };
  if (dayName === undefined) {
    return padrao;
  }
  return { [dayName]: padrao[dayName] };
}

function animalCount(species) {
}

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
// parseFloat(conta.toFixed(2))
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
