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

  // const {
  //   Tuesday: { open: TuesdayO, close: TuesdayCl },
  //   Wednesday: { open: WednesdayO, close: WednesdayCl },
  //   Thursday: { open: ThursdayO, close: ThursdayCl },
  //   Friday: { open: FridayO, close: FridayCl },
  //   Saturday: { open: SaturdayO, close: SaturdayCl },
  //   Sunday: { open: SundayO, close: SundayCl }
  // } = data.hours;
  // const padrao = {
  //   Tuesday: `Open from ${TuesdayO}am until ${TuesdayCl - 12}pm`,
  //   Wednesday: `Open from ${WednesdayO}am until ${WednesdayCl - 12}pm`,
  //   Thursday: `Open from ${ThursdayO}am until ${ThursdayCl - 12}pm`,
  //   Friday: `Open from ${FridayO}am until ${FridayCl - 12}pm`,
  //   Saturday: `Open from ${SaturdayO}am until ${SaturdayCl - 12}pm`,
  //   Sunday: `Open from ${SundayO}am until ${SundayCl - 12}pm`,
  //   Monday: 'CLOSED'
  // };
  // if (dayName === undefined) {
  //   return padrao;
  // }
  // return { [dayName]: padrao[dayName] };

const days = Object.keys (data.hours);
const arrFinal = {};
for (let i = 0; i < days.length-1; i += 1) {
arrFinal[days[i]] = `Open from ${data.hours[days[i]].open}am until ${(data.hours[days[i]].close) - 12}pm`;
}
arrFinal[days[6]] = `CLOSED`;
switch (dayName) {
  case 'Tuesday':
    return { Tuesday: arrFinal[days[0]]};
  case 'Wednesday':
    return { Wednesday: arrFinal[days[1]]};
  case 'Thursday':
    return { Thursday: arrFinal[days[2]]};
  case 'Friday':
    return { Friday: arrFinal[days[3]]};
  case 'Saturday':
    return { Saturday: arrFinal[days[4]]};
  case 'Sunday':
    return { Sunday: arrFinal[days[5]]};
  case 'Monday':
    return { Monday: arrFinal[days[6]]};
  default:
    return arrFinal;
}

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
