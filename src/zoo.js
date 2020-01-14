const data = require('./data');

/* Calculadora de entrada */
function entryCalculator(entrants) {
  // seu código aqui
};

/* cronograma */
function schedule(dayName) {
  // seu código aqui
};

/* Contagem de animais */
function animalCount(species) {
  // seu código aqui
};

/* Mapa animal */
function animalMap(options) {
  // seu código aqui
};

/* População Animal */
function animalPopularity(rating) {
  // seu código aqui
};

/* Animais por ID */
function animalsByIds(...ids) {
  const expected = [];
  if (ids === undefined){   
    return expected;
  }
  let animalsId = []
    ids.map(arrIds => animalsId.push(data.animals.find(info => info.id === arrIds)));
    return animalsId
};

/* Animais por nome */
function animalByName(animalName) {
  // seu código aqui
};

/* Empregados por ID */
function employeesByIds(ids) {
  
};

/* Empregados por Nome */
function employeeByName(employeeName) {
  // seu código aqui
};

/* Gerentes dos Empregados */
function managersForEmployee(idOrName) {
  // seu código aqui
};

/* Responsabilidade dos Empregados */
function employeeCoverage(idOrName) {
  // seu código aqui
};

/* Criar Emprego */
function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

/* É gerente */
function isManager(id) {
  // seu código aqui
}

/* Animais Mais Velhos */
function animalsOlderThan(animal, age) {
  // seu código aqui
}

/* Mais velhos por espécie */
function oldestFromFirstSpecies(id) {
  // seu código aqui
}

/* Aumentar preços */
function increasePrices(percentage) {
  // seu código aqui
}

/* Fábrica de Animais */
class Animal {
/*   constructor(id, name, popularity, location, residents){
    this.id = id;
    this.name = name;
    this.popularity = popularity;
    this.location = residents;
  }

  getName(){
    return this.name;
  } */
}

/* Criar animal */
function createAnimals() {
}

/* Criar Emprego */
function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const felipe = { ...personalInfo, ...associatedWith }
  return felipe
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
