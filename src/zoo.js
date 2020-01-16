const data = require('./data')

function entryCalculator(entrants) {
  // seu código aqui
};

function schedule(dayName) {

  const days = dayName ? [dayName] : Object.keys(data.hours);
  return days.reduce((acc, day) => {
    const { open, close } = data.hours[day];
    const text = day === 'Monday' // if
      ? 'CLOSED'// {}
      : `Open from ${open}am until ${close - 12}pm` //: else
    acc[day] = text;
    return typeof acc;
  }, {});
};

function animalCount(species) {
  // seu código aqui
};

function animalMap(options) {
  
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
      return expected
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

function oldestFromFirstSpecies(idEmployee) {
  const employer = data.employees.filter(info => info.id === idEmployee)[0].responsibleFor;
  const filteredAnimals = employer.map(element => data.animals
    .find(infoId => infoId.id === element))[0].residents
    .sort((maisNovo, maisVelho) => maisVelho.age - maisNovo.age);
  const [arr] = filteredAnimals
  const { name , sex , age } = arr
  return [ name , sex , age ]
}

function increasePrices(percentage) {
  // seu código aqui
}

class Animal {
  // constructor(){
  // this.name = name;
  // this.sex = sex;
  // this age = age;
  // }

}

function createAnimals() {
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
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
